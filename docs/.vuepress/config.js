const fs = require('fs');
const path = require('path');
const moment = require('moment');

const markdownItAttrs = require('markdown-it-attrs');
const { slugify } = require('transliteration');

const { sidebarStructure } = require('../note/nav');
// => { [groupName: string]: string[] }

// * ---------------------------------------------------------------- sidebar

const docFolder = path.resolve(process.cwd(), './docs');
const noteFolder = path.resolve(docFolder, './note');
const hasFile = (e) => fs.existsSync(path.resolve(noteFolder, e));
const toNavUrl = (url) => path.resolve('/note', url);

// * --------------------------------

const urlFix = (e) => (e === '/note' ? '/note/' : e);

const articleSidebar = Object.entries(sidebarStructure)
  .map(([groupName, list]) => [groupName, list.filter(hasFile)])
  .filter(([, list]) => list.length > 0)
  .map(([g, list]) => [g, list.map(toNavUrl)])
  .map(([title, children]) => [title, children.map(urlFix)])
  .map(([title, children]) => ({ title, children, collapsable: false }));
// => [{ title, children: string[], collapsable }]

// * ----------------

const navCateOfFirst = articleSidebar.map(({ title: text, children: [link] }) => ({ text, link }));
// => [{ text, link }]

// * ---------------------------------------------------------------- config

const config = {
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
      'vuepress-plugin-smooth-scroll',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format('lll');
        },
      },
    ],
  ],
  cache: false,
  markdown: {
    // https://v1.vuepress.vuejs.org/guide/markdown.html#advanced-configuration
    // options for markdown-it-anchor
    anchor: {
      level: 2,
      slugify: (str) => slugify(str),
    },
    extendMarkdown: (md) => {
      md.use(markdownItAttrs, {
        leftDelimiter: '{',
        rightDelimiter: '}',
      });
    },
  },
  extendPageData($page) {
    const p = $page;

    // * ---------------- fix markdown-it-attrs for sidebar

    const removeAnchorAttr = (str) => str.replace(/\s{[^}]*}\s*$/, '');

    if (p.title) {
      p.title = removeAnchorAttr(p.title);
    }

    if (p.headers) {
      p.headers.forEach((h) => {
        h.title = removeAnchorAttr(h.title);
      });
    }

    // * ----------------
  },
};

// * ---------------------------------------------------------------- output

module.exports = config;
