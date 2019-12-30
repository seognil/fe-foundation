# JavaScript 进阶指南（先行版）

> 查看 [JavaScript 学习指南](./js-foundation.md) 完整系列

## 学习 JavaScript 进阶知识

### 概览

- 耗时：
  - 深入 JS 语言特性和编程技巧，耗时大约 60~120 小时
- 难点：略
- 工具：略

### 学习路线

- 前置学习
  - [JavaScript 入门指南](./js-basic.md)
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

- 视频
  - [The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg)
  - [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)
  - [JavaScript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)
- 书籍
  - [你不知道的 JavaScript](https://book.douban.com/series/40642)：小黄书，中卷 全部
  - [JavaScript 忍者秘籍](https://book.douban.com/subject/26638316/)：忍者书，全部
  - [JavaScript 语言精粹](https://book.douban.com/subject/3590768/)：蝴蝶书，全部

### 刷题教材

同样的道理，可能会有很多重复的题，选择性跳过，建立自己的知识体系  
注意到纯 JS 和 DOM 编程的题可能会混在一起，可以考虑分开刷

（按字典排序）

- [JavaScript - FE-Interview-Questions](https://github.com/poetries/FE-Interview-Questions/blob/master/JavaScript.md)
- [JavaScript - 前端硬核面试专题](https://github.com/biaochenxuying/blog/blob/master/interview/fe-interview.md#4-javascript)：第四章（JS）、第五章（ES6+）
- [JavaScript 基础 - 前端面试与进阶指南](https://github.com/Advanced-Interview-Question/front-end-interview/blob/dev/docs/guide/jsBasic.md)
- [JavaScript 开发者应懂的 33 个概念](https://github.com/stephentian/33-js-concepts)：（可以先排除设计模式、算法的部分）
- [JavaScript 进阶问题列表](https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md)
- [javaScript 问题 - FEGuide 前端指南](https://github.com/FEGuideTeam/FEGuide/tree/master/javascript%E9%97%AE%E9%A2%98)
- [JS - 前端进阶之道](https://github.com/InterviewMap/CS-Interview-Knowledge-Map/blob/master/JS/JS-ch.md)
- [JS 进阶 - 前端每日一问](https://github.com/sanyuan0704/frontend_daily_question#js-%E8%BF%9B%E9%98%B6)：JS 的部分
- [搞搞 js - PersonalBlog Nealyang 全栈前端](https://github.com/Nealyang/PersonalBlog#%E6%90%9E%E6%90%9Ejs)：JS 部分（语言本身相关的那些）

## JavaScript 进阶知识体系

### JavaScript 进阶概念

- 语言特性
  - 变量
    - 基本类型、引用类型、按值传递
    - 类型转换、隐式类型转换（toString/valueOf）
    - 变量提升
  - 函数
    - length、name、prototype
    - this、arguments
    - 立即执行函数表达式、高阶函数
    - 闭包、作用域、eval、内存泄露
    - ES6：箭头函数、剩余参数、默认参数
  - 对象
    - prototype、constructor
    - 原型链
  - ES6 API
    - Promise、Generator、async
    - Proxy
    - `Map`、`Set`
    - `Proxy`
    - ArrayLike（如 `BigUint64Array` 等）
  - 正则表达式
  - 前端模块化
- 执行
  - 短路计算
  - IEEE754 问题
  - EventLoop
  - 垃圾回收
- 手写系列
  - 函数 debounce/throttle
  - 集合 unique/union
  - 对象 组合寄生继承
  - 数组 map/filter/reducer 的 Polyfill
  - deepClone、deepFlatten
  - Promise
  - 模拟实现 new/bind/call/apply/instanceof
