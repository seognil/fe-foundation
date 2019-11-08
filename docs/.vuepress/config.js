const fs = require('fs');
const path = require('path');
const moment = require('moment');

const cateArrange = require('../category');

// * ---------------------------------------------------------------- conifg

// * -------------------------------- sidebar generator

const articleFolder = path.resolve(process.cwd(), './docs');

const hasFile = (e) => fs.existsSync(path.resolve(articleFolder, e));

// * ----------------

const articleSidebar = Object.entries(cateArrange)
  .map(([groupName, list]) => [groupName, list.map((e) => e.replace(/^.\//, '')).filter(hasFile)])
  .filter(([, list]) => list.length > 0)
  .map(([title, children]) => ({ title, children, collapsable: true }));

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
      {
        text: '目录',
        items: [
          { text: '前端工程师入行指南', link: '/intro/fedev-the-guild.md' },
          { text: 'Git 学习指南', link: '/tools/git.md' },
          { text: '如何清洁机械键盘', link: '/others/clean-keyboard.md' },
        ],
      },
      { text: '关于', link: '/about/note.md' },
      { text: 'Learning-By-Doing', link: 'https://github.com/seognil-study/learning-by-doing' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/refs': false,
      '/': articleSidebar,
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format('lll');
        },
      },
    ],
  ],
};

// * ---------------------------------------------------------------- output

module.exports = config;
