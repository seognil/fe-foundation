const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const utc = require('dayjs/plugin/utc');
dayjs.extend(localizedFormat);
dayjs.extend(utc);

const sidebar = require('./sidebar');

const markdownItAttrs = require('markdown-it-attrs');
const { slugify } = require('transliteration');

// * ----------------------------------------------------------------

const AboutMe = {
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
        iconClass: 'fab fa-github',
        title: 'GitHub',
        link: 'https://github.com/seognil',
      },
      {
        iconClass: 'fab fa-steam',
        title: 'Steam',
        link: 'https://steamhunters.com/id/seognil/games?sort=completionstate',
      },
      {
        iconClass: 'fab fa-playstation',
        title: 'PSN',
        link: 'https://psnprofiles.com/seognil?order=percent',
      },
      {
        iconClass: 'fab fa-xbox',
        title: 'Xbox',
        link: 'https://www.trueachievements.com/gamer/seognil/games#',
      },
    ],
  },
  footer: {
    createYear: 2019,
    copyrightInfo:
      'Seognil LC | <a href="https://github.com/seognil/fe-foundation/blob/master/LICENSE" target="_blank">MIT License</a>',
  },
};

// * ---------------------------------------------------------------- config

const config = {
  title: '前端指南',
  description: '一个前端工程师的自我修养',
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/js-nation-square-blue.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: [
          'computer-science',
          'checklist',
          'roadmap',
          'study',
          'frontend',
          'notes',
          'guide',
          'developer',
          'awesome-list',
          'engineer',
        ].join(','),
      },
    ],
  ],

  dest: './public',

  theme: 'vdoing',

  // * ------------------------------------------------

  themeConfig: {
    ...AboutMe,

    // * ---------------- blog config

    repo: 'seognil/fe-foundation',

    lastUpdated: '上次更新',
    // editLinks: true,

    // * ---------------- theme config

    logo: '/js-nation-square-blue.png',

    bodyBgImg: [
      // 'https://images.unsplash.com/photo-1542416409-400da26855b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
      // 'https://images.unsplash.com/photo-1561160767-6bbd75de51b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80',
      // 'https://images.unsplash.com/photo-1483653085484-eb63c9f02547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      '/photo-1483653085484-eb63c9f02547.jpeg',
    ],
    bodyBgImgOpacity: 0.1,

    contentBgStyle: 6,

    // * ----------------

    nav: [
      { text: '资料', link: '/study/where-do-i-learn-from/' },
      { text: '关于我', link: '/about/me/' },

      { text: '算法', link: 'https://github.com/seognil-study/leetcode' },
      { text: '动手练', link: 'https://github.com/seognil-study/learn-by-doing' },

      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],

    sidebarDepth: 3,

    sidebar,
  },

  // * ------------------------------------------------

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return dayjs.utc(timestamp).utcOffset(8).format('lll');
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
    // [
    //   'vuepress-plugin-zooming',
    //   {
    //     selector: 'img',
    //     delay: 1000,
    //     options: {
    //       bgColor: 'hsla(0, 0%, 0%, 0.1)',
    //       // zIndex: 10000,
    //     },
    //   },
    // ],
  ],
  cache: false,
  markdown: {
    lineNumbers: true,

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
