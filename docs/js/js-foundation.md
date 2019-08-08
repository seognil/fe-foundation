# JS Foundation

JS 基础纲要速写笔记

## JS 语言特性

[The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)  
[JavaScript: How It's Made](https://www.youtube.com/watch?v=FSs_JYwnAdI)  
[The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg)  
[JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)

- 高级语言
- 弱类型（不用手动声明类型）
- 动态类型（一个变量可以转换类型）
- 多范式（FP、OO）
- 基于原型的继承
- 单线程
- 垃圾回收
- 非阻塞（EventLoop 队列）
- JIT（Just-In-Time）

* 函数是一等公民
  - 高阶函数的概念
* 原型链
  - 函数也是 Object
* this

### 版本/方言/历史

* 缩写
  - ES：ECMAScript
  - TS：TypeScript
  - DSL：Domain-specific language
  - API：Application programming interface

- 相关词汇
  - ECMA-262：ECMAScript 标准的代号
  - ECMA TC39：TC for Technical Committee，ECMAScript 标准化组织的代号

* ECMAScript 官方规范（from _Ecma TC39_）
  - ES1~3：1995 起，上古版本
  - ES5：2009 起的版本（aka ES3.1）
  - ES6：2015 年大更新的版本，带动了 JS 预编译生态，后续逐年小幅度更新
* TypeScript：带类型检查的扩展集（from _Microsoft_）
* Flow：比 TS 功能少一点的类型检查扩展集，现已式微（from _Facebook_）
* 框架语言（基于 ES、TS 的 DSL）
  - JSX：React 的 JS + HTML 混合语法
  - Vue：Vue 自己的（文件）格式
* 方言
  - ActionScript：（ES4）衍生而来（用于 _Adobe_ Flash）
  - CoffeeScript：方言之一，简化了 JS 语法，现已式微
  - LiveScript：CoffeeScript 兄弟，现已式微（JS 早期曾用名也是这个，但是不同的东西）

目前，ES6 （及后续）、Typescript 是主流使用的基本语言

ES6 相比 ES5

- 多了一些语法
  - 或需要被编译器转义成 ES5 以增加旧环境兼容性
- 多了一些 API
  - 或需要 Polyfill
- 多了一些数据结构和类型
  - 或可以被编译器转义
  - 部分特性无法被完美模拟（如 Proxy）

### 模块化

- 目前常用
  - cjs：CommonJS（from _node_）
  - esm：ES Module（from _ES6_）
- 现已式微
  - amd：Asynchronous Module Definition（from _RequireJS_）
  - cmd：（from _Sea.js_）
  - 'window'：暴露到全局变量
  - umd：Universal Module Definition（混合封装方案，amd/cjs/window）
- 生态系统
  - [npm - Node Package Manager](https://www.npmjs.com/)
  - [package.json fields explained](https://github.com/stereobooster/package.json)

## JS 语法基本构成

[JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)  
[语句和声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements)  
[表达式和运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)  
[前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)

### 基本类型 内置对象

- 原始值
  - string、number、boolean
  - null、undefined
  - Symbol
- 对象，基本对象，数据结构
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

- 控制流
  - Block（代码块）、if、break、try cache 等
- 迭代
  - for、while 等

### 表达式 和 运算符

Expressions and operators

- Primary expressions（主要表达式、保留字、字面量）
- LHS（Left hand side，等号左边的部分）
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

- 运行环境
  - 浏览器（中的 JS 引擎：V8、SpiderMonkey 等）
  - Node
- 执行相关知识
  - AST
  - 执行流程：执行栈、hoisting、作用域、闭包
  - 不同的作用域的概念：全局、函数级、块级、词法、静态、动态
  - EventLoop
  - 闭包、垃圾回收
  - （查找相关）
    - 作用域链（声明查找）
    - 原型链（属性查找）
- EventLoop
  - synchronous code：同步代码
  - micro task：微任务
    - Promise
    - async （Promise 的语法糖）
  - macro task：宏任务
    - setTimeout
    - DOM API

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
  - Too Many

### 垃圾回收

[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)  
[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)

- 引用计数
- 标记清除

该特性的目的在于自动清除未使用的变量，不需要代码显式释放。

以图或树形结构的搜索来理解：  
就能很好理解为什么`标记清除法`能够解决`引用计数法`存在的问题了

## JS 执行过程

[The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript](https://www.youtube.com/watch?v=Nt-qa_LlUH0)  
[JavaScript Visualizer](https://javascriptvisualizer.com/)  
[使用断点暂停代码](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints?hl=zh-cn)  
[What is the Execution Context & Stack in JavaScript?](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)

[JavaScript. The Core.](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#variable-object)  
[从 JavaScript 作用域说开去](https://halfrost.com/javascript_scope/)  
[JavaScript 闭包](https://ufade.com/2016/08/15/bibao/)  
[反思闭包](http://jartto.wang/2017/12/18/reflective-closure/)  
[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

[块级作用域的函数提升](https://stackblitz.com/edit/block-function-hoisting?file=why.md)  
[Why is there a “temporal dead zone” in ES6?](https://2ality.com/2015/10/why-tdz.html)  
[Tail call optimization in ECMAScript 6](https://2ality.com/2015/06/tail-call-optimization.html)  
[What is "this"?](https://howtonode.org/what-is-this)

[ECMAScript® 2018Language Specification](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)  
[ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/)

### 相关词汇

- EC：Execution Context，执行上下文
- ECS：Execution Context Stack，执行环境栈
- Hoisting：（声明）提升
- Scope：作用域（概念）（可能是 Global、Closure、Block 等）
- Scope Chain：作用域链，存在于 EC 中，在浏览器内或表现为 `[[Scopes]]：Array`
- Closure：闭包

* VO：Variable Object，变量对象，每个 EC 的一部分，存放变量的地方
* AO：Activation Object，活动对象，可视为函数作用域中的 VO （多了 arguments）

- stack frame：栈帧，单个 EC
- StackOverflow：执行栈溢出
- segfault：Segmentation Fault，段错误（访问非法内存地址）
- TCO：Tail Call Optimization，尾调用优化
- TDZ：Temporal Dead Zone，暂时性死区（let、const 的特性）
- JIT：Just in time，及时化
- AOT：Ahead of Time，预处理

- IIFE：Immediately Invoked Function Expression，立即执行函数表达式

### 作用域

- static scope：静态作用域（根据代码结构就可以分析，不会动态改变）
- lexical scope：词法作用域（aka 静态作用域）
- dynamic scope：动态作用域（ECMAScript 中不存在）

* 作用域
  - Global Scope：全局作用域
  - Function Scope：函数作用域
  - Block Scope：块级作用域
    - with（严格模式禁止使用；有变量指向歧义，避免使用，可以用解构代替）
    - try/catch
    - let
    - const

由于函数有一层自己的作用域，可以利用 IIFE 来对代码过程进行包装，防止变量污染。

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

Global 的 VO 是引擎提供的 global/window 对象，  
这也就是为什么当位于**顶层**时（`this == global/window` 时），  
变量会挂载到 Global 对象上（ES6 新特性除外）。

### Program 生命周期

- 创建 ECS
- 开始 Global EC 流程（Global Code）

* code 类型
  - Global Code：产生 ECS 的第一个 EC，唯一顶层全局 EC
  - Function Code：将创建并入栈一个新 EC
  - Eval Code：根据浏览器不同（另有性能和安全问题，避免使用）
    - new Function()

#### HTML 中 script 标签的情况

无论是 src 引用，还是直接位于标签内部的 js 代码，  
每个 script 的顶层代码都位于 Global 层（ECS 栈底）。

因为在页面打开时，显然 window（Global VO）总是存在，  
所以每组代码都共用同一个 VO（window）。

但不同的 script 相当于不同的 Program 任务，  
所以其中一个 script 报错中断不会影响后续 script 执行。

#### Node 的情况

- 通过 `node` 命令直接启动环境后，直接位于 Global 层。
- 通过 `node filename.js` 命令执行代码，以模块化的形式读取和执行文件，
  - node 通过一个内部实现的包装函数，建立一个闭包环境，并不处于 Global 层
  - 提供 module.exports 并作为 this

### EC 生命周期

- **Creation**（准备环境，创建并入栈一个新 EC）

  - 创建当前 EC 的 VO/AO，并在其中：
    - 或创建 arguments 对象
    - Hoisting（提升）
      - 映射 arguments 的形参，可以视为 var 声明，在提升阶段时一同加入分析
        - 如果有函数体代码有同名 function，则 function 优先，丢弃了传入的实参
      - function 优先提升 （_FunctionDeclaration_）
        - 同名 function 保留的是最后一个 function
        - （function 实际上是 Object，函数名就是 Identifier（类似 var），但也提升函数体）
      - 变量声明 var let const （_VariableDeclaration_）
        - 同名变量，var 会忽略（比如已经有了 function 或 var，此时有另一个 var）
        - 但 ES6 新语法会报错（比如 let）（SyntaxError Identifier has already been defined）
          - ES6 在声明之前调用会有死区问题（虽然有提升但状态是未初始化）（ReferenceError: Cannot access before initialization）
      - 幅度
        - function 块级 + 函数级
        - var 函数级
        - let const class 块级
      - 不加 var 会成为隐式全局变量（global/window）
        - 严格模式报错 ReferenceError
      - 顶层声明的变量
        - var function 会成为全局属性（global/window）（是 EC.VO 的特性，不区分严格模式）
        - 但 ES6 新语法不会成为全局属性
  - 创建当前 EC 的作用域链
    - `当前的作用域链 == [父级的 VO/AO, ...父级的作用域链]`
  - 创建当前 EC 的 `this: ObjectThis || global || window || undefined`

- **Execution**（执行代码）

  - 所有代码大致都可以视为拆分成三个部分：左侧 运算符 右侧
    - 左右两个部分都或可继续进行拆分（递归，也就形成了树）
    - 每句代码执行时（如 赋值 或 函数调用）先对左侧进行标识查找
      - 左侧部分可能是 Identifier 或 MemberExpression
      - 查找失败则 ReferenceError 或 TypeError
    - 然后解析右侧（如 赋值 或 函数参数）
    - 然后执行运算符的操作（如 执行赋值操作 或 进入函数调用流程）

- **Finished**（执行结束，出栈 EC）
  - 显式 ReturnStatement 或没有 （视为 `return undefined`）
  - 卸载当前上下文
  - 卸载时可能会产生闭包

### 一些细节

- **arguments**：没有高级特性（严格、默认值、剩余运算符），且有非空实参时，会跟踪形参数值（双向同步），否则不会
  - 默认参数只对 undefined 实参有效
- **块级作用域`**：块级作用域的函数提升过程，只提升到块级作用域（严格模式），同时也提升到函数作用域（非严格模式）
- **length**：
  - someArray.length：`数组长度`，修改直接影响数组表现
  - arguments.length：`实参个数`，修改后影响类数组操作时的表现
  - someFn.length：`形参个数`，修改无效果
  - window.length：`iframe个数`，修改后不再表示 iframe 计数
  - global.length：`undefined`，未定义变量
- **箭头函数**：没有自己的 `this` 和 `arguments`
  - 所谓的 this 是词法作用域中的 this（相当于创建时 bind 父级环境的值）
  - 所以也不能进行 bind 和 call
  - 因为也是函数，所以也支持闭包的特性
- **this**
  - function 或 Eval 会创建新的 this（新的 EC），裸块不会
    - **方法调用**：`this == 宿主 Object`
    - **函数调用**：`this == global/window`
      - **严格模式**：`this == undefined`
    - **箭头函数**：没有自己的 this，`this == 绑定词法作用域的父级的 this`
  - **Global Code 直接读取**：`this == window`（浏览器）
    - **node module 下**：`this == module.exports`（初始是 `{}`，且不会像 arguments 一样进行跟踪）
- **严格模式**
  - Too Many

### 闭包

闭包可以理解为函数所需的 _作用域链_ 的 _快照_。

当函数执行完毕，若 EC 出栈销毁后，变量就会无法访问。

但可能该函数依然需要访问该 EC 中的变量，  
所以引擎将当前 _作用域链_ 转为闭包，标记到函数上，  
以便函数能够正常工作。  
（或按需保留变量以节省内存）  
（排除 this、arguments，因为他们是可变的）

JS 的闭包特性是引擎的内部实现，无法通过 JS 代码显式操控。

根据模块化和 webpack 打包的原理，显然每个 module 中的函数基本都有自己的闭包。  
说明闭包基本上无处不在。

闭包是一个正常的 JS 特性，但需要注意正确使用以避免内存泄露  
（以及毕竟 JS 没有显式垃圾回收，以及闭包无法直接操控）

#### 概念结构

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

#### 对于性能的影响

- **时间**
  - 减少执行时间（变量代码解析）
    闭包中的变量由于已经被解析完成，驻于内存（直到函数销毁垃圾回收）  
    所以相同逻辑下能够提高执行速度
  - 增加变量查找时间
    显然，闭包需要多一层或者几层变量查找动作  
    但根据不同浏览器的优化，一般情况下，这个耗时或可忽略不计
- **空间**：占用内存空间（直到所涉及的函数本体被回收）

显然可以利用闭包进行空间换时间

## 编译

- 编译原理：
  - 对代码进行词法分析
  - 分词成词法单元
  - AST 化
  - 根据 AST 进行结构调整和替换
  - 以相反的步骤拼接，最终成其他语言（ES5、C、汇编、字节码等）

### 相关词汇

- Lexer：词法分析器，分析代码结构
- Tokenizer：分词器，把代码打碎成单词组
- Parser：解析器，包含 Lexer、Tokenizer，最终输出 AST
  - acorn
  - babylon
  - typescript-eslint-parser
- Compiler：编译器，包含 Parser，最终输出新代码
  - Babel
  - TypeScript
- Interpreter：解释器，包含 Parser，解释型语言可以不需要完整的编译动作，读一段翻译一段执行一段

* Runtime：运行时，包含 Compiler/Interpreter、一些运行库、一些管理代码
  - node
  - babel-node
  - ts-node
  - deno

- BuildTime：编译时

* Bundler：打包工具，可以视为高阶 Compiler（封装多种 Compiler）
  - Webpack
  - Rollup

## AST 入门（宝宝级）

[AST Explorer](https://astexplorer.net/)

AST：Abstract Syntax Tree 抽象语法树

### AST 类型 （by acorn）

#### 基本构成

| 共有属性 | 值类型 |              |
| -------- | ------ | ------------ |
| type     | string | 类型名字     |
| start    | number | 代码起始位置 |
| end      | number | 代码结束位置 |

| 核心类型         |                |
| ---------------- | -------------- |
| Program          | 程序           |
| Identifier       | 标识符         |
| MemberExpression | 对象成员表达式 |
| Literal          | 字面量         |

| 声明                |          |
| ------------------- | -------- |
| VariableDeclaration | 变量声明 |
| FunctionDeclaration | 函数声明 |

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

| 其他               |                        |
| ------------------ | ---------------------- |
| VariableDeclarator | 变量声明的 LHS 部分    |
| FunctionExpression | 函数表达式（不是声明） |
| ThisExpression     | this                   |
| SequenceExpression | 逗号运算符             |
| ArrayExpression    | 数组字面量             |
| ObjectExpression   | 对象字面量             |
| BinaryExpression   | 位运算                 |

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

ClassBody {
  body: [
    MethodDefinition {
      key: Identifier {}
      kind: 'constructor' || 'method' || 'get' || 'set'
      value: FunctionExpression {}
    }
  ]
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
