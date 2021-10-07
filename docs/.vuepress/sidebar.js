const sidebar = {
  '/': [
    '/note/frontend-development-cookbook/frontend-development-cookbook',

    {
      title: '学习资源',
      collapsable: false,
      children: [
        //
        '/note/00.resources/my-reading-list.md',
        '/note/00.resources/where-do-i-learn-from.md',
      ],
    },

    {
      title: '学习技巧',
      collapsable: false,
      children: [
        '/note/01.study/crash-course-study-skills.md',
        '/note/01.study/using-english.md',
        '/note/01.study/study-fortune.md',
        '/note/01.study/study-guild-abstraction.md',
        '/note/01.study/why-we-need-to-study.md',
        '/note/01.study/dont-waste-your-time-and-money.md',
      ],
    },

    {
      title: '开发环境',
      collapsable: false,
      children: [
        '/note/02.workspace/awesome-tools.md',
        '/note/02.workspace/mac.md',
        '/note/02.workspace/chrome.md',
        '/note/02.workspace/vscode.md',

        {
          title: '终端',
          collapsable: false,
          children: [
            '/note/02.workspace/introduction-to-terminal.md',
            '/note/02.workspace/terminal-settings.md',
          ],
        },

        {
          title: '脚本',
          collapsable: false,
          children: [
            //
            '/note/02.workspace/my-video-player-shortcuts.md',
          ],
        },
      ],
    },

    {
      title: '计算机科学',
      collapsable: false,
      children: [
        '/note/03.computer-science/misc/crash-course-computer-science.md',
        '/note/03.computer-science/misc/introduction-to-functional-programming.md',

        {
          title: '工具',
          collapsable: false,
          children: [
            '/note/03.computer-science/tools/git/git.md',
            '/note/03.computer-science/tools/markdown.md',
            '/note/03.computer-science/tools/scc/count-lines-of-code.md',
          ],
        },

        {
          title: '语言',
          collapsable: false,
          children: [
            '/note/03.computer-science/programming-language/javascript-language-basic.md',
            '/note/03.computer-science/programming-language/typescript-language-basic.md',
            '/note/03.computer-science/programming-language/python-language-basic.md',
          ],
        },
      ],
    },

    {
      title: '前端',
      collapsable: false,
      children: [
        '/note/04.frontend/misc/frontend-hardcore-overview/frontend-hardcore-overview.md',

        {
          title: 'Web',
          collapsable: false,
          children: [
            //
            '/note/04.frontend/web/html.md',
            '/note/04.frontend/web/css.md',
          ],
        },

        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            '/note/04.frontend/javascript/javascript-foundation.md',

            '/note/04.frontend/javascript/introduction-to-javascript.md',
            '/note/04.frontend/javascript/how-to-run-javascript-code.md',

            '/note/04.frontend/javascript/javascript-advanced.md',
            '/note/04.frontend/javascript/syntactic-sugar-in-javascript.md',
            '/note/04.frontend/javascript/javascript-modules.md',
            '/note/04.frontend/javascript/javascript-regular-expression.md',

            '/note/04.frontend/javascript/javascript-foundation-legacy-version.md',
          ],
        },

        {
          title: 'Node',
          collapsable: false,
          children: [
            '/note/04.frontend/node/nodejs-basic.md',
            '/note/04.frontend/node/introduction-to-npm.md',
            '/note/04.frontend/node/speeding-up-npm-install.md',
            '/note/04.frontend/node/set-up-a-private-npm-registry-using-verdaccio.md',
          ],
        },

        {
          title: '工具库',
          collapsable: false,
          children: [
            '/note/04.frontend/javascript-library/rxjs.md',
            '/note/04.frontend/javascript-library/react-hooks.md',
            '/note/04.frontend/javascript-library/redux.md',
            '/note/04.frontend/javascript-library/redux-observable.md',
          ],
        },

        {
          title: '测试库',
          collapsable: false,
          children: [
            '/note/04.frontend/javascript-test/jest.md',
            '/note/04.frontend/javascript-test/testing-library.md',
            '/note/04.frontend/javascript-test/cypress.md',
          ],
        },
      ],
    },

    {
      title: '杂项',
      collapsable: false,
      children: [
        //
        '/note/08.misc/linux-basic-security.md',
        '/note/08.misc/clean-a-keyboard.md',
      ],
    },

    {
      title: 'About',
      collapsable: false,
      children: [
        '/note/09.about/about-me.md',
        '/note/09.about/about-the-site.md',
        '/note/09.about/about-the-guild.md',
        // '/note/09.about/ref.md',
      ],
    },
  ],
};

module.exports = sidebar;
