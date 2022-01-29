---
title: 语法糖、操作符、关键字、特性
date: 2020-02-11 22:58:58
permalink: /frontend/syntactic-sugar-in-javascript
categories:
  - 前端开发
  - JavaScript
tags:
  - JavaScript
  - 编程语言
---

# 语法糖、操作符、关键字、特性

> 语法糖（Syntactic sugar）是由英国计算机科学家彼得·兰丁发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能没有影响，但是更方便程序员使用。语法糖让程序更加简洁，有更高的可读性。  
> —— [Syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)

各种前端和编程教程中会提到 JS 的基本语法，  
然而在各种源码和片段中，不认识的奇怪代码可能会造成困惑。

比如 `??` 是干什么的？甚至可能连如何搜索也无从下手。  
所以提前集中了解散落在文档各处的概念，对于后续学习代码会有所帮助。

大部分语法糖基本上都有简单的等价形式，  
因为它们的设计目的本来就是为了简化写法。

> 实际上, 几乎所有的现代语言都有这些语法  
> —— [为什么会有程序员不喜欢 Python？](https://www.zhihu.com/question/45773200/answer/998317489)

同时，要记得这些只是语法层面的实用技巧，  
而如何更“优雅”地编写复杂的软件，那是更大话题了。

> 是否能写出好的代码在于人，而不在于语言。如果你的心中没有清晰简单的思维模型，你用任何语言表述出来都是一堆乱麻。  
> —— [如何掌握所有的程序语言](http://www.yinwang.org/blog-cn/2017/07/06/master-pl)

## 分类

- ES6+ 基本
  - 遍历器：`for...of`
  - 模板字符串：`` ` ` ``、`${}`
  - 箭头函数：`() => {}`
  - 默认参数：`(a = 1) => {}`
  - 类：`class`、`constructor`
  - 解构赋值：`[ ] = [ ]`、`{ } = { }`、`...`
  - 异步函数：`async`、`await`
  - 生成器（Generator）：`function*`、`yield`
- 技巧
  - 三元运算符：`a ? b : c`
  - 短路运算（布尔运算）：`&&`、`||`
  - 布尔化的快速写法（布尔运算）：`!!`
  - 取整的快速写法（位运算）：`~~`
- 陷阱
  - 连续赋值：`a = b = c`
  - 连续比较：`a < b < c`
- TypeScript
  - 类型：`type`、`interface`
  - 泛型：`<T1, T2, ...>`
  - 可选参数：`?`
  - 可选链：`?`
  - 非空断言：`!`
  - 空值合并：`??`
  - 函数重载：（函数声明和函数实体）
  - 类： `public`、`private`、`protected`、`static`
  - 装饰器（Decorator）：`@something`
- JS 不支持的/其他的
  - 元组（Tuple）：Python 的例子
  - 模式匹配：Haskell 的例子
  - 管道（Pipeline）：F# 的例子
  - 运算符重载：C++ 的例子

## 示例

注：更多示例参考我在 [Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/js/syntactic-sugar/src) 中的代码

- ES6+ 基本
  - 遍历器：`for...of`
    ```ts
    for (const iterator of object) {
      console.log(iterator);
    }
    ```
  - 模板字符串：`` ` ` ``、`${}`
    ```ts
    const str = `hello ${name}`;
    ```
  - 箭头函数：`() => {}`
    ```ts
    const fn = (a, b) => a + b;
    ```
  - 默认参数：`(a = 1) => {}`
    ```ts
    const fn = (a = 1) => a;
    ```
  - 类：`class`、`constructor`
    ```ts
    class MyClass {
      constructor() {}
      method() {}
    }
    ```
  - 解构赋值：`[ ] = [ ]`、`{ } = { }`、`...`
    ```ts
    const [a, b, , c] = arr;
    const { d, ...e } = obj;
    const fn = (p, ...ps) => {};
    [x, y] = [y, x];
    ```
  - 异步函数：`async`、`await`
    ```ts
    async function fn() {
      await delay(100);
      console.log(100);
    }
    ```
  - 生成器（Generator）：`function*`、`yield`
    ```ts
    function* gen() {
      const input = yield null;
      console.log(input);
    }
    ```
- 技巧
  - 三元运算符：`a ? b : c`
    ```ts
    const msg =
      name === 'admin'
        ? 'name is invalid';
        : 'name is valid'
    ```
  - 短路运算（布尔运算）：`&&`、`||`
    ```ts
    const result = getAlias() || getNickName();
    result && process();
    ```
  - 布尔化的快速写法（布尔运算）：`!!`
    ```ts
    const input = 'John';
    const isInputNotEmpty = !!input;
    ```
  - 取整的快速写法（位运算）：`~~`
    ```ts
    // prettier-ignore
    ~~ 2.7 === 2;
    // prettier-ignore
    ~~ -2.7 === -2;
    ```
- 陷阱
  - 连续赋值
    ```ts
    // prettier-ignore
    const a = b = c;
    ```
  - 连续比较
    ```ts
    a < b < c;
    // prettier-ignore
    a === b === c;
    ```
- TypeScript

  - 类型：`type`、`interface`
    ```ts
    type ItemId = string;
    interface Item {
      id: ItemId;
    }
    const item: Item = { id: 'qjne' };
    ```
  - 泛型：`<T1, T2, ...>`
    ```ts
    interface Pair<T, U> {
      item1: T;
      item2: U;
    }
    let pairToArr = (p: Pair<string, number>) => {
      return [p.item1, p.item2];
    };
    ```
  - 可选参数：`?`
    ```ts
    const fn = (a?) => a;
    ```
  - 可选链：`?`
    ```ts
    const x = foo?.bar?.baz();
    ```
  - 非空断言：`!`
    ```ts
    const x = foo!.bar!;
    ```
  - 空值合并：`??`
    ```ts
    const x = foo ?? bar();
    ```
  - 函数重载：（函数声明和函数实体）
    ```ts
    function simpleAdd(a: number): (b: number) => number;
    function simpleAdd(a: number, b: number): number;
    function simpleAdd(a, b?) {
      if (b === undefined) return (b) => a + b;
      return a + b;
    }
    ```
  - 类： `public`、`private`、`protected`、`static`
    ```ts
    class Greet {
      public prop1;
      private prop2;
      protected prop3;
      constructor(public a1, private a2, protected a3) {}
      static p4;
    }
    new Greet().prop1;
    Great.p4;
    ```
  - 装饰器（Decorator）：`@something`

    ```ts
    class Greeter {
      constructor(private greeting: string) {}

      @validate
      greet(@required name: string) {
        return 'Hello ' + name + ', ' + this.greeting;
      }
    }
    ```

- JS 不支持的/其他的

  - 元组（Tuple）：Python 返回多个值 ↓

    ```py
    def times_ten(a, b):
      a = a * 10
      b = b * 10
      return a, b

    new_a, new_b = times_ten(5, 6)
    ```

  - 模式匹配：Haskell 多个函数体 ↓
    ```haskell
    sum :: [Int] -> Int
    sum []     = 0
    sum (x:xs) = x + sum xs
    ```
  - 管道（Pipeline）：F# 用 `|>` 链接多个函数 ↓
    ```F#
    let sumOfSquare n =
      [1..n]
      |> List.map square
      |> List.sum
    ```
  - 运算符重载：C++ 定义运算符行为 ↓

    ```cpp
    class complex {
      int a;
      void operator--() {
        a = --a
      }
    }

    complex obj;
    obj++;
    ```

## 详情

### ES6+ 基本

- [ECMAScript 6 入门 - 阮一峰](https://es6.ruanyifeng.com/)
  - [变量的解构赋值](https://es6.ruanyifeng.com/#docs/destructuring)
  - [字符串的扩展](https://es6.ruanyifeng.com/#docs/string)
  - [函数的扩展](https://es6.ruanyifeng.com/#docs/function)
  - [Iterator 和 for...of 循环](https://es6.ruanyifeng.com/#docs/iterator)

`for...of` 除了普通地支持对象和数组，  
还支持迭代器，如生成器函数。

### async 和生成器

- [async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
- [async 函数](https://es6.ruanyifeng.com/#docs/async)

> async function 用来定义一个返回 AsyncFunction 对象的异步函数。异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。如果你在代码中使用了异步函数，就会发现它的语法和结构会更像是标准的同步函数。

async 的一个主要作用是用同步的风格写异步代码。

- [function\*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [Generator.prototype.next()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)
- [Generator 函数的语法](https://es6.ruanyifeng.com/#docs/generator)

> function\* 这种声明方式(function 关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个 Generator 对象。  
> 生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。

生成器的一个主要作用是方便地生成延迟计算的函数。

---

- [异步迭代器（iterators）与生成器（generators）](https://zh.javascript.info/async-iterators-generators)
- [Async Generator Functions in JavaScript](http://thecodebarbarian.com/async-generator-functions-in-javascript.html)

函数、async、生成器，总共有以下几种形式，  
注意：生成器不支持箭头函数的写法。

```ts
function() {}
() => {}
async function() {}
async () => {}
function*() {}
async function*() {}
```

### 技巧

#### 三元运算符

三元（[条件运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)）实际上是语言标准语法中的一部分

```ts
const msg =
  name === 'admin' ? 'name is invalid' : 'name is valid';
```

等效于以下代码：

```ts
let msg;
if (name === 'admin') {
  msg = 'name is invalid';
} else {
  msg = 'name is valid';
}
```

#### 短路运算

[JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

[短路计算](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#short-circuit_evaluation) 实际上也是语言标准中的一部分，  
由于逻辑表达式的运算顺序是从左到右，可以利用规则进行"短路"计算，  
后续的表达式将不会执行。

```ts
const result = getAlias() || getNickName() || getUserName();

result && console.log(result);
```

等效于以下代码：

```ts
let result = getAlias();
if (!result) result = getNickName();
if (!result) result = getUserName();

if (result) console.log(result);
```

#### 布尔化的快速写法

实际上是进行了两次 [逻辑非](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6) 运算，

```ts
true === true;
!true === false;
!!true === true;
```

再加上 JS 有 [隐式类型转换](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2) 的语言特性，  
于是就能得到布尔值（节省了几个字符）。

```ts
!!value === Boolean(value);
```

#### 取整的快速写法

实际上是进行了两次按位非运算，  
[位运算](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6) 会先将数字从浮点数转换为整数，  
所以能够实现取整的效果。

需要注意的是：从效果上，结果是趋向于向 0 取整。

```ts
~1 === -2;
~-2 === 1;

~~2.7 === 2;
~~-2.7 === -2;

Math.floor(2.7) === 2;
Math.ceil(-2.7) === 2;
```

### 陷阱

#### 连续赋值

JS 中的等号是 [赋值运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6)，  
而变量声明需要根据 `var`、`let`、`const` 关键字进行，  
如果未显式地声明，则变量会成为 [隐式全局变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#%E9%9A%90%E5%BC%8F%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E5%92%8C%E5%A4%96%E9%83%A8%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9F%9F) 或报错。

```ts
// prettier-ignore
let a = b = c;
```

等价于：

```ts
let a;
b = c;
a = b;
```

`b` 会成为全局变量。

更安全的写法是提前声明好所需变量：

```ts
let a, b;
a = b = c;
```

或拆分成多个语句：

```ts
let b = c;
let a = b;
```

另一方面，连续赋值的写法由于可能会造成理解偏差，  
会被格式化工具加上括号。

```ts
let a = (b = c);
```

#### 连续比较

在 Python 中，支持 [连续比较](https://docs.python.org/zh-cn/3/reference/expressions.html#comparisons)，如：  
`x > y > z` 等价于 `x > y and y > z`

JS 中没有这样的特性，  
每个操作符和两侧表达式运算后，表达式的结果参与剩余运算。  
最终结果可能是反直觉的，和直观的字面意思完全不同。

而同 [优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 表达式的计算顺序根据 [关联性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Associativity)，一般是左到右，赋值是右到左。

所以在 JS 中，`3 > 2 > 1` 就是 `(3 > 2) > 1`，等于 `false`

逐步解析：

```ts
3 > 2 > 1;
true > 1;
Number(true) > 1;
1 > 1;
false;
```

对于优先级，更好的做法是借助格式化工具添加 [括号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)，  
或根据业务逻辑手动添加。

```ts
// prettier-ignore
a === b === c;

(a === b) === c;
```

或使用和编写 TypeScript，防止 JS 中的隐式类型转换行为。

```ts
let a: number;
let b: string;
let c: string;

a > b > c;

// * 将报错
// Operator '>' cannot be applied to types 'number' and 'string'.
// Operator '>' cannot be applied to types 'boolean' and 'string'.
```

### TypeScript

#### TS 基本

- [TypeScript 学习指南](/cs/typescript-language-basic)
- [TypeScript - Learn X in Y minutes](https://learnxinyminutes.com/docs/typescript/)

TS 部分，按作用可大致分为类型系统相关，和业务代码语法糖。

类型、类、泛型等基本 TS 概念，在各种文档中直接能查到。

[可选参数](https://github.com/zhongsp/TypeScript/blob/dev/zh/handbook/functions.md#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0%E5%92%8C%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0)（函数参数上的 `?`）用于支持类型系统。

可选链 `?`、非空断言 `!`、空值合并 `??`，在 [TS 3.7 更新](https://github.com/zhongsp/TypeScript/blob/dev/zh/release-notes/typescript-3.7.md) 以后支持，  
主要作用在于简化业务代码语法，属于语法糖，  
实际上它们也出现在 JS 目前的草案中。

#### 可选链

确保字段为空时提前中断而不会报错。

```ts
const x = foo?.bar?.baz();
```

等价于：

```ts
const x =
  foo === null || foo === undefined
    ? undefined
    : foo.bar === null || foo.bar === undefined
    ? undefined
    : foo.bar.baz();
```

#### 非空断言

[非空断言操作符](https://github.com/zhongsp/TypeScript/blob/dev/zh/release-notes/typescript-2.0.md#%E9%9D%9E%E7%A9%BA%E6%96%AD%E8%A8%80%E6%93%8D%E4%BD%9C%E7%AC%A6) 需要开启 `strictNullChecks` [编译选项](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

以下例子中，如果 `entity` 为空，则在 `validOrThrow` 就抛出错误。  
如果能够执行到 `entity.name` 一行，说明 `entity` 一定不为空。

```ts
const validOrThrow = (entity) => {
  if (!entity) throw 'your value is empty';
};

const process = (entity?: Entity) => {
  validOrThrow(entity);
  const name = entity.name;
  console.log(name);
};
```

由于 TS 只是静态类型检查，不会进行逻辑检测，  
`entity` 是可选参数，TS 会提示 `Object is possibly 'undefined'.`

所以在类似这样的边界情况下，需要告诉 TS 检查器 `entity` 肯定不为空，  
也就是修改成 `entity!.name`，其中 `!` 就是非空断言操作符。

```ts
const name = entity.name;
```

```ts
const name = entity!.name;
```

[Cleaner TypeScript With the Non-Null Assertion Operator](https://medium.com/better-programming/cleaner-typescript-with-the-non-null-assertion-operator-300789388376)

在 React 中有个更常见的使用场景：

```tsx
const Comp = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const h = ref.current!.offsetHeight;
    // ...
  });

  return <div ref={ref}></div>;
};
```

`ref.current` 的状态在渲染后才会确定，和初始值不一样，  
使得 `ref.current` 的类型（`HTMLDivElement | null`）可能为空。

实际情况是，在 `useLayoutEffect` 中，  
`ref.current` 肯定有确定的类型 `HTMLDivElement`，  
我们可以使用非空断言解决这个问题，  
解决类型识别报错，同时重新拥有 API 智能提示。

#### 空值合并

在值为空（`undefined` 或 `null`）时提供默认值，  
`??` 类似 `||`，但是不会处理数字 0、空字符串等隐式假值。

```ts
const x = foo ?? bar();
```

等价于：

```ts
const x = foo !== null && foo !== undefined ? foo : bar();
```

#### 泛型

- [Utility Types - TypeScript](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [泛型 - FAQ - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/faqs/generics.html)
- [Infer - Tips - 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html)

对于泛型的大致理解：泛型是用于处理类型的“函数”。

函数，对于不同的输入，运算出得不同的结果。  
泛型，对于不同类型，运算出得相应的另一种类型。

一个简单的代码片段，通过泛型和推断，以下代码拥有正确的类型识别：

```ts
type MapEveryToPromise<T extends object> = {
  [K in keyof T]: T[K] extends infer P ? Promise<P> : never;
};

const obj1 = {
  key1: 1,
  key2: 'hello',
};

const obj2: MapEveryToPromise<typeof obj1> = {
  key1: Promise.resolve(1),
  key2: Promise.resolve('hello'),
};
```

泛型常见于各种工具库的源码中（如 Redux、Ramda），  
部分工具函数支持用户传入任意类型，得到的结果需要有正确的类型，  
那么工具函数对应的类型声明就需要使用泛型完成。

#### 重载

- [重载 - TypeScript-Handbook](https://github.com/zhongsp/TypeScript/blob/dev/zh/handbook/functions.md#%E9%87%8D%E8%BD%BD)

TypeScript 中的重载（Overload），是函数声明的重载，  
和面向对象中的重载有所差异。

TS 中的重载是指多个同名的类型声明，具体判断还是要手动实现，  
手动在唯一的函数本体中进行传参的判断。  
TS 中的重载：

```ts
function simpleAdd(a: number): (b: number) => number;
function simpleAdd(a: number, b: number): number;
function simpleAdd(a, b?) {
  if (b === undefined) return (b) => a + b;
  return a + b;
}
```

而如 Java、C# 中的重载，是直接写多个同名函数本体。  
Java 中的重载：

```java
class Dog {
  public void bark() {
    System.out.println('woof')
  }
  public void bark(int num) {
    for (int i = 0; i < num; i++)
      System.out.println('woof')
  }
}
```

TS 重载的作用主要用于类型识别上。  
比如在各种工具库的源码中（如 Redux、Ramda），  
对于不同的传参情况，会得到不同的对应类型提示，  
这就需要借助重载。

#### 装饰器

- [装饰器 - ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/decorator)
- [Decorators - TypeScript-Handbook](https://github.com/zhongsp/TypeScript/blob/dev/zh/reference/decorators.md)
- [Decorators - TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html)

装饰器的编写和使用可以类比高阶函数，  
都是对一个实体的包装、“装饰”，  
差别在于：

- 装饰器只能用于类、类的方法和属性
- 高阶函数适用于函数

一些有用的装饰器（顾名思义）：

- @enumerable
- @configurable
- @readonly
- @required
- @autobind

另外还有类似 [lodash-decorators](https://github.com/steelsojka/lodash-decorators) 这样的装饰器工具集合。

对于类来说，装饰器可以有效提升业务代码的可读性和信噪比：

```ts
class Tool {
  @log
  @Memoize
  load(file, encode) {
    //
  }
}
```

如果改成高阶函数的形式，代码就显得非常别扭：

```ts
class Tool {
  load = log(
    Memoize(function load(file, encode) {
      //
    }),
  );
}
```

然而对于非面向对象的开发模式来说（比如函数式和组合编程），  
不存在类或 this 的使用，高阶函数也是正常的选择。

```ts
const load = (file, encode) => {};

const sysLoad = log(Memoize(load));
```

### 其他

#### 元组

Python 中的函数返回，用逗号隔开就表示返回了多个值：

```py
return a, b
```

而 JS 中的逗号是一个 [运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator)，  
整行代码作为表达式的结果是最后一个逗号右边的值。

所以上面的代码在 JS 中相当于：

```ts
a;
return b;
```

不过 JS 中有 [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 的概念。  
我们可以退而求其次，返回数组就好了，数组也是有序值列，  
多个值封装成一个数组，返回的就是一个东西了。

```ts
const times_ten = (a, b) => [a * 10, b * 10];
const [x, y] = times_ten(1, 2);
```

实际上返回数组的设计在 [React Hooks](/frontend/react-hooks) 中大量出现，如：

```tsx
const [state, setstate] = useState(initialState);
```

而 TS 中 [元组类型](https://github.com/zhongsp/TypeScript/blob/dev/zh/handbook/basic-types.md#tuple) 的概念也是类似于数组。

#### 模式匹配

模式匹配的概念和重载有关联，  
JS 在语法层面不支持模式匹配，  
需要的话，可以按照不同的设计模式手动实现。

#### 管道运算

Unix 和一些编程语言中有管道的语法和概念，  
实际上 JS 中目前也有 [管道操作符](https://github.com/tc39/proposal-pipeline-operator) 的草案：

```ts
const double = (n) => n * 2;
const increment = (n) => n + 1;

// 没有用管道操作符
double(increment(double(5))); // 22

// 用上管道操作符之后
5 |> double |> increment |> double; // 22
```

可以借助 [@babel/plugin-proposal-pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator) 提前使用。

或者在不引入新语法的前提下，使用诸如 Ramda 或 Lodash 提供的管道函数。

```ts
// prettier-ignore
const fn = R.pipe(
  double,
  increment,
  double,
)
fn(5); // => 22
```

```ts
// prettier-ignore
const fn = _.flow([
  double,
  increment,
  double,
])
fn(5); // => 22
```

#### 运算符重载

JS 不支持运算符重载

[JavaScript: Can (a==1 && a==2 && a==3) ever evaluate to true?](https://codeburst.io/javascript-can-a-1-a-2-a-3-ever-evaluate-to-true-aca13ff4462d)

利用 `toString`、`valueOf` 和隐式类型转换，实现的所谓“运算符重载”。  
属于奇技淫巧和冷知识，在业务中不应提倡使用。
