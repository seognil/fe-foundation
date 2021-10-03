interface Redirect {
  to: string;
  from: string[];
}

export const redirectRecords: Redirect[] = [
  // * ----------------

  {
    to: '/note/frontend-development-cookbook',
    from: [
      '/note/fe-development-cookbook-old',
      '/note/fe-development-cookbook',
      '/note/frontend-development-cookbook.html',
    ],
  },

  // * ---------------- study

  { to: '/study/crash-course-study-skills', from: ['/note/study-methodology.html'] },
  { to: '/study/using-english', from: ['/note/english-using.html'] },

  { to: '/study/study-fortune', from: ['/note/study-fortune.html'] },

  { to: '/study/study-guild-abstraction', from: ['/note/study-guild-abstraction.html'] },
  {
    to: '/study/why-we-need-to-study',
    from: ['/study/study-the-only-way', '/note/study-the-only-way.html'],
  },
  {
    to: '/study/dont-waste-your-time-and-money',
    from: ['/study/study-the-costly-way', '/note/study-the-costly-way.html'],
  },

  // * ---------------- workspace

  { to: '/workspace/awesome-tools', from: ['/note/my-workstation.html'] },
  { to: '/workspace/mac', from: ['/note/mac.html'] },
  { to: '/workspace/chrome', from: ['/note/chrome.html'] },
  { to: '/workspace/vscode', from: ['/note/vscode.html'] },

  { to: '/workspace/introduction-to-terminal', from: ['/note/terminal-intro.html'] },
  { to: '/workspace/terminal-settings', from: ['/note/terminal-config.html'] },

  { to: '/workspace/my-video-player-shortcuts', from: ['/note/video-hotkey.html'] },

  // * ---------------- cs

  { to: '/cs/crash-course-computer-science', from: ['/note/computer-science.html'] },
  {
    to: '/cs/introduction-to-functional-programming',
    from: ['/note/functional-programming.html'],
  },

  { to: '/cs/git', from: ['/note/git.html'] },
  { to: '/cs/markdown', from: ['/note/markdown.html'] },
  { to: '/cs/count-lines-of-code', from: ['/note/cloc.html'] },

  { to: '/cs/javascript-language-basic', from: ['/note/js-basic'] },
  { to: '/cs/typescript-language-basic', from: ['/note/typescript.html'] },
  { to: '/cs/python-language-basic', from: ['/note/python-language-basic'] },

  // * ---------------- frontend

  { to: '/frontend/frontend-hardcore-overview', from: ['/note/fe-hardcore-overview.html'] },

  { to: '/frontend/html', from: ['/note/html.html'] },
  { to: '/frontend/css', from: ['/note/css.html'] },

  { to: '/frontend/javascript-foundation', from: ['/note/js-foundation.html'] },
  { to: '/frontend/introduction-to-javascript', from: ['/note/js-intro.html'] },
  { to: '/frontend/how-to-run-javascript-code', from: ['/note/how-to-run-js.html'] },
  { to: '/frontend/javascript-advanced', from: ['/note/js-advanced.html'] },
  { to: '/frontend/syntactic-sugar-in-javascript', from: ['/note/syntactic-sugar.html'] },
  { to: '/frontend/javascript-modules', from: ['/note/js-modular.html'] },
  { to: '/frontend/javascript-regular-expression', from: ['/note/regexp.html'] },
  { to: '/frontend/javascript-foundation-legacy-version', from: ['/note/js-foundation-old.html'] },

  { to: '/frontend/nodejs-basic', from: ['/note/node-basic.html'] },
  { to: '/frontend/introduction-to-npm', from: ['/note/npm-overview.html'] },
  { to: '/frontend/speeding-up-npm-install', from: ['/note/npm-speedup.html'] },
  {
    to: '/frontend/set-up-a-private-npm-registry-using-verdaccio',
    from: ['/note/npm-verdaccio.html'],
  },

  { to: '/frontend/rxjs', from: ['/note/rxjs.html'] },
  { to: '/frontend/redux', from: ['/note/redux.html'] },
  { to: '/frontend/react-hooks', from: ['/note/react-hooks.html'] },
  { to: '/frontend/redux-observable', from: ['/note/redux-observable.html'] },

  { to: '/frontend/jest', from: ['/note/jest.html'] },
  { to: '/frontend/testing-library', from: ['/note/testing-library.html'] },
  { to: '/frontend/cypress', from: ['/note/cypress.html'] },

  // * ---------------- misc

  { to: '/misc/linux-basic-security', from: ['/note/linux-basic-security.html'] },
  { to: '/misc/clean-a-keyboard', from: ['/note/clean-keyboard.html'] },

  // * ---------------- about

  { to: '/about/the-site', from: ['/note/readme.html'] },
  { to: '/about/where-do-i-learn-from', from: ['/note/my-reading.html'] },
  { to: '/about/me', from: ['/about/'] },
  { to: '/about/the-guild', from: ['/note/about-the-guild.html'] },
];
