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
- 难点：
  - 学习 JS 中没有的 TS 特性
  - 在业务中综合运用
  - TS 的高级用法
- 工具：
  - [TypeScript](https://www.npmjs.com/package/typescript)
  - [ts-node](https://github.com/TypeStrong/ts-node)
  - [VSCode](./vscode.md)

### 学习路线

- 前置学习
  - [JavaScript 学习指南](./js-foundation.md)
  - 理解编程理念
    - 静态类型
    - Object Oriented Programming
    - Functional Programming
- 学习 TypeScript
  - （学习 JavaScript）
  - 学习和使用 TypeScript 常用特性
  - 尝试将以前写的 JS 代码转换成 TS 版本
  - 了解 @types （[DefinitelyTyped](http://definitelytyped.org/)）
- 实践
  - 写业务时全面使用 TS （包括业务代码和 npm 包）
  - package 开发打包和声明文件
- 进阶
  - 阅读一些用库的 TS 相关源码（比如 [redux](https://github.com/reduxjs/redux/blob/master/src/createStore.ts)）
  - TS 的高级用法（比如 `type MyChoice = keyof typeof MyObject`）
- 迷思
  - 如何将 Object.keys 转换成 enum
  - 如何把数组转换成字面量类型

## 资料

### 概览

- [TypeScript 解决了什么痛点？](https://www.zhihu.com/question/308844713)
- [编程语言的类型系统为何如此重要？](https://www.zhihu.com/question/23434097)
- [弱类型、强类型、动态类型、静态类型语言的区别是什么？](https://www.zhihu.com/question/19918532)
- [随着 TypeScript 继续普及，会不会出现直接跑 TypeScript 的运行时？](https://www.zhihu.com/question/363807522/answer/961295958)
- [The TypeScript Tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)
- [编译工具 - 2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh#section-compiler)

### 自学教材

- 教程
  - [TypeScript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM)
  - [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)
  - [TypeScript 入门教程](https://ts.xcatliu.com/)
- Repo
  - [typescript-fundamentals](https://github.com/mike-works/typescript-fundamentals)
- 文档
  - [Documentation - TypeScript](https://www.typescriptlang.org/docs/home.html)
  - [基础类型 - TypeScript 中文网](https://www.tslang.cn/docs/handbook/basic-types.html)
- 工具
  - [Babel - Try it out](https://babeljs.io/repl#?presets=typescript)

### 实践

- [用 TypeScript 写 React & Redux - 完全指南](https://github.com/seognil-contributor/react-redux-typescript-guide/tree/zh-pre)
- [TIPs - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/stringBasedEmuns.html)
- [TypeScript 中的 never 类型具体有什么用？](https://www.zhihu.com/question/354601204/answer/888551021)

### 进阶

- TS 高级
  - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
  - [Fun Times with Advanced TypeScript](https://www.youtube.com/watch?v=TtDP6lpSjWc)
  - [如何看懂 typescript 核心源码，并可以参照 typescript 写一个类似的项目？](https://www.zhihu.com/question/318505680)
- 工程
  - [Deno: A secure runtime for JavaScript and TypeScript.](https://github.com/denoland/deno)
  - [How to bundle a npm package with TypeScript and Rollup](https://medium.com/@paleo.said/how-to-bundle-an-npm-package-with-typescript-and-rollup-f80e0f196189)
  - [Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)

### 工具

- 工具
  - [types-checker](https://www.npmjs.com/package/types-checker)：自动安装 @types
- 打包插件
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)

## TypeScript 知识体系

### TypeScript 主要概念

- TS 类型检查模式
  - 鸭式辩型匹配

* 基本
  - `type` 类型别名、`interface` 接口、`extends`
    - interface 合并（重复名字的）
  - JS 基本类型 `number`、 `string` 等，类型自动推断
  - `Array`、Tupple （严格的、退化的数组）
  - `any` 任意类型、`never` 永不、`void` 空值（undefined、null）
  - `|` Intersection、`&` Union，类型组合操作
  - Functions
    - 函数的多种定义方式
    - `this`：声明 this 的类型
    - Overloads 重载
  - `class`
    - `extends`、`implements`、`abstract`
    - `public`/`private`/`protected`，简写法（constructor 参数）
    - `static`
* 其他常用概念
  - `Enums` 枚举
  - `Literal Types` 字面量类型
  - `Generics` 泛型
  - `Decorators` 装饰器
* 修饰符/操作符
  - `!` 显式（强制）断言
  - `?` 可选断言（可能为 undefined）
  - `-?`
  - `as` 断言
  - `in`
  - `infer`
  - `instanceof`
  - `is`
  - `keyof`
  - `readonly`
  - `typeof`
* [Utility Types 工具类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)
  - `Partial<T>`
  - `Readonly<T>`
  - `Record<K,T>`
  - `Pick<T,K>`
  - `Omit<T,K>`
  - `Exclude<T,U>`
  - `Extract<T,U>`
  - `NonNullable<T>`
  - `Parameters<T>`
  - `ConstructorParameters<T>`
  - `ReturnType<T>`
  - `InstanceType<T>`
  - `Required<T>`
  - `ThisParameterType`
  - `OmitThisParameter`
  - `ThisType<T>`
* 开发相关
  - [.d.ts 声明文件](https://www.tslang.cn/docs/handbook/declaration-files/publishing.html)
  - [DefinitelyTyped](http://definitelytyped.org/)
  - [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

## TypeScript 典型代码

Check [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)

```typescript
// ts-node

// * -------------------------------- 基本

// * ---------------- 基本类型

let isDone: boolean = false;
let lines: number = 42;
let lastName: string = 'Anders';

type MyList = number[];

let list: MyList = [1, 2, 3];

// * ---------------- 函数

let square = (n: number): number => n * n;
let square2: (n: number) => number = (n) => n * n;

type Sq = (n: number) => number;
let square3: Sq = (n) => n * n;

interface Sq4 {
  (n: number): number;
}
let square4: Sq4 = (n) => n * n;

// * ---------------- 枚举

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

// * ---------------- interface 和 class

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

// * ---------------- 泛型

class Observable<T> {
  constructor(public value: T) {}
}

let myOb: Observable<number> = new Observable(2);

// * -------------------------------- 实用技巧

// * ---------------- 对象的额外字段

interface MyDict {
  type: string;
  [name: string]: number | string;
}

const dict: MyDict = {
  type: 'a dict',
  num: 233,
  word: 'hello',
};

// * ---------------- 嵌套的声明

type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> {}
const nestArr: NumVal = [1, 2, 3, [1, 2, [3]]];
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

[TypeScript 编译原理 - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/compiler/overview.html)

### TypeScript 是如何基于 JavaScript 被开发出来的

这个问题需要扎实的 CS 基础作为铺垫…

[如何看懂 typescript 核心源码，并可以参照 typescript 写一个类似的项目？](https://www.zhihu.com/question/318505680)
