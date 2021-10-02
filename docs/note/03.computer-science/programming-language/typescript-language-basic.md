---
title: TypeScript 入门指南
date: 2019-11-22 19:00:44
permalink: /cs/typescript-language-basic
categories:
  - 计算机科学
  - 编程语言
tags:
  - 编程语言
  - TypeScript
  - 基础
---

# TypeScript 入门指南

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

- 耗时：从入门到熟悉需要大约 20~40 小时（个人估计）
- 难点：
  - 理解 JS 中没有的 TS 特性
  - 训练 TS 的高级用法（泛型、交集、条件等）
    <!-- - 官方文档不够用，需要花时间求助于社区实践 -->
- 工具：
  - [TypeScript](https://www.npmjs.com/package/typescript)
  - [ts-node](https://github.com/TypeStrong/ts-node)
  - [VS Code](/workspace/vscode)

### 学习路线

- 前置学习
  - [JavaScript 学习指南](/frontend/javascript-foundation)
  - 理解编程理念
    - 静态类型
    - Object Oriented Programming
    - Functional Programming
- 学习 TypeScript
  - （学习 JavaScript）
  - 学习和使用 TypeScript 常用特性
    - 学习泛型和类型推导——TS 最难的部分之一
  - 尝试将以前写的 JS 代码转换成 TS 版本
  - 了解 @types （[DefinitelyTyped](http://definitelytyped.org/)）
- 实战
  - 写业务时逐步使用 TS （包括业务代码和 npm 包）
  - package 开发打包和声明文件
- 进阶
  - 学习 TS 的高级用法
  - 阅读一些用库的 TS 相关源码（比如 [redux](https://github.com/reduxjs/redux/blob/master/src/createStore.ts)）
- 迷思
  - 如何将 Object.keys 转换成 enum
  - 如何把数组转换成字面量类型
  - 如何给复杂的处理函数写类型
  - 如何写一个类型表示排除 undefined 的 any

## 资料

### 概览

- 编程漫谈
  - [编程语言的类型系统为何如此重要？](https://www.zhihu.com/question/23434097)
  - [弱类型、强类型、动态类型、静态类型语言的区别是什么？](https://www.zhihu.com/question/19918532)
- 生态
  - [编译工具 - 2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh#section-compiler)
- TS
  - [TypeScript 体系调研报告](https://zhuanlan.zhihu.com/p/29564751)
  - [TypeScript 解决了什么痛点？](https://www.zhihu.com/question/308844713)
  - [浅谈 TypeScript 类型系统](https://zhuanlan.zhihu.com/p/64446259)
  - [随着 TypeScript 继续普及，会不会出现直接跑 TypeScript 的运行时？](https://www.zhihu.com/question/363807522/answer/961295958)
  - [The TypeScript Tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

### 自学教材

- 快速入门
  - [TypeScript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM)：12 分钟，历史背景、基本使用、语法简介
  - [VS Code - IntelliSense](https://www.youtube.com/watch?v=lSPHucggmLo)：前 3 分钟，TS 在 VS Code 的自动完成中起到的作用
  - [Working with TypeScript in Visual Studio Code](https://www.youtube.com/watch?v=6x8Xhhe37WE)：10 分钟，在 VS Code 中的使用 TS
  - [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)：语法速查表
- 社区文档
  - [TypeScript for Beginner Programmers](https://ts.chibicode.com/)：几篇入门文章（排版不错：）
    - [TypeScript Generics for People Who Gave Up on Understanding Generics](https://ts.chibicode.com/generics/)：泛型入门
  - [TypeScript 入门教程](https://ts.xcatliu.com/)：比较丰富的入门文档（进阶章节是指高级特性）
  - [狡猾的 TypeScript: 易错点梳理](https://zhuanlan.zhihu.com/p/101182925)：几道基本概念题
- 官方文档（及汉化）
  - [Documentation - TypeScript](https://www.typescriptlang.org/docs/home.html)：官方文档（最新）
    - [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)：一些最佳实践贴士
  - [TypeScript-Handbook](https://github.com/zhongsp/TypeScript)：社区汉化版（尽量保持官方同步）
- 在线调试（TS 检查、编译到 JS）
  - [TypeScript Playground](https://www.typescriptlang.org/play/index.html)：官方的
  - [Babel - Try it out](https://babeljs.io/repl#?presets=typescript)：Babel 的

### 进阶/实战

- TS 语言
  - 视频
    - [Fun Times with Advanced TypeScript](https://www.youtube.com/watch?v=TtDP6lpSjWc)：25 分钟，包含很多 TS 进阶用法（2018 年）
  - 深入理解 TypeScript
    - [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)：英文版
    - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)：社区汉化版
  - Effective TypeScript
    - [Effective TypeScript](https://www.oreilly.com/library/view/effective-typescript/9781492053736/)：原书 Oreilly 购买链接
    - [Effective Typescript：使用 Typescript 的 n 个技巧 - 杨健](https://zhuanlan.zhihu.com/p/104311029)
    - [Effective Typescript - 杨健](https://blog.staleclosure.com/effective-typescript/)
  - 文章
    - [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)：官方文档中的「高级类型」章节
    - [TypeScript Evolution](https://mariusschulz.com/blog/series/typescript-evolution)：TS 语言特性，系列文章
  - TS 进阶概念解析
    - [The unknown Type in TypeScript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
    - [infer - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html)
    - [TypeScript 中的 never 类型具体有什么用？](https://www.zhihu.com/question/354601204/answer/888551021)
    - 类型推导
      - [TypeScript 类型推导趣事一则](https://zhuanlan.zhihu.com/p/82396659)
      - [Typescript Tips: 动态重载实现廉价版 dependent type](https://zhuanlan.zhihu.com/p/95829351)

* 开发
  - TS + 框架
    - [用 TypeScript 写 React & Redux - 完全指南](https://github.com/seognil-contributor/react-redux-typescript-guide/tree/zh-pre)
  - Rollup 打包
    - [How to bundle a npm package with TypeScript and Rollup](https://medium.com/@paleo.said/how-to-bundle-an-npm-package-with-typescript-and-rollup-f80e0f196189)
    - [Building and publishing a module with TypeScript and Rollup.js](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396)
  - 杂项
    - [TS 常见问题整理](https://juejin.im/post/5e33fcd06fb9a02fc767c427)：TS 语言、tsconifg、React + TS

## TypeScript 知识体系

### 如何运行 TypeScript

- 命令行命令
  - `tsc`，官方编译器
    - 安装 `npm install -g typescript`
  - `ts-node`，TS + Node
    - 安装 `npm install -g ts-node`
  - `parcel`, 自动检测运行
    - 安装 `npm install -g parcel`
- TS 运行配置
  - [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)：编译选项
  - [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)：配置文件
- 工程化
  - 工具
    - [types-checker](https://www.npmjs.com/package/types-checker)：自动安装 @types
    - [DefinitelyTyped](http://definitelytyped.org/)：@types 官网
  - ESLint
    - [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)：ESLint 官方教程
    - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)：ESLint 的 TS 插件
  - 打包插件
    - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)：babel 的
    - [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)：rollup 的

### TypeScript 主要概念

- TS 类型识别模式
  - [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing)
  - [类型推断](http://www.typescriptlang.org/docs/handbook/type-inference.html)

* TS 类型系统
  - `type` 类型别名、`interface` 接口
  - [**变量声明**/使用](http://www.typescriptlang.org/docs/handbook/variable-declarations.html)
    - `const` [const declarations](http://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations)
    - `!` [Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)
  - [**基础类型**](http://www.typescriptlang.org/docs/handbook/basic-types.html)
    - JS 基本类型 `number`、`string`、`boolean`、`undefined`、`null`
    - `Array`、元组 [Tuple](http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple) （严格的、退化的数组）
    - `any` 任意类型、`never` 永不、`void` 空值（一般用于函数返回 `undefined`）
    - [`unknown`](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)
    - [枚举](http://www.typescriptlang.org/docs/handbook/enums.html) `Enums`
  - [**函数**](http://www.typescriptlang.org/docs/handbook/functions.html)
    - 函数的多种定义方式
    - `this` [this 参数](http://www.typescriptlang.org/docs/handbook/functions.html#this-parameters)
    - Overloads [重载](http://www.typescriptlang.org/docs/handbook/functions.html#overloads)
  - [**接口**](http://www.typescriptlang.org/docs/handbook/interfaces.html) `interface`
    - `?` [Optional Properties](http://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties)
    - `readonly` [Readonly properties](http://www.typescriptlang.org/docs/handbook/interfaces.html#readonly-properties)
    - [Indexable Types](http://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types) 可索引类型
      - `{ [x: string]: number }`
    - `implements`、`extends`
    - [Hybrid Types](http://www.typescriptlang.org/docs/handbook/interfaces.html#hybrid-types) 混合类型，JS 中允许的 函数 + 对象字段
  - [**类**](http://www.typescriptlang.org/docs/handbook/classes.html) `class`
    - `extends`、`implements`、`abstract`
    - `public`/`private`/`protected`，简写法（constructor 参数）
    - `readonly`
    - `get`/`set`
    - `static`
  - [**泛型**](http://www.typescriptlang.org/docs/handbook/generics.html) Generics
  - [**装饰器**](http://www.typescriptlang.org/docs/handbook/decorators.html) Decorators
* TS 类型操作
  - [声明合并](http://www.typescriptlang.org/docs/handbook/declaration-merging.html)
  - [高级类型](http://www.typescriptlang.org/docs/handbook/advanced-types.html)
    - `|` Union 联合类型、`&` Intersection 交叉类型
    - 类型收缩（Type Narrowing）（推断）
      - 控制流分析（[Control Flow Based Type Analysis](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#control-flow-based-type-analysis)）
      - **类型保护**（[Type Guard](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)）
        - `as`、`in`、`is`、`typeof`、`instanceof`
      - 可辨识联合（[Discriminated Unions](http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)）
    - 字面量类型（Literal Types）（类似枚举的联合类型）
    - **索引类型** [Index types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)、**映射类型** [Mapped types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)
      - `keyof`
      - `-?` [What does -? mean in TypeScript?](https://stackoverflow.com/questions/52417131/what-does-mean-in-typescript/52417260#52417260)
    - **条件类型**（[Conditional Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)）
      - `T extends U ? X : Y`
      - `infer`
  - [Utility Types 工具类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)
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

## TypeScript 典型代码

### TypeScript 基本语法

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

// * ---------------- 函数的几种声明方式

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

// * ---------------- 接口、类

interface CarInterface {
  model: string;
  radio?;
  getYear(): any;
}

class Car implements CarInterface {
  constructor(
    readonly model,
    private engine,
    public radio?,
  ) {} // 简写法

  static Manufacturer: string = 'BMW';
  getYear() {}
}

// * ---------------- 泛型

class Observable<T> {
  constructor(public value: T) {}
}

let myOb: Observable<number> = new Observable(2);

// * -------------------------------- 示例

// * ---------------- 接口、对象

interface MyDict {
  type: string;
  [name: string]: string; // 可索引
}

const dict: MyDict = {
  type: 'a dict',
  num: 233, // Error!
  word: 'hello', // Valid
};

// * ---------------- 递归的声明

type NumVal = 1 | 2 | 3 | NumVal[];
const nestArr: NumVal = [1, 2, 3, [1, 2, [3]]];
```

### TypeScript 实用代码

#### 联合转交集

```ts
type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
```

#### 复杂的类型声明

[infer - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html)

通过编写泛型和类型推断，能够拥有更准确的类型，  
能保证业务代码拥有更充分的类型提示，提升代码整体质量。

```ts
type MapEveryToPromise<T extends object> = {
  [K in keyof T]: T[K] extends infer P ? Promise<P> : never;
};

const dataPool = {
  key1: 1,
  key2: 'hello',
  // ...
};

const advanceDataPool: MapEveryToPromise<typeof dataPool> =
  {
    key1: Promise.resolve(1),
    key2: Promise.resolve('hello'),
    // ...
  };
```

## TypeScript 相关

### 泛型中的命名习惯

很多代码中使用泛型，一般只使用一个大写字母，  
这些实际相当于助记符，是缩写。

- `T` (for **T**ype)
- `E` (for **E**lement)
- `K` (for **K**ey)
- `V` (for **V**alue)

* `U` 没找到出处…  
  推测是 `T` 的后一位字母，就像 `i, j, k` 一样…  
  也可能是指 _Union_

其他根据具体上下文可以同样推测：

- `S` **S**tate
- `A` **A**ction

### 从 JS 迁移到 TS

[Migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)

- 注意！
  - 不要一边迁移一边修改代码逻辑
  - 不要在低测试覆盖率时迁移
  - 初期无需写太严谨的类型（为了开发效率）
  - 别忘记写 Type 的测试
  - 不要急着上线
- 步骤
  - 第一阶段
    - 确保测试全部通过
    - 把 `.js` 文件重命名成 `.ts`
    - 修复类型检查错误或 TS 编译器报错
    - 别改代码逻辑
    - 确保测试全部通过
  - 第二阶段
    - 确保测试全部通过
    - 禁止隐式 `any` （`{"noImplicitAny": true }`）
    - 尽量明确类型
      - 安装依赖的 `@types` （[DefinitelyTyped](http://definitelytyped.org/)）
      - 实在不行用显式的 `any`
    - 确保测试全部通过
  - 第三阶段
    - 逐步升级，小步 commit
    - 打开全部的 `strict` 选项 （[Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)）
    - 将显式 `any` 替换成具体类型
    - 尽力避免不安全类型声明

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

### TypeScript 有哪些不足

目前不支持高阶泛型

[Allow classes to be parametric in other parametric classes](https://github.com/Microsoft/TypeScript/issues/1213#issuecomment-523245130)

导致让这个 demo [typescript-generic-problem](https://stackblitz.com/edit/typescript-generic-problem?file=index.ts)  
中的全部代码都拥有准确的类型是一件很困难的事情，  
只能修改业务代码，或手动进行类型声明来妥协。
