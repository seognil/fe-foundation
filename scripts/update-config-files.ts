import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { redirectRecords } from './301-record';

// * ================================================================================

const projRoot = resolve(process.cwd());

// * ================================================================================

interface FlattenRedirect {
  to: string;
  from: string;
}

const flattenList: FlattenRedirect[] = redirectRecords
  .map(({ to, from }) =>
    from.map((oldUrl) => [
      { to, from: oldUrl + '.html' },
      { to, from: oldUrl },
    ]),
  )
  .flat(2)
  .filter((e) => !e.from.includes('.html.html'))
  .filter((e) => e.to !== e.from);

// * ---------------------------------------------------------------- vue

interface VuepressRedirect {
  path: string;
  redirect: string;
}

const vueRedirectList: VuepressRedirect[] = flattenList.map(({ to, from }) => ({
  path: from,
  redirect: to,
}));

writeFileSync(
  resolve(projRoot, './docs/.vuepress/vue-redirect.js'),
  `module.exports = ${JSON.stringify(vueRedirectList, null, 2)}`,
);

// * ---------------------------------------------------------------- public

const _redirects = flattenList.map(({ from, to }) => `${from} ${to} 301`).join('\n');
writeFileSync(resolve(projRoot, './docs/.vuepress/public/_redirects'), _redirects);

// * ---------------------------------------------------------------- vercel

const vercelJson = JSON.stringify(
  {
    github: { silent: true },
    redirects: flattenList.map(({ from, to }) => ({
      source: from,
      destination: to,
      statusCode: 301,
    })),
  },
  null,
  2,
);
writeFileSync(resolve(projRoot, './vercel.json'), vercelJson);
