---
title: 运行 JavaScript 代码的十几种方式
date: 2020-04-21 18:36:14
permalink: /frontend/how-to-run-javascript-code
categories:
  - 前端开发
  - JavaScript
tags:
  - JavaScript
---

# 运行 JavaScript 代码的十几种方式

有人可能会想：JS 就是 JS，在浏览器里用的，哪有什么这么多运行方式，你别来什么用 Chrome 打开、用 Firefox 打开，就算两种啊。

其实我不是要标题党或是博人眼球。现实中确实有各种各样的需求和使用场景，导致了需要使用不同的工具来运行编写好的代码。  
（而且 JS 现在的作用也不仅仅局限于做网页。）

本文**按顺序**列举一些我所知道和用过的工具，  
从学习，到做项目，到深入 JS 语言，等等…  
来看看 JS 代码写好之后究竟怎么能发挥它作用。

那么在以后看到别人的代码片段时，就能知道怎样自己调试从中学习。  
或者需要向他人提问时，如何展示自己的代码。

工欲善其事，必先利其器。如果是初学者，首先要了解的肯定是怎么运行代码、以及如何更快地调试代码。

对于初学者来说，我推荐优先了解和使用以下工具，可以显著地提高代码学习效率：

- [DevTools](#devtools)
- [node](#terminal)
- [Parcel](#parcel)
- [Code Runner](#code-runner)
- [Quokka](#quokka)

如果是有经验的开发者，我也分享了一些不错的实用工具。

希望你看完这篇文章，能够更好地运用 JS 这门编程语言~

## 目录 {#toc}

本文目录，大致的分类：

- 开发
  - [浏览器](#browser)
    - [HTML script 标签](#html-script-tag)
    - [DevTools](#devtools)
  - [命令行](#terminal) （node、babel-node、ts-node）
  - [VS Code 编辑器](#vscode)
    - [Code Runner](#code-runner)
    - [Quokka](#quokka)
  - [工程化](#engineering)
    - [CLI](#cli)
    - [Webpack](#webpack)、[Parcel](#parcel)
    - [Rollup、Microbundle](#rollup-and-microbundle)
- [编译器（在线预览）](#online-compilers)
  - [Babel](#babel---try-it-out)
  - [TypeScript](#typescript-playground)
  - [AST Explorer](#ast-explorer)
  - [JavaScript Visualizer](#javascript-visualizer)
- [在线编辑器](#online-editors) （JS Bin、CodePen、StackBlitz、CodeSandbox）
- [其他](#others)
  - [jsconsole](#jsconsole)
  - [Console Importer](#console-importer)
  - [carbon](#carbon)
  - [dwitter.net](#dwitter)

## 浏览器 {#browser}

### HTML script 标签 {#html-script-tag}

这可能是所有前端开发者最先学习到的概念（无论通过什么学习途径）。

当然，现代前端开发的样貌早已天翻地覆，我们有一大堆自动化工具可以利用（后文会提及），可能不再需要手写 HTML 了。有些较新的学习教程可能已经没有花太多篇幅在这方面。

但是如果是做网页项目，那么最终还是会回到这里（即使是通过工具自动完成）。

我们追根溯源，看看如何通过网页的方式运行 JS。

```html
<!-- index.html -->
<html>
  <head></head>
  <body>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script>
      console.log('Hello from HTML');
    </script>
    <script src="index.js"></script>
  </body>
</html>
```

```js
// index.js
console.log('Hello from .js');
```

这个 Demo 中，我写了三个 script 标签，
他们的作用分别是：

- CDN 加载一个第三方库

看到了熟悉的 jquery。如果你是最近几年新入行的选手，即使不再需要 jQuery，那你可能也听说过它的大名~ 事实上，即使是使用当前世代的框架进行开发，为了一些原因（比如网络性能？）可能也会继续用这种方式，

比方说 [Vue 官方文档](https://cn.vuejs.org/v2/guide/installation.html#CDN) 中提及的：

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

浏览器读取 URL 相应的 JS 文件并执行。

需要注意的是，加载远程文件的过程是同步（阻塞）的。  
（除非注明 async、defer 等属性，这里不表）

- 直接在 script 标签内写 JS 代码

```html
<script>
  console.log('Hello from HTML');
</script>
```

我们自己的业务代码，可以直接写在标签内部，这是 HTML 规范所定义的另一种方式，  
浏览器将标签内部的字符串识别为 JS 代码并运行。

- 加载我们自己的 JS 文件

```html
<script src="index.js"></script>
```

```js
// index.js
console.log('Hello from .js');
```

直接在 HTML 中写 JS 可能无法很好的分割代码，所以一般会写在单独的 JS 文件中。  
类似于加载第三方库，只不过通过我们自己设定的资源路径。

扩展阅读：

- [“Hello World!”示例 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics#%E2%80%9CHello_World!%E2%80%9D%E7%A4%BA%E4%BE%8B)
- [script 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)

### DevTools

另一种和浏览器密切相关的方式是：

在浏览器的 DevTools（调试界面）的 Console 板块中，也能直接输入 JS 代码并执行。  
这能够方便地对当前应用进行调试，而不用直接修改源码。

![chrome devtools get started console](https://wd.imgix.net/image/admin/niTYZhvjmKcUZpMZmuOV.png)

DevTools 还有断点、性能、内存分析等更多和调试有关的功能，在框架开发或大型应用开发时很有用。

详情可以通过 Chrome 的官方文档进行系统地学习：

[在 Chrome DevTools 中调试 JavaScript（入门）](https://developers.google.com/web/tools/chrome-devtools/javascript?hl=zh-cn)

## 命令行 {#terminal}

前端开发发展至今，除了 JS 的业务代码，还需要很多编译和处理工具。源码在发布到网页前，需要提前在本地进行处理。这就需要借助**专门**的工具了。

也就是 [Node.js](https://nodejs.org/zh-cn/)，它是一个 JS 运行环境，它包含了和 Chrome 浏览器一样的 [V8 JS 引擎](https://v8.dev/)。

除了 Node 本身，还有支持扩展语法和新特性的 [@babel/node](https://babeljs.io/docs/en/next/babel-node.html) 和 [TS node](https://github.com/TypeStrong/ts-node)。它们相当于 [Babel](https://babeljs.io/) + Node、[TypeScript](https://www.typescriptlang.org/) + Node，能够做更多的事情。

他们都是运行在命令行中的工具，调用方式如下：

```sh
node ./index.js
babel-node ./index.js
ts-node ./index.js
```

```js
// index.js
console.log('Hello World!');
```

`ts-node`（特性的支持需要 [tsconfig](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 配合）

```sh
ts-node ./index.ts
```

```ts
// index.ts
import util from './lib.ts';
util.log('Hello world');

//  lib.ts
export default {
  log: console.log,
};
```

也可以直接启动 node，在命令行内编写代码。

```sh
$ node
Welcome to Node.js v13.13.0.
Type ".help" for more information.

> const hello = () => console.log('Hello World!');

> hello()
Hello World!
```

JS 本身是一个图灵完备的语言，能够完成很多复杂的工作。比如代码压缩、图片处理等等这些前端开发的常见技术需求。

那么我们有了更高效的无界面运行时之后，工程就可以更好地展开了，JS 编程领域也随之蓬勃发展。

甚至，连服务器、爬虫、机器学习，这些“跨界”的工作也开始出现。

## VS Code 编辑器 {#vscode}

[VS Code](https://github.com/microsoft/vscode) 是一个 [流行](https://risingstars.js.org/2018/zh#section-ide) 的代码编辑器。

值得一提的是，它本身就是一个用 TypeScript 编写、并运行在 Node 之上的大型应用。（所以它甚至有机会运行在网页上）

它不仅能够编写代码，还内置了调用终端（命令行）的功能。编写完 JS 代码，就可以直接使用 node 系列工具进行调试。  
甚至，还能像浏览器一样 [进行断点调试和代码追踪](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)。

![Breakpoints](https://az754404.vo.msecnd.net/public/function-breakpoint.gif)

除了这些自带的功能，我平时会使用两个额外的插件来增强调试的体验。

### Code Runner

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

支持快捷键和截选运行

![code runner usage](https://github.com/formulahendry/vscode-code-runner/raw/master/images/usage.gif)

### Quokka

[Quokka](https://quokkajs.com/)

支持自动运行，直接预览结果，省去频繁的手动操作。

![quokka vs code intro](https://quokkajs.com/assets/img/vsc-intro.gif)

## 工程化 {#engineering}

在学会了 JS 的基本语法和特性之后，代码的真正价值要发挥在工作中：网页应用、命令行工具、或是混合开发的 APP 等等。这些是项目，比文档教程中的 Demo 代码规模更大、更有现实意义。

借助上文提及的基本工具，或许能对局部代码文件进行运行和调试。  
但运行整个应用，则需要借助更多的工具。

于是，我们碰到了现代前端开发中的一个重要概念：构建（Building、Bundling）。

支持扩展语法（TypeScript、JSX）、增量编译整个项目、即时预览，这些都是提升开发效率和体验的重要组成部分。

提前介绍一个网站 [Create App - your tool for starting a new webpack or Parcel project](https://createapp.dev/)，它针对下面即将介绍的 Webpack 和 Parcel，为常见的业务提供了基本的配置集。

### CLI

- [Create React App](https://facebook.github.io/create-react-app/)
- [Vue CLI](https://cli.vuejs.org/zh/)
- [Angular CLI](https://cli.angular.io/)
- [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)
- [UmiJS](https://umijs.org/zh/)
- [Omi](https://github.com/Tencent/omi/blob/master/README.CN.md#%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8)

对于现代前端框架来说，CLI 几乎是标配了。

所谓 CLI，也就是 Command Line Interface，命令行界面。

有的甚至还带有图形界面（下图为 Vue CLI）

![vue cli gui](https://cli.vuejs.org/task-view.png)

开箱即用，不需要关心编译原理和配置，直接进入业务开发环节。极大地减少了开发成本。

然后调用封装好的命令即可一键编译运行。

一般这些命令的常见形式有：

```sh
npm run start
npm run serve
npm run dev
npm run build
```

顺便一提，现代框架发展至今，除了 CLI，它们甚至还有自己专门的 DevTools。比浏览器自带的 DevTools 更有针对性，调试框架项目更加方便。

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

### Webpack

![What is Webpack](https://webpack.github.io/assets/what-is-webpack.png)

- [Webpack](https://webpack.js.org/)
- [Webpack 中文文档](https://webpack.docschina.org/)

虽然 CLI 很方便，但是对于更复杂的应用或是定制的业务需求。  
可能还是要不断调整配置，甚至手动编写额外的脚本。

当 CLI 满足不了需求了，就可以使用 Webpack。

Webpack 算是现代前端开发构建工具中的 [中坚力量](https://risingstars.js.org/2019/zh#section-build)。那些众多的 CLI，其实它们的底层封装也都是基于 Webpack。比如我们检索 React CLI 的源码，最终就会发现 [使用了 webpack](https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/scripts/build.js#L38)。

Webpack 非常强大，借助插件系统，能支持各种编译需求。这也导致了它非常复杂，各个插件之间的不兼容情况和 Bug 时有发生。这甚至产生了“高级 Webpack 配置工程师”这样的梗。

但无论如何，想要成为更资深的工程师或是进行二次开发，了解 Webpack 的基本原理以及使用是必不可少的。

### Parcel

- [Parcel](https://parceljs.org/)
- [Parcel 中文网](https://zh.parceljs.org/)

Webpack 过于复杂，CLI 也需要一些配置步骤，  
如果只是做做 Demo，还有一个更方便的选择，那就是 Parcel。

Parcel 怎么用的？几句话就能讲清楚。

I have an `index.html` ~

```html
<html>
  <head></head>
  <body>
    <div id="app-react"></div>
    <script src="app.tsx"></script>
  </body>
</html>
```

I have an `app.tsx` ~

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => <div>Hello Parcel!</div>;

ReactDOM.render(
  <App />,
  document.getElementById('app-react'),
);
```

Uh!

```sh
parcel index.html
```

自动预览，自动打包，一个应用就做好了！

不需要初始化，不需要安装依赖，不需要任何配置。就是这么简单！

### Rollup、Microbundle {#rollup-and-microbundle}

- [rollup.js](https://rollupjs.org/guide/en/)
- [rollup.js - 中文](https://rollupjs.org/guide/zh/)

* [Microbundle](https://github.com/developit/microbundle)

Rollup 和 Microbundle 有点类似 Webpack 和 Parcel，  
差别在于它们更适用于 npm 包的开发而不是 Web 应用。

比如 React 和 Vue 框架本身，[就是用 Rollup 打包的](https://github.com/vuejs/vue/blob/dev/scripts/build.js#L4)。

~~这里的空白处太小，写不下。~~ 就不多介绍了。

## 编译器（在线预览） {#online-compilers}

这一章节我要介绍的，不是“我如何运行我的代码”，而是“它如何运行我的代码”。

JS 虽然是解释型语言，直接丢到 Runtime 里就可以运行，使用者不需要懂得编译原理。但对于更资深的工程人员来说，编译原理、以及 JS 的语言设计和运行机制，还是非常有必要了解的。

### Babel - Try it out

- [Try it out - Babel](https://babeljs.io/repl)
- [试一试 - Babel](https://www.babeljs.cn/repl)

最著名和常用的 Babel 编译器，通常和 Webpack 搭配使用，完成新语法到兼容语法的编译功能。上面有两个在线试用的网址，可以动手玩，看看 Babel 的作用和实现的效果是什么。

例如：

箭头函数转成 function 函数

```js
// * ---------------- 输入

const fn = () => 'Hello';

// * ---------------- 输出

var fn = function fn() {
  return 'Hello';
};
```

配合 `@babel/preset-react` 插件，将 JSX 转义成普通 JS 语法  
（这样就很明显解释了，为什么 React 项目代码中需要 `import React`）

```jsx
// * ---------------- 输入

<div>Hello !</div>;

// * ---------------- 输出

/*#__PURE__*/
React.createElement('div', null, 'Hello !');
```

配合 `@babel/preset-typescript` 插件，将 TS 转义成普通 JS 语法

```ts
// * ---------------- 输入

enum DIR {
  Up = 1,
  Down,
  Left,
  Right,
}

// * ---------------- 输出

var DIR;

(function (DIR) {
  DIR[(DIR['Up'] = 1)] = 'Up';
  DIR[(DIR['Down'] = 2)] = 'Down';
  DIR[(DIR['Left'] = 3)] = 'Left';
  DIR[(DIR['Right'] = 4)] = 'Right';
})(DIR || (DIR = {}));
```

### TypeScript Playground

[TypeScript Playground](https://www.typescriptlang.org/play)

TypeScript 自己的 Playground。除了查看 TS 到 JS 的编译结果，也能直接运行（试试 console 栏）。

通常在工程实践中使用 TS，只会将 TS 编译到 ESNext（也就是最新的 JS 语法），施加最小的影响。这是因为浏览器可以直接运行 JS 但不能直接运行 TS。

要是还有兼容性的需求，可以再交给 Babel 进行处理。  
所以我们提到前端编译，通常会一起包括 Webpack + Babel + TypeScript 这三个工具。

### AST Explorer

编译的大致原理是：将字符串代码解析成 AST，也就是 Abstract Syntax Tree，抽象语法树；接着进行处理，变换其中的一些数据（例如将 `const` 关键字改成 `var`）；最后将处理过后的 AST 合并成新的代码。

事实上不只有 Babel 能做编译。诸如 JS 引擎读取 JS 代码翻译成中间码并执行，TS 对代码语法进行静态检测，JVM 运行 Java 代码，C 语言编译到机器码。这些都需要编译过程。

[AST Explorer](https://astexplorer.net/)

这个链接可以动手玩，直观地了解编译和抽象语法树的概念。

比方说，一句简单的 log 代码，

```js
console.log('Hello');
```

实际上包含了很多信息，比如：代码长度、调用表达式、成员表达式、标识符、字面量…等等

```js
Program  {
  type: "Program"
  start: 0
  end: 21
  body:  [
    ExpressionStatement  {
      type: "ExpressionStatement"
      start: 0
      end: 21
      expression: CallExpression  {
        type: "CallExpression"
        start: 0
        end: 20
        callee: MemberExpression {type, start, end, object, property, ... +1}
        arguments: [1 element]
      }
    }
  ]
  sourceType: "module"
}
```

### JavaScript Visualizer

[JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/)

在大致了解了编译原理之后，我们可以继续深入看看 JS 的执行机制。

众所周知，JS 有词法作用域、函数作用域、函数调用等概念。而这些概念实际上也源自语言设计和实际代码，不是凭空出现的。它们在 JS 引擎中的具体实施是怎样的？我们可以通过上面这个链接，观察代码的逐步运行演示，更深刻地理解这些概念。

试试 Run 一下我们刚才提到的，简单的 `log` 方法。

```js
console.log('Hello');
```

或者试试函数调用（甚至更复杂的嵌套调用）

```js
function fn() {
  console.log('Hello');
}

fn();
```

通过逐帧观察，就能直观理解 `CallExpression`、`MemberExpression` 等那些 AST 中见到的概念。

需要注意的是，这个项目目前还不支持 ES6+ 的语法（例如 `const`、`=>` 等），可以使用 ES5。

## 在线编辑器 {#online-editors}

除了本地开发以外，也会有在线编辑的需求，比方说：向别人展示自己的可运行的代码。

在线编辑器的好处是，能够直接运行，省去了传统的准备开发编译部署的一系列环节，更新代码也更为方便了。非常适合用作分享。

甚至也可以作为主力开发环境，VS Code 目前就有开发中的 Web 版。  
这就好比服务器部署现在有 Serverless 等新技术，说不定未来的源码编写工作也可以全部在云端进行。

这里列举一些我用过站点，其实就相当于本地编辑器的在线简化版，就不多介绍了。

- [StackBlitz](https://stackblitz.com/)：演示小型 Demo，可以直接装 npm 包（看看界面是不是跟 VS Code 很像？）
- [CodeSandbox](https://codesandbox.io/)：演示小型 Demo，可以直接装 npm 包
- [JS Bin](https://jsbin.com/)：常见于 Stack Overflow 提问时附带演示
- [CodePen](https://codepen.io/)：高质量的 CSS 作品偏多，可以手动通过 CDN 加载 npm 包

## 其他 {#others}

这一章略有偏题，但也有一定相关性。推荐几个有意思的工具。

### jsconsole

[jsconsole](https://jsconsole.com/)

这个网站相当于浏览器的 DevTools。我有时在地铁上只能用手机的时候会用它研究代码片段。

### Console Importer

[Console Importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie)

这是一个 Chrome 的浏览器插件，可以在 console 中直接安装 npm 包并使用。

比方说：

```js
$i('lodash');

// 等下载完

_.uniq([2, 1, 2]); // => [2, 1]
```

分析别人家网页的时候比较方便。

![Console Importer Presentation](https://github.com/pd4d10/console-importer/raw/master/assets/js.gif)

### carbon

[carbon](https://carbon.now.sh/)

一个代码截图的工具（用于分享），样式比较好看。

![carbon screenshot](https://user-images.githubusercontent.com/8397708/63456416-b27d1a80-c403-11e9-9572-105b089be885.png)

### dwitter.net {#dwitter}

[dwitter.net](https://www.dwitter.net/)

你能在 140 个字符的极限规模内写出什么代码呢？

（它实际上利用计时器和 canvas 来运行）

![dwitter show case](https://miro.medium.com/max/1400/1*quDY8oCmlYmCUX5Nb48_2g.gif)
