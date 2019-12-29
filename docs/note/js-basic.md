# JavaScript 入门指南

> Libraries come and go,  
> Patterns and approaches stick around.

## JavaScript 简介

### 什么是 JavaScript

JavaScript（通常缩写为 JS）是一种解释型高级语言。  
通常作为开发 Web 页面的脚本语言，  
但是它也可以在非浏览器环境中使用，例如 Node.js。

广义的 JavaScript 包含三个部分：

- `ES`：ECMAScript，脚本语言标准
- `DOM`：Document Object Model，文档对象模型
- `BOM`： Browser Object Model，浏览器对象模型

狭义的 JavaScript 可以只指 `ECMAScript`，  
可以简单理解为浏览器、Node 嵌入式等所有环境都必须支持的 JS 功能子集。  
（去掉了 `document`、`window` 等概念）

### 什么是 ES6

ES 就是 ECMAScript，  
ES2015/ES6 是 ES 的一个里程碑（大更新）版本，  
其中 2015 表示年份，6 表示版本号，  
（目前最新的是 ES2019/ES10）  
ES6+ 是前端开发的基本语言。

- ES6 相比 ES5：
  - 多了一些语法
    - 或需要被预编译成 ES5 以增加旧环境兼容性
  - 多了一些 API
    - 或需要 Polyfill
  - 多了一些数据结构和类型
    - 或可以被预转译
    - 部分特性无法被完美模拟（如 Proxy）

### 为什么要用 JavaScript

- 如果你想编程入门
- 如果你想魔改某些页面
- 如果你想从事前端开发工作

## 学习 JavaScript

### 概览

我自己目前在 **JS 本身** 上的学习可能已经累计超过 200~500 小时。  
（甚至还没进入核心层面，只能算略懂甚至有一些理解偏差）

但对于入门来说，我认为合适的方式是：  
先理解最基本的编程思想，  
熟悉 JS 语法特性并了解 JS 的大致样貌，  
然后再逐渐覆盖各个部分的细节。

- 耗时：
  - 从零入门到掌握基本语法，最好控制在 20~60 小时之内
  - 熟悉 API 和进阶原理可能需要以实战作为铺垫（几百小时）
- 难点：
  - 自动化处理的思维
  - 熟练运用常用 API
  - 掌握高级特性，例如：作用域、原型链、this、闭包…
- 工具：
  - [Chrome](./chrome.md)
  - [VS Code](./vscode.md)
  - [Node.js](./npm-overview.md)

### 学习路线

- 前置基础
  - **调整好网络**
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

- [前端模块化](./js-modular.md)
- [正则表达式](./regexp.md)

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

### 书

- [JavaScript 权威指南](https://book.douban.com/subject/2228378/) 犀牛书（不推荐，直接看 MDN 就好了）
- [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/) 红宝书
- [JavaScript 语言精粹](https://book.douban.com/subject/3590768/) 蝴蝶书
- [你不知道的 JavaScript](https://book.douban.com/series/40642) 小黄书（共三卷）
- [JavaScript 忍者秘籍](https://book.douban.com/subject/26638316/) 忍者书

### 进阶

- [The JavaScript Survival Guide](https://www.youtube.com/watch?v=9emXNzqCKyg)
- [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)
- [JavaScript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)

### 实战

- [JavaScript 30 - Wes Bos](https://javascript30.com/)
- [TodoMVC](http://todomvc.com/)

### JS 概况/漫谈

- [硬核前端（劝退篇）](./fe-hardcore-overview.md)

<!-- * [2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh) -->
<!-- * state of js -->

- [为什么认为 Backbone 是现代前端框架的基石](https://zhuanlan.zhihu.com/p/30982369)
- [[译文] 现代 js 框架存在的根本原因](https://juejin.im/post/5b111436e51d4506d06205fd)

## JavaScript 知识体系

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

#### 高级特性/难点

- 短路运算
- this
- 基本包装类型、装箱、拆箱
- 相等性、隐式类型转换
- 基于原型链的类

TODO（待补充）

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

## JavaScript 相关

### JS 版本/方言/历史

- [The Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
- [JavaScript: How It's Made](https://www.youtube.com/watch?v=FSs_JYwnAdI)
- [漫谈 JavaScript 方言与派系](https://www.blackglory.me/javascript-dialects-and-factions/)

在现代前端开发中，  
开发时需要使用配套的解析工具，  
发布前基本上都会预编译到 ES5。

- **ECMAScript** 官方规范（from _Ecma TC39_）
  - **ES1~3**：1995 起，上古版本
  - **ES5**：（aka `ES3.1`）2009 起的版本
  - **ES6**：（aka `ES2015`）2015 年大更新的版本，带动了 JS 预编译生态，后续逐年小幅度更新
  - **Vanilla JavaScript**：民间称呼，指的就是标准/原生/不使用库的 JS，Vanilla 表示 Plain 或者 Pure
- **JSON**： JavaScript Object Notation，JS 对象表示法，基于 JS 语法子集的数据格式
- 类型系统
  - **TypeScript**：带类型检查的扩展集（from _Microsoft_）
  - **Flow**：比 TS 功能少一点的类型检查扩展集，现已式微（from _Facebook_）
- 框架语言（基于 ES、TS 并含有扩展语法的 DSL/语法糖）
  - **JSX**：React 的 JS + HTML 混合语法
  - **Vue**：Vue 自己的（文件和 template）格式
- **ClojureScript**：Clojure+JS 的函数式方言
- 其他方言（现已式微的）
  - **ActionScript**：以 ES4 衍生发展成的旁支（用于 _Adobe_ Flash，但是 Flash 已死）
  - **CoffeeScript**：方言之一，简化了 JS 语法
  - **LiveScript**：CoffeeScript 的兄弟版本（JS 早期曾用名也是这个，但是不同的东西）
