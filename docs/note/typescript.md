# TypeScript 学习指南

## TypeScript 简介

### 什么是 TypeScript

一个 JavaScript 超集，包含类型系统，以及其他一些功能。

随着 Promise、Generators 等 API 进入 JS 标准，  
TS 和 JS 在这些 API 方面的差别在变小，  
但 TS 还有一些独有特性，这些特性才是和 JS 的主要区别：

- 类型系统、type-checking
- 类型（自动）推导、auto-completion

### 为什么要用 TypeScript

- 提升代码健壮性
- 面向接口编程（代码自解释，并行开发）
- 静态检查可以提高开发效率
- 减少开发时（人工推导带来的）认知负荷

## 学习 TypeScript

### 概览

- 耗时：从入门到熟悉需要大约 15~40 小时（个人估计）
- 难点：理解 JS 之外的特性，运用，高级用法
- 工具：
  - [TypeScript](https://www.npmjs.com/package/typescript)
  - [ts-node](https://github.com/TypeStrong/ts-node)
  - [VSCode](https://formulae.brew.sh/cask/visual-studio-code)
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)
  - `webpack/parcel/cli`

### 学习路线

- 理解编程理念
  - 静态类型
  - Object Oriented Programming
- 学习 TypeScript
  - （学习 JavaScript）
  - 学习和使用 TypeScript 常用概念
  - 尝试将以前写的 JS 代码转换成 TS 版本
  - 了解 @types （DefinitelyTyped）
- 实践
  - 写业务时全面使用 TS （包括业务代码和 npm 包）
  - package 开发打包和声明文件
- 进阶
  - 阅读一些用库的 TS 相关源码（比如 [redux](https://github.com/reduxjs/redux/blob/master/src/createStore.ts)）
  - TS 的高级用法（比如 `type MyChoice = keyof typeof MyObject`）
- 迷思
  - 如何将 Object.keys 转换成 enum
  - 如何把数组转换成字面量类型

### TypeScript 主要概念

- 基本概念
  - type 类型
  - interface 接口
  - class
    - private/public
    - static
    - implements
- 其他常用概念
  - Enums 枚举
  - Literal Types 字面量类型
  - Generics 泛型
  - Intersection/Union 类型组合
  - Overloads 重载
  - Decorators 装饰器
- 修饰/操作符
  - ? 可选
  - as 断言
  - in
  - keyof
  - typeof
  - instanceof
  - readonly
- 开发相关
  - [.d.ts 声明文件](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html)
  - [DefinitelyTyped](http://definitelytyped.org/)
  - [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

## 资料

### 自学教材

- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
- [基础类型 - TypeScript 中文网](https://www.tslang.cn/docs/handbook/basic-types.html)
- [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)
- [TypeScript Basics 1 - Course plan and prerequisites](https://www.youtube.com/watch?v=YPShu0H3RbM&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU&index=1)
- [Babel - Try it out](https://babeljs.io/repl#?presets=typescript)

### 概念

- [编译工具 - 2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh#section-compiler)
- [编程语言的类型系统为何如此重要？](https://www.zhihu.com/question/23434097)
- [弱类型、强类型、动态类型、静态类型语言的区别是什么？](https://www.zhihu.com/question/19918532)

### 进阶

- [Fun Times with Advanced TypeScript](https://www.youtube.com/watch?v=TtDP6lpSjWc)
- [如何看懂 typescript 核心源码，并可以参照 typescript 写一个类似的项目？](https://www.zhihu.com/question/318505680)
- [Deno: A secure runtime for JavaScript and TypeScript.](https://github.com/denoland/deno)

* [How to bundle a npm package with TypeScript and Rollup](https://medium.com/@paleo.said/how-to-bundle-an-npm-package-with-typescript-and-rollup-f80e0f196189)
* [Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)

## TypeScript 典型代码

Check [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)

```typescript
let isDone: boolean = false;
let lines: number = 42;
let lastName: string = 'Anders';

type MyList = number[];

let list: MyList = [1, 2, 3];

let square = (n: number): number => n * n;

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

interface Pair<T> {
  item1: T;
  item2: T;
}

interface CarInterface {
  model: string;
  radio?;
  getYear(): any;
}

class Car implements CarInterface {
  constructor(readonly model, private engine, public radio?) {}

  static Manufacturer: string = 'BMW';
  getYear() {}
}
```

## TypeScript 相关

### TypeScript 和 Flow

[Flow](https://flow.org/) 是另一个 JS + type 超集，来自 Facebook。  
TypeScript 来自微软，在特性上更丰富。

现在 TypeScript 领先 Flow，  
几乎成为了新的 JS 开发标准了（尤其是大型工程）。

### TypeScript 是如何工作/运行的

不严谨但简单的理解：

- 发布和执行前编译，完全退化成合法 JS
  - 类型系统全部丢弃
  - 无法丢弃的特性会被转义（比如 enum => Object）

可以尝试 [Babel 在线编译](https://babeljs.io/repl#?presets=typescript) 来理解

### TypeScript 是如何基于 JavaScript 被开发出来的

这个问题对于使用和入门时没必要搞懂…且需要扎实的 CS 基础作为铺垫。

[如何看懂 typescript 核心源码，并可以参照 typescript 写一个类似的项目？](https://www.zhihu.com/question/318505680)
