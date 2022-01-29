---
title: JavaScript 进阶指南 *
date: 2019-12-30 11:39:54
permalink: /frontend/javascript-advanced
categories:
  - 前端开发
  - JavaScript
tags:
  - JavaScript
---

# JavaScript 进阶指南 \*

\* 撰写中

## 学习 JavaScript 进阶知识

### 概览

- 耗时：
  - 深入 JS 语言特性和编程技巧，耗时大约 60~120 小时
- 难点：略
- 工具：略

### 学习路线

- 前置学习
  - [JavaScript 语言基础（2021）](/cs/javascript-language-basic)
- 学习 JavaScript 高级特性
  - 看书、看视频 ↓，掌握下文中的提到的 JS 进阶知识体系
- 实战
  - 刷题 ↓
- 迷思
  - 什么是元编程
  - 什么是反射
  - 什么是运算符重载，JS 里能不能实现

## 资料

### 自学教材

- 书籍
  - [你不知道的 JavaScript](https://book.douban.com/series/40642)：小黄书，中卷 全部
  - [JavaScript 忍者秘籍](https://book.douban.com/subject/26638316/)：忍者书，全部
  - [JavaScript 语言精粹](https://book.douban.com/subject/3590768/)：蝴蝶书，全部
- 视频
  - [The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg)  
    14 分钟：JS 基本技巧和特性细节
  - [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)  
    12 分钟：JS 编码修养
  - [The Future of JavaScript - New Features and Disruptive Trends in 2020](https://www.youtube.com/watch?v=f0DrPLKf6Ro)  
    10 分钟：ES2020 新特性介绍
  - [JavaScript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)
- 扩展阅读
  - [i=1 为什么(++i)+(++i)=6?](https://www.zhihu.com/question/347864795)

### 刷题教材

同样的道理，可能会有很多重复的题，选择性跳过，建立自己的知识体系  
注意到纯 JS 和 DOM 编程的题可能会混在一起，可以考虑分开刷

- 代码片段
  - [JavaScript - 30 seconds of code](https://www.30secondsofcode.org/js/p/1)
- 在线刷题
  - [codewars](https://www.codewars.com/?language=javascript)
- 别人整理的题目（按字典排序）
  - [JavaScript - FE-Interview-Questions](https://github.com/poetries/FE-Interview-Questions/blob/master/JavaScript.md)
  - [JavaScript - 前端硬核面试专题](https://github.com/biaochenxuying/blog/blob/master/interview/fe-interview.md#4-javascript)：第四章（JS）、第五章（ES6+）
  - [JavaScript 开发者应懂的 33 个概念](https://github.com/stephentian/33-js-concepts)：（可以先排除设计模式、算法的部分）
  - [JavaScript 进阶问题列表](https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md)
  - [javaScript 问题 - FEGuide 前端指南](https://github.com/FEGuideTeam/FEGuide/tree/master/javascript%E9%97%AE%E9%A2%98)
  - [JS - 前端进阶之道](https://github.com/InterviewMap/CS-Interview-Knowledge-Map/blob/master/JS/JS-ch.md)
  - [JS 相关问题 - 前端工作面试问题](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/translations/chinese/README.md#js-%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)
  - [JS 进阶 - 前端每日一问](https://github.com/sanyuan0704/frontend_daily_question#js-%E8%BF%9B%E9%98%B6)：JS 的部分
  - [搞搞 js - PersonalBlog Nealyang 全栈前端](https://github.com/Nealyang/PersonalBlog#%E6%90%9E%E6%90%9Ejs)：JS 部分（语言本身相关的那些）
  - [深入系列目录 - 冴羽的博客](https://github.com/mqyqingfeng/Blog#%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97%E7%9B%AE%E5%BD%95)

## JavaScript 进阶知识体系

### JavaScript 进阶概念

- 语言特性
  - 变量
    - 基本类型 vs 引用类型、按值传递
    - 类型转换、隐式类型转换（`toString`/`valueOf`）
    - 变量提升
  - 函数
    - `length`、`name`、`prototype`
    - `this`、`arguments`
    - 立即执行函数表达式（IIFE）、高阶函数
    - 闭包、作用域、`eval`、内存泄露
    - ES6：箭头函数、剩余参数、默认参数
  - 数组
    - Array-Like（如 `arguments` 等）
  - 对象
    - `prototype`、`constructor`
    - 原型链
  - ES6 对象
    - `Promise`、`Generator`、`async`
    - `Map`、`Set`
    - `Proxy`
    - Array-Like（如 `BigUint64Array` 等）
  - 正则表达式
  - 前端模块化
- 执行原理
  - 短路计算
  - IEEE754 问题
  - EventLoop
  - 垃圾回收
- 前瞻（2020）
  - ES 新特性（含草案）
    - 动态引入：`await import('lib')`
    - 可选链：`user?.shooping?.list`
    - Nullish Coalescing：`const animeTime = duration ?? 400`
    - BigInt
  - Node
    - Worker Threads
    - ES module support

### JavaScript 编码素养

- 语言精粹/毒瘤
  - 多用
    - 分号、花括号
    - ES6 新特性（解构、模板字符串）
    - 静态检查器（[ESLint](https://eslint.org/)）、自动格式化（[Prettier](https://prettier.io/)）
  - 少用
    - 显式全局变量、未定义变量、隐式 Falsy、`==`
    - `with`、`eval`、`label`、`switch`、`void`
    - `++`、`--`
- 提高编码技巧
  - `console` API
  - 对象处理、数组处理
  - `async`
- 手写系列
  - 对象：组合寄生继承
  - 数组：`map`/`filter`/`reducer` 的 Polyfill
  - 模拟实现 `new`/`bind`/`call`/`apply`/`instanceof`
  - `Promise`
  - `deepClone`、`deepFlatten`
  - 函数：`debounce`/`throttle`
  - 集合：`unique`/`union`
  - 事件：EventEmitter/EventBus
