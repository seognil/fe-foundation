import { blue, red, yellow } from 'chalk';
import { readFile } from 'fs/promises';
import { globbySync } from 'globby';
import HttpsProxyAgent from 'https-proxy-agent';
import fetch from 'node-fetch';
import ora from 'ora';
import pLimit from 'p-limit';
import { resolve } from 'path';

const projRoot = resolve(process.cwd());

const files = globbySync('docs/**/*.md', { cwd: projRoot }).filter((e) => !e.includes('@pages'));

// * ================================================================================

interface ParseUnit {
  mdlink: string;
  text: string;
  url: string;
  source: string;
}

const task = async () => {
  const contents = await Promise.all(
    files.map(async (e) => {
      const source = resolve(projRoot, e);
      const content = await readFile(source, { encoding: 'utf8' });
      return { content, source };
    }),
  );

  // * ----------------

  const permalinks = contents
    .map(({ content }) => content.match(/\npermalink: (.*)\n/)?.[1])
    .filter((e) => e);

  // * ----------------

  const flattenLinks: ParseUnit[] = contents
    .map(({ content, source }) => {
      return { source, mdlinks: [...(content.match(/\[[^\]]+\]\([^\)]+\)/g) ?? [])] };
    })
    .map(({ source, mdlinks }) => mdlinks.map((mdlink) => ({ mdlink, source })))
    .flat(1)
    .map(({ mdlink, source }) => {
      const [_, text, url] = mdlink.match(/\[([^\]]+)\]\(([^\)]+)\)/)!;
      return { mdlink, text, url, source };
    })
    .sort((a, b) => (a.url < b.url ? -1 : 1));

  const allLinks = Array.from(new Set(flattenLinks.map((e) => e.url)));

  const httpLinks = allLinks.filter((e) => /^https?:/.test(e));
  const anchorLinks = allLinks.filter((e) => /^#/.test(e));
  const mdLinks = allLinks.filter((e) => /^\//.test(e));
  const mdPureLinks = mdLinks.map((e) => e.replace(/#.*/, ''));
  const otherLinks = allLinks
    .filter((e) => !httpLinks.includes(e))
    .filter((e) => !anchorLinks.includes(e))
    .filter((e) => !mdPureLinks.includes(e));

  console.log('other links ----------------', otherLinks);

  // console.log('other links ----------------', anchorLinks);

  // * ---------------- md pure links check

  const badMdLinks = mdPureLinks.filter((e) => !permalinks.includes(e));
  error(badMdLinks, flattenLinks);

  // * ---------------- http links check

  // await checkHtml(httpLinks, flattenLinks);
};

// * ----------------------------------------------------------------

task();

// * ================================================================================

const error = (urls: string[], flattenLinks: ParseUnit[]) => {
  const list = urls.map((url) => flattenLinks.find((e) => e.url === url));
  console.log('bad links ----------------');
  list.forEach((e) => console.warn(`${blue(e?.source)}: ${red(e?.mdlink)}`));
};

// * ================================================================================

const checkHtml = async (urls: string[], flattenLinks: ParseUnit[]) => {
  const limit = pLimit(8);

  const spinner = ora('Checking Urls').start();

  const proxyAgent = HttpsProxyAgent(process.env.ALL_PROXY!);

  console.log('bad links ----------------');

  await Promise.all(
    urls
      .sort(() => Math.random() - 0.5)
      // .slice(0, 5)
      .map((url) =>
        limit(async () => {
          spinner.text = url;
          return fetch(url, { agent: proxyAgent })
            .then((res) => {
              const code = res.status;
              const result = { url, code };

              // * asap // Seognil LC 2021/09/30
              if (code !== 200) {
                spinner.text = '';
                spinner.render();

                const e = flattenLinks.find((e) => e.url === url);
                console.log(`${blue(e?.source)}: ${red(e?.mdlink)} - ${yellow(code)}`);

                spinner.text = url;
              }

              return result;
            })
            .catch((err) => {
              spinner.text = '';
              spinner.render();

              const e = flattenLinks.find((e) => e.url === url);
              console.log(`${blue(e?.source)}: ${red(e?.mdlink)} - ${yellow(err)}`);

              spinner.text = url;
              return null;
            });
        }),
      ),
  );

  spinner.stop();
};
