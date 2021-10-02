---
title: JavaScript 简介
date: 2019-12-30 11:39:54
permalink: /frontend/introduction-to-javascript
categories:
  - 前端开发
  - JavaScript
tags:
  - JavaScript
---

# JavaScript 简介

## 什么是 JavaScript

JavaScript（通常缩写为 JS）是一种解释型高级语言。  
通常作为开发 Web 页面的脚本语言，  
但是它也可以在非浏览器环境中使用，例如 Node.js。

广义的 JavaScript 包含三个部分：

- `ES`：ECMAScript，核心标准
- `DOM`：Document Object Model，文档对象模型
- `BOM`： Browser Object Model，浏览器对象模型

狭义的 JavaScript 可以只指 `ECMAScript`，  
可以简单理解为浏览器、Node 嵌入式等所有环境都必须支持的 JS 功能子集。  
（去掉了 `document`、`window` 等概念）

[JavaScript 是图灵完备的](https://www.freecodecamp.org/news/javascript-is-turing-complete-explained-41a34287d263/)

## 什么是 ES6

ES 就是 ECMAScript，  
ES2015/ES6 是 ES 的一个里程碑（大更新）版本，  
其中 2015 表示年份，6 表示版本号，  
（目前最新的是 ES2019/ES10）  
ES6+ 是前端开发的基本语言。

- ES6 相比 ES5：
  - 多了一些语法
    - 或需要被预编译成 ES5 以增加旧环境兼容性
  - 多了一些 API
    - 或需要 Polyfill
  - 多了一些数据结构和类型
    - 或可以被预转译
    - 部分特性无法被完美模拟（如 Proxy）

* 兼容性
  - [ECMAScript 6 compatibility table - kangax](https://kangax.github.io/compat-table/)
  - [Can I use <u>Arrow functions</u> ?](https://caniuse.com/#search=Arrow%20functions)

## 为什么要学习 JavaScript

- 如果你想编程入门
- 如果你想魔改某些页面
- 如果你想从事前端开发工作

## JS 概况/漫谈

- [硬核前端（劝退篇）](/frontend/frontend-hardcore-overview)

- [王垠对 JS 的评价](https://zhuanlan.zhihu.com/p/54821270)

* [2019 年 JavaScript 明星项目](https://risingstars.js.org/2019/zh)
* [2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh)
* [The State of JavaScript 2019](https://2019.stateofjs.com/zh/)

- [为什么认为 Backbone 是现代前端框架的基石](https://zhuanlan.zhihu.com/p/30982369)
- [[译文] 现代 js 框架存在的根本原因](https://juejin.im/post/5b111436e51d4506d06205fd)

## JavaScript 版本/方言/历史

- [JavaScript: The First 20 Years](https://zenodo.org/record/3710954)
- [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
- [JavaScript: How It's Made](https://www.youtube.com/watch?v=FSs_JYwnAdI)
- [漫谈 JavaScript 方言与派系](https://www.blackglory.me/javascript-dialects-and-factions/)

在现代前端开发中，  
开发时需要使用配套的解析工具，  
发布前基本上都会预编译到 ES5。

- **ECMAScript** 官方规范（from _Ecma TC39_）
  - **ES1~3**：1995 起，上古版本
  - **ES5**：（aka `ES3.1`）2009 起的版本
  - **ES6**：（aka `ES2015`）2015 年大更新的版本，带动了 JS 预编译生态，后续逐年小幅度更新
  - **Vanilla JavaScript**：民间称呼，指的就是标准/原生/不使用库的 JS，Vanilla 表示 Plain 或者 Pure
- **JSON**： JavaScript Object Notation，JS 对象表示法，基于 JS 语法子集的数据格式
- 类型系统
  - **TypeScript**：带类型检查的扩展集（from _Microsoft_）
  - **Flow**：比 TS 功能少一点的类型检查扩展集，现已式微（from _Facebook_）
- 框架语言（基于 ES、TS 并含有扩展语法的 DSL/语法糖）
  - **JSX**：React 的 JS + HTML 混合语法
  - **Vue**：Vue 自己的（文件和 template）格式
- **ClojureScript**：Clojure+JS 的函数式方言
- 其他方言（现已式微的）
  - **ActionScript**：以 ES4 衍生发展成的旁支（用于 _Adobe_ Flash，但是 Flash 已死）
  - **CoffeeScript**：方言之一，简化了 JS 语法
  - **LiveScript**：CoffeeScript 的兄弟版本（JS 早期曾用名也是这个，但是不同的东西）
