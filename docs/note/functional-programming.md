# 函数式编程 入门指南

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

极端的纯粹 FP 是不切实际且有难度的，  
在实际业务中，经常会不得不和副作用打交道。  
（网络请求，用户事件，I/O 等）

学习 FP，可以从计算层作为切入点。

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
  - [Redux](./redux.md)
  - [Immutable](https://immutable-js.github.io/immutable-js/)
  - [Immer](https://immerjs.github.io/immer/docs/introduction)
  - [Rmada](https://ramdajs.com/)
  - [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide)
- FP 的优势
  - 代码可靠性
  - 易于测试
  - 组合开发
- 注重 FP 的编程语言
  - Haskell
  - ClojureScript
  - JavaScript

## 学习 函数式编程 {#study}

### 概览 {#study-overview}

- 耗时：
  - 从入门到理解基本概念，大约 10~20 小时
  - 深入理解和系统训练，至少 80 小时
- 难点：
  - 新的编程思维方式
  - 数学和 FP 高等概念
- 工具：
  - [JavaScript](./js-foundation.md)
  - [Rmada](https://ramdajs.com/)

### 学习路线 {#study-roadmap}

- 前置学习
  - [计算机科学入门](./computer-science.md)
  - [JavaScript](./js-foundation.md)
  - （[TypeScript](./typescript.md)）
  - （单元测试 [Jest](./jest.md)）
- 学习函数式编程
  - 观看资料中的视频部分，理解函数式编程的核心原则
  - 练习 JS 中自带的 `map`/`filter`/`reducer`
  - 学习使用包含轻度 FP 思想的库（Ramda，Redux 等）
- 实战
  - 在业务中编写纯函数，处理副作用
  - 将已有的逻辑以 FP 方式重新实现
- 进阶
  - 系统地 FP 概念代码训练（如 Monad 等）
  - 学习 Haskell
  - 学习 FP 设计模式
- 迷思
  - 如何更好地管理副作用

## 资料 {#references}

### GitHub {#ref-from-github}

- [Awesome Functional Programming](https://github.com/xgrommx/awesome-functional-programming)：资料收集
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)：FP 术语解释
- [fantasy-land](https://github.com/fantasyland/fantasy-land)
- [ramda-fantasy](https://github.com/ramda/ramda-fantasy)

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
    - 0: 00 - 介绍，历史背景，概述
    - 2: 55 - 什么是 FP，FP 不是黑魔法，OOP 概览和可能存在的局限性
    - 8: 29 - 什么是编程，不同编程语言中的概念
    - 10: 06 - FP 和 OOP 中相同的部分，FP 更相当于是一种组织代码的理念
    - 11: 17 - 计科和数学碰到的相同困境：如何组织系统、如何做抽象？
    - 13: 48 - 函数，集合，输入输出，map，纯函数，副作用
    - 17: 41 - 为什么 FP 使程序更易于编写和理解，新的问题和解决方案，Immutable，Persistent data structure
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
  - [Functional programming design patterns by Scott Wlaschin](https://www.youtube.com/watch?v=E8I19uA-wGY)：65 分钟
  - [Brian Lonsdorf - Oh Composable World!](https://www.youtube.com/watch?v=SfWR3dKnFIo)：28 分钟
    - 0: 40 - chain、pipeline、控制流
    - 3: 51 - 编程中的反数学范式，范畴论，组合
      - 7: 09 - 声明：Box
      - 10: 39 - 循环：map/filter/reduce
      - 11: 29 - 回调、副作用：lazy Promise
      - 14: 51 - 分支、错误处理：Either
    - 17: 58 - 风格
    - 20: 24 - 在 React 中的尝试
    - 26: 18 - 小结，映射 = 组合 = 程序结构

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
  - [如何使用纯函数式 JavaScript 处理脏副作](用https://github.com/xitu/gold-miner/blob/master/TODO1/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript.md)
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
- 组合软件
  - 译文
    - [0 - 简介](https://github.com/xitu/gold-miner/blob/master/TODO1/composing-software-an-introduction.md)
    - [1 - 跌宕起伏的函数式编程](https://github.com/xitu/gold-miner/blob/master/TODO/the-rise-and-fall-and-rise-of-functional-programming-composable-software.md)
    - [2 - 为什么用 JavaScript 学习函数式编程](https://github.com/xitu/gold-miner/blob/master/TODO/why-learn-functional-programming-in-javascript-composing-software.md)
    - [3 - 函数式程序员的 JavaScript 简介](https://github.com/xitu/gold-miner/blob/master/TODO/a-functional-programmers-introduction-to-javascript-composing-software.md)
    - [4 - 高阶函数](https://github.com/xitu/gold-miner/blob/master/TODO/higher-order-functions-composing-software.md)
    - [5 - Reduce](https://github.com/xitu/gold-miner/blob/master/TODO/reduce-composing-software.md)
    - [6 - Functor 与 Category](https://github.com/xitu/gold-miner/blob/master/TODO/functors-categories.md)
    - [7 - 函数式 Mixin](https://github.com/xitu/gold-miner/blob/master/TODO/functional-mixins-composing-software.md)
    - [8 - ES6+ 中的 JavaScript 工厂函数](https://github.com/xitu/gold-miner/blob/master/TODO/javascript-factory-functions-with-es6.md)
    - [9 - 为什么在使用了类之后会使得组合变得愈发困难](https://github.com/xitu/gold-miner/blob/master/TODO/why-composition-is-harder-with-classes.md)
    - [10 - 借助函数完成可组合的数据类型](https://github.com/xitu/gold-miner/blob/master/TODO/composable-datatypes-with-functions.md)
    - [11 - JavaScript 让 Monad 更简单](https://github.com/xitu/gold-miner/blob/master/TODO/javascript-monads-made-simple.md)
    - [12 - 模拟是一种代码异味](https://github.com/xitu/gold-miner/blob/master/TODO/mocking-is-a-code-smell.md)
    - [13 - 对象组合中的宝藏](https://github.com/xitu/gold-miner/blob/master/TODO/the-hidden-treasures-of-object-composition.md)
    - [14 - 优秀的嵌套三元表达式](https://github.com/xitu/gold-miner/blob/master/TODO/nested-ternaries-are-great.md)
    - [15 - 抽象与组合](https://github.com/xitu/gold-miner/blob/master/TODO1/abstraction-composition.md)
    - [16 - 被遗忘的面向对象编程史](https://github.com/xitu/gold-miner/blob/master/TODO1/the-forgotten-history-of-oop.md)
    - [17 - 柯里化与函数组合](https://github.com/xitu/gold-miner/blob/master/TODO1/curry-and-function-composition.md)
    - [18 - Transducers：JavaScript 中高效的数据处理 Pipeline](https://github.com/xitu/gold-miner/blob/master/TODO1/transducers-efficient-data-processing-pipelines-in-javascript.md)
    - [19 - Lenses：可组合函数式编程的 Getter 和 Setter](https://github.com/xitu/gold-miner/blob/master/TODO1/lenses-composable-getters-and-setterssfor-functional-programming.md)
  - [Composing Software: The Book](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc)
  - 出书重新排版后未翻译的章节
    - [The Dao of Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd)
    - [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
    - [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
    - [Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f)

## 函数式编程 知识体系 {#knowledge-map}

### 前端中常见的 FP 概念 {#fp-in-frontend}

- Higher-Order Functions (HOF)：高阶函数
- Closure：闭包
- Currying：柯里化
- Function Composition：函数组合
- Pure Function：纯函数
- Side effects：副作用
- Point-Free Style：隐式参数
- Functor：函子
- Lambda Calculus：Lambda 演算
- Lazy evaluation：惰性求值

## 函数式编程 典型代码 {#code-example}

### 关于副作用 {#code-of-side-effect}

FP：

```typescript
// * 柯里化
import { curry } from 'ramda';

let two = 2;
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
