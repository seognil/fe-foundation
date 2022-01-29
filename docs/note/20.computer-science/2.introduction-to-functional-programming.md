---
title: 函数式编程 入门指南
date: 2020-01-31 23:00:54
permalink: /cs/introduction-to-functional-programming
categories:
  - 计算机科学
tags:
  - 编程范式
  - 函数式编程
---

# 函数式编程 入门指南 {#title}

## 函数式编程 简介 {#intro}

### 什么是 函数式编程 {#what-is}

函数式编程，Functional Programming，简称 FP，  
是一种编程范式。

> 它将电脑运算视为函数运算，并且避免使用程序状态以及易变对象。其中，λ 演算（lambda calculus）为该语言最重要的基础。而且，λ 演算的函数可以接受函数当作输入（引数）和输出（传出值）。

> 比起指令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。

它涉及很多数学上的学科：

- 抽象代数
- 群论
- 范畴论

但 FP 和 OOP 的关系也不是高低贵贱之分，而是风格差异。  
这些思想不是教条，而是前人为了写出更好的代码进行的思考和总结。  
在学习 FP 的过程中也一定会碰到和 OOP 在设计模式上的对比。

在实际业务中，经常会不得不和副作用打交道。  
（网络请求，用户事件，I/O 等）

前端中 JS 是基本语言，JS 是一个多范式的编程语言，  
初学 FP，可以先保持原有的编码习惯，并从计算层逐渐切入。

也没有必要教条地遵循 FP 的开发模式，  
如：完全不使用 `if`/`for`、只用 `const` 等新手 FP 装逼行为。  
因为从编程语言设计的层面来说（如编译优化），JS 不完全适用于纯 FP 模式。

### 代码风格 {#code-style}

函数式编程和其他范式之间的风格差异  
在 JavaScript 中：

#### 函数式 vs 面向对象

```typescript
// FP，函数、传参
grow(circle, 3);

// * OOP，对象、方法
circle.grow(3);
```

#### 函数式 vs 指令式

> 找出大于 35 岁的程序员的名字

```typescript
const people = [
  { name: 'Bob Martin', age: 68 },
  { name: 'Dan Abramov', age: 27 },
  { name: 'Joel Spolsky', age: 55 },
];
// => [ 'Bob Martin', 'Joel Spolsky' ]
```

函数式：

```typescript
// * 拆分成子任务，纯函数、函子、无状态
const result = people
  .filter((p) => p.age > 35)
  .map((p) => p.name);
```

指令式：

```typescript
// * 手动处理运算过程，循环结构、外部变量
const result = [];
for (let i = 0; i < people.length; i++) {
  const p = people[i];
  if (p.age > 35) result.push(p.name);
}
```

### 为什么要学习 函数式编程 {#why}

- 当你学习一些新兴前端工具，你需要了解基本的 FP
  - [Redux](/frontend/redux)
  - [Immutable](https://immutable-js.github.io/immutable-js/)
  - [Immer](https://immerjs.github.io/immer/)
  - [Rmada](https://ramdajs.com/)
  - [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
- FP 的优势
  - 代码可靠性
  - 易于测试
  - 组合开发
- 注重 FP 的编程语言
  - Haskell
  - F#
  - Clojure（from Lisp）
  - ClojureScript（from JavaScript）

## 学习 函数式编程 {#study}

### 概览 {#study-overview}

- 耗时：
  - 从入门到理解基本概念，大约 10~20 小时
  - Functional JavaScript 代码训练，大约 4~12 小时
  - 系统学习函数式架构和模式，至少 80 小时
- 难点：
  - 新的编程思维方式
  - 数学和 FP 高等概念
- 工具：
  - [JavaScript](/frontend/javascript-foundation)
  - [Rmada](https://ramdajs.com/)

### 学习路线 {#study-roadmap}

- 前置学习
  - [计算机科学入门](/cs/crash-course-computer-science)
  - [JavaScript](/frontend/javascript-foundation)
  - （[TypeScript](/cs/typescript-language-basic)）
  - （单元测试 [Jest](/frontend/jest)）
- 学习函数式编程
  - 观看资料中的视频部分，理解函数式编程的核心原则
  - 练习 JS 中自带的 `map`/`filter`/`reducer`
  - 学习使用包含轻度 FP 思想的库（Ramda，Redux 等）
- 实战
  - 在业务中编写纯函数，处理副作用
  - 将已有的逻辑以 FP 方式重新实现
- 进阶
  - 系统地 FP 概念代码训练（如 Monad 等）
  - 学习 Haskell/F#/Clojure
  - 学习 FP 架构设计和设计模式
- 迷思
  - 如何更好地管理副作用
  - 专为 FP 设计的语言有相应优化（如内置 Immutable），如何处理 JS 中的 FP 性能

## 资料 {#references}

### 代码训练 {#code-training}

- [Functional Programming - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/paradigm/functional-programming)

* [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)
* [Functional programming design patterns by Scott Wlaschin](https://www.youtube.com/watch?v=E8I19uA-wGY)

### GitHub {#ref-from-github}

- [Awesome Functional Programming](https://github.com/xgrommx/awesome-functional-programming)：Awesome FP
- [Mostly Adequate Guide](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)：JS 函数式编程指南（英文版）
- [JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)：JS 函数式编程指南（汉化版）
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)：FP 术语解释
- [fantasy-land](https://github.com/fantasyland/fantasy-land)：代数 + JS
- [ramda-fantasy](https://github.com/ramda/ramda-fantasy)：Fantasy Land + Ramda

### 视频 {#video .timeline-note}

- [Object Oriented vs Functional Programming with TypeScript](https://www.youtube.com/watch?v=fsVL_xrYO0w)：12 分钟，OOP vs FP
  - 1: 26 - FP：纯函数、副作用、Immutable、函数作为参数/返回值、高阶函数、无状态
  - 4: 19 - OOP：类、构造函数、公有/私有、getter/setter、有状态、方法
  - 7: 39 - 继承 vs 组合
  - 10: 03 - Mixin
- Computerphile 频道
  - [Programming Paradigms - Computerphile](https://www.youtube.com/watch?v=sqV3pL5x8PI)：10 分钟
    - 指令式 vs 函数式，Haskell
  - [Functional Programming & Haskell - Computerphile](https://www.youtube.com/watch?v=LnX3B9oaKzw)：9 分钟
    - 无副作用的好处，FP 在产业界的使用，Haskell 的历史，性能、编译优化、并行，健壮性、测试生成
  - [Lambda Calculus - Computerphile](https://www.youtube.com/watch?v=eis11j_iGMs)：12 分钟
    - Lambda 演算，历史、简介、重要性，邱奇-图灵论题。纯 FP 是无类型的。TRUE、FALSE、Y Combinator
  - [Essentials: Functional Programming's Y Combinator - Computerphile](https://www.youtube.com/watch?v=9T8A89jgeTI)：13 分钟
    - Y Combinator，fac、loop、rec
  - [What is a Monad? - Computerphile](https://www.youtube.com/watch?v=t1e8gqXLbsU)：22 分钟
    - Maybe、Nothing、Just，一些 Haskell，Monad 是 FP 中处理副作用的通用模式
- 讲座
  - [GOTO 2018 • Functional Programming in 40 Minutes • Russ Olsen](https://www.youtube.com/watch?v=0if71HOyVjY)：42 分钟
    - 0: 00 - 介绍，产业历史背景，概述
    - 2: 55 - 什么是 FP，FP 不是黑魔法，OOP 概览和可能存在的局限性
    - 8: 29 - 什么是编程，不同编程语言中的概念
    - 10: 06 - FP 和 OOP 中相同的部分，FP 更相当于是一种组织代码的理念
    - 11: 17 - 计科和数学碰到的相同困境：如何组织系统、如何做抽象？
    - 13: 48 - 函数，集合，输入输出，map，纯函数，副作用
    - 17: 41 - 为什么 FP 使程序更易于编写和理解，新的问题和解决方案，Immutable，可持久化数据结构
    - 26: 03 - 如何处理副作用
    - 33: 22 - FP 不是万能的，它不能解决人工错误（如边界错误），线程安全
    - 37: 43 - 一个 Clojure 项目中的 FP 使用情况
  - [Why Isn't Functional Programming the Norm? – Richard Feldman](https://www.youtube.com/watch?v=QyJZzq0v7Z4)：46 分钟
    - 0: 00 - 概述，语言、范式、风格
    - 0: 59 - 现在流行的编程语言，流行的几个原因：
      - 2: 05 - 独角兽应用：VisiCalc、Ruby、PHP、C
      - 6: 22 - 平台独占：Objective-C、swift、JavaScript、C#
      - 10: 22 - 快速替换：优势、熟悉程度、学习曲线、生态系统、代码迁移成本，CoffeeScript、TypeScript、C++、Kotlin
      - 13: 14 - 商业营销：Java 的故事
      - 16: 15 - 稳步增长：Python
      - 17: 45 - 其他原因：语法、产业规模、社区
    - 18: 46 - 范式，为什么几乎所有主流语言都是 OOP
      - 19: 37 - OO 具有独特特性？封装、继承、对象、方法？
        - 21: 13 - Go 支持 OO 但是不支持继承，对象和方法只是结构体和过程的语法糖
        - 23: 05 - 模块化编程 vs OO 封装，几乎所有语言都支持模块化
      - 24: 37 - OO 演进史：ALGOL、simula、Smalltalk、ObjC、C++
      - 32: 34 - 语言的流行基于很多别的原因，而不是 OO 特性的先进性
    - 35: 47 - 风格，FP 是语言特性无关的
      - 36: 30 - 为什么 FP 不是主流，其实很多 OO 语言已经支持 FP，事情正在起变化
    - 39: 58 - 小结 & 问答
      - 42: 04 - FP 没有精确的定义
      - 44: 00 - 性能需求应根据使用场景进行权衡
  - [Learning Functional Programming with JavaScript - Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY)：30 分钟
    - 0: 00 - 开场，在 JS 中使用 FP 的经历
    - 1: 50 - 什么是 FP，Why FP JS，JS 中的 `this` 陷阱
    - 4: 42 - 纯函数，副作用，HOC，Map/Reduce/Filter，Immutable
    - 16: 12 - 可持久化数据（Persistent Data），结构共享
    - 22: 27 - 结语 & 提问
      - 24: 54 - 编程范式之争
      - 28: 10 - Map
    - 提到的资料：
      - [Ideal Hash Trees - Phil Bagwell](https://lampwww.epfl.ch/papers/idealhashtrees.pdf)
      - [An introduction to functional programming](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)
  - [Anjana Vakil: Immutable data structures for functional JS | JSConf EU](https://www.youtube.com/watch?v=Wo0qiGPSV-s)：26 分钟
    - 0: 00 - 开场，FP JS 与不可变数据，个人介绍
    - 2: 00 - FP 和 Immutable 简介，结构共享，Trie（字典树）
    - 11: 52 - 二进制化，Bitmapped Bector Trie，Hash Array Mapped Trie
    - 18: 42 - 小结，JS 库介绍：Mori、Immutable
  - [Scenic City Summit 2016: Jeremy Fairbank - Functional Programming Basics in ES6 (JavaScript)](https://www.youtube.com/watch?v=HvMemAgOw6I)：58 分钟
    - 0: 00 - 开场，FP in ES6，个人介绍
    - 0: 55 - JS 中的 FP 库，什么是 FP，数学中的函数，Lambda 演算
    - 4: 24 - 四个原则：纯函数，声明式；安全性，Immutable；透明性，状态；模块化，组合开发
    - 6: 03 - ES6 简介：const，箭头函数、剩余参数、默认参数，解构，`Object.assign`，class
    - 12: 56 - 纯函数 vs 非纯函数，副作用，引用透明，非纯函数难以测试，隐藏的状态就是不确定的状态
    - 17: 11 - 指令式 vs 声明式，
    - 19: 49 - Immutable，避免 Immutable 的技术方法，`Object.freeze`
      - 优势：数据安全、UNDO/REDO、显式数据流、内存使用、并发安全
      - 劣势：代码冗余，更多对象创建、更多垃圾回收、内存使用
    - 26: 28 - 函数一等公民，别名，作为参数，闭包，作为返回值，HOC
    - 31: 16 - 偏应用，partial，柯里化，闭包（数学），compose
    - 45: 22 - 递归，Stack Overflow，尾调用优化
    - 56: 00：资源
      - 书：[Mostly Adequate Guide](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
      - 语言：Elm、ClojureScript、PureScript（emmm…这是 2016 年的视频…so…）
      - 库：Lodash、Ramda、RxJS、Bacon.js、Immutable.js
      - 框架：React、Redux
  - [Functional programming design patterns by Scott Wlaschin](https://www.youtube.com/watch?v=E8I19uA-wGY)：65 分钟
    <!-- - [Functional Design Patterns - Scott Wlaschin](https://www.youtube.com/watch?v=srQt1NAHYC0)：66 分钟 -->
    - 0: 00 - 前言，FP 设计模式，写 OO 和 FP 的经历，F#
    - 3: 43 - OO 模式/原则
    - 4: 50 - FP 模式：FP 核心原则、函数作为参数、Monad、Map、Monoid
    - 6: 04 - FP 核心原则：函数是实体、组合、类型/而不是类。组合是分形的，类型是可组合的，完整度（Totality），静态类型
    - 18: 16 - 函数作为参数：DIY 原则，函数类型作为接口，策略模式，装饰器，单参数
    - 27: 49 - 偏应用，依赖注入
    - 32: 46 - 好莱坞原则/Continuous，利用偏函数将错误处理外置化
    - 36: 10 - 回调函数，链式化
    - 38: 42 - Monad，Chaining Continuous
    - 41: 35 - Bind，Monadic Bind，Bind 错误处理模式
    - 44: 52 - Map，Option，Lift，Functor
    - 49: 30 - Monoid，数学性质：闭包（数学）；结合律，并行化；单位元，半群，MapReduce，Homomorphism，Endomorphism
    - 64: 01 - Monad and Monoid
  - [Functional architecture - The pits of success - Mark Seemann](https://www.youtube.com/watch?v=US8QG9I1XW0)：60 分钟
    - 0: 00 - 前言，函数式架构，维持成本 vs 稳定平衡，F#、Haskell，Hindley–Milner 类型系统
    - 7: 37 - 稳定平衡的其中三个方面：接口和适配器；服务、实体、值对象；可测试性
      - 8: 17 - Hexagonal architecture，OOP 和 FP 对相同架构的实施差异，最大化纯函数的作用
        - 16: 50 - Haskell 例子：酒店登记，副作用外置化，编译器限制
      - 33: 14 - 服务和数据，OO 的行为膨胀和不可维护性问题，实体、值对象、服务分割
        - 41: 07 - FP 中的情况，数据、函数
      - 43: 36 - 可测试性，Test-induced Damage，代码噪音，代码隔离
    - 58: 17 - 小结
    - 视频中提到的书：
      - [Agile Principles, Patterns, and Practices in C#](https://book.douban.com/subject/1815898/)
      - [Dependency Injection Principles, Practices, and Patterns](https://book.douban.com/subject/30932387/)
      - [Patterns of Enterprise Application Architecture](https://book.douban.com/subject/1229954//)
      - [Domain-Driven Design](https://book.douban.com/subject/1418618/)
  - [Brian Lonsdorf - Oh Composable World!](https://www.youtube.com/watch?v=SfWR3dKnFIo)：28 分钟
    - 0: 40 - 组合编程，chain、pipeline、控制流
    - 3: 51 - 编程中的反数学范式，范畴论，组合
      - 7: 09 - 声明：Box
      - 10: 39 - 循环：map/filter/reduce
      - 11: 29 - 回调、副作用：lazy Promise
      - 14: 51 - 分支、错误处理：Either
    - 17: 58 - 风格
    - 20: 24 - 在 React 中的尝试
    - 26: 18 - 小结，映射 = 组合 = 程序结构

<!-- [Brian Beckman: Don't fear the Monad](https://www.youtube.com/watch?v=ZhuHCtR3xq8)：67 分钟 -->

<!-- - [Anouk Ruhaak – Get started with Functional Programming | otsconf 2015](https://www.youtube.com/watch?v=6f5dt923FmQ)：19 分钟 -->

### 文章 {#article}

- 雾雨魔法店 - 知乎专栏
  - [函数式编程的早期历史](https://zhuanlan.zhihu.com/p/24648375)
  - [函数式又是函数式](https://zhuanlan.zhihu.com/p/24127815)
  - [为什么说 JavaScript 不擅长函数式编程](https://zhuanlan.zhihu.com/p/24076438)
  - [递归的五种定式](https://zhuanlan.zhihu.com/p/84452538)
  - [函数式的动态规划](https://zhuanlan.zhihu.com/p/104238120)
- 阮一峰
  - [函数式编程初探](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)
  - [函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
  - [图解 Monad](http://www.ruanyifeng.com/blog/2015/07/monad.html)
  - [Ramda 函数库参考教程](http://www.ruanyifeng.com/blog/2017/03/ramda.html)
- 掘金翻译计划（未成系列的文章）
  - [函数式 JavaScript 快速入门](https://github.com/xitu/gold-miner/blob/master/TODO1/a-quick-introduction-to-functional-javascript.md)
  - [JavaScript 的函数式编程是一种反模式](https://github.com/xitu/gold-miner/blob/master/TODO/functional-programming-in-javascript-is-an-antipattern.md)
  - [如何使用纯函数式 JavaScript 处理脏副作](https://github.com/xitu/gold-miner/blob/master/TODO1/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript.md)
  - [FRP 入门指南](https://github.com/xitu/gold-miner/blob/master/TODO/an-introduction-to-functional-reactive-programming.md)
  - [React 未来之函数式 setState](https://github.com/xitu/gold-miner/blob/master/TODO/functional-setstate-is-the-future-of-react.md)
  - [如何让你的 React 应用完全的函数式，响应式，并且能处理所有令人发狂的副作用](https://github.com/xitu/gold-miner/blob/master/TODO/how-to-make-your-react-app-fully-functional-fully-reactive-and-able-to-handle-all-those-crazy.md)

* Underscore/Lodash/Ramda
  - [Why using `_.chain` is a mistake.](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba)
  - [Functional JavaScript: Why I prefer using Ramda over Lodash or Underscore!](https://www.codementor.io/@michelre/functional-javascript-why-i-prefer-using-ramda-over-lodash-or-underscore-dzovysq11)
  - [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)

- 杂项
  - [Y Combinator for Non-programmers](https://ycombinator.chibicode.com/)
  - [为什么这两年函数式编程又火起来了？](https://www.zhihu.com/question/30190384)
  - [函数响应式编程 ( FRP ) 从入门到"放弃"——基础概念篇](https://halfrost.com/functional_reactive_programming_concept/)
  - [从 Haskell 到 JavaScript 的翻译，我读过的最好的 Monad 介绍的部分内容](https://zhuanlan.zhihu.com/p/94859885)
  - [Functional Programming Is Not Popular Because It Is Weird](https://probablydance.com/2016/02/27/functional-programming-is-not-popular-because-it-is-weird/)

<!--
[用 JS 代码完整解释 Monad](https://zhuanlan.zhihu.com/p/56810671)
[写给小白的 Monad 指北](https://zhuanlan.zhihu.com/p/65449477)
[使用 JavaScript 实现“真·函数式编程”](https://zhuanlan.zhihu.com/p/83963085) -->

### 系列文章 {#series-articles}

- A GENTLE INTRODUCTION TO FUNCTIONAL JAVASCRIPT
  - [Part 1: Building blocks and motivation](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/)
  - [Part 2: Working with Arrays and Lists](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-arrays/)
  - [Part 3: Functions for making functions](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/)
  - [Part 4: Doing it with style](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-style/)
- [译] 准备充分了嘛就想学函数式编程？
  - [第一部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-1.md)
  - [第二部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-2.md)
  - [第三部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-3.md)
  - [第四部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-4.md)
  - [第五部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-5.md)
  - [第六部分](https://github.com/xitu/gold-miner/blob/master/TODO/so-you-want-to-be-a-functional-programmer-part-6.md)
- Monads
  - [Monads, part one](https://ericlippert.com/2013/02/21/monads-part-one/)
  - [Monads, part two](https://ericlippert.com/2013/02/25/monads-part-two/)
  - [Monads, part three](https://ericlippert.com/2013/02/28/monads-part-three/)
  - [Monads, part four](https://ericlippert.com/2013/03/04/monads-part-four/)
  - [Monads, part five](https://ericlippert.com/2013/03/07/monads-part-five/)
- 组合软件（译文）
  <!-- TODO -->
  <!-- https://github.com/xitu/gold-miner/issues/7419 -->
  <!-- https://github.com/xitu/gold-miner/issues/6805 -->
  <!-- https://github.com/xitu/gold-miner/blob/master/TODO1/composing-software-the-book.md -->
  <!-- https://juejin.im/post/6844904121179324429 -->
  - [组合软件：书](https://github.com/xitu/gold-miner/blob/master/TODO1/composing-software-the-book.md)
    - [组合软件：简介](https://github.com/xitu/gold-miner/blob/master/TODO1/composing-software-an-introduction.md)
    - [不变性之道](https://github.com/xitu/gold-miner/blob/master/TODO1/the-dao-of-immutability.md)
    - [函数式编程的兴衰](https://github.com/xitu/gold-miner/blob/master/TODO/the-rise-and-fall-and-rise-of-functional-programming-composable-software.md)
    - [为什么用 JavaScript 学习函数式编程](https://github.com/xitu/gold-miner/blob/master/TODO/why-learn-functional-programming-in-javascript-composing-software.md)
    - [掌握 JavaScript 面试：什么是纯函数？](https://github.com/xitu/gold-miner/blob/master/TODO1/master-the-javascript-interview-what-is-a-pure-function.md)
    - [掌握 JavaScript 面试：什么是函数式编程](https://github.com/xitu/gold-miner/blob/master/TODO1/master-the-javascript-interview-what-is-functional-programming.md)
    - [函数式程序员的 JavaScript 简介](https://github.com/xitu/gold-miner/blob/master/TODO/a-functional-programmers-introduction-to-javascript-composing-software.md)
    - [高阶函数](https://github.com/xitu/gold-miner/blob/master/TODO/higher-order-functions-composing-software.md)
    - [柯里化与函数组合](https://github.com/xitu/gold-miner/blob/master/TODO1/curry-and-function-composition.md)
    - [抽象与组合](https://github.com/xitu/gold-miner/blob/master/TODO1/abstraction-composition.md)
    - [抽象数据类型与软件危机](https://github.com/xitu/gold-miner/blob/ec8862f2993f7eea977af6929d0b0785a86fd4e3/article/2020/abstract-data-types-and-the-software-crisis.md)
    - [Functor 与 Category](https://github.com/xitu/gold-miner/blob/master/TODO/functors-categories.md)
    - [JavaScript 让 Monad 更简单](https://github.com/xitu/gold-miner/blob/master/TODO/javascript-monads-made-simple.md)
    - [被遗忘的面向对象编程史](https://github.com/xitu/gold-miner/blob/master/TODO1/the-forgotten-history-of-oop.md)
    - [对象组合中隐藏的宝藏](https://github.com/xitu/gold-miner/blob/master/TODO/the-hidden-treasures-of-object-composition.md)
    - [用 ES6+ 写 JavaScript 工厂函数](https://github.com/xitu/gold-miner/blob/master/TODO/javascript-factory-functions-with-es6.md)
    - [函数式 Mixin](https://github.com/xitu/gold-miner/blob/master/TODO/functional-mixins-composing-software.md)
    - [为什么 class 更难以进行组合](https://github.com/xitu/gold-miner/blob/master/TODO/why-composition-is-harder-with-classes.md)
      <!-- TODO -->
    - [用函数进行数据类型的组合](https://github.com/xitu/gold-miner/blob/master/TODO/composable-datatypes-with-functions.md)
      <!-- TODO -->
    - [Lenses：可组合函数式编程的 Getter 和 Setter](https://github.com/xitu/gold-miner/blob/master/TODO1/lenses-composable-getters-and-setterssfor-functional-programming.md)
      <!-- TODO -->
    - [Transducers：JavaScript 中高效的数据处理 Pipeline](https://github.com/xitu/gold-miner/blob/master/TODO1/transducers-efficient-data-processing-pipelines-in-javascript.md)
    - [JavaScript 编码风格的原则](https://github.com/xitu/gold-miner/blob/master/TODO1/elements-of-javascript-style.md)
    - [模拟是一种代码异味](https://github.com/xitu/gold-miner/blob/master/TODO/mocking-is-a-code-smell.md)
  - 成书后未收录的章节
    - [Reduce](https://github.com/xitu/gold-miner/blob/master/TODO/reduce-composing-software.md)
    - [优秀的嵌套三元表达式](https://github.com/xitu/gold-miner/blob/master/TODO/nested-ternaries-are-great.md)

## 函数式编程 知识体系 {#knowledge-map}

### 前端中常见的 FP 概念 {#fp-in-frontend}

From [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)

- Higher-Order Functions (HOF)：高阶函数
- Closure：闭包（数学集合中的概念）
- Currying：柯里化
- Function Composition：函数组合
- Pure Function：纯函数
- Side effects：副作用
- Point-Free Style：隐式参数
- Functor：函子
- Lambda Calculus：Lambda 演算
- Lazy evaluation：惰性求值

### Ramda 中有关 FP 概念的 API {#fp-in-ramda}

- partial
- curry
- lift
- compose/pipe

### FP 基本原则 {#fp-principle}

- 纯函数
  - 引用透明（输入输出可控）
  - 无副作用
  - 不要硬编码
- 面向接口开发（静态类型）
- 代码设计
  - 数据和方法
    - 行为外置化（OO 方法 => 函数传参）
  - 函数
    - 副作用外置化（如 error handler、callback 通过传参实现）
- 特性
  - 不使用 this
- 代码封装
  - 模块化

## 函数式编程 典型代码 {#code-example}

### 关于副作用 {#code-of-side-effect}

FP：

```typescript
import { curry } from 'ramda';

let two = 2;
// * 纯函数，柯里化
const add = curry((a, b) => a + b);

const add2 = add(two); // => fn {}
const result1 = add2(3); // => 5

two = 2.1;
const result2 = add2(3); // => 5
```

非 FP：

```typescript
let two = 2;

// * 副作用（引入了外部变量，导致结果不可预期）
const add2 = (b) => two + b;
const result1 = add2(3); // => 5

two = 2.1;
const result2 = add2(3); // => 5.1
```

## 函数式编程 相关 {#related}

### FP 在 JS 中的应用 {#fp-in-real-js-world}

虽然这些库在 JS 中仅仅采用了 FP 的风格，  
或仅仅只实施了 FP 理念中的极小一部分。

但无论如何，FP 在现实开发中的确占有一席之地。

#### RxJS

[RxJS](/frontend/rxjs) v6 取消了 v5 版链式调用写法，  
转而使用 pipe 和纯函数进行实现。

[HowTo: Convert to pipe syntax - RxJS v5.x to v6 Update Guide](https://rxjs-dev.firebaseapp.com/guide/v6/migration#howto-convert-to-pipe-syntax)

```typescript
// * v5
const v5$ = Observable.interval(500)
  .filter((e) => e % 2 === 0)
  .map((e) => e * 10);

// * v6
const v6$ = interval(500).pipe(
  filter((e) => e % 2 === 0),
  map((e) => e * 10),
);
```

#### React Hooks

[React Hooks](/frontend/react-hooks) 系列函数虽然在内部实现机制上有副作用，  
（通过切换 `ReactCurrentDispatcher`，以及在内部保存数据）  
但在语法上相比之前 class 的写法已经比较有 FP 的味道了。

```jsx
const App = () => {
  const [value, setState] = useState(0);
  const count = () => setState((value) => value + 1);
  return <button onClick={count}> {value} </button>;
};
```
