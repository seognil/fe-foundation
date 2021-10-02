---
title: 前端模块化
date: 2019-11-10 18:35:00
permalink: /frontend/javascript-modules
categories:
  - 前端开发
  - JavaScript
tags:
  - 编程语言
  - 模块化
---

# 前端模块化

## 关于模块化设计

### 什么是模块化设计

> 模块化设计（Modular design），是一种将系统分解为更小的“模块”的生产方式。  
> 这一思想广泛运用于机械制造、电子和软件工业中。

#### 代码的模块化

常见的生产级编程语言都支持模块化,  
如 C++、Java、Python、PHP、JS 中都有 `import` 或 `include` 保留字。  
通常以单个文件作为模块的最小单元。

代码的模块化设计一般可抽象为三个部分：

- 输入（import）
- 计算（业务代码）
- 输出（export）

### 为什么要用模块化

- 把复杂问题分解成多个子问题
  - 关注点分离
- 大型软件开发的技术基础
  - 可扩展
  - 可替换
  - 代码重用
- 使多人并行开发成为可能
  - 面向接口开发（而不是面向实现开发）

## 学习 使用模块化

上文中提到，模块化是大型软件开发的基础，  
那么模块化的运用是必须掌握的。

### 概览

- 耗时：从入门到熟悉大约需要 1~4 小时（个人经验）
- 难度：低-中
- 难点：记住 ES6 的不同语法，CommonJS 调用原理
- 准备：本地，npm，webpack/rollup

### 学习路线

- 基础
  - 理解和尝试后文中所有的模块化方案
  - 熟悉 ES6 模块化的所有用法
- 进阶
  - 懒加载和 Dynamic Imports
  - 理解 Node.js 中的模块化机制
  - 理解 Webpack 中的模块化机制

## 参考资料

- 视频
  - [JavaScript Modules in 100 Seconds](https://www.youtube.com/watch?v=qgRUr-YUk1Q)  
    100 秒：ESM 和 CJS 简介
  - [How javascript modules work - from past to present](https://www.youtube.com/watch?v=JDDn57_z5Og)  
    10 分钟：JS 模块化历史，script 标签 -> AMD -> CJS -> ESM
  - [Modules, import and export / Intro to JavaScript ES6 programming, lesson 13](https://www.youtube.com/watch?v=SmBb2SSZqFU)  
    5 分钟：模块化的起源和本质，ESM 语法简介
  - [How Require and Exports work in NodeJS](https://www.youtube.com/watch?v=LCs1Sn9D6bA)  
    9 分钟：Node.js 模块化原理分析
- 文档
  - [import - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)：ES Module 文档
- 文章
  - [‪Module Cheatsheet](https://www.samanthaming.com/tidbits/79-module-cheatsheet)：ESM 语法速查表
  - [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)
  - [JavaScript 模块化七日谈](https://huangxuan.me/2015/07/09/js-module-7day/)
  - [深入理解 ES6 模块机制](https://zhuanlan.zhihu.com/p/33843378)
- 工具
  - [Browserify and the Universal Module Definition](https://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html)：UMD
  - [常见问题 - Rollup.js 中文网](https://www.rollupjs.com/guide/faqs/)
  - Webpack
    - [webpack 源码学习系列之一：如何实现一个简单的 webpack](https://github.com/youngwind/blog/issues/99)
    - [[webpack]源码解读：命令行输入 webpack 的时候都发生了什么？](https://github.com/DDFE/DDFE-blog/issues/12)
    - [输出文件分析 - 深入浅出 Webpack](https://webpack.wuhaolin.cn/5%E5%8E%9F%E7%90%86/5-2%E8%BE%93%E5%87%BA%E6%96%87%E4%BB%B6%E5%88%86%E6%9E%90.html)

## JS 中的模块化方案

JS 的模块化经历了各种历史时期，在不同时期产生了不同的模块化方案。  
到目前为止，对于编写**源码**来说，主流的方案只剩下两种。

- esm: 从 ES6 起官方规范自带的方案
- cjs: Node.js 使用的方案

但是为了支持不同的目标运行环境，需要编译成不同的**输出**格式（方案），  
了解不同的模块化方案是很有必要的。

流行打包工具 [Rollup.js](https://rollupjs.org/guide/en/#outputformat) 和 [Webpack](https://webpack.js.org/configuration/output/#outputlibrarytarget) 都支持导出格式功能。

以 Rollup 文档为例子，一共有以下几种：

- **cjs**: CommonJS, 支援 Node.js
- **esm**: 作为 ES module 文件，现代浏览器中用 `<script type=module>` 标签可直接支持
- **iife**: 立即执行函数，可直接使用 `<script>` 标签。  
  （如果你想打包你的前端应用，也可以用这种方式）
- **umd**: Universal Module Definition，通用模块定义，  
  直接封装 amd、cjs、iife 三种方式并根据环境自动切换
- **amd**: Asynchronous Module Definition，异步模块定义，以 [RequireJS](https://requirejs.org/) 为代表
- **system**: [SystemJS](https://github.com/systemjs/systemjs) 的方式

### 代码分发

上文提到，模块化的好处之一是具有可重用性，  
那么重用就会涉及到代码分发。

自己写的业务代码的本地源码中，模块关系很容易理解，  
但是注意也有其他的调用方式，比如 npm 和 CDN 分发。

相关的有一些工具和平台：

- [npm](https://www.npmjs.com/)
- [jsDelivr](https://www.jsdelivr.com/)
- [UNPKG](https://unpkg.com/)
- [BootCDN](https://www.bootcdn.cn/)

## Learn By Doing

可以直接使用 [Rollup](https://github.com/rollup/rollup) 来理解不同模块化方案在用法上的异同

```javascript
// ES6 源码
import { every } from 'lodash';

const result = every([true, 1, null, 'yes'], Boolean);

export default result;
```

### ESM (ES Module)

`rollup --format=esm --file=output.js -- index.js`

输出：

```javascript
import { every } from 'lodash';

const result = every([true, 1, null, 'yes'], Boolean);

export default result;
```

在模块化的语法上和源码没有区别（因为源码就是 ES6）

完整的语法规则可以查看 MDN 文档：

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
// 等 ...

export let name1, name2, …, nameN; // also var, const
export { name1, name2, …, nameN };
export default function (…) { … } // also class, function*
export { name1, name2, …, nameN } from …;
// 等 ...
```

### CJS (CommonJS)

`rollup --format=cjs --file=output.js -- index.js`

输出：

```javascript
'use strict';

var lodash = require('lodash');

const result = lodash.every(
  [true, 1, null, 'yes'],
  Boolean,
);

module.exports = result;
```

相比 esm 主要差别在语法上：

- esm
  - `import a from 'b'`
  - `export default c`
- cjs
  - `const a = require('b')`
  - `module.exports = c`

在写 Node 应用时是常用的方案，  
很多优秀工具的源码中也很常见。

需要理解的是 `module.exports` 的机制：

`module` 和 `exports` 是 cjs 模块加载器设计的两个变量  
`exports` 是 `module.exports` 的简写形式

初始状态下：

```javascript
exports === module.exports;
module.exports === {};
```

最终读取的是 `module.exports`  
所以需要注意进行正确地输出。  
（值传递 vs 引用传递之类的问题）

Node.js 文档：

- [require(id)](https://nodejs.org/docs/latest/api/modules.html#modules_require_id)
- [exports](https://nodejs.org/docs/latest/api/modules.html#modules_exports)
- [module.exports](https://nodejs.org/docs/latest/api/modules.html#modules_module_exports)

### IIFE

`rollup --format=iife --name='result' --file=output.js -- index.js`

输出：

```javascript
var result = (function (lodash) {
  'use strict';

  const result = lodash.every(
    [true, 1, null, 'yes'],
    Boolean,
  );

  return result;
})(lodash);
```

IIFE 就是 Immediately Invoked Function Expression，立即执行函数表达式，是一个常见的代码技巧。

IIFE 原本的作用是将计算过程闭包化，防止变量污染。

对于导出包来说，依赖视为已经准备好，直接从 window/global 取值并传入。  
以及，根据同样的方式输出，  
所以还需要指定一个变量名用于输出。  
一般用于直接从 HTML 的 script 标签加载，以便无需打包也可以运行。

IIFE 的典型写法：

```javascript
const result = (
  (形参, ...) => {
    // ...
    return result
  }
)(实参, ...);
```

### UMD

`rollup --format=umd --name='result' --file=output.js -- index.js`

输出：

```javascript
(function (global, factory) {
  typeof exports === 'object' &&
  typeof module !== 'undefined'
    ? (module.exports = factory(require('lodash')))
    : typeof define === 'function' && define.amd
    ? define(['lodash'], factory)
    : ((global = global || self),
      (global.result = factory(global.lodash)));
})(this, function (lodash) {
  'use strict';

  const result = lodash.every(
    [true, 1, null, 'yes'],
    Boolean,
  );

  return result;
});
```

由于 esm、cjs、iife 具有不同的用途，以及都有一定的使用量，  
那么对于通用代码功能来说，最好能够一次编译到处使用。  
这是 UMD 的初衷。

UMD 支持 IIFE，所以也需要指定输出名。

典型的 UMD 分为两个部分：

- 模块化封装：检索当前存在的变量，判断并自动采用多种模块化方案的其中一种
  - 用 `typeof` 做判断
  - 三元 或 `if else` 做切换
  - 这个部分一般位于文件的头部或尾部
- 业务封装：将剩余的业务逻辑代码以类似 IIFE 的方式封装调用

不同生成工具生成的 UMD 封装在实现上可能有差异，但效果都是相似的。

参考：

- [returnExports - UMD](https://github.com/umdjs/umd/blob/master/templates/returnExports.js)
- [jquery@3.4.1/dist/jquery.js](https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.js)
- [lodash@4.17.15/lodash.js](https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.js)
- [redux@4.0.4/dist/redux.js](https://cdn.jsdelivr.net/npm/redux@4.0.4/dist/redux.js)
- [vuex@3.1.1/dist/vuex.js](https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.js)

### AMD

`rollup --format=amd --file=output.js -- index.js`

输出：

```javascript
define(['lodash'], function (lodash) {
  'use strict';

  const result = lodash.every(
    [true, 1, null, 'yes'],
    Boolean,
  );

  return result;
});
```

AMD 是一个早期的方案，现已式微  
（或在老项目中可见）  
（因为有了上文中其他更好的方案）

AMD 的好处是支持异步加载，  
但是 CommonJS 也支持异步加载，  
ES6 的 [Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) 目前（2019 年）也在草案中（Webpack 已经通过插件支持）  
那么 AMD 已经基本没有使用的理由了。

AMD 的典型实现是 RequireJS  
原理和语法上类似 iife + cjs 的混合

- cjs
  - `const a = require('b')`
  - `module.exports = c`
- amd
  - `const a = require('b')`
  - `define( ... () => { return c })`

有两种主要写法，参考文档：[Define a Module - RequireJS](https://requirejs.org/docs/api.html#define)

```javascript
// * -------- case 1
define(['./a', './b'], function (exportOfA, exportOfB) {
  // ...

  return c;
});

// * -------- case 2
define(function (require) {
  const exportOfA = require('./a');
  const exportOfB = require('./b');

  // ...

  return c;
});
```

### system

`rollup --format=system --file=output.js -- index.js`

输出：

```javascript
System.register(['lodash'], function (exports) {
  'use strict';
  var every;
  return {
    setters: [
      function (module) {
        every = module.every;
      },
    ],
    execute: function () {
      const result = every([true, 1, null, 'yes'], Boolean);
      exports('default', result);
    },
  };
});
```

[SystemJS](https://github.com/systemjs/systemjs) 也是一个早期的方案

说实话我没有用过…  
在能选择其他方案时，好像也没有使用的意义。  
（npm 下载量还没有 RequireJS 多…）  
仅作为参考吧…
