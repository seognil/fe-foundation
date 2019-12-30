# 正则表达式 学习指南

## 正则表达式 简介

### 什么是 正则表达式

> 正则表达式（英语：Regular Expression，常简写为 regex、regexp 或 RE），又称正则表示式、正则表示法、规则表达式、常规表示法，是计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。

正则不仅在 JavaScript 中存在，  
很多其他主流语言以及工具都支持正则，  
例如：

- [JS 中的 RegExp 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)、[python 中的 `re` 模块](https://docs.python.org/zh-cn/3/library/re.html)
- Unix 中的 `sed` 命令、`grep` 命令的 `-E` 参数
- 几乎所有代码编辑器的搜索功能：VS Code、sublime、vim、IntelliJ IDEA 系列
- [Chrome 正则搜索插件](https://chrome.google.com/webstore/detail/chrome-regex-search/bpelaihoicobbkgmhcbikncnpacdbknn)

正则包括以下主要概念：

- 转义字符
- 位置匹配
- 组合和量词
- 正则中具有多种功能的字符们
  - `()`
  - `?`
  - `^`
  - `\`
  - `$`
- 断言
- flags（检索方式）

### 为什么要用 正则表达式

展开说可以有更多具体的使用场景，  
（比如完成业务需求或在编辑器里模糊查询）

但总的来说只有一个原因：

- 实现基于模式查询的自动处理

一个经典的正则例子，以千分位切割数字：

```javascript
const toThousand = (str) => String(str).replace(/\B(?=(\d{3})+\b)/g, ',');

toThousand(123456789); // => "123,456,789"
```

## 学习 正则表达式

### 概览

- 耗时：从入门到掌握需要大约一天
- 难点：记住所有基本规则、断言、合理使用
- 工具：JS 自带的 RegExp，所以任意浏览器 devtool 或 Node 即可

### 学习路线

- 前置学习
  - [JavaScript 入门指南](./js-basic.md)
- 学习正则表达式
  - 使用 JS 练习所有正则规则
  - 了解：不同工具中的正则可能会有一些扩展规则
- 实战
  - 在工作业务中使用正则完成代码需求
  - 在批量编辑代码时使用正则完成查找（比如 VS Code 中）
  - 在其他场景使用正则（如 `sed`、`grep`）
- 进阶（正则迷你书）
  - 正则运行原理：非贪婪（惰性）、回溯和性能优化
  - 正则运算符的优先级（反正多用括号就对了）

## 资料

### 自学教材

- [《JS 正则迷你书》](https://github.com/qdlaoyao/js-regex-mini-book)
- 《JavaScript 忍者秘籍》 中的正则章节
- 《JavaScript 高级程序设计》中的正则章节
- [正则表达式零宽断言详解](https://www.cnblogs.com/onepixel/articles/7717789.html)
- [Unicode: flag "u" and class \p{...}](https://javascript.info/regexp-unicode)

### 在线正则解析（帮助理解）

- [Rubular](https://rubular.com/r/xfQHocREGj)
- [RegExr](https://regexr.com/)
- [Regulex](https://jex.im/regulex/)

### 文档

- [正则表达式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- [正则表达式 - javascript.info](https://zh.javascript.info/regular-expressions)

## 正则表达式 知识体系

### 正则基本概念

（个人整理和分类）

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
- **捕获和引用**（括号，可用于后续处理如 replace）
  - **捕获组** `()`
    - `(hallo)` 匹配 hallo，且捕获括号内内容
    - （捕获组的引用顺序按左括号从左到右为 1234…）
  - **正则内引用** `\1`
    - `(ab),\1` 匹配 'ab,ab'
  - **结果引用**（replace 第二参数的特殊字符）
    - `$1` 按捕获顺序，例如：`'abcd'.replace(/(ab)/, '$1,') => 'ab,c'`
    - `$&` 匹配的整个子串
    - `` $` `` 匹配子串的左边文本
    - `$'` 匹配子串的右边文本
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
  - **断言**（右边的 a 可以是任意正则模式）
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
  - `exec(str) => array-like | null`
  - `test(str) => boolean`
- String
  - `match(reg) => array-like | null`
  - `matchAll(reg) => Iterator`
  - `replace(reg|str, str|fn) => string`
  - `search(reg) => index | -1`
  - `split(reg|str, limit?) => array`

```javascript
// * -------------------------------- 构造正则

// * 字面量
var re1 = /foo*/g;

// * 构造函数（以便支持动态生成）
var re2 = RegExp('foo*', 'g');

re1 instanceof RegExp; // => true

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

'reg is not hard'.replace(/(is|are)\s?(not)?/, '<em>$1</em> <b>$2</b>');
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
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// => "abc - 12345 - #$*%"
```
