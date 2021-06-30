const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { flatList } = require('./301-record');

// * ----------------

const projRoot = resolve(process.cwd());

// * ----------------

const _redirects = flatList.map(([oldUrl, newUrl]) => `${oldUrl} ${newUrl} 301`).join('\n');
writeFileSync(resolve(projRoot, './docs/.vuepress/public/_redirects'), _redirects);

// * ----------------

const vercelJson = JSON.stringify({
  redirects: flatList.map(([oldUrl, newUrl]) => ({
    source: oldUrl,
    destination: newUrl,
    statusCode: 301,
  })),
});
writeFileSync(resolve(projRoot, './vercel.json'), vercelJson);
