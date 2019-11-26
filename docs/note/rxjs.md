# RxJS 学习指南

## RxJS 简介

### 什么是 ReactiveX

ReactiveX 是一套采用响应式流的异步编程模式，  
具体实现包括 RxJS、RxJava、RxSwift 等，  
虽然这些实现的语言不同，但是核心思想和 API 都是相同的。  
这个相同的部分就称之为 ReactiveX。

它能将离散的**多个事件**视为**一个流**来操控，

将事件/数据作为流传播，  
流可以（通过操作符）进行各种变换（映射、采样、合并等）

### 什么是 RxJS

ReactiveX 的 JS 具体实现

> 它相当于事件版的 Lodash

### 为什么要用 RxJS

能用更少和清晰的代码完成异步业务

## 学习 RxJS

### 概览

- 耗时：从入门到熟悉需要大约 15~30 小时（个人估计）
- 难点：
  - 理解 Stream 范式
  - 熟悉 API 全貌并综合运用
- 工具：
  - [rxjs@6+](https://www.npmjs.com/package/rxjs)
  - `webpack/parcel/cli`

### 学习路线

- 前置基础
  - 理解 RxJS 编程理念
    - functional programming
    - reactive programming
    - stream programming
    - 迭代器模式（事件流遍历机制）
    - 观察者模式（绑定机制）
  - (TypeScript)
- 学习 Rxjs
  - 掌握 RxJS 核心概念
    - Observable 及上下游
    - 多播
    - Scheduler
  - 尝试 RxJS 所有（类型）的 API
    - 同类 API 之间的效果差异
    - 相同效果的流可以有多种实现方式
- 题目/实战
  - 练习实现具体功能，加深理解
  - 结合 react/vue
- 进阶
  - 实现一个自己的 Observable
  - 阅读 RxJS 源码实现
- 迷思
  - cold vs hot Observable
  - 如何手动结束/关闭一个 Observable

## 资料

### 我的学习代码

- [RxJs - Learning By Doing](https://github.com/seognil-study/learning-by-doing/tree/master/rxjs)

### 关于 响应式编程

- [Introduction to Reactive Programming](https://egghead.io/courses/introduction-to-reactive-programming)
- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [RxJS 入门指引和初步应用](https://zhuanlan.zhihu.com/p/25383159)
- [RxJS-响应式流编程](http://blueskyawen.com/2017/12/24/rxjs/)
- [流动的数据——使用 RxJS 构造复杂单页应用的数据逻辑](https://github.com/xufei/blog/issues/38)
  <!-- https://blog.angularindepth.com/rxjs-in-practice-86cc133b7d42 -->

### RxJS 自学教材

- [Learn RxJS](https://www.learnrxjs.io/) ：（v6）学习 RxJS，非常详细的站，有（几乎）所有 API 代码用法和实战 Demo
- [Launchpad for RxJS](https://reactive.how/rxjs/) ：（v6）动画演示（一部分），API 按类型整理划分
- [RxJS - API List](https://rxjs.dev/api) ：RxJS 官方文档
- [RxJS example + marble diagram](https://thinkrx.io/rxjs/interval/) ：（v6）通过代码生成的弹珠台
- [RxJS Marbles](https://rxmarbles.com/) ：弹珠台，可直接拖动，只有动画
- 《深入浅出 RxJS》 - 程墨 （rxjs v5）

### 实践

- [Recipes - Learn RxJS](https://www.learnrxjs.io/recipes/)
- [我所了解的 RxJS](https://juejin.im/post/5ca56f42f265da30982748e6#heading-13)
  <!-- https://www.sitepoint.com/rxjs-functions-with-examples/ -->
  <!-- https://angularfirebase.com/lessons/rxjs-quickstart-with-20-examples/ -->

## RxJS 知识体系

### RxJS 主要概念

- [Ob 相关]
  - Observable: 可被观测的/数据流序列（很多创建方式，如 timer、fromEvent 等）
  - operator: 操作符（对事件流进行形变，比如 map、merge 等）
- [Sub 相关]
  - subscribe: 订阅方法（Observable 提供的）
    - Observer: 观察者/消费者方法集合（业务方法，传给 subscribe() 的）
  - Subscription: 订阅关系（subscribe 返回的）
    - unsubscribe: 结束订阅方法（Subscription 提供的）
- Subject: 多播的 Observable（可以作为 Observable 和 Subscription 的中间层）
- Scheduler：调度器

## RxJS 典型代码

### 伪代码

```javascript
// * 注册 事件流
Ob = Observable
  // * （可选的）操作符 对原始事件流进行加工处理
  .operators()

// * 订阅 （支持多种写法）
Subscription = Ob.subscribe( next?: (e)=>{}, error?: (e)=>{}, complete?: ()=>{} )
// * 订阅 （支持多种写法）
Subscription = Ob.subscribe( Observer{
  next(e) {}
  error(e) {}
  complete() {}
})

// * 取消订阅
Subscription.unsubscribe()
```

### 具体代码 v5

```javascript
// Node.js

import { Observable } from 'rxjs';

const ob$ = Observable.interval(500).map((e) => e * 2);

const sub$ = ob$.subscribe((e) => console.warn(e));

setTimeout(() => sub$.unsubscribe(), 3000);
```

### 具体代码 v6

```javascript
// Node.js

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const ob$ = interval(500).pipe(map((e) => e * 2));

const sub$ = ob$.subscribe((e) => console.warn(e));

setTimeout(() => sub$.unsubscribe(), 3000);
```

## RxJS 相关

### RxJS 和 TypeScript

RxJS 源码是 TypeScript 写的，对 TS 支援度很不错

但也有些 bug：

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

流相关的命名一般用 `$` 做后缀，是业界习惯，但也没有硬性规定。  
（就像用 `jQuery` 会使用 `$` 前缀，不用也不影响代码效果）
