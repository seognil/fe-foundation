# JavaScript 入门指南

查看 [JavaScript 学习指南](./js-foundation.md) 完整系列

## 学习 JavaScript 初级知识

### 概览

- 耗时：
  - 从零入门到掌握基本语法，控制在 20~40 小时之内
- 难点：
  - 培养自动化处理的思维
  - 熟练运用常用 API
- 工具：
  - [Chrome](./chrome.md)
  - [VS Code](./vscode.md)
  - [Node.js](./npm-overview.md)

### 学习路线

- 前置学习
  - **调整好网络**
  - [学习方法论](./english-using.md)
  - [英语 训练指南（编程篇）](./english-using.md)
  - [计算机科学 入门指南](./computer-science.md)
  - HTML + CSS
- 学习 JavaScript 入门
  - 基本
    - 学习 ES5 主要概念
      - 语法和特性
      - 基本内置对象
      - DOM 操作
    - 学习 ES6+ 基本概念
    - JSON
  - Node.js、npm、模块化
  - 进阶
    - Event Loop
    - 闭包
    - 垃圾回收
    - JS 代码执行原理
- 实战
  - 抄几个 Example，做点小东西
- 进阶
  - Node.js 开发
  - V8 和 libuv
- 迷思
  - 什么是元编程
  - 什么是反射
  - 什么是运算符重载，JS 里能不能实现

## 资料

### 自学教材

- [JavaScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/javascript/)
- [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg)
- [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)

* [现代 JavaScript 教程](https://zh.javascript.info/)
* [JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/)
* [ECMAScript 6 入门 - 阮一峰](https://es6.ruanyifeng.com/)

### ES6+

- [领略原生 JavaScript ES6~ES10 的魅力](http://www.imooc.com/article/293012)
- [ES6、ES7、ES8、ES9、ES10 新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2)

### 文档

- 语言特性
  - [语句和声明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements)
  - [表达式和运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)
  - [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  - [函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions)
- [JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

* [JavaScript - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
* [Standard ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

### 实战

- [JavaScript 30 - Wes Bos](https://javascript30.com/)

## JavaScript 初级知识体系

### JavaScript 语言特性

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

### JavaScript 语言概念

#### 基本组成

- 基本类型/内置对象
  - Primitive Types 原始值
    - **string**、**number**（浮点数）、**boolean**
    - **null**、**undefined**
    - **Symbol**（符号，表示唯一标识，ES6 新类型）
  - 对象，标准内置对象，数据结构
    - **Object**
      - **Function**
      - **Array**、**RegExp**、**Date**、**Promise** 等
      - ArrayLike（如 BigUint64Array 等）
      - **Map**、**Set** 等
      - **Proxy**
- 声明（Declaration）
  - **function**、**var**、**let**、**const**、**class**
- 语句（Statement）
  - 普通顺序**语句**
    - 声明、赋值、运算、调用、解构等
  - **控制流**
    - Block（花括号代码块）、if、break、try catch 等
  - **迭代**（循环）
    - for、while 等
- 函数调用（Call）
  - `fn(...args)`

#### 表达式/运算符（Expressions/operators）

- 运算符特性：
  - 结合律和优先级
  - 一句语句可以包含多个运算符
  - 运算符可以理解为一种"内建函数调用语法"
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

## JavaScript 典型代码

### ES5 基本语法

```javascript
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
// * 显式块级作用域
{
  // * 声明
  let num = 2;
  const str = `hello ${num}`;

  let obj = {
    k: 1,
    num, // => 2 （自动查找上下文变量）
  };

  // * 箭头函数、默认值
  const fn = (a, b = 666) => console.log(a, b);
  fn(233); // => 233 666

  // * 类
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

  // * 解构赋值（可嵌套）、剩余参数
  const [a, b, ...c] = [1, 2, 3, 4, 5];
  const { toString, valueOf } = Object;

  const fn2 = (a, ...rest) => console.log(rest);
  fn2(1, 2, 3); // => [2, 3]
}
```
