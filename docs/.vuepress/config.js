const fs = require('fs');
const path = require('path');
const moment = require('moment');

const { sidebarStructure } = require('../note/nav');
// => { [groupName: string]: string[] }

// * ---------------------------------------------------------------- sidebar

const docFolder = path.resolve(process.cwd(), './docs');
const noteFolder = path.resolve(docFolder, './note');
const hasFile = (e) => fs.existsSync(path.resolve(noteFolder, e));
const toNavUrl = (url) => path.resolve('/note', url);

// * --------------------------------

const articleSidebar = Object.entries(sidebarStructure)
  .map(([groupName, list]) => [groupName, list.filter(hasFile)])
  .filter(([, list]) => list.length > 0)
  .map(([g, list]) => [g, list.map(toNavUrl)])
  .map(([title, children]) => ({ title, children, collapsable: true }));
// => [{ title, children: string[], collapsable }]

// * fix
articleSidebar[0].children[0] = './note/';

// * ----------------

const navCateOfFirst = articleSidebar.map(({ title: text, children: [link] }) => ({ text, link }));
// => [{ text, link }]

// * ---------------------------------------------------------------- config

const config = {
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'FE 笔记',
  //     description: '前端开发技术笔记',
  //   },
  // },

  title: '前端指南',
  description: '前端技术学习指南',
  head: [['link', { rel: 'icon', type: 'image/jpg', href: '/js-nation-square-blue.png' }]],

  dest: './public',

  themeConfig: {
    lastUpdated: '上次更新',
    // editLinks: true,

    nav: [
      { text: '指南', link: '/note/' },
      { text: '关于我', link: '/about/' },

      { text: 'Learn-By-Doing', link: 'https://github.com/seognil-study/learn-by-doing' },
    ],
    repo: 'seognil/fe-foundation',

    sidebarDepth: 3,
    sidebar: {
      '/note': articleSidebar,
      '/about': false,
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
