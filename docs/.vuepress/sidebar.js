// const fs = require('fs');
// const path = require('path');
// const { sidebarStructure } = require('../note/nav');
// => { [groupName: string]: string[] }

// const docFolder = path.resolve(process.cwd(), './docs');
// const noteFolder = path.resolve(docFolder, './note');
// const hasFile = (e) => fs.existsSync(path.resolve(noteFolder, e));
// const toNavUrl = (url) => path.resolve('/note', url);

// // * --------------------------------

// const urlFix = (e) => (e === '/note' ? '/' : e);

// const articleSidebar = Object.entries(sidebarStructure)
//   .map(([groupName, list]) => [groupName, list.filter(hasFile)])
//   .filter(([, list]) => list.length > 0)
//   .map(([g, list]) => [g, list.map(toNavUrl)])
//   .map(([title, children]) => [title, children.map(urlFix)])
//   .map(([title, children]) => ({ title, children, collapsable: false }));
// // => [{ title, children: string[], collapsable }]

const sidebar = [
  {
    title: '简介',
    children: [
      '/note/intro/frontend-development-cookbook/frontend-development-cookbook',
      '/note/intro/frontend-hardcore-overview/frontend-hardcore-overview',
      '/note/intro/my-reading',
      '/note/intro/',
      '/note/intro/about-the-guild',
      '/note/intro/study-guild-abstraction',
    ],
    collapsable: false,
  },
  {
    title: '开发环境',
    children: [
      '/note/workspace/my-workstation.md',
      '/note/workspace/terminal-intro.md',
      '/note/workspace/terminal-config.md',
      '/note/workspace/mac.md',
      '/note/workspace/chrome.md',
      '/note/workspace/vscode.md',
      '/note/workspace/video-hotkey.md',
    ],
    collapsable: false,
  },
  {
    title: '辅助技能',
    children: [
      '/note/other-skills/study-methodology.md',
      '/note/other-skills/english-using.md',
      '/note/other-skills/markdown.md',
      '/note/other-skills/git/git.md',
    ],
    collapsable: false,
  },
  {
    title: '计算机科学',
    children: [
      //
      '/note/computer-science/computer-science.md',
      '/note/computer-science/functional-programming.md',
    ],
    collapsable: false,
  },
  {
    title: 'HTML/CSS',
    children: ['/note/web/html.md', '/note/web/css.md'],
    collapsable: false,
  },
  {
    title: 'JavaScript 语言',
    children: [
      '/note/javascript/js-foundation.md',
      '/note/javascript/js-intro.md',
      '/note/javascript/how-to-run-js.md',
      '/note/programming-language/javascript-language-basic.md',
      '/note/javascript/js-advanced.md',
      '/note/javascript/syntactic-sugar.md',
      '/note/javascript/js-modular.md',
      '/note/javascript/regexp.md',
      '/note/javascript/js-foundation-old.md',
    ],
    collapsable: false,
  },
  {
    title: 'Node.js 和 NPM',
    children: [
      '/note/node/node-basic.md',
      '/note/node/npm-overview.md',
      '/note/node/npm-speedup.md',
      '/note/node/npm-verdaccio.md',
    ],
    collapsable: false,
  },
  {
    title: '编程语言',
    children: [
      '/note/programming-language/javascript-language-basic.md',
      '/note/programming-language/typescript.md',
      '/note/programming-language/python-language-basic.md',
    ],
    collapsable: false,
  },
  {
    title: '前端框架类库',
    children: [
      '/note/javascript-library/rxjs.md',
      '/note/javascript-library/redux.md',
      '/note/javascript-library/react-hooks.md',
      '/note/javascript-library/redux-observable.md',
    ],
    collapsable: false,
  },
  {
    title: '工程化/测试/持续集成',
    children: [
      '/note/javascript-test/jest.md',
      '/note/javascript-test/testing-library.md',
      '/note/javascript-test/cypress.md',
    ],
    collapsable: false,
  },
  {
    title: '开发生活/杂谈',
    children: [
      '/note/misc/linux-basic-security.md',
      '/note/misc/clean-keyboard.md',
      '/note/misc/cloc/cloc.md',
      '/note/misc/study-the-only-way.md',
      '/note/misc/study-fortune.md',
      '/note/misc/study-the-costly-way.md',
    ],
    collapsable: false,
  },
];

module.exports = sidebar;
