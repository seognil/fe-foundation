---
title: JavaScript 语言基础 （2021）
date: 2021-08-11 20:33:38
permalink: /cs/javascript-language-basic
categories:
  - 计算机科学
  - 编程语言
tags:
  - 编程语言
  - JavaScript
  - 基础
---

# JavaScript 语言基础 （2021）

## 写在前面

### 新语法 TLDR

如果你已经比较熟悉 JavaScript 了，这里有一些最近新标准中新增的语法，以防你看到类似的语法不知道该怎么搜它们…

- [空值合并](https://zh.javascript.info/nullish-coalescing-operator) `a ?? b`
- [可选链](https://zh.javascript.info/optional-chaining) `a?.b`, `a?.[0]`, `fn?.(a, b)`
- [新的赋值运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6) `a ||= b`, `a ??= b` ...
- [BigInt](https://zh.javascript.info/bigint) `10n`, `BigInt(10)`, `BigInt("10")`
- [Generator](https://zh.javascript.info/generators) `function* fn() { yield 1; }`
- [class 私有属性](https://zh.javascript.info/private-protected-properties-methods#si-you-de-waterlimit) `class A { #val = 2; }`

### 很少用到或建议别用

历史遗毒、糟粕，或有其他实现方式，看到尽量绕行。

- [`var`](https://zh.javascript.info/var)
- [`eval`](https://zh.javascript.info/eval)
- [`new Function`](https://zh.javascript.info/new-function)
- [`with`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with)
- [`label`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)
- [`==`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness) 非严格相等

## 教材

- 视频
  - [Node.js Ultimate Beginner’s Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4) 16min：是什么和如何使用 Node.js 和运行 JavaScript，模块化，包
  - [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk) 1h：在浏览器中运行 JS，基本语法
  - [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c) 2h：JS 简介，JS(ES6) 语法、基本类型、API，类，简单 DOM 操作
  - [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg) 3h：运行 JS 的多种方式，JS(ES6) 语法、API、执行细节、代码技巧、模块化
  - [The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg) 15min：一些 JS 的坑和技巧
- 教程
  - [现代 JavaScript 教程](https://zh.javascript.info/) （第一部分）
  - [ES6 教程](https://wangdoc.com/es6/index.html)
    - [ECMAScript 6 简介](https://wangdoc.com/es6/intro.html)
    - [参考链接](https://wangdoc.com/es6/reference.html)
- MDN 文档
  - 文档
    - [重新介绍 JavaScript（JS 教程）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
    - [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
    - [JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
    - [严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
  - 索引
    - [JavaScript 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)
    - [JavaScript 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)
    - [表达式和运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)
    - [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
    - [术语表](https://developer.mozilla.org/zh-CN/docs/Glossary)
- 书
  - [JavaScript 权威指南](https://book.douban.com/subject/35396470/)：犀牛书
  - [JavaScript 高级程序设计](https://book.douban.com/subject/35175321/)：红宝书、高程（第 4 版）
- 扩展阅读：JavaScript 历史
  - [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
  - [JavaScript: How It's Made](https://www.youtube.com/watch?v=FSs_JYwnAdI)
  - [JavaScript 二十年](https://github.com/doodlewind/jshistory-cn)

## 概况

### JavaScript 生态

- [Node.js](https://nodejs.org/zh-cn/)：JS 的命令行运行环境
  – 包管理
  - [npm](https://www.npmjs.com/)：自带的包管理
    - 格式化：[Prettier](https://prettier.io/)
    - Lint：[ESLint](https://eslint.org/)
    - 单元测试：[Jest](https://jestjs.io/)
  - [yarn](https://yarnpkg.com/)（我用这个）
- 版本管理
  - Node 版本管理（如果你需要的话）
    - [n](https://github.com/tj/n) （我用这个）
    - [nvm](https://github.com/nvm-sh/nvm)
  - [nrm](https://github.com/Pana/nrm)：npm 源管理
- VS Code 插件
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
  - [Quokka.js](https://quokkajs.com/)
- 杂项
  - 生态报告
    - [2020 年 JavaScript 明星项目](https://risingstars.js.org/2020/zh)
    - [The State of JavaScript 2020](https://2020.stateofjs.com/zh-Hans/)
  - 语言兼容性检查
    - [ECMAScript 6 compatibility table - kangax](https://kangax.github.io/compat-table/)
    - [Can I use](https://caniuse.com/#search=Arrow%20functions)
  - npm 包分析
    - [npm trends](https://www.npmtrends.com/react)
    - [BUNDLE PHOBIA](https://bundlephobia.com/package/react)

### 术语表

- JavaScript
  - [JS](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)：JavaScript，ECMAScript 的具体实现
    - [ES](https://en.wikipedia.org/wiki/ECMAScript)：ECMAScript，JavaScript 的语言标准
      - ES5：5 指版本号。几乎所有环境（如 IE 浏览器）都支持运行，兼容性高，但是缺少了很多便捷的新语法
      - ES6/ES2015：6 指版本号，2015 指年份。是一次重大的更新，新增了很多新语法，部分老浏览器（如 IE）无法解析运行
      - [ESNext](https://en.wikipedia.org/wiki/ECMAScript#ES.Next)：表示最新的 ES 版本
    - [Web API](https://developer.mozilla.org/zh-CN/docs/Web/API)：只有浏览器有的操纵页面的 API
      - [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)：Document Object Model，文档对象模型。Web API 中和 HTML 节点有关的部分
  - [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)：JavaScript Object Notation，基于 JS 语法的数据格式
  - 方言
    - [TS](https://www.typescriptlang.org/)：TypeScript，带类型的 JavaScript
    - [JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html)：React 框架提供的 HTML 模板语法糖，在 JS 中写 HTML
    - [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html)：TS + JSX
    - [Vanilla JS](https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks)：指原生 JS，Vanilla 表示 Plain
- ECMA
  - [ECMA](https://www.ecma-international.org/)：European Computer Manufacturers Association，欧洲计算机制造商协会
  - [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)：ECMAScript 语言标准的文档编号
  - [ECMA TC39](https://tc39.es/zh-Hans/)：制定和发展 ES 语言标准的业界团体
- 编程语言
  - [Statement](https://developer.mozilla.org/zh-CN/docs/Glossary/Statement)：语句，一行任务指令
  - [Expression](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%A1%A8%E8%BE%BE%E5%BC%8F)：表达式，一个表达式的结果总是某个值（或 undefined）
  - [API](https://developer.mozilla.org/zh-CN/docs/Glossary/API)：Application Programming Interface，应用程序接口，复杂逻辑的封装。比如：`console.log()` 是一个用于 log 的 API
  - [argument](https://developer.mozilla.org/zh-CN/docs/Glossary/Argument)：形参，指定义函数时的参数
  - [parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)：实参，指调用函数时，传入的参数
  - [builtin function](https://en.wikipedia.org/wiki/Builtin_function)：内建函数。比如：数组的 `slice` 方法是浏览器引擎内建的方法
  - [DSL](https://en.wikipedia.org/wiki/Domain-specific_language)：Domain-Specific Language，领域特定语言。比如：JSX 可以认为是 JS 的一个 DSL
  - [Polyfill](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill)：模拟新标准 API 的代码，让旧浏览器能够运行新的语言功能
  - [LHS/RHS](https://en.wikipedia.org/wiki/Sides_of_an_equation)：Left/Right Hand Side，指一个表达式/语句中，操作符左/右测的语句

## Node.js 安装和运行 （Mac）

- [Node.js 入门指南](/frontend/nodejs-basic)
- [npm 基本概念和使用](/frontend/introduction-to-npm)

```sh
brew install node
brew install yarn

node -v
npm -v
yarn -v

node
> 1+1
> .exit

node script.js
```

```sh
brew install n

n ls
sudo n 14
sudo n 16
```

```sh
npm install -g nrm

nrm ls
nrm use taobao
```

```sh
npm init

# npm
npm i -g @vue/cli # 全局安装
npm init # 新建一个项目
npm i lodash # 在项目中安装一个包
npm un lodash # 在项目中卸载一个包

# yarn
yarn global add @vue/cli # 全局安装
npm init # 新建一个项目
yarn add lodash # 在项目中安装一个包
yarn remove lodash # 在项目中卸载一个包
```

## JavaScript 语言基础知识体系

### 语言特性

- 语言特性
  - 动态类型，弱类型
  - 基于原型的类继承
  - 函数是一等公民
    - 函数也是 Object
    - 高阶函数
    - 函数没有重载
  - 单线程，非阻塞（EventLoop 队列）
  - 高级语言，JIT（Just-In-Time）编译

### 基本语法

- 语法
  - [分号和换行](https://zh.javascript.info/structure#semicolon) `;`
  - [注释](https://zh.javascript.info/structure#code-comments) `//`, `/* */`
    - [JSDoc](https://zh.javascript.info/comments#hao-de-zhu-shi)
  - 变量和声明
    - [变量声明](https://zh.javascript.info/variables#zong-jie) `var`, `let`, `const`
    - [变量命名](https://zh.javascript.info/variables#variable-naming) 区分大小写 `a-z, A-Z, 0-9, _ $`
    - [保留字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)
    - [字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E5%AD%97%E9%9D%A2%E9%87%8F_literals)
  - [严格模式](https://zh.javascript.info/strict-mode) `"use strict";`
  - [尾逗号](https://zh.javascript.info/array#sheng-ming) `[1, 2,]`, `{ a, b, }`
  - [扩展、剩余、解构](https://zh.javascript.info/destructuring-assignment) `[a = 1, b, ...rest] = arr`, `{a: val = 1, b, ...rest} = obj`
  - [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) `/ab+c/i`
- [表达式与运算符 - 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators), [表达式与运算符 - 参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)
  - （数值计算）
    - [算数](https://zh.javascript.info/operators#shu-yu-yi-yuan-yun-suan-fu-er-yuan-yun-suan-fu-yun-suan-yuan) `+`, `-`, `*`, `/`, `%`, `**`
    - [自增/自减](https://zh.javascript.info/operators#zi-zeng-zi-jian) `++`, `--`
    - [位运算](https://zh.javascript.info/operators#wei-yun-suan-fu) `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
  - （逻辑）
    - [布尔运算](https://zh.javascript.info/logical-operators) `!`, `&&`, `||`
    - [比较](https://zh.javascript.info/comparison) `<`, `<=`, `>`, `>=`
      - [字符串比较](https://zh.javascript.info/comparison#zi-fu-chuan-bi-jiao) 按 Unicode 编码顺序
    - [相等性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6) `==`, `===`, `!=`, `!==`
      - [JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
      - [Truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)、[Falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)
  - [赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6) `=`, `+=`, `-=`, `||=`, `??=` ...
  - （其他）
    - [条件运算符/三元/三目](https://zh.javascript.info/ifelse#tiao-jian-yun-suan-fu) `a > b ? a : b`
    - [`typeof`](https://zh.javascript.info/types#type-typeof)、[`instanceof`](https://zh.javascript.info/instanceof)
    - [`in`](https://zh.javascript.info/object#shu-xing-cun-zai-xing-ce-shi-in-cao-zuo-fu)、[`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
    - [空值合并](https://zh.javascript.info/nullish-coalescing-operator) `??`
    - [可选链](https://zh.javascript.info/optional-chaining) `?.`, `?.[]`, `?.()`
    - [圆括号运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping) `1 * (2 + 3)`
    - [逗号运算符](https://zh.javascript.info/operators#dou-hao-yun-suan-fu) `a = (b, c)`
    - [`void`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void)
  - [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
- [控制流](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements#%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B)
  - [条件分支](https://zh.javascript.info/ifelse) `if`, `else`, `else if`
  - [switch](https://zh.javascript.info/switch) `switch`, `case`, `break`, `default`
- [循环/迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements#%E8%BF%AD%E4%BB%A3%E5%99%A8)
  - [循环](https://zh.javascript.info/while-for) `for`, `while`, `do while`, `break`, `continue`, `label`
  - [`for in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in), [`for of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
  - [`for await of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [错误处理](https://zh.javascript.info/try-catch)
  - `try`, `cache`, `finally`
  - `throw`, `Error`

### Runtime

- [隐式全局变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#description)
- [变量提升](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87)
- [暂时性死区](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let#%E6%9A%82%E5%AD%98%E6%AD%BB%E5%8C%BA)
- [短路求值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#note_on_grouping_and_short-circuiting)
- [垃圾回收](https://zh.javascript.info/garbage-collection)

### 原始数据类型

- [原始类型](https://zh.javascript.info/primitives-methods)
  - [number](https://zh.javascript.info/number)
    - `0b111`, `0o777`, `0xfff`, `10.5`, `1.5e2`
    - [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN), [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
  - [BigInt](https://zh.javascript.info/bigint) `10n`, `BigInt(10)`, `BigInt("10")`
  - [string](https://zh.javascript.info/string)
    - `'Hello'`, `"Hello"`, `"Hello " + "World!"`
    - [访问字符](https://zh.javascript.info/string#fang-wen-zi-fu) `str[0]`
    - [模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals) `` `x + y = ${x + y}` ``
    - [标签模板](https://wangdoc.com/es6/string.html#%E6%A0%87%E7%AD%BE%E6%A8%A1%E6%9D%BF) `` alert`hello` ``
    - [转义字符](https://zh.javascript.info/string#te-shu-zi-fu) `\n`, `\\` `\u00A9`, `\u{1f60d}`
    - [`String.raw()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
  - [boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types#%E5%B8%83%E5%B0%94%E5%AD%97%E9%9D%A2%E9%87%8F_boolean_literals)
    - `true`, `false`
  - [symbol](https://zh.javascript.info/symbol)
    - `Symbol('id')`
    - `Symbol.for('id')`, `Symbol.keyFor(sym)`
    - `.description`
  - [undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
  - [null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
- 特性
  - [包装对象](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive#javascript_%E4%B8%AD%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%8C%85%E8%A3%85%E5%AF%B9%E8%B1%A1)
    - [类型转换](https://zh.javascript.info/type-conversions)
    - [原始类型的方法](https://zh.javascript.info/primitives-methods)
  - [Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) / [Immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable)
- String 和 Number 相关常见 API
  - [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
    - `.length`
    - `.concat()`, `.slice()`, `.split()`, `.repeat()`
    - `.includes()`, `.indexOf()`, `.lastIndexOf()`
    - `.match()`, `.matchAll()`, `.replace()`, `.replaceAll()`, `.search()`
    - `.startsWith()`, `.endsWith()`
    - `.trim()`, `.trimEnd()`, `.trimStart()`, `.padEnd()`, `.padStart()`
    - `.charAt()`, `.charCodeAt()`, `.codePointAt()`
    - `String.fromCharCode()`, `String.fromCodePoint()`, `String.raw()`
  - [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
    - `.toFixed()`
    - `Number.isFinite()`, `Number.isNaN()`, `Number.parseInt()`, `Number.parseFloat()`
    - `Number.EPSILON`, `Number.MAX_SAFE_INTEGER`
  - [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
    - `Math.E`, `Math.PI`, `Math.SQRT1_2`, `Math.SQRT2`
    - `Math.abs()`, `Math.sign()`
    - `Math.max()`, `Math.min()`, `Math.random()`
    - `Math.ceil()`, `Math.floor()`, `Math.round()`, `Math.trunc()`
    - `Math.pow()`, `Math.sqrt()`, `Math.cbrt()`
    - `Math.exp()`, `Math.log()`, `Math.log10()`, `Math.log2()`
    - `Math.cos()`, `Math.sin()`, `Math.tan()`, `Math.acos()`, `Math.asin()`, `Math.atan()` ...

### 引用类型 对象 数组

- [Object](https://zh.javascript.info/object)
  - `{ a: 1, b: 2, c: 3 }`
  - [简写](https://zh.javascript.info/object#shu-xing-zhi-jian-xie) `{ a, b, fn() {} }`
  - [计算属性](https://zh.javascript.info/object#ji-suan-shu-xing) `{ [key]: value }`
  - [属性读取](https://zh.javascript.info/object#wen-ben-he-shu-xing) `obj.key`, `obj['key']`
  - [getter/setter](https://zh.javascript.info/property-accessors) `{ get k() {}, set k(v) {} }`
  - [`this`](https://zh.javascript.info/object-methods)
  - [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive) `.toString()`, `.valueOf()`, `Symbol.toPrimitive`
  - [引用类型](https://zh.javascript.info/object-copy)
- [Object 常见 API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.fromEntries()`
  - `Object.create()`, `Object.assign()`, `Object.is()`, `.isPrototypeOf()`
  - `Object.hasOwn()`, `.hasOwnProperty()`
  - `Object.defineProperty()`, `Object.getOwnPropertyDescriptor()` ...
  - `Object.preventExtensions()`, `Object.freeze()`, `Object.seal()`
  - `Object.isExtensible()`, `Object.isFrozen()`, `Object.isSealed()`

* [Array](https://zh.javascript.info/array)
  - `[1, 2, 3, null, {}, [6, 7]]`
  - [多维数组](https://zh.javascript.info/array#duo-wei-shu-zu) `arr[0]`, `arr[0][0]`
  - `.length`
  - [数组是基于对象的](https://zh.javascript.info/array#nei-bu)
  - [类数组](https://zh.javascript.info/iterable#array-like)
  - [Iterable](https://zh.javascript.info/iterable) `Symbol.iterator`, `for of`
* [Array 常见 API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - `Array.from()`, `Array.of()`, `Array.isArray()`, `.fill()`
  - `.sort()`, `.reverse()`, `.flat()`, `.flatMap()`
  - `.pop()`, `.push()`, `.shift()`, `.unshift()`
  - `.map()`, `.filter()`, `.reduce()`, `.reduceRight()`, `.forEach()`, `.every()`, `.some()`
  - `.find()`, `.findIndex()`, `.includes()`, `.indexOf()`, `.lastIndexOf()`
  - `.concat()`, `.join()`, `.slice()`, `.splice()`
  - `.keys()`, `.values()`, `.entries()`

### 函数

- [Function](https://zh.javascript.info/function-basics)
  - 声明
    - `function fn(a, b) { return a + b }`
    - [函数表达式](https://zh.javascript.info/function-expressions) `const fn = function () {}`
    - [箭头函数](https://zh.javascript.info/arrow-functions-basics) `(a, b) => a + b`
      - [没有 `this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%E6%B2%A1%E6%9C%89%E5%8D%95%E7%8B%AC%E7%9A%84this) （所以 `bind`、`new` 等操作都无效）
      - [不绑定 `arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%E4%B8%8D%E7%BB%91%E5%AE%9Aarguments)
  - 参数
    - [默认值](https://zh.javascript.info/function-basics#mo-ren-zhi)
    - [解构](https://zh.javascript.info/destructuring-assignment#zhi-neng-han-shu-can-shu) `({ max, min = 0 }) => {}`
    - [按值传递](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E)
  - [`return`](https://zh.javascript.info/function-basics#fan-hui-zhi)
  - 执行
    - [执行上下文](https://zh.javascript.info/recursion#zhi-hang-shang-xia-wen-he-dui-zhan)
    - [作用域、闭包、变量查找](https://zh.javascript.info/closure)
  - [`this`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this) （直接调用、方法调用、构造函数、apply/call/bind）
  - 杂项
    - [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
    - [`.name`](https://zh.javascript.info/function-object#shu-xing-name)
    - [`.length`](https://zh.javascript.info/function-object#shu-xing-length)
    - [IIFE](https://zh.javascript.info/var#iife) “立即执行函数表达式” `(() => {})()`
    - [callback](https://zh.javascript.info/callbacks) “回调函数”
    - [`globalThis`](https://zh.javascript.info/global-object)
    - [尾调用优化](https://wangdoc.com/es6/function.html#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96)
  - 绑定
    - [`call/apply`](https://zh.javascript.info/call-apply-decorators)
    - [`bind`](https://zh.javascript.info/bind#jie-jue-fang-an-2-bind)
  - 实用工具
    - [debounce](https://zh.javascript.info/call-apply-decorators#fang-dou-zhuang-shi-qi)
    - [throttle](https://zh.javascript.info/call-apply-decorators#jie-liu-zhuang-shi-qi)

### Class

- [class](https://zh.javascript.info/class)
  - `class Cls extends Base {}`, `new Cls()`
  - 基本结构
    - [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
    - [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#%E7%B1%BB%E5%A3%B0%E6%98%8E)
    - [类字段](https://zh.javascript.info/class#class-zi-duan)
    - [原型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#%E5%8E%9F%E5%9E%8B%E6%96%B9%E6%B3%95)
    - `this`
  - [getter/setter](https://zh.javascript.info/class#getterssetters)
  - 继承
    - [`extends`](https://zh.javascript.info/class-inheritance#extends-guan-jian-zi)
    - [`super`](https://zh.javascript.info/class-inheritance#zhong-xie-fang-fa)
  - [静态方法](https://zh.javascript.info/static-properties-methods) `static`
- 底层
  - [prototype](https://zh.javascript.info/function-prototype)
  - [`new.target`](https://zh.javascript.info/constructor-new#gou-zao-qi-mo-shi-ce-shi-newtarget)
  - [原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [不能多继承](https://zh.javascript.info/mixins)

### 部分其他内置对象

- [RegExp](https://zh.javascript.info/regexp-introduction)
- [JSON](https://zh.javascript.info/json)
  - [`.toJSON()`](https://zh.javascript.info/json#zi-ding-yi-tojson)
- [Date](https://zh.javascript.info/date)
- [Map Set](https://zh.javascript.info/map-set)
  - [WeakMap WeakSet](https://zh.javascript.info/weakmap-weakset)
- [Proxy Reflect](https://zh.javascript.info/proxy)

### 异步 事件循环

- [Promise](https://zh.javascript.info/promise-basics)
  - `new Promise((res, rej) => { res(value); }).then((v) => { log(v) })`
  - [Promise 化](https://zh.javascript.info/promisify)
- [Promise API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - `.then()`, `.catch()`, `.finally()`
  - `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, `Promise.race()`
  - `Promise.resolve()`, `Promise.reject()`
- [async/await](https://zh.javascript.info/async-await)
  - [顶层 await](https://wangdoc.com/es6/async.html#%E9%A1%B6%E5%B1%82-await)
- [Generator](https://zh.javascript.info/generators)
  - `function* fn() {}`, `yield`
  - `.next()`, `.value`, `.done`
- [`Symbol.asyncIterator`](https://zh.javascript.info/async-iterators-generators#yi-bu-ke-die-dai-dui-xiang)
- [事件循环](https://zh.javascript.info/event-loop)
  - （同步代码）
  - [微任务](https://zh.javascript.info/microtask-queue)
  - [宏任务](https://zh.javascript.info/event-loop#hong-ren-wu-he-wei-ren-wu)
    - [`setTimeout`, `setInterval`](https://zh.javascript.info/settimeout-setinterval)

### 模块化

- [模块化](https://zh.javascript.info/modules-intro)
  - `import`, `export`
  - [动态导入](https://zh.javascript.info/modules-dynamic-imports) `import()`

* [前端模块化](/frontend/javascript-modules)

## JavaScript 代码片段

### ES5 基本语法

```javascript
// 单行注释

/* 注释 */

/*
  多行注释
  多行注释
*/

// * ---------------- 变量

var a = '1';
var empty; // => undefiend 表示未赋值

// * ---------------- 字符串、运算、显式类型转换、方法调用

var str = 'hello' + ' ' + 'world!'; // => 'hello world!'
String(233); // => '233'
str.split(' '); // => ["hello", "world!"]

// * ---------------- 数字、运算优先级（括号）、特殊值、位运算

var num = 1 - ((3 + 1.5) * 4) / 2; // => 8
Number('2'); // => 2
(2).toFixed(3); // => "2.000"

var na = 'oh' / 'no'; // => NaN (not a number)
Infinity; // => 无穷大

((1 & 2) | 3) << 2; // => 12 (0b1100)

// * ---------------- 布尔值、逻辑运算、相等性、隐式类型转换

var bo = (true && false) || !'str'; // => false
Boolean(42); // => true

+0 <= -0; // => true
0 == '0'; // => true
0 === '0'; // => false
null === undefined; // => false

// * ---------------- 数组、字面量声明

var arr = [1, 'hello'];
var arr2 = new Array(3); // => [empty * 3]
arr.length; // => 2

var falsy = [0, [], '', false, null, undefined];

// * ---------------- 对象、嵌套对象、成员调用

var obj = {
  num: 1024,
  str: 'emmm',
  f: function (a, b) {
    console.log(a, b);
  },
  mix: { key: 'value', arr: [1, { k: 'v' }] },
};

var another = obj.num; // => 1024
obj.f(1, obj.str); // => 1 "emmm"

// * ---------------- 函数、参数、运行、返回值、上下文绑定

function run(a, b) {
  console.log('ahh', a, b); // => arr hello world
  return 'complete';
}
var result = run('hello', 'world'); // => 'complete'

run.call(obj, 'hello', 'world');
run.apply(obj, ['hello', 'world']);

var boundRun = run.bind(obj);
boundRun('hello', 'world');

// * ---------------- 逻辑流

if (true) console.log('inline');

if (false) {
  console.log('case 1');
} else if (2 > 3) {
  console.log('case 2');
} else {
  console.log('case 3');
}

// * switch
var score = 'A';
switch (score) {
  case 'A':
    console.log('Good');
    break;
  case 'B':
    console.log('Nice');
    break;
  default:
    console.log('Nope');
    break;
}

// * for
for (var i = 0; i < 3; i++) {
  console.log(i); // 打印 3 次
}

// * while
while (Math.random() < 0.7) {
  console.log('runned'); // 当条件为 true 时执行
}

// * ---------------- 类、this、prototype

function Legacy(arg) {
  this.value = arg;
}
Legacy.prototype = {
  log: function () {
    console.log('value is:', this.value);
  },
};

var inst = new Legacy(2); // => Legacy {value: 2}
inst.value; // => 2
inst.log(); // => value is: 2

// * ---------------- getter、setter

var obj2 = {
  get myValue() {
    return this._val;
  },
  set myValue(v) {
    this._val = 'hello ' + v;
  },
};

console.log(obj2.myValue); // => undefined
obj2.myValue = 'world';
console.log(obj2.myValue); // => hello world

// * ---------------- 基本包装类型、原型链、类型

'hello'.split(); // => ["hello"]
'hello'.split === String.prototype.split; // true
typeof 2; // => 'number'
typeof 'str'; // => 'string'
typeof [1, 2]; // => 'object'
```

### ES6+ 新增语法

```javascript
// * ---------------- 显式的块级作用域
{
  // console.log(num);
  // let 和 const 会有暂时性死区现象
  // 提升了声明，但是没有赋值，取值会报错
  // => ReferenceError: Cannot access 'num' before initialization

  // * ---------------- 声明
  let num = 2;
  const str = `hello ${num}`; // => 'hello 2' （模板字符串）

  let obj = {
    k: 1,
    num, // => 2 （对象属性简写，将自动使用上下文中的同名变量）

    fn1: function () {},
    fn2: () => {},
    fn3() {},
  };

  // * ---------------- 箭头函数、默认值
  const fn = (a, b = 666) => console.log(a, b);
  fn(233); // => 233 666

  // * ---------------- 类
  class MyClass extends Object {
    constructor(val) {
      super(val);
      this.val = val;
    }
    log() {
      console.log('really', this.val);
    }
  }

  const inst = new MyClass(666);
  inst.log(); // => really 666

  // * ---------------- 解构赋值（可嵌套）、剩余参数
  const [a, b, ...c] = [1, 2, 3, 4, 5]; // => a=1, b=2, c=[3, 4, 5]
  const { toString, valueOf } = Object;

  const arr = [...c]; // => [3, 4, 5] （新的数组）

  const fn2 = (a, ...rest) => console.log(rest);
  fn2(1, 2, 3); // => [2, 3]
}
```

### Beyond ES6

```js
// * ---------------- 空值合并 nullish coalescing
{
  const val = 0;
  const a = val || 1; // => 1
  const a = val ?? 1; // => 0
}
{
  const val = null;
  const a = val || 1; // => 1
  const a = val ?? 1; // => 1
}

// * ---------------- 可选链 optional chaining
{
  const a = null;
  const b = a?.key; // => null
}
{
  const a = { key: 1 };
  const b = a?.key; // => 1
}

// * ---------------- 赋值运算
{
  let a = true;
  let b = false;
  b &&= a; // => false
}
{
  let a = null;
  let b = 1;
  b ??= a; // => 1
}

// * ---------------- BigInt
{
  123456789012345678901234567890n;
  1n + 2n; // => 3n
}

// * ---------------- Generator
{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  let generator = generateSequence();

  generator.next(); // => { value: 1, done: false };
  generator.next(); // => { value: 2, done: false };
  generator.next(); // => { value: 3, done: true };
  generator.next(); // => { value: undefined, done: true };
}
```
