const fs = require('fs');
const path = require('path');

const cateArrange = require('../category');

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
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FE 笔记',
      description: '前端开发技术笔记',
    },
  },
  dest: './dist',
  head: [['link', { rel: 'icon', type: 'image/jpg', href: '/js-nation-square.png' }]],
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'seognil/fe-foundation',
    // editLinks: true,
    nav: [
      { text: '目录', link: '/intro/fedev-the-guild.md' },
      { text: '资料', link: '/refs/note.md' },
      { text: 'Poly', link: 'https://github.com/seognil/learn-by-making-your-own-polyfill' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/refs': false,
      '/': articleSidebar,
    },
  },
};

// * ---------------------------------------------------------------- output

module.exports = config;
