# JavaScript 入门指南

> 返回 [JavaScript 学习指南](./js-foundation.md) 系列

## 学习 JavaScript 初级知识

### 概览

- 耗时：
  - 从零入门到掌握基本语法和 API，大约在 20~40 小时之内
- 难点：
  - 培养编程（自动化处理）的思维
  - 熟练运用常用 API
- 工具：
  - [前端开发入门指南](./fe-development-cookbook.md)
    - [Chrome](./chrome.md)
    - [VS Code](./vscode.md)
      - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### 学习路线

- 前置学习
  - 准备工作
    - **调整好网络**
    - [学习方法论](./english-using.md)
    - [英语 训练指南（编程篇）](./english-using.md)
    - [计算机科学 入门指南](./computer-science.md)
  - [JavaScript 简介](./js-intro.md)
- 学习 JavaScript 基础
  - 准备工作
    - 学习如何运行 JavaScript 代码
    - 学会简单调试（`console.log`）
  - 学习 ES5 主要概念
    - 练习所有语法和特性
    - 练习所有常用 API
  - 学习 ES6+ 基本概念
  - 了解 JSON 的概念
- 下一步
  - 返回 [JavaScript 学习指南](./js-foundation.md) 系列

## 资料

### 自学教材

其实这些材料有很多内容是重复的，  
然而重复的好处是可以加深记忆，熟悉之后阅读速度会变快。  
（比如我为了写这篇文章，重新复习完**所有**这些材料只花了不到一天。）

- 快速入门
  - [How to Run JavaScript Code](https://fireship.io/courses/javascript/beginner-js-where-to-run/)
  - [JavaScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/javascript/)
- 视频教程
  - [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2019]](https://www.youtube.com/watch?v=W6NZfCO5SIk)  
    48 分钟：如何基于 HTML 运行 JS，JS 基本语法
  - [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)  
    100 分钟：JS 简介，JS(ES6) 语法、基本类型、API，类，简单 DOM 编程
  - [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg)  
    200 分钟：运行 JS 的多种方式，JS(ES6) 语法、API、执行细节、代码技巧、模块化（共 134 个基本知识点）
- 文档级教程
  - [现代 JavaScript 教程](https://zh.javascript.info/)：前几章（JS 基础部分）
  - [JavaScript 教程 - 阮一峰](https://wangdoc.com/javascript/index.html)：前几章（除了 DOM 的部分）
  - [ECMAScript 6 入门 - 阮一峰](https://es6.ruanyifeng.com/)：前几章（ES6 语法扩展的部分）
- 书籍
  - [JavaScript 权威指南](https://book.douban.com/subject/2228378/)：犀牛书，第一部分（语言核心）
  - [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/)：红宝书、高程，（第 3 版）前七章（JS 部分）
  - [你不知道的 JavaScript](https://book.douban.com/series/40642)：小黄书，下卷 第一部分（ES5） + 第二部分前两章（ES6）

### ES6+

- [领略原生 JavaScript ES6~ES10 的魅力](http://www.imooc.com/article/293012)
- [ES6、ES7、ES8、ES9、ES10 新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2)

### 文档

- [JavaScript - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
  - 语言特性
    - [语句和声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements)
    - [表达式和运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)
    - [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    - [函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions)
  - [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

* [Standard ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

### 实战

## JavaScript 初级知识体系

### JavaScript 语言特性

- 区分大小写
- 高级语言（不是机器语言）
- 弱类型（不用手动声明类型）
- 动态类型（一个变量可以转换类型）
- 多范式（FP、OO）
- 基于原型的继承
  - 函数也是 Object
- 函数是一等公民
  - 高阶函数的概念
  - 函数没有重载
- 单线程
- 非阻塞（EventLoop 队列）
- 垃圾回收
- JIT（Just-In-Time）

### JavaScript 语言概念

#### JavaScript 语言组成

- 语法
  - 区分大小写、标识符（变量）、注释、语句、
  - 严格模式 `"use strict;"`
  - 原始表达式、字面量表达式
- 关键字和保留字
- 变量（声明 Declaration）
  - `function`、`var`、`let`、`const`、`class`
- 数据类型
  - `typeof`、`instanceof`
  - 基本类型/内置对象
    - Primitive Types 原始值
      - `string`、`number`（浮点数）、`boolean`
      - `null`、`undefined`
      - `Symbol`（符号，表示唯一标识，ES6 新类型）
    - 引用类型/对象，标准内置对象，数据结构
      - `Object`
        - `Function`
        - `Array`、`RegExp`、`Date`、`Math` 等
- 全局对象、包装对象
- 操作符（Operator）
  - 一元操作符：`++`、`--`
  - 位操作符：`~`、`&`、`|`、`^`、`<<`、`>>`、`>>>`
  - 布尔操作符：`!`、`&&`、`||`
  - 乘性操作符：`*`、`/`、`%`
  - 加性操作符：`+`、`-`
  - 关系操作符：`<`、`>`、`<=`、`>=`
  - 相等操作符：`==`、`===`
  - 条件操作符（三元）：`a ? b : c`
  - 赋值操作符：`=`、`+=` 等
  - 逗号操作符： `(1, 2)` （返回逗号最后一项）
  - 分组操作符：`()` （圆括号）
- 语句（Statement）
  - 顺序语句
    - 声明、赋值、运算、调用、解构等
    - `with`（改变作用域）、`throw`、`void`、`eval`
  - 控制流
    - `if`、`break`/`continue`、`try/catch/finally`、`switch`
  - 迭代（循环）
    - `do-while`、`while`、`for`、`for-in`
- 函数
  - 函数声明、函数表达式
  - 调用（call）、按值传递
  - 直接调用、方法调用、构造函数、apply/call/bind
  - `this`、`arguments`（参数组）、`return`
- 对象
  - 属性、访问器（getter/setter）
  - `new`、`delete`
  - `toString`、`valueOf`

* 运算符特性：
  - 结合律和优先级
  - 一句语句可以包含多个运算符
  - 运算符可以理解为一种"内建函数调用语法"

#### 常用 API（ES6+）

- [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - `.toFixed()`
  - `isFinite()`, `isNaN()`, `parseInt()`, `parseFloat()`
  - `Number.EPSILON`, `Number.MAX_SAFE_INTEGER`
- [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
  - `.length`
  - `.concat()`, `.slice()`, `.split()`
  - `.includes()`, `.indexOf()`, `.match()`, `.replace()`
  - `.padStart()`, `.padEnd()`, `.startsWith()`, `.endsWith()`, `.trim()`
  - `.charAt()`, `.charCodeAt()`
  - `String.fromCharCode()`, `String.raw()`
- [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - `.length`
  - `.push()`, `.pop()`, `.shift()`, `.unshift()`
  - `.reverse()`, `.sort()`, `.flat()`
  - `.map()`, `.filter()`, `.reducer()`, `.forEach()`, `.every()`, `.some()`
  - `.concat()`, `.join()`, `.slice()`, `.splice()`
  - `.includes()`, `.indexOf()`, `.find()`, `.findIndex()`
  - `Array.from()`, `Array.isArray()`
- [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `Object.assign()`, `Object.create()`
  - `Object.getPrototypeOf()`
  - `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.fromEntries()`
  - `Object.freeze()`, `Object.seal()`
  - `.toString()`, `.valueOf()`
- [Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `.length`, `.name`
  - `.call()`, `.apply()`, `.bind()`
- [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
  - `Math.E`, `Math.PI`, `Math.SQRT1_2`, `Math.SQRT2`
  - `Math.abs()`, `Math.sign()`, `Math.ceil()`, `Math.floor()`, `Math.round()`, `Math.random()`
  - `Math.max()`, `Math.min()`, `Math.pow()`, `Math.log()`, `Math.log10()`, `Math.log2()`
  - `Math.sin()`, `Math.cos()`, `Math.tan()`, `Math.asin()`, `Math.acos()`, `Math.atan()`
- [Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - `Date.now()`, `Date.parse()`
  - `.getTime()`, `.getMonth()`, `.getDate()`, `getDay()`
  - `.getFullYear()`, `.getHours()`, `.getMinutes()`, `.getSeconds()`, `.getMilliseconds()`
- [RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  - `.exec()`, `.test()`
- [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
  - `JSON.parse`, `JSON.stringify()`
- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - `Promise.all()`, `Promise.race()`, `Promise.resolve()`, `Promise.reject()`
  - `.then()`, `.catch()`, `.finally()`
- [console](https://developer.mozilla.org/en-US/docs/Web/API/console)
  - `console.log()`, `console.warn()`, `console.info()`, `console.error()`, `console.clear()`
  - `console.table()`, `console.dir()`, `console.trace()`
  - `console.count()`, `console.assert()`
  - `console.time()`, `console.timeEnd()`, `console.group()`, `console.groupEnd()`
- [window/global](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope)
  - `setTimeout()`, `clearTimeout()`
  - `setInterval()`, `clearInterval()`

### 术语表

- **ECMA**：European Computer Manufacturers Association，欧洲计算机制造商协会
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

* **LHS**：Left hand side，指等号左边部分的表达式语句
* **RHS**：Right hand side，同理指等号右边部分
* **argument**：形参
* **parameter**：实参

## JavaScript 典型代码

### ES5 基本语法

```javascript
// 单行注释

/* 注释 */

/*
  多行注释
  多行注释
*/

// * ---------------- 变量

var a = '1';
var empty; // => undefiend 表示未赋值

// * ---------------- 字符串、运算、显式类型转换、方法调用

var str = 'hello' + ' ' + 'world!'; // => 'hello world!'
String(233); // => '233'
str.split(' '); // => ["hello", "world!"]

// * ---------------- 数字、运算优先级（括号）、特殊值、位运算

var num = 1 - ((3 + 1.5) * 4) / 2; // => 8
Number('2'); // => 2
(2).toFixed(3); // => "2.000"

var na = 'oh' / 'no'; // => NaN (not a number)
Infinity; // => 无穷大

((1 & 2) | 3) << 2; // => 12 (0b1100)

// * ---------------- 布尔值、逻辑运算、相等性、隐式类型转换

var bo = (true && false) || !'str'; // => false
Boolean(42); // => true

+0 <= -0; // => true
0 == '0'; // => true
0 === '0'; // => false
null === undefined; // => false

// * ---------------- 数组、字面量声明

var arr = [1, 'hello'];
var arr2 = new Array(3); // => [empty * 3]
arr.length; // => 2

var falsy = [0, [], '', false, null, undefined];

// * ---------------- 对象、嵌套对象、成员调用

var obj = {
  num: 1024,
  str: 'emmm',
  f: function(a, b) {
    console.log(a, b);
  },
  mix: { key: 'value', arr: [1, { k: 'v' }] },
};

var another = obj.num; // => 1024
obj.f(1, obj.str); // => 1 "emmm"

// * ---------------- 函数、参数、运行、返回值、上下文绑定

function run(a, b) {
  console.log('ahh', a, b); // => arr hello world
  return 'complete';
}
var result = run('hello', 'world'); // => 'complete'

run.call(obj, 'hello', 'world');
run.apply(obj, ['hello', 'world']);

var boundRun = run.bind(obj);
boundRun('hello', 'world');

// * ---------------- 逻辑流

if (true) console.log('inline');

if (false) {
  console.log('case 1');
} else if (2 > 3) {
  console.log('case 2');
} else {
  console.log('case 3');
}

// * switch
var score = 'A';
switch (score) {
  case 'A':
    console.log('Good');
    break;
  case 'B':
    console.log('Nice');
    break;
  default:
    console.log('Nope');
    break;
}

// * for
for (var i = 0; i < 3; i++) {
  console.log(i); // 打印 3 次
}

// * while
while (Math.random() < 0.7) {
  console.log('runned'); // 当条件为 true 时执行
}

// * ---------------- 类、this、prototype

function Legacy(arg) {
  this.value = arg;
}
Legacy.prototype = {
  log: function() {
    console.log('value is:', this.value);
  },
};

var inst = new Legacy(2); // => Legacy {value: 2}
inst.value; // => 2
inst.log(); // => value is: 2

// * ---------------- getter、setter

var obj2 = {
  get myValue() {
    return this._val;
  },
  set myValue(v) {
    this._val = 'hello ' + v;
  },
};

console.log(obj2.myValue); // => undefined
obj2.myValue = 'world';
console.log(obj2.myValue); // => hello world

// * ---------------- 基本包装类型、原型链、类型

'hello'.split(); // => ["hello"]
'hello'.split === String.prototype.split; // true
typeof 2; // => 'number'
typeof 'str'; // => 'string'
typeof [1, 2]; // => 'object'
```

### ES6+ 新增语法

```javascript
// * ---------------- 显式块级作用域
{
  // console.log(num);
  // let 和 const 会有暂时性死区现象
  // 提升了声明，但是没有赋值，取值会报错
  // => ReferenceError: Cannot access 'num' before initialization

  // * ---------------- 声明
  let num = 2;
  const str = `hello ${num}`; // => 'hello 2' （字符串增强）

  let obj = {
    k: 1,
    num, // => 2 （对象增强，自动查找上下文变量）
  };

  // * ---------------- 箭头函数、默认值
  const fn = (a, b = 666) => console.log(a, b);
  fn(233); // => 233 666

  // * ---------------- 类
  class MyClass extends Object {
    constructor(val) {
      super(val);
      this.val = val;
    }
    log() {
      console.log('really', this.val);
    }
  }

  const inst = new MyClass(666);
  inst.log(); // => really 666

  // * ---------------- 解构赋值（可嵌套）、剩余参数
  const [a, b, ...c] = [1, 2, 3, 4, 5]; // => a=1, b=2, c=[3, 4, 5]
  const { toString, valueOf } = Object;

  const arr = [...c]; // => [3, 4, 5] （新的数组）

  const fn2 = (a, ...rest) => console.log(rest);
  fn2(1, 2, 3); // => [2, 3]
}
```
