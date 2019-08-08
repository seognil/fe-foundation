const fs = require('fs');
const path = require('path');

const cateArrange = require('../docs/category');

// * ---------------------------------------------------------------- conifg

// * -------------------------------- sidebar generator

const articleFolder = path.resolve(process.cwd(), './docs');

const hasFile = (e) => fs.existsSync(path.resolve(articleFolder, e));

// * ----------------

const articleSidebar = Object.entries(cateArrange)
  .map(([groupName, list]) => [groupName, list.map((e) => e.replace(/^.\//, '')).filter(hasFile)])
  .filter(([, list]) => list.length > 0)
  .map(([title, children]) => ({ title, children, collapsable: false }));

// * -------------------------------- config

const config = {
  title: 'FE 笔记',
  description: '前端开发相关资料',
  dest: './dist',
  head: [['link', { rel: 'icon', type: 'image/jpg', href: '/js-nation-square.png' }]],
  themeConfig: {
    repo: 'seognil/fe-foundation',
    // editLinks: true,
    nav: [
      { text: '目录', link: '/docs/js/js-foundation.md' },
      { text: '资料', link: '/docs/refs/note.md' },
      { text: 'Poly', link: 'https://github.com/seognil/learn-by-making-your-own-polyfill' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/docs/refs': false,
      '/docs/': articleSidebar,
    },
  },
};

// * ---------------------------------------------------------------- output

module.exports = config;
