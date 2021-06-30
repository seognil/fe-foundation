const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

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

  theme: 'vdoing',

  themeConfig: {
    author: {
      name: 'Seognil LC',
      link: 'https://github.com/seognil',
    },
    blogger: {
      avatar: 'https://avatars.githubusercontent.com/u/5526096?s=400',
      name: 'Seognil LC',
      slogan: '略懂点前端',
    },
    social: {
      icons: [
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/seognil',
        },
      ],
    },
    footer: {
      createYear: 2019,
      copyrightInfo:
        'Seognil LC | <a href="https://github.com/seognil/fe-foundation/blob/master/LICENSE" target="_blank">MIT License</a>',
    },

    bodyBgImg: [
      // 'https://images.unsplash.com/photo-1542416409-400da26855b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
      // 'https://images.unsplash.com/photo-1561160767-6bbd75de51b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80',
      'https://images.unsplash.com/photo-1483653085484-eb63c9f02547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    ],
    bodyBgImgOpacity: 0.1,

    contentBgStyle: 6,

    lastUpdated: '上次更新',
    // editLinks: true,

    nav: [
      { text: '指南', link: '/note/fe-development-cookbook' },
      { text: '资料', link: '/note/my-reading' },
      { text: '关于我', link: '/about/' },

      { text: '算法', link: 'https://github.com/seognil-study/leetcode' },
      { text: '动手练', link: 'https://github.com/seognil-study/learn-by-doing' },
      { text: '归档', link: '/archives/' },
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
          dayjs.locale(lang);
          return dayjs(timestamp).format('lll');
        },
      },
    ],
    'vuepress-plugin-smooth-scroll',
    // [
    //   'vuepress-plugin-medium-zoom',
    //   {
    //     selector: 'img',
    //     delay: 1000,
    //     options: {
    //       // margin: 24,
    //       background: 'hsla(0, 0%, 0%, 0.1)',
    //       scrollOffset: 0,
    //     },
    //   },
    // ],
    [
      'vuepress-plugin-zooming',
      {
        selector: 'img',
        delay: 1000,
        options: {
          bgColor: 'hsla(0, 0%, 0%, 0.1)',
          // zIndex: 10000,
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
