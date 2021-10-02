---
title: 正则表达式 学习指南
date: 2019-12-26 18:39:31
permalink: /frontend/javascript-regular-expression
categories:
  - 前端开发
  - JavaScript
tags:
  - JavaScript
  - 正则表达式
---

# 正则表达式 学习指南

## 正则表达式 简介

### 什么是 正则表达式

> 正则表达式（英语：Regular Expression，常简写为 regex、regexp 或 RE），又称正则表示式、正则表示法、规则表达式、常规表示法，是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。

正则不仅在 JavaScript 中存在，  
很多其他主流语言以及工具都支持正则，  
例如：

- [JS 中的 RegExp 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)、[python 中的 `re` 模块](https://docs.python.org/zh-cn/3/library/re.html)
- Unix 中的 `sed` 命令、`grep` 命令的 `-E` 参数
- 几乎所有代码编辑器的搜索功能：VS Code、Sublime Text、vim、IntelliJ IDEA 系列
- [Chrome 正则搜索插件](https://chrome.google.com/webstore/detail/chrome-regex-search/bpelaihoicobbkgmhcbikncnpacdbknn)

#### 正则表达式 概念分类

- 转义字符
- 位置匹配（边界，如单词边界、行开头）
- 组合和量词
- 正则中具有多种功能的字符们
  - `()`, `?`, `^`, `\`, `$`
- 断言（边界，预测前后字符串）
- flags（不同的检索策略，如是否忽略大小写）

### 为什么要用 正则表达式

展开说可以有更多具体的使用场景，  
（比如完成业务需求或在编辑器里模糊查询）

但总的来说只有一个原因：

- 实现基于模式查询的自动处理

一个经典的正则例子，以千分位切割数字：  
把 ((不是边界、且右边有(3\*n 个数字))的位置)，变成逗号。

```javascript
const toThousand = (str) =>
  String(str).replace(/\B(?=(\d{3})+\b)/g, ',');

toThousand(123456789); // => "123,456,789"
```

## 学习 正则表达式

### 概览

- 耗时：从入门到掌握需要大约一天
- 难点：记住所有基本规则、断言、合理使用
- 工具：JS 自带的 RegExp，所以任意浏览器 devtool 或 Node 即可

### 学习路线

- 前置学习
  - [JavaScript 语言基础（2021）](/cs/javascript-language-basic)
- 学习正则表达式
  - 使用 JS 练习所有正则规则
  - 了解：不同工具中的正则可能会有一些扩展规则
- 实战
  - 在工作业务中使用正则完成代码需求
  - 在批量编辑代码时使用正则完成查找（比如 VS Code 中）
  - 在其他场景使用正则（如 `sed`、`grep`）
- 进阶（正则迷你书）
  - 正则运行原理：非贪婪（惰性）、回溯和性能优化
  - NFA DFA 匹配器（回溯陷阱）
  - 正则运算符的优先级

## 资料

### 自学教材

- 电子教程
  - [《JS 正则迷你书》](https://github.com/qdlaoyao/js-regex-mini-book)
  - [Learn Regex The Easy Way](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md)：中文版
- 书籍
  - [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/)：（第三版）5.4 RegExp 类型
  - [JavaScript 忍者秘籍](https://book.douban.com/subject/26638316/)：（第二版）第 10 章（正则）
- 正则的细节
  - [正则表达式零宽断言详解](https://www.cnblogs.com/onepixel/articles/7717789.html)
  - [Unicode: flag "u" and class \p{...}](https://javascript.info/regexp-unicode)

### 在线正则解析（帮助理解）

- [RegExr](https://regexr.com/)：规则解析
- [Regulex](https://jex.im/regulex/)：可视化解析

### 文档

- [正则表达式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- [正则表达式 - javascript.info](https://zh.javascript.info/regular-expressions)

## 正则表达式 知识体系

### 正则基本概念

（个人整理和分类，用语可能不太规范，但容易理解）

- **正则基础规则**
  - 正则支持任意朴素字符
    - `hello world`
  - 正则支持子正则的平行拼接
    - `^h(a|e)?llo\sworld\b.*$`
- **字符模式（匹配单个字符）**
  - **字符组**
    - `[abc]` a 或 b 或 c （匹配这些字符）
    - `[^abc]` 不是 a 或 b 或 c 的其他字符（排除这些字符）
    - `[a-z]` 匹配 a 到 z
    - `[g-zA-F1-5]` 匹配小写 g 到 z、大写 A 到 F、数字 1 到 5
  - **转义字符**
    - `.` 任意字符
    - `\s` 空格
    - `\S` 非空格
    - `\d` 数字
    - `\D` 非数字
    - `\w` 字符（字母+数字+下划线）
    - `\W` 非字符
    - `\t` tab
    - `\n` 换行
    - `\r` 回车
    - `\/` `/`（因为 JS 正则字面量写法以斜杠包裹，所以需要转义。其他具有功能的字符也同理，例如：`/c:\/\[path\]/` => `c:/[path]`）
- **捕获和引用**（括号，可用于后续处理，如 replace）
  - **捕获组** `()`
    - `(hallo)` 匹配 hallo，且捕获括号内内容
    - （捕获组的捕获顺序，按左括号从左到右为 1234…）
  - **正则内引用** `\1`
    - `(ab),\1` 匹配 'ab,ab'
  - **结果引用**（replace 第二参数的特殊字符）
    - `$1` 按捕获顺序，例如：`'abcd'.replace(/(ab)/, '$1,') => 'ab,c'`
    - `$&` 匹配的整个子串
    - `` $` `` 匹配子串的左边文本（键盘左侧的反引号）
    - `$'` 匹配子串的右边文本（键盘右侧的引号）
    - `$$` 转义 `$`
- **组合模式（正则串的单次组合）**
  - **或** `|`
    - `h(a|e)llo` 匹配 hallo 或 hello（切换匹配（并捕获））
  - **量词**（左边的 a 可以是任意正则模式）
    - `a+` 匹配 'a、'aa'（至少一个）
    - `a*` 匹配 ''、'aaa'（零或多个）
    - `a?` 匹配 ''、'a'（零或一个）
    - `a{3}` 匹配 'aaa'（精确的 N 个）
    - `a{3,}` 匹配 'aaa' 到 'aaaaaaa...'（至少 N 个）
    - `a{3,6}` 匹配 'aaa' 到 'aaaaaa'（N 到 M 个）
  - **非贪婪（惰性）**
    - `a{3,6}?` 匹配 'aaa'（非贪婪：匹配到越少越好）
- **位置模式（位置不是字符，不具有宽度）**
  - **转义字符**
    - `^` 行开头
    - `$` 行结尾
    - `\b` 单词边界
    - `\B` 非单词边界
  - **断言**（其中的 a 可以是任意子正则）
    - `(?=a)` Positive lookahead，右边匹配
    - `(?!a)` Negative lookahead，右边不匹配
    - `(?<=a)` Positive lookbehind，左边匹配
    - `(?<!a)` Negative lookbehind，左边不匹配
- **flags**
  - `g` global，全部（多次）匹配
  - `i` case-insensitive，忽略大小写
  - `m` multi-line，多行匹配
  - `u` unicode，开启 unicode 支持

### JavaScript 中的正则

- RegExp
  - `reg.exec(str) => ArrayLike | null`
  - `reg.test(str) => boolean`
- String
  - `str.match(reg) => ArrayLike | null`
  - `str.matchAll(reg) => Iterator`
  - `str.replace(reg|str, str|fn) => string`
  - `str.search(reg) => index | -1`
  - `str.split(reg|str, limit?) => array`

```javascript
// * -------------------------------- 构造正则

// * 字面量
var re1 = /foo*/g;

// * 构造函数（以便支持动态生成）
var re2 = RegExp('foo*', 'g');

re1 instanceof RegExp; // => true
re2 instanceof RegExp; // => true

typeof re1; // => "object"
typeof re2; // => "object"

// * ---------------- flag example: g and u

'😄🤔'.match(/./gu); // =>  ["😄", "🤔"]

// * -------------------------------- RegExp

/(ba)r*/g.exec('barrrbar');
// => ["barrr", "ba", index: 0, input: "barrrbar", groups: undefined]

/(ba)r*/g.test('barrrbar');
// => true

// * -------------------------------- String

// * ---------------- basic

'barrrbar'.match(/(ba)r*/g);
// => ["barrr", "bar"]

'barrrbar'.match(/(ba)r*/);
// => ["barrr", "ba", index: 0, input: "barrrbar", groups: undefined]

'barrrbar'.search(/(ba)r*/g);
// => 0 （相当于支持正则的 indexOf）

'2019/12-26'.split(/-|\//);
// => ["2019", "12", "26"]

// * ---------------- matchAll

// * matchAll 返回结果是一个 Iterator

[...'barrrbar'.matchAll(/(ba)r*/g)];

// => [
//   ["barrr", "ba", index: 0, input: "barrrbar", groups: undefined],
//   ["bar", "ba", index: 5, input: "barrrbar", groups: undefined]
// ]

// * ---------------- replace

'barrrbar'.replace(/(ba)r*/g, '$1,');
// => "ba,ba,"

'reg is not hard'.replace(
  /(is|are)\s?(not)?/,
  '<em>$1</em> <b>$2</b>',
);
// => "reg <em>is</em> <b>not</b> hard"

'reg is not hard'.replace(/(is|are)(\snot)?/, '<b>$&</b>');
// => "reg <b>is not</b> hard"

'reg_is_cool'.replace(/(is|are)/, '$`');
// => "reg_reg__cool"

'reg_is_cool'.replace(/(is|are)/, "$'");
// => "reg__cool_cool"

// * ---------------- replace function

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(
  /([^\d]*)(\d*)([^\w]*)/,
  replacer,
);
// => "abc - 12345 - #$*%"
```

## 正则表达式 相关

### 关于断言的翻译 {#about-regex-assertion-translation}

关于断言的主流翻译，我个人认为非常垃圾，  
我之前非常难理解断言的概念，  
现在看来，应该是垃圾翻译造成的：

- `Positive lookahead` => `零宽正向先行断言`
- `Negative lookahead` => `零宽负向先行断言`
- `Positive lookbehind` => `零宽负向先行断言`
- `Negative lookbehind` => `零宽正向后行断言`

嗨，我的老伙计！您瞧瞧，这说的是人话吗？

`Positive`/`Negative` 翻译成 正向/负向？上下文呢？  
正向的意思是指字符串方向么？

实际上，这两个英文单词还有很多意思：

- Positive：肯定的、确定的、阳性的
- Negative：否定的、拒绝的、阴性的

根据正则的用途和实际的规则，  
也就是 **找到**/**找不到**，  
或者说 **应该匹配**/**不应该匹配**。

可以发现和 正向/负向 没有半毛钱关系,  
实属垃圾翻译。

`lookahead`/`lookbehind` => `先行`/`后行`，也可以改进。

什么叫先行后行？中文中的“先行”还可以这样用：

> 茶会尚未结束，它就先行离开了。

所以断言里的 `lookhead` 是已经出现的、之前的字符串的意思吗？  
恰恰相反，是指后面的字符串。  
不良的翻译造成了理解的困惑。

实际上，英文中有这么一对词组：

- look ahead：预测、向前看、计划未来
- look behind：回顾、回头看

字符串的书写是从左到右的，  
未来，也就是还未出现的，当前位置右边的字符串，  
回顾，也就是已出现的，当前位置左边的字符串。

我见过的另一个翻译版本略微高明一点：

- `零宽度正预测先行断言`
- `零宽度负预测先行断言`
- `零宽度正回顾后发断言`
- `零宽度负回顾后发断言`

但是我觉得它也有一些问题：  
`正`/`负` 的传达的意思依然不够精确，  
`预测先行`/`回顾后发` 相当于翻译了两遍。  
（记不记得编码中的 DRY 原则？）

所以综上，我个人把它翻译为：

- **`Positive lookahead` => `预测匹配断言`**
- **`Negative lookahead` => `预测不匹配断言`**
- **`Positive lookbehind` => `回顾匹配断言`**
- **`Negative lookbehind` => `回顾不匹配断言`**

`预测匹配断言`：  
我来预测现在这个位置之后出现的字符串应该符合某模式，  
预测成功了！那么当前位置是符合正则的。

或者在理解上更直白：

- 右边匹配
- 右边不匹配
- 左边匹配
- 左边不匹配

`=` 就是匹配，`!` 就是不匹配，  
默认编码顺序是右边，用 `<` 左尖括号来表示左边。

这样简单的规则总结不仅更符合编码直觉，  
和断言语法中的助记符也非常对应。

我的翻译在“信达雅”上，“雅”先不谈，  
但是“信达”程度应该比什么“零宽正向先行断言”高多了，

但是垃圾翻译已经先入为主并普及了，我也没办法，  
那么以后沟通的时候索性直接用英文原文得了。

（再次说明了看懂一手英文的重要性，以及垃圾二手资料的危害性）
