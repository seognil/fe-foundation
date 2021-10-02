---
title: RxJS 学习指南
date: 2019-11-07 21:10:43
permalink: /frontend/rxjs
categories:
  - 前端开发
  - 前端工具
tags:
  - rxjs
---

# RxJS 学习指南

## RxJS 简介

### 什么是 ReactiveX

ReactiveX 是一组采用响应式流的异步编程 API 标准，不同语言下都有实现了该 API 的具体库，例如 RxJS、RxJava、RxSwift 等。
它的核心思想是，将离散的**多个事件**视为**一个流**来操控，流可以（通过操作符）进行各种变换（映射、采样、合并等）。

### 什么是 RxJS

RxJS 是 ReactiveX 的 JS 版实现，RxJS 之于事件处理，相当于 Lodash 之于数据处理。

RxJS 在 Angular 中作为重要的数据底层，但是其本身是一个独立的库，可以在其他场景下使用，例如配合 React + Observable-hooks 作为全局状态管理器。

### 为什么要用 RxJS

能够更方便地梳理和管控异步逻辑。

## 学习 RxJS

### 概览

- 耗时：从入门到熟悉需要大约 15~30 小时
- 难点：
  - 理解 Stream 范式
  - 熟悉 API 全貌并综合运用
- 工具：
  - [rxjs](https://github.com/ReactiveX/rxjs)
  - [observable-hooks](https://github.com/crimx/observable-hooks)（for React hooks）

### 学习路线

- 前置学习
  - 理解 RxJS 的编程理念
    - 编程范式
      - [Functional Programming](/cs/introduction-to-functional-programming)
      - Reactive Programming
      - Stream Programming
    - 设计模式
      - 观察者模式（事件绑定机制）
      - 迭代器模式（事件流的遍历机制）
  - ([TypeScript](/cs/typescript-language-basic))
- 学习 RxJS
  - 掌握 RxJS 核心概念
    - Observable 及其上下游
    - 多播操作符、Subject
    - Scheduler
  - 尝试 RxJS 所有（类型）的 API
    - 同类 API 之间的效果差异
    - 相同效果的流可以有多种实现方式
- 题目/实战
  - 练习实现具体功能，加深理解
  - 结合 React/Vue 在项目中使用
- 进阶
  - 实现一个自己的 Observable
  - 阅读 RxJS 源码实现
- 迷思
  - 如何手动结束/关闭一个 Observable
  - 内存管理和垃圾回收

## 资料

### 我的学习代码

- [RxJs - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/rxjs)

### 关于 响应式编程 的扩展阅读

- [Introduction to Reactive Programming](https://egghead.io/courses/introduction-to-reactive-programming)
- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [RxJS 入门指引和初步应用](https://zhuanlan.zhihu.com/p/25383159)
- [RxJS-响应式流编程](http://blueskyawen.com/2017/12/24/rxjs/)
- [流动的数据——使用 RxJS 构造复杂单页应用的数据逻辑](https://github.com/xufei/blog/issues/38)

### RxJS 自学教材

- 教程
  - [Top Ten RxJS Concepts](https://fireship.io/lessons/rxjs-basic-pro-tips/)：一些基本概念和 API 的示例
  - [Learn RxJS](https://www.learnrxjs.io/) ：非常完整的 RxJS 教程站点，涵盖了大部分 API ，有代码片段及小型 Demo
  - [RxJS - Introduction](https://rxjs-dev.firebaseapp.com/guide/overview)：官方文档教程板块
- 动画/演示/Demo
  - [Launchpad for RxJS](https://reactive.how/rxjs/) ：（v6）动画演示（一部分），API 按类型整理划分
  - [RxJS example + marble diagram](https://thinkrx.io/rxjs/interval/) ：（v6）通过代码生成的弹珠台
  - [RxJS Marbles](https://rxmarbles.com/) ：弹珠台，可直接拖动，只有动画
- 书籍
  - [深入浅出 RxJS](https://book.douban.com/subject/30217949/) （v5）

### 实战

- [Recipes - Learn RxJS](https://www.learnrxjs.io/recipes/)：Learn RxJS 中的 Demo 板块
- [我所了解的 RxJS](https://juejin.im/post/5ca56f42f265da30982748e6#heading-13)

## RxJS 知识体系

### RxJS 主要概念

- **Observable**
  - Observable: stream 序列；有多种创建方式，例如 `timer`、`fromEvent` 等
  - operator: 操作符，对 Observable 进行形变；例如 `map`、`merge` 等
- **subscribe**
  - subscribe: 订阅（Observable 的方法）
    - Observer: 观察者/消费者方法集合（业务方法，传给 subscribe() 的）
  - subscription: 订阅关系（subscribe 函数返回的对象）
    - unsubscribe: 结束订阅方法（Subscription 提供的）
- **Subject**: 多播的 Observable（可以作为 Observable 和 Subscription 的一个胶水层）
- **Scheduler**：调度器，用来调整事件触发的策略，例如 `asyncScheduler`、`animationFrameScheduler` （见名知意）

* Cold vs Hot Observable
  - Cold：多次订阅产生多个独立的事件流（用途例如：`interval`）
  - Hot：多次订阅共享同一个事件流（用途例如：`fromEvent`、`Subject`）

## RxJS 典型代码

### RxJS 基本用法

#### 伪代码

```javascript
// * -------- 新建一个 Observable

Ob = Observable()
  // * （可选）通过不同的操作符对原始 stream 进行加工处理
  .pipe(
    map((a) => b),
    filter((b) => b > 0),
    debounceTime(200),
  );

// * -------- 订阅 （以及多种传参方式）

Subscription = Ob.subscribe((v) => {});

Subscription = Ob.subscribe(
  (v) => {},
  (e) => {},
  () => {},
);

Subscription = Ob.subscribe({
  next(v) {},
  error(e) {},
  complete() {},
});

// * -------- 取消订阅

Subscription.unsubscribe();
```

#### 具体代码 v5

```javascript
// Node.js

import { Observable } from 'rxjs';

const ob$ = Observable.interval(500).map((e) => e * 2);

const sub$ = ob$.subscribe((e) => console.warn(e));

setTimeout(() => sub$.unsubscribe(), 3000);
```

#### 具体代码 v6

```javascript
// Node.js

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const ob$ = interval(500).pipe(map((e) => e * 2));

const sub$ = ob$.subscribe((e) => console.warn(e));

setTimeout(() => sub$.unsubscribe(), 3000);
```

### RxJS 实用代码

```javascript
// * interval of requestAnimationFrame, tick frame time (ms)
const rafInterval$ = () =>
  of(Date.now(), animationFrameScheduler).pipe(
    map((start) => Date.now() - start),
    repeat(),
  );
```

## RxJS 相关

### RxJS 和 TypeScript

RxJS 源码是 TypeScript 写的，对 TS 支援度很不错

但目前还有些未完美覆盖的情况，例如：

```typescript
// * 没有正确识别
pipe(publish()); // => Observable<any>

// * 需要手动指定 type
pipe(publish()) as ConnectableObservable<any>;
```

- [Pipe operator cannot infer return type as ConnectableObservable #2972](https://github.com/ReactiveX/rxjs/issues/2972)
- [Property 'connect' does not exist on type 'Observable\<any\>' | RXJS multicast](https://stackoverflow.com/questions/54265143/property-connect-does-not-exist-on-type-observableany-rxjs-multicast)

### RxJS 版本

截稿时 RxJS 最新的版本是 `v6`  
（`v7` 处于 alpha 中）  
`v6` 和 `v5` 的主要差别在于 API 名和语法

比如为了实现函数式调用风格，  
操作符 `do` 重命名成了 `tap` （因为 `do` 是 JS 保留字）

新项目直接用 `v6` 即可  
老项目也可以用兼容包升级

- [RxJS v5.x to v6 Update Guide](https://rxjs-dev.firebaseapp.com/guide/v6/migration)
- [rxjs CHANGELOG](https://github.com/ReactiveX/rxjs/blob/master/CHANGELOG.md)

### 命名习惯

```javascript
const myStream$ = interval(500);
```

Stream 相关的命名一般用 `$` 做后缀，是一种共识，但也没有硬性规定。  
（就像使用 `jQuery` 会用 `$` 作为变量前缀一样）
