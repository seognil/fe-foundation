---
title: JS Foundation *
date: 2019-12-30 15:41:29
permalink: /frontend/javascript-foundation-legacy-version
categories:
  - 前端开发
  - JavaScript
  - 草稿
tags:
  - JavaScript
---

# JS Foundation \*

> 这里这是旧版，有待整理，查看新版 [JavaScript 学习指南](/frontend/javascript-foundation)

JS 基础纲要速写笔记  
若有偏差敬请斧正

::: warning
TODO 2019/08/21  
目前关于闭包和垃圾回收的部分可能有严重的理解错误  
EventLoop 部分有待完善
:::

## JS 语言特性

[The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)  
[JavaScript: How It's Made](https://www.youtube.com/watch?v=FSs_JYwnAdI)  
[The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg)  
[JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)

[JavaScript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)

- 高级语言
- 弱类型（不用手动声明类型）
- 动态类型（一个变量可以转换类型）
- 多范式（FP、OO）
- 基于原型的继承
  - 函数也是 Object
- 函数是一等公民
  - 高阶函数的概念
- 单线程
- 垃圾回收
- 非阻塞（EventLoop 队列）
- JIT（Just-In-Time）

广义的 JavaScript 包含 `ECMAScript、DOM、BOM` 三个部分（浏览器环境）  
狭义的 JavaScript 可以只包含 `ECMAScript` 语言标准（理解为 Node 或嵌入式等环境都有的 JS）

### 版本/方言/历史

- 相关词汇
  - **ES**：ECMAScript
  - **TS**：TypeScript
  - **DSL**：Domain-specific language，领域特定语言，专门为了解决某一问题而不是通用的编程语言
  - **API**：Application programming interface，应用程序接口，将复杂逻辑封装抽象成函数调用
  - **Built-in**：内建的，比如数组的 `slice` 方法是浏览器引擎中以 C 编写的 API，而不是 JS 之后挂载的
  - **Polyfill**：能检测并（自动）模拟新标准 API 的 JS 代码，让旧浏览器和新浏览器的行为一致
  - **ECMA-262**：ECMAScript 标准 的代号
  - **ECMA TC39**：ECMAScript 标准化组织 的代号，TC 是 Technical Committee 缩写
  - **AKA**：As Known As
  - **Meta**：MetaDate，元信息，指关于信息的信息，比如：代码是信息，代码的版本是元信息

* **ECMAScript** 官方规范（from _Ecma TC39_）
  - **ES1~3**：1995 起，上古版本
  - **ES5**：（aka `ES3.1`）2009 起的版本
  - **ES6**：（aka `ES2015`）2015 年大更新的版本，带动了 JS 预编译生态，后续逐年小幅度更新
  - **Vanilla JavaScript**：民间称呼，指的就是标准/原生/不使用库的 JS，Vanilla 表示 Plain 或者 Pure
* **JSON**： JavaScript Object Notation，JS 对象表示法，基于 JS 语法子集的数据格式
* **TypeScript**：带类型检查的扩展集（from _Microsoft_）
* **Flow**：比 TS 功能少一点的类型检查扩展集，现已式微（from _Facebook_）
* 框架语言（基于 ES、TS 并含有扩展语法的 DSL/语法糖）
  - **JSX**：React 的 JS + HTML 混合语法
  - **Vue**：Vue 自己的（文件和 template）格式
* 方言（现已式微）
  - **ActionScript**：以 ES4 衍生发展成的旁支（用于 _Adobe_ Flash）
  - **CoffeeScript**：方言之一，简化了 JS 语法
  - **LiveScript**：CoffeeScript 的兄弟版本（JS 早期曾用名也是这个，但是不同的东西）

目前，ES6+、Typescript 是流行的基础语言

ES6 相比 ES5

- 多了一些语法
  - 或需要被预编译成 ES5 以增加旧环境兼容性
- 多了一些 API
  - 或需要 Polyfill
- 多了一些数据结构和类型
  - 或可以被预转译
  - 部分特性无法被完美模拟（如 Proxy）

### 模块化

[前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)

模块化能够以引用的方式拆分代码，  
使大型项目开发变得容易。

模块化是主流编程语言的标配。

- 相关词汇
  - **module**：模块，通常指一个业务功能，或指单个文件
  - **package**：包，通常指经过发布的可安装的 module，由一组代码文件构成
  - **package.json**：一个声明文件，记录包的依赖、元信息（标题、版本、作者等）等

* 目前常用
  - **esm**：ES Module（from _ES6_）
  - **cjs**：CommonJS（from _node_）
* 其他标准（现已式微）
  - **amd**：Asynchronous Module Definition（from _RequireJS_）
  - **cmd**：（from _Sea.js_）
  - **global**：暴露到全局变量（window）上
  - **umd**：Universal Module Definition（混合封装方案，自动判断 amd/cjs/window）
* 生态系统
  - [npm - Node Package Manager](https://www.npmjs.com/)
  - [package.json fields explained](https://github.com/stereobooster/package.json)

## JS 语法基本构成

[JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)  
[语句和声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements)  
[表达式和运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)  
[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)  
[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions)

### 基本类型 内置对象

- Primitive Types 原始值
  - string、number（浮点数）、boolean
  - null、undefined
  - Symbol（符号，表示唯一标识，ES6 新类型）
- 对象，标准内置对象，数据结构
  - Object
    - Function
    - Array、RegExp、Date、Error、Promise 等
    - ArrayLike（如 BigUint64Array 等）
    - Map、Set 等

### 声明

Declaration

function、var、let、const、class

### 语句

Statement

- 普通顺序语句
  - 声明、赋值、运算、调用 等
- 控制流
  - Block（花括号代码块）、if、break、try catch 等
- 迭代（循环）
  - for、while 等

### 函数调用

`fn(...args)`

### 表达式 和 运算符

Expressions and operators

运算符具有结合律和优先级的特性：  
一句语句可以包含多个运算符，  
这些不同运算符会根据一个优先级规则依次执行。
（因为 JS 是单线程的）

运算符可以理解为一种"内建函数调用语法"

- Primary expressions（主要表达式、保留字、字面量）
- LHS（Left hand side，指等号左边部分的代码）
- 运算符
  - 一元操作符
  - 数学运算
  - 位运算
  - 自增自减
  - 三元
  - 赋值、逗号
  - 关系运算（in、instanceof、比大小）

## JS 执行核心知识

[你不知道的 js（上卷）](https://www.kancloud.cn/kancloud/you-dont-know-js-scope-closures/516610)  
[EventLoop](https://stackblitz.com/edit/event-loop-2)
[Jake Archibald: In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

- 运行环境
  - 浏览器（中的 JS 引擎：V8、SpiderMonkey 等）
  - Node
- 执行相关知识
  - AST
  - 执行流程：执行栈、hoisting、作用域、闭包
  - 不同作用域的概念：全局、函数级、块级、词法、静态、动态
  - EventLoop
  - 闭包、垃圾回收
  - （查找相关）
    - 作用域链（裸变量查找）
    - 原型链（对象属性查找）
- EventLoop
  - synchronous code：同步代码
  - micro task：微任务
  - macro task：宏任务

### 相关词汇

- Call Stack 调用栈
  - Stack Overflow 栈溢出
- Memory Heap 内存堆（数据在内存中的存储）
  - Grabage Collection 垃圾回收

### 装箱/拆箱 基本包装类型

使原始值类型可以使用类的原型方法

```javascript
'123'.split('') === new String('123').split('');
```

### 隐式类型转换

[JavaScript 中的相等性判断](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

- Boolean
  - true
    - true
    - 所有对象
    - 非 0
    - 非 0 长度 string
  - false
    - false
    - 0
    - 0 长度 string
- 相等性
  - == 或进行类型转换
  - === 不进行类型转换
  - object 只有同一指针才相等
- String、Number
  - _Too Many_，总之动态类型的特性根据场景可以说方便，也可以说不方便

### 垃圾回收

[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)  
[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)

该特性的目的在于自动清除未使用的变量以释放内存，  
使开发者不需要以代码形式显式命令。

在前期能够提高开发效率，  
但要注意内存泄露（无法自动回收）会造成问题。

有两种方式能够实现垃圾回收：

- 引用计数
- 标记清除

`引用计数法`是以前的算法，但是无法释放循环引用  
`标记清除法`解决了这个问题

（以图或树形结构的搜索来理解，就能很好理解为什么。）

## JS 执行过程（同步）

[The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)  
[JavaScript Visualizer](https://javascriptvisualizer.com/)  
[使用断点暂停代码](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints?hl=zh-cn)

[JavaScript. The Core.](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#variable-object)  
[从 JavaScript 作用域说开去](https://halfrost.com/javascript_scope/)  
[JavaScript 闭包](https://ufade.com/2016/08/15/bibao/)  
[反思闭包](http://jartto.wang/2017/12/18/reflective-closure/)  
[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

[块级作用域的函数提升](https://stackblitz.com/edit/block-function-hoisting?file=why.md)  
[Why is there a “temporal dead zone” in ES6?](https://2ality.com/2015/10/why-tdz.html)  
[Tail call optimization in ECMAScript 6](https://2ality.com/2015/06/tail-call-optimization.html)  
[What is "this"?](https://howtonode.org/what-is-this)

[ECMAScript Language Specification](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)  
[ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/)

### 相关词汇

- **EC**：Execution Context，执行上下文，包含当前词法环境中的变量等信息
- **ECS**：Execution Context Stack，执行上下文栈，包括调用时产生的父级环境的一组 EC
- **Hoisting**：（声明）提升（为了预分配内存空间）
- **Scope**：作用域（可能是 Global、Closure、Block 等）
- **Scope Chain**：作用域链，存在于 EC 中，在浏览器内或表现为 `[[Scopes]]：Array`
- **Closure**：闭包，视为持久化的作用域

* **VO**：Variable Object，变量对象，每个 EC 的一部分，存放变量的地方
* **AO**：Activation Object，活动对象，可视为函数级作用域中的 VO （多了 arguments）
* **GO**：Global Object，特指 Global 层的 VO

- **stack frame**：栈帧，指单个 EC
- **stack overflow**：执行栈溢出（函数嵌套调用深度过大达到引擎设定的上限）
- **segfault**：Segmentation Fault，段错误（访问非法内存地址）
- **TCO**：Tail Call Optimization，尾调用优化（如果函数最后一句是另一个调用，则直接替换而不是入栈）
- **TDZ**：Temporal Dead Zone，暂时性死区（let、const 某特性的民间称呼）
- **JIT**：Just in time，及时化（运行时逐字解析编译）
- **AOT**：Ahead of Time，预处理（全部编译完再运行）

* **IIFE**：Immediately Invoked Function Expression，立即执行函数表达式，如 `(()=>{})()`

### 作用域

- **lexical scope**：词法作用域（以代码字面结构为依据的解析，不会根据调用位置而动态改变）
- **static scope**：静态作用域（aka 词法作用域）
- **dynamic scope**：动态作用域（ECMAScript 包括大多数编程语言中都不采用）

* 作用域
  - **Global Scope**：全局作用域
  - **Function Scope**：函数作用域
  - **Block Scope**：块级作用域
    - with（严格模式禁止；有变量指向歧义，避免使用，可以用解构代替）
    - try catch
    - let、const

由于函数有一层自己的作用域，可以利用 IIFE 来对代码过程进行局部封装，以便更好地管理变量。

### EC 概念结构

```javascript
{
  VO/AO：{
    arguments?: ArrayLike<ANY>,
    [declarations]: ANY,
  },
  [[Scopes]]: [
    Scope {}, // * 父级作用域
    Scope {}, // * 多级父级作用域
    Global {}, // * 栈底是全局作用域
  ],
  this: {} || undefined,
}
```

### 容易混淆的概念

有一些容易混淆的概念，它们看上去都是栈或数组的形式，  
随着代码运行和函数调用，都会产生入栈出栈动作，但是不同的东西。

- Callback Stack
  - 调用栈（概念），函数调用时产生的进度信息，当子过程结束时需要继续执行父过程
- Execution Context Stack
  - 执行上下文栈，包含一组 EC，是 Callback Stack 背后的实际数据结构，用于过程管理
- Scope Chain
  - 作用域链，是每个 EC 的一部分，包含一组词法作用域父级，用于外部变量查找
- Closure
  - 闭包，视为作用域链的持久化的快照
    引用外层变量

### Program 生命周期

- 创建 ECS
- 开始 Global EC 流程（Global Code）

* code 类型
  - **Global Code**：产生 ECS 的第一个 EC，唯一顶层全局 EC
  - **Function Code**：将创建并入栈一个新 EC
  - **Eval Code**：根据浏览器不同（另有性能和安全问题，避免使用）
    - new Function()

### EC 生命周期

- **Creation**（准备环境，创建并入栈一个新 EC）

  - 创建当前 EC 的 **VO/AO**，并在其中：
    - 或创建 arguments 对象
    - **Hoisting**（提升、声明解析）
      - 映射 arguments 的形参，可以视为 var 声明，在提升阶段时一同加入分析
        - 如果有函数体代码有同名 function，则 function 总是优先，丢弃了传入的实参
      - 不同类型的声明（根据代码分类）
        - function 声明 （`FunctionDeclaration`）
        - 变量声明 var、let、const （`VariableDeclaration`）
        - class 声明 （`ClassDeclaration`）
      - 细节（根据特性分类）
        - function 总是优先提升
          - 函数表达式 （`FunctionExpression`）  
            如 `var fn = function () {}`）中的函数是一个表达式语句，不是声明，  
            例子中只会提升变量 `fn` 的声明，不会提升函数
          - function 实际上是对象，函数名就是 `Identifier`（类似 var），但也提升函数体
        - var 只提升声明，不提升赋值，初始化为 `undefined`
        - let、const、class 只提升声明，不提升赋值，内部标记初始化为 "未初始化"
          - 在执行到声明代码所在行之前就调用，就会产生报错（因为未初始化）  
            （`ReferenceError: Cannot access before initialization`）  
            这个现象称之为“暂时性死区”
        - 同名声明（`Identifier`）
          - function、var （视为）总是能覆盖
            - function 以最后一个为准（带函数体）
            - var 由于只提升声明，所以覆盖不覆盖无所谓（视为忽略）
          - 但同名问题一旦涉及 ES6 新语法（let、const、class），则会报错  
            （`SyntaxError: Identifier has already been defined`）
      - 幅度
        - function 块级 + 函数级
          - 严格模式只提升到块级作用域
          - 非严格模式，除了块级提升，也会同时提升到函数作用域（旧标准特性）
        - var 函数级
        - let、const、class 块级
      - 不加 var 的且上下文没有该变量赋值操作会（隐式地）声明成全局变量（global/window）
        - 严格模式报错 `ReferenceError`
  - 创建当前 EC 的**作用域链**
    - 作用域链根据词法作用域解析得到，和 callback stack 是两回事
  - 创建当前 EC 的 **this**: `ObjectThis || global || window || undefined`

- **Execution**（执行代码）

  - JS 所有代码大致都可理解为**三个部分**：左侧、操作、右侧
    - 左右两个部分都或可继续进行拆分（**递归**，也就形成了 AST 中的 Tree 的结构）
    - 每句代码执行时（如 赋值的变量名 或 函数名）先对**左侧**进行标识查找
      - 左侧部分可能是 `Identifier` 或 `MemberExpression` 等
      - 查找失败则 `ReferenceError` 或 `TypeError` 等
    - 然后以相似的过程解析**右侧**（如 赋值的值 或 函数参数）
    - 然后基于解析完的左右侧，执行相应的**操作**（如 执行赋值操作 或 进入函数调用流程）
  - 查找变量先直接查找当前 VO/AO，如果找不到则基于当前作用域链依次向上查找，依然找不到则失败报错。

提示：  
很多编程语言都是类似 JS 的中缀的语法顺序，  
但有些语言可能有不同的顺序，如 Lisp 的顺序是前缀的：操作符 左侧 右侧  
JS `3 > 2 === true`，Lisp `EQUAL (> 3 2) T`

- **Finished**（执行结束，出栈 EC）
  - 显式的 `ReturnStatement` 或隐式的（视为 `return undefined`）
    - return 值将用于上一层相应位置（调用处）
  - 卸载当前上下文
    - 卸载时可能会产生闭包
  - 继续执行上一层后续代码

### 一些细节

- **arguments**：
  - 不使用高级特性（严格、默认值、剩余运算符），且有非空实参时，会跟踪形参数值（双向同步），否则不会
  - 默认参数只对 undefined 实参有效，其他 falsy 值不会判断。
  - 箭头函数的 arguments 是绑定词法作用域的父级的 arguments
- **length**：
  - **someArray.length**：`数组长度`，修改直接影响数组表现
  - **arguments.length**：`实参个数`，修改后影响类数组操作时的表现
  - **someFn.length**：`必要形参个数（不包含默认和剩余参数）`，修改无效果
  - **window.length**：`iframe 个数`，修改后不再表示 iframe 计数
  - **global.length**：`undefined`，未定义变量
- **箭头函数**：
  - 没有自己的 `this` 和 `arguments`
    - 所谓的 this 是词法作用域中的 this（相当于创建时自动 bind 好父级环境中的 this）
    - arguments 同理
    - 所以也不能进行 bind 和 call
  - 但因为依然还是函数，所以支持闭包的特性
- **this**：
  - **Global Code** 直接读取：`this == window`（浏览器）
    - **module**的情况：`this == module.exports`（初始是 `{}`，且不会像 arguments 一样进行跟踪）
  - **function 或 Eval** 会创建新的 this（新的 EC），裸块（只有花括号）不会
    - **方法调用**：`this == 宿主 Object`
    - **函数调用**：`this == global/window`
      - **严格模式**：`this == undefined`，因为严格来讲没有宿主
    - **箭头函数**：没有自己的 this，`this == 绑定词法作用域的父级的 this`
- **严格模式**
  - 作用域（`"use strict";` 的影响范围）是函数级的
  - _Too Many_，总是严格模式的目的大致就是对语句执行效果的"严格"

## 闭包

闭包可以理解为函数所需的 _作用域链_ 的**持久化**的**快照**。

（由于 JS 中的函数可以作为变量传递）  
当函数注册后，若所在位置发生改变，  
ECS 就会发生改变，函数的执行效果就会变得不可控。
（这将违反静态作用域的特性）

为了解决这个问题，引擎会对函数体中的变量进行词法解析，  
将当前 _作用域链_ （保留所需的变量）转为**闭包**，（隐式地）标记到函数上，  
以便函数能够正常工作。

传统 function 将排除 this、arguments，因为根据执行流程，这些值在每次函数调用时都重新生成。  
而箭头函数将会绑定这两个值（根据箭头函数的的特性，它们本来就是绑定的）

当函数调用时，使用闭包作为当前的作用域链（用于变量查找）。

JS 的闭包特性是引擎的内部实现，无法通过 JS 代码显式操控。

根据模块化和 webpack 打包的原理，显然每个 module 中的函数基本都有自己的闭包。  
说明闭包基本上无处不在。

闭包是一个正常的 JS 特性，但需要**注意**正确使用以避免内存泄露  
（以及毕竟 JS 没有显式垃圾回收，以及闭包无法直接操控）

### 概念结构

```javascript
fn {
  prototype: {
    constructor: fn,
  },
  // * 作用域链（解构就像正常执行时那样）
  [[Scopes]]: [
    Closure {}, // * 闭包
    Closure {}, // * 根据作用域链的概念，可能存在多级闭包
    Global {},
  ]
}
```

### 对于性能的影响

- **时间**
  - 减少执行时间（变量值的解析）
    闭包中的变量由于已经被解析完成，驻于内存（直到函数销毁垃圾回收）  
    所以相同逻辑下能够提高执行速度
  - 增加变量查找时间
    显然，闭包需要多一层或者几层变量查找动作  
    但根据不同浏览器的优化，一般情况下，这个耗时或可忽略不计
- **空间**
  - 占用内存空间（直到所涉及的函数本体被回收）

显然可以利用闭包进行空间换时间的操作

### 综合例子

#### 例子 1

JS 并不支持动态作用域  
生成闭包时需要解析和固定当前所有（所需）变量

调试以下代码或许可以加深理解：  
词法作用域、AO、作用域链、闭包、this 之间的关系。

以 chrome 进行试验，  
变量 `b1、b2` 并不会携带进闭包中（因为在那时的 ECS 中本来也不存在）。

从任意处调用，观察到调用时的作用域依然是相同的（闭包）结构，  
打开注释行将会得到 `ReferenceError`。

```javascript
var AA = ((a1) => {
  var a2 = 2;
  return function (a4) {
    var a3 = 3;
    console.warn([a1, a2, a3, a4]);
    // console.warn([b1, b2]); // * nest scope search test
    console.warn(this);
  };
})(1);

AA('direct call');

var obj = { AA };
obj.AA('obj call');

(() => {
  var b1 = 'q';
  (() => {
    var b2 = 'w';
    console.warn([b1, b2]);
    AA('nested scope call');
  })();
})();
```

## 代码文件的上下文

了解了一些 JS 标准的原理和特性，  
但实际代码文件，在不同运行环境下，会拥有略有不同的执行环境。

下文中的**顶层**是层级的层，指代码文件中的顶层书写层级（不在函数体或块中的）。

### HTML 中 script 标签的情况

无论是 src 引用，还是直接位于标签内部的 js 代码，  
每个 script 的顶层代码都**位于** Global 层（ECS 栈底）。

在页面打开后，显然 window（GO）总是存在（直到页面关闭），  
所以每组代码都共用同一个 window，`this == window`。

但不同的 script 相当于不同的 Program 任务，  
都会创建一套独立的完整的 Program 生命周期（当然其中的 GO 还是同一个），  
所以其中一个 script 报错中断也不会影响后续 script 执行。

### Node 的情况

- 通过 `node` 命令直接启动环境后，直接**位于** Global 层，`this == global`。

* 通过 `node filename.js` 命令执行代码，以模块化的形式读取和执行文件，
  - node 将使用内建的包装函数加载文件代码，这时文件中的顶层代码**并不位于** Global 层
  - `this == module.exports`

### Webpack 打包的情况

虽然一般用途也是在浏览器运行，  
但是类似 node 中的模块化，webpack 也有一个（JS 实现的）加载器来加载代码。

每个 module 的顶层代码**并不位于** Global 层。
同样的 `this == module.exports`

但是打包会默认会加上 `"use strict";`，
所以默认 `this == undefined`

### 顶层声明挂载到 Global

Global 的 VO 是引擎提供的 global/window 对象，  
当位于**顶层**时，  
ES5 旧标准的 var、function 声明**会**成为 Global 对象的属性。

而 ES6 新标准中，对新加入的关键字 let、const、class 进行了调整，  
如果是这些声明在**顶层**，会创建一层新的 EC 层来存放变量，  
避免直接挂载到 Global 上。  
（Chrome 中可以直接观察到该 EC 类名为 `Script` ）

## JS 执行过程（异步）

[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

如果碰到诸如 点击事件、Http 请求 等相对耗时的任务时，  
JS 引擎将这些任务标记并挂起（加入事件队列中），
以便继续执行能够较快完成的同步任务。

当同步任务完全结束之后，系统处于空闲状态，  
此时再执行这些相对（空载）耗时较多的任务，  
以便不会阻塞整体项目运行，提高运行效率和用户体验。

这就是为什么，虽然 JS 本身是同步的（单线程），但也能够实现"异步"。

JS 中使用 `EventLoop` 机制完成异步过程。

这个机制是引擎的内部实现，JS 无法直接操控。

### 相关词汇

- **EventLoop**：事件循环（机制）
- **FIFO**：First-In First-Out，先进先出
- **LIFO**：Last-In First-Out，后进先出
- **Stack**：栈，后进先出结构
- **Queue**：队列，先进先出结构

### EventLoop 层级

EventLoop 有三个层级：

- synchronous code：同步代码
  - process.nextTick （位于 同步 和）
- micro task：微任务
  - Promise、async （Promise 的语法糖）等
- macro task：宏任务
  - setTimeout、DOM API 等

### EventLoop 执行流程

所有 script 一开始都只可能是同步代码

- 执行**同步**代码
  - 如果遇到到**异步任务**，**入队**到相应的队列中，不直接执行
  - **继续**执行后续同步代码**直到全部执行完毕**
- 检查**微任务**队列
  - 如果队列**不为空**，**出队**一个微任务准备执行，进入**同步任务**流程
  - 如果队列**为空**，进入**宏任务**流程
- 检查**宏任务**队列
  - 如果队列**不为空**，**出队**一个宏任务准备执行，进入**同步任务**流程
  - 如果队列**为空**，结束并**等待**新的任务

事件的概念：  
代码中的 `on('click', fn)`、`setInterval(fn, time)` 等等语句，实际上就是对异步任务的声明。  
在适当的时机，运行环境会自行将事件加入任务队列中。

（至于如何实现？再深入就涉及到硬件、CPU 调度等等知识了，这里不进行展开。）

## 编译

- 编译原理：
  - 对代码进行词法分析
  - 分词成词法单元
  - AST 化
  - 根据 AST 进行结构调整和替换
  - 以相反的步骤拼接，最终成其他语言（ES5、C、汇编、字节码等）

### 相关词汇

- **Lexer**：词法分析器，分析代码结构
- **Tokenizer**：分词器，把代码打碎成单词组
- **Parser**：解析器，包含 Lexer、Tokenizer，最终输出 AST
  - acorn
  - babylon
  - typescript-eslint-parser
- **Compiler**：编译器，包含 Parser，最终输出新代码
  - Babel
  - TypeScript
- **Interpreter**：解释器，包含 Parser，解释型语言可以不需要完整的编译动作，读一段翻译一段执行一段

* **Runtime**：运行时，指一个程序，包含 Compiler/Interpreter、一些运行库、一些管理代码
  - node
  - babel-node
  - ts-node
  - deno

- **BuildTime**：编译时

* **Bundler**：打包工具，可以视为高阶 Compiler（封装多种 Compiler）
  - Webpack
  - Rollup

## AST 入门（宝宝级）

[AST Explorer](https://astexplorer.net/)

AST：Abstract Syntax Tree 抽象语法树

大致了解 AST 和编译原理的概念，能够更好地理解代码执行过程。

### AST 类型 （by acorn）

#### 基本构成

| 共有属性 | 值类型 |              |
| -------- | ------ | ------------ |
| type     | string | 类型名字     |
| start    | number | 代码起始位置 |
| end      | number | 代码结束位置 |

| 核心类型         |                    |
| ---------------- | ------------------ |
| Program          | 程序主体           |
| Identifier       | 标识符（裸变量名） |
| MemberExpression | 对象成员表达式     |
| Literal          | 字面量             |

| 声明                |          |
| ------------------- | -------- |
| VariableDeclaration | 变量声明 |
| FunctionDeclaration | 函数声明 |
| ClassDeclaration    | 类声明   |

| 函数调用       |            |
| -------------- | ---------- |
| CallExpression | 函数调用   |
| NewExpression  | new 操作符 |

| 语句基本构成（父级） |        |
| -------------------- | ------ |
| ExpressionStatement  | 语句   |
| BlockStatement       | 代码块 |

#### 其他类型（一部分）

| 控制流（父级）   |       |
| ---------------- | ----- |
| ForStatement     | for   |
| WhileStatement   | while |
| LabeledStatement | label |

| 操作符（赋值 运算等） |                  |
| --------------------- | ---------------- |
| AssignmentExpression  | 赋值 `a = 2`     |
| UpdateExpression      | 自增 `a++`       |
| UnaryExpression       | 一元 `!a`        |
| ConditionalExpression | 三元 `a ? 1 : 2` |

| 模式              |              |
| ----------------- | ------------ |
| ArrayPattern      | 解构         |
| ObjectPattern     | 解构         |
| AssignmentPattern | 函数默认参数 |
| RestElement       | 剩余参数     |

| 其他               |                         |
| ------------------ | ----------------------- |
| VariableDeclarator | （变量声明的 LHS 部分） |
| FunctionExpression | 函数表达式（不是声明）  |
| ThisExpression     | this                    |
| SequenceExpression | 逗号运算                |
| ArrayExpression    | 数组字面量              |
| ObjectExpression   | 对象字面量              |
| BinaryExpression   | 二元运算                |

### AST 结构笔记（一部分）

```javascript
公共部分 {
  type: string,
  start: number,
  end: number,
}

Program {
  body: [ ANY ],
  sourceType: "module",
}

Identifier {
  name: string
}

Literal {
  value: ANY,
  raw: string
}

VariableDeclaration {
  declarations: [
    VariableDeclarator {
      id: Identifier {},
      init: ANY || null,
    }
  ],
  kind: "const"
}

ExpressionStatement {
  expression: AssignmentExpression {
    operator: string
    left:
      Identifier {}
      || MemberExpression {
        object: Identifier {}
        property: Identifier {}
      }
      || ANY
    right: ANY
  }
}

FunctionDeclaration {
  id: Identifier {},
  params: [
    Identifier {}
    || AssignmentPattern {
      left: Identifier {}
      right: ANY
    }
  ]
  body: BlockStatement {
    body: [
      ANY
      || ReturnStatement {
        argument: ANY
      }
    ]
  }
}

CallExpression, NewExpression {
  callee: Identifier {} || MemberExpression{} || Literal {}
  arguments: [ ANY ]
}

ClassDeclaration {
  superClass: Identifier {} || null,
  body: ClassBody {
    body: [
      MethodDefinition {
        key: Identifier {}
        kind: 'constructor' || 'method' || 'get' || 'set'
        value: FunctionExpression {}
      }
    ]
  }
}



SequenceExpression {
  expressions: [ ANY ]
}

ArrayExpression {
  elements: [ ANY ]
}

ObjectExpression {
  properties: [
    Property {
      key: Identifier {}
      kind: 'init' || 'get' || 'set' || ANY
      value: Literal {} || Identifier {} || FunctionExpression {} || ANY
    }
  ]
}
```
