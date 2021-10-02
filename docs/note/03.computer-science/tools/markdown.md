---
title: Markdown 学习指南
date: 2019-12-26 12:27:58
permalink: /cs/markdown
categories:
  - 计算机科学
tags:
  - 工具
  - markdown
---

# Markdown 学习指南

## Markdown 简介

### 什么是 Markdown

> Markdown 是一种轻量级标记语言。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档”。  
> 当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge 等。甚至 Markdown 能被使用来撰写电子书。

文件后缀常用 `.md` 或 `.markdown`，  
Markdown 的配套工具有语法高亮、解析工具等…

GitHub 大多数项目中的 `README.md` 就是用 Markdown 写的项目说明，  
本站的所有文章也都是用 Markdown 写的。

当 Markdown 自身规则无法满足时，**也可以**写任意合法的 **HTML** 代码。

### 什么是 TOC

Table Of Contents 的缩写，表示目录。

由于 Markdown 的规则具有约束性，  
能够很方便地根据 Markdown 内容生成目录，  
有很多工具可以自动化地做这个事情。

### 为什么要学习使用 Markdown

- 写起来简便
- 写 GitHub 的 `README`
- 为了看懂别人的内容

## 学习 Markdown

### 概览

- 耗时：几分钟
- 难点：无
- 工具：一大堆

### 学习路线

- 前置学习
  - HTML
- 学习 Markdown
  - Markdown 全部基本语法
  - 了解：不同工具可能会有自己的扩展语法
- 实战
  - 写写学习笔记
  - 给自己的项目写 Readme

## 资料

### 自学教材

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Markdown Cheatsheet](https://github.com/tchapi/markdown-cheatsheet)
- [Markdown - Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/)

### 写作软件（桌面）

我个人不用其他的写作软件…  
在 [学习方法论](/study/crash-course-study-skills) 一文中，我提到我使用 “云盘 + VS Code” 的知识管理模式

对于 Markdown 写作，我自己主要是：

- [VS Code](https://code.visualstudio.com/)
  - Markdown 插件：[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  - 语法高亮：[Dracula](https://draculatheme.com/)
  - 格式化：[Prettier](https://prettier.io/)
  - 编译发布：[VuePress](https://vuepress.vuejs.org/zh/)

Markdown 的某些特性可能有多种写法，  
使用格式化工具可以保持编码风格统一。

而现成的编译器可能会集成代码块语法高亮等功能。

### 写作软件（在线）

- [马克飞象](https://maxiang.io/)
- [DILLINGER](https://dillinger.io/)

### Markdown JS 解析器

- [markdown-it](https://github.com/markdown-it/markdown-it)
- [marked](https://github.com/markedjs/marked)
- [markdown-js](https://github.com/evilstreak/markdown-js)

### 工具

- [markdown-here](https://github.com/adam-p/markdown-here)
- [doctoc](https://github.com/thlorenz/doctoc)
- [github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Markdown 典型代码

```markdown
<!-- Heading -->

# H1

## H2

###### H6

<!-- 样式 -->

**粗体 strong**
_斜体 em_
~~删除线 s~~

注意：以上标记如果边界处有空格，根据工具不同可能会造成解析失败
例如： _ 可能无效 _

<!-- code 标签 -->

像这样用反引号包起来 → `exit vim`
使用场景：JavaScript 中有 `var` 关键字。

<!-- HTML -->

<p align="center">也可以使用任意合法 HTML 标签</p>
<!-- 所以像这一行其实是 HTML 注释 -->
```

```markdown
<!-- 引用（blockquote） -->

> 以右尖括号开头的段落表示引用  
> 支持很多其他 **Markdown 语法**  
> <br/> 包括换行
>
> > 也可以嵌套
> > 本质上是转义成 blockquote 标签

<!-- 换行（br） -->

一行的最后接两个空格（选中看看） →  
再写另一行，则会形成换行。

GitHub 好像不加空格也可以自动视为换行  
Vuepress 使用的编译器则不行，必须加上空格

或者显式地 <br/>

<!-- 水平线（hr） -->

---

---

---

这些字符，连续三个以上

或者显式地 <hr/>
```

```markdown
<!-- 链接（a 标签） -->

[链接文字](https://rualc.com/)

编译成：
<a href="https://rualc.com/">链接文字</a>

同名链接的写法 ↓
<https://rualc.com/>
等价于：
[https://rualc.com/](https://rualc.com/)

VuePress 不支持裸链接直接编译，可以使用同名链接的写法
GitHub 则是直接支持编译

---

[链接也可以分开写][home]

[home]: https://rualc.com/ '这里可以写注释'

<!-- 图片（img） -->

![图片描述](https://rualc.com/js-nation-square-blue.png)

编译成：
<img src="https://rualc.com/js-nation-square-blue.png" alt="图片描述">
```

```markdown
<!-- 列表（ul/li） -->

- 列表项
  - 子项
  - 子项
- 属于同一个列表
  - 也可以用不同的标记
  - 但是需要保持一致（这里是演示）
    - 使用格式化工具比较好

* 不同的一级标记则视为另一个列表
  - 子项

<!-- 有序列表（ol/li） -->

1. 有序列表
2. 有些工具会自动补齐下一行的数字
3. 但其实数字值其实无所谓（解析工具自动判断）

4. 另起一行不会视为另一个列表（因为自动解析规则）
5. 请插入 <br/> 来实现

<br/>

1. 像这样才是另一个列表

<!-- 待办事项列表 -->

- [ ] 未完成 `[ ]` 表示未完成
- [ ] 未完成 实际上会编译成 <input type="checkbox">
- [x] 已完成 `[x]` 表示已完成
  - [ ] 默认可能无法直接编辑（通过 `disabled` 属性实现）
  - [x] GitHub 的 issue 页支持直接编辑（并保存）

<!-- 表格（table） -->

| 表格     | 第二栏   |   第三栏 |        |
| -------- | :------- | -------: | :----: |
| 表格内容 | 左对齐 ↑ | 右对齐 ↑ | 居中 ↑ |
|          | 文字     |     文字 |  文字  |

建议编写时使用等宽字体
Prettier 格式化可以自动对齐每一栏
```

`````markdown
<!-- 代码块（pre 标签） -->

```javascript
var a = 2;
```

<!-- 嵌套代码块 -->

````markdown
```
三个 ` 表示代码块 后面可以指定语言（也可以不）
```

代码块可以像这样嵌套 ↑，
写法上类似 #，只要多写几个反引号，则内部不会转义

其实这个版块整个都被包裹在代码块里  
所以你看到的 Markdown 代码都没有被转义

可以到这里看看本文的 Markdown 源码是怎么写的：
https://raw.githubusercontent.com/seognil/fe-foundation/master/docs/cs/markdown.md
````
`````
