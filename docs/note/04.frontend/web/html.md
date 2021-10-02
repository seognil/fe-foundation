---
title: HTML 学习指南
date: 2020-06-02 15:42:08
permalink: /frontend/html
categories:
  - 前端开发
  - Web
tags:
  - html
---

# HTML 学习指南

## HTML 简介

### 什么是 HTML

> HTML（HyperText Markup Language，超文本标记语言） 是一种描述语言，用来定义网页结构。

大白话：HTML 是用来写页面结构的。

### 什么是 WHATWG

> 网页超文本应用技术工作小组（英语：Web Hypertext Application Technology Working Group，缩写：WHATWG），是一个以推动网络 HTML 标准为目的而成立的组织。在 2004 年，由 Apple 公司、Mozilla 基金会和 Opera 软件公司所组成。

大白话：WHATWG 是修订 HTML 规范的一群人。

### 为什么要学习 HTML

- 当你要写页面

对于网页页面，无论是朴素地徒手开发，还是使用 Web 框架和组件，你都需要了解 HTML。

前端框架 [React](https://zh-hans.reactjs.org/) 中的 [JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html) 或 [Vue](https://cn.vuejs.org/index.html) 中的 [template](https://cn.vuejs.org/v2/guide/single-file-components.html) 最终也都是生成 HTML 让浏览器渲染罢了。

## 学习 HTML

本篇只包含 HTML 中的**元素**和标签部分。  
关于 CSS、DOM 以及 Web 编程，我们可以在后续的文章中进行。

### 概览

通过快速浏览 HTML 标准文档，了解 HTML 规范中**所有**的元素和标签。

- 耗时：从入门到了解大致 HTML 知识体系，1~6 小时
- 难点：SEO、无障碍等
- 工具：
  - [Chrome](/workspace/chrome)
  - [VS Code](/workspace/vscode)
    - [Emmet](https://emmet.io/)：快速编写 HTML
    - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)：自动闭合标签
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)：自动重命名标签（同步开头结尾）

### 学习路线

- 前置学习
  - [计算机科学 入门指南](/cs/crash-course-computer-science)
  - [关于 Chrome](/workspace/chrome)
- 学习 HTML
  - 快速阅读文档
    - 翻阅 HTML 标准文档
    - 翻阅 MDN 中元素的文档，查看例子和实际效果
    - 理解元素、标签、属性等概念
  - 动手玩，亲自尝试 `<input>` 等元素的各种预设功能
  - 练习使用 [Emmet](https://emmet.io/) 快速编写 HTML
- 实战
  - 你可以直接开发一个 Web 应用，随用随查，通过完成实际的需求来熟悉 HTML。
- 进阶
  - HTML 的 SEO 优化
  - HTML 的页面结构优化
  - ARIA 和无障碍

## 资料

### 自学教材

#### 文字

- [HTML 简介 - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)
- [HTML 元素参考 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
- [The elements of HTML - HTML Living Standard](https://html.spec.whatwg.org/multipage/#toc-semantics)
- [Semantic HTML - 顾轶灵](http://justineo.github.io/slideshows/semantic-html/#/)
- [内容分类 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)

#### 视频 {#video .timeline-note}

- [HTML Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=UB1O30fR-EE)：60 分钟，2017 年
  - 0:00 - HTML 简介，简单的编辑环境
  - 11:14 - 标签的语法
  - 12:32 - 典型的页面和 HTML 结构，Doctype
  - 14:12 - 大量的 HTML 元素的演示
  - 49:24 - 通过一个实例（写一个简单的博客结构），了解 HTML 语义化（含少量 CSS）

### 无障碍

- [ARIA - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA)

## HTML 知识体系

### 琐碎的知识

- [DOCTYPE](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)
- [空元素](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%A9%BA%E5%85%83%E7%B4%A0)：标签的写法分为闭合和非闭合，所以 _空元素_ 又可以称为 _自闭合标签_，这些元素内部无法再嵌套其他元素
  - [\<area\>][area], [\<base\>][base], [\<br\>][br], [\<col\>][col], [\<colgroup\>][colgroup], [\<command\>][command], [\<embed\>][embed], [\<hr\>][hr], [\<img\>][img], [\<input\>][input], [\<keygen\>][keygen], [\<link\>][link], [\<meta\>][meta], [\<param\>][param], [\<source\>][source], [\<track\>][track], [\<wbr\>][wbr]
- [Web Component](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)：可以自己设计 HTML 元素，类似现代 Web 框架中组件的概念。但是是更官方的标准，不依赖任何其他 JS 框架。（目前这种方式还不流行）

### 标签的属性

- [全局属性 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)
- [3.2.6 Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)

HTML 元素的标签上可以添加属性

- 一些常见的全局属性
  - [id](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/id)：全文档唯一的标识符
  - [class](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class)：类，可以使 CSS 或 JS 批量地施加效果
  - [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)：hover 上去会显示 title 中的信息
  - [style](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)：用于写内联样式
- [data-\*](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)：自定义数据，一般用于 JS 读写数据
- [aria-\*](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA)：无障碍系列属性
- [DOM 回调事件](https://zh.javascript.info/introduction-browser-events)：事件系列属性，不过现在一般很少直接写在 HTML 中了，可以用 JS 的其他方式来实现。
  - [onclick](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onclick), [onscroll](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onscroll), [oninput](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/oninput) 等

### HTML 的学习重点

如果进行基本的 Web 页面开发，关于 HTML 你大致需要了解：

- 组织页面结构的元素：[\<article\>][article], [\<div\>][div], [\<h1\>][h1], [\<p\>][p], [\<span\>][span] 等
- 预设显示效果的元素：[\<i\>][i], [\<strong\>][strong], [\<code\>][code], [\<pre\>][pre], [\<table\>][table] 等
- 预设功能的元素：[\<video\>][video], [\<canvas\>][canvas], [\<input\>][input] 等
- 表单和输入：[\<form\>][form], [\<input\>][input] 等元素的各种属性、行为和用法

如果你想要更进一步，关于 HTML 还有这些内容可以了解：

- 外部资源加载：[\<link\>][link], [\<script\>][script]，它们涉及跨域、隐私策略、加载顺序等问题
- SEO 优化：[\<head\>][head] 中 [\<title\>][title]、[\<meta\>][meta] 提供的信息
- 语义化：[\<body\>][body] 内的结构设计和元素的选择（和 SEO 也有关）
- 无障碍、可访问性：[ARIA](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA)、[\<img\>][img] 的 `alt` 属性等等

### HTML 元素及分类

**通过阅读标准文档，建立 HTML 知识体系**

以下列表中的所有链接都来自：

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)：HTML 标准文档
- [HTML 元素参考 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)：MDN 开发者手册，查看元素实际的显示效果和作用  
  （MDN 的中文页面可能会缺失 Demo，所以姑且全部指向英文的版本，反正主要目的是查看元素的显示效果）

（还有什么比标准文档更权威呢？）

- [4.1 The document element](https://html.spec.whatwg.org/multipage/semantics.html)
  - [\<html\>][html]：文档根元素
- [4.2 Document metadata](https://html.spec.whatwg.org/multipage/semantics.html)
  - [\<head\>][head]：一般用于元数据
    - [\<title\>][title]：文档标题（浏览器标签栏）
    - [\<base\>][base]：全局根 URL（给相对 URL 的外部资源用的）
    - [\<link\>][link]：外部资源
    - [\<meta\>][meta]：其他元数据，一般用 `name`、`http-equiv`、`content` 设定元数据的键值
    - [\<style\>][style]：CSS 代码块
- [4.3 Sections（区块结构）](https://html.spec.whatwg.org/multipage/sections.html)
  - [\<body\>][body]：文档主体，一般包含具体显示内容和脚本
    - [\<article\>][article]：文章
    - [\<section\>][section]：分区
    - [\<nav\>][nav]：导航
    - [\<aside\>][aside]：侧边栏（如广告等）
    - [\<h1\>-\<h6\>][h1]：标题
    - [\<hgroup\>][hgroup]：标题组
    - [\<header\>][header]：头部
    - [\<footer\>][footer]：尾部
- [4.4 Grouping content（内容分组）](https://html.spec.whatwg.org/multipage/grouping-content.html)
  - [\<div\>][div], [\<p\>][p]：块、段落（非常常见的两个结构性元素）
  - [\<hr\>][hr]：分割线
  - [\<pre\>][pre]：表示文本已预先格式化，按照原文件中的编排（不会被浏览器自动处理空格）
  - [\<blockquote\>][blockquote]：引用块
  - [\<ol\>][ol], [\<ul\>][ul], [\<li\>][li]：列表系列
  - [\<dl\>][dl], [\<dt\>][dt], [\<dd\>][dd]：描述列表系列
  - [\<figure\>][figure], [\<figcaption\>][figcaption]：引用块和描述
  - [\<main\>][main]：主要部分（语义）
- [4.5 Text-level semantics（文本级语义）](https://html.spec.whatwg.org/multipage/text-level-semantics.html)
  - （修饰系列）
    - [\<em\>][em]：斜体（强调）
    - [\<i\>][i]：斜体（术语）
    - [\<strong\>][strong]：粗体（重要）
    - [\<b\>][b]：粗体（提醒）
    - [\<s\>][s]：删除线
    - [\<u\>][u]：表示错误的下划线
    - [\<mark\>][mark]：高亮
    - [\<abbr\>][abbr]：缩写（hover 上去可以显示全称）
  - [\<ruby\>][ruby], [\<rt\>][rt], [\<rp\>][rp]：给东南亚语言（汉语、日语等）的文字加上拼音、注音
  - [\<a\>][a]：链接
  - [\<code\>][code]：代码块
  - [\<kbd\>][kbd]：键盘输入元素，一般用于展示快捷键
  - [\<small\>][small]：小一号字体显示
  - [\<sup\>][sup], [\<sub\>][sub]：上标、下标
  - [\<span\>][span]：无特殊语义，可以用于加 CSSfigcaption
  - [\<br\>][br]：空行
- [4.6 Links](https://html.spec.whatwg.org/multipage/links.html)：关于 [\<a\>][a]、[\<link\>][link] 属性的文档
- [4.7 Edits](https://html.spec.whatwg.org/multipage/edits.html)
  - [\<ins\>][ins], [\<del\>][del]：表示插入、删除，配合 CSS 可以实现类似 Git Diff 的效果
- [4.8 Embedded content（内联内容）](https://html.spec.whatwg.org/multipage/embedded-content.html)
  - [\<picture\>][picture]：图片元素，可以包含 [\<source\>][source] 和 [\<img\>][img]
  - [\<img\>][img], [\<video\>][video], [\<audio\>][audio]：图片视频音频
  - [\<source\>][source]：可以指定多个的资源（比如视频的不同格式）
  - [\<track\>][track]：字幕
  - [\<iframe\>][iframe]：内嵌另一个 HTML 页面
- 4.9 Tabular data（表格系列）
  - [\<table\>][table], [\<tbody\>][tbody], [\<thead\>][thead], [\<tfoot\>][tfoot], [\<tr\>][tr], [\<td\>][td], [\<th\>][th] 等
- 4.10 Forms（表单系列）
  - [\<form\>][form]：表单区域（内置的组件，可以用 `submit` 进行提交）
  - [\<label\>][label]：标签（可以用于和选择框关联）
  - [\<input\>][input]：输入，可以 `submit`
    - [\<type\>][type] 属性，根据 `type` 值的不同，可以表示单行输入框、密码、滑动条、单选框等不同形式。`type` 可选的值：`hidden`, `search`, `tel`, `url`, `email`, `password`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `image`, `reset`, `button`
    - 其他属性：`maxlength`, `minlength`, `size`, `readonly`, `required`, `multiple`, `pattern`, `min`, `step`, `list`, `placeholder`
  - [\<textarea\>][textarea]：支持多行的输入框
  - [\<button\>][button]：按钮，可以 `submit`
  - （下拉菜单系列）
    - [\<select\>][select]：选择项
    - [\<datalist\>][datalist]：可以配合 [\<input\>][input] 一起使用
    - [\<option\>][option]：选项
    - [\<optgroup\>][optgroup]：[\<option\>][option] 的分组
  - [\<output\>][output]：表示输出
  - [\<progress\>][progress]：进度条
  - [\<meter\>][meter]：指示器（类似进度条，表示范围）
  - [\<fieldset\>][fieldset]：用于结构分组
  - [\<legend\>][legend]：[\<fieldset\>][fieldset] 的标题
- [4.11 Interactive elements（互动元素）](https://html.spec.whatwg.org/multipage/interactive-elements.html)
  - [\<details\>][details]：一个可折叠的块级元素
  - [\<summary\>][summary]：折叠组件的标签
- [4.12 Scripting（脚本相关）](https://html.spec.whatwg.org/multipage/scripting.html)
  - [\<script\>][script]：脚本，运行内嵌脚本或 `src` 属性值（地址）的脚本
    - 属性
      - `src`：设置外部脚本地址（不是内嵌脚本）
      - `type`：值必须为 MIME 类型，`text/javascript`、`text/ecmascript`、`application/javascript`、`application/ecmascript`
      - `nomodule`：如果浏览器支持 ESM，则不执行
      - `async`：异步
      - `defer`：异步
      - `crossorigin`：跨域
      - `integrity`：资源完整性（SRI），比如用 `sha256` 检测资源是否正常
      - `referrerpolicy`：HTTP 请求的隐私策略
  - [\<noscript\>][noscript]：当浏览器脚本禁止或无法执行时，显示其中的内容
  - Web Components 相关
    - [\<template\>][template]：模板元素，可以存放代码片段（用于 JS 处理）
    - [\<slot\>][slot]：插槽（类似于 Vue 中的 slot）
  - [\<canvas\>][canvas]：画布元素，可以通过 JS 编程控制。

### 内容分类

- [内容分类 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)

> 每一个 HTML 元素都必须遵循定义了它可以包含哪一类内容的规则。 这些规则被归类为几个常见的元素内容模型（content model）。每个 HTML 元素都属于 0 个、1 个或多个内容模型，每个模型都有一些规则使得元素中的内容必须遵循一个 HTML 规范文档( HTML-conformant document)。

![Content_categories_venn.png](https://developer.mozilla.org/@api/deki/files/6244/=Content_categories_venn.png?size=webview)

- **主内容类（Main content categories）**
  - **元数据内容（Metadata content）**
    - [\<base\>][base], [\<link\>][link], [\<meta\>][meta], [\<noscript\>][noscript], [\<script\>][script], [\<style\>][style], [\<title\>][title]
  - **流式元素（Flow content）**
    - 其他大部分具有结构效果的元素，比如 [\<div\>][div], [\<h1\>][h1], [\<a\>][a], [\<strong\>][strong], [\<noscript\>][noscript], [\<svg\>][svg], [\<video\>][video] 等
    - 有一些特殊情况，比如 带 `scoped` 属性的 [\<style\>][style] 等
  - **章节元素（Sectioning content）**
    - 语义化结构 [\<header\>][header], [\<footer\>][footer], [\<h1\>-\<h6\>][h1], [\<article\>][article], [\<aside\>][aside], [\<nav\>][nav], [\<section\>][section]
  - **标题元素（Heading content）**
    - [\<h1\>-\<h6\>][h1], [\<hgroup\>][hgroup]
  - **短语元素（Phrasing content）**
    - 可以简单理解为行内元素，比如 [\<strong\>][strong], [\<kbd\>][kbd], [\<label\>][label], [\<input\>][input], [\<textarea\>][textarea], [\<img\>][img], [\<svg\>][svg], [\<video\>][video] 等
  - **嵌入元素（Embedded content）**
    - [\<audio\>][audio], [\<canvas\>][canvas], [\<embed\>][embed], [\<iframe\>][iframe], [\<img\>][img], [\<math\>][math], [\<object\>][object], [\<svg\>][svg], [\<video\>][video]
  - **交互元素（Interactive content）**
    - [\<a\>][a], [\<button\>][button], [\<details\>][details], [\<embed\>][embed], [\<iframe\>][iframe], [\<label\>][label], [\<select\>][select], [\<textarea\>][textarea]
    - 某些元素加上属性也可以交互：[\<audio\>][audio], [\<img\>][img], [\<input\>][input], [\<menu\>][menu], [\<object\>][object], [\<video\>][video]
  - **表单相关内容（Form-associated content）**
    - [\<form\>][form], [\<input\>][input], [\<select\>][select] 等
  - **支持脚本元素**
    - 不会被渲染到页面中的就脚本元素：[\<script\>][script], [\<template\>][template]

## HTML 典型代码

### 基本结构

一个 HTML 文件至少要包含：

- DOCTYPE：用于指明是 HTML
- \<html\>
  - \<head\>：一些 meta 信息（不会渲染到页面中，具有其他作用）
  - \<body\>：主要内容（渲染到页面中）

```html
<!DOCTYPE html>
<html>
  <head>
    <title>文档的标题（会反映在浏览器标签页中）</title>
  </head>
  <body>
    <h1>H1 标题</h1>
    <p>段落</p>
    <p>另一个段落</p>
  </body>
</html>
```

### 一个简单例子

通过 VS Code 中内置的 Emmet 功能生成的基本 HTML 代码，并加入样式 和 JS 代码的标签。

（这里略过 CSS 和 JS 的代码）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <style></style>
  </head>
  <body>
    <div id="app"></div>
    <script src="app.js"></script>
  </body>
</html>
```

<!-- Links -->

[h1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
[head]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
[title]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
[base]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
[link]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
[meta]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
[style]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
[body]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
[article]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[section]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
[nav]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
[aside]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
[hgroup]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
[header]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
[footer]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
[div]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
[p]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
[hr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
[pre]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
[blockquote]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
[ol]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
[ul]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
[li]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
[dl]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
[dt]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
[dd]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
[figure]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
[figcaption]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
[main]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
[em]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
[i]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
[strong]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
[b]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
[s]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
[u]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
[mark]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
[abbr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
[ruby]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
[rt]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
[rp]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
[a]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
[code]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
[kbd]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
[small]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
[sup]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
[sub]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
[span]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
[br]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
[ins]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
[del]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
[picture]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
[source]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
[img]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
[video]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
[audio]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
[track]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
[iframe]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
[table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
[tbody]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
[thead]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
[tfoot]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
[tr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
[td]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
[th]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
[form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[label]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
[input]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
[type]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/type
[textarea]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
[button]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[select]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
[datalist]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
[option]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
[optgroup]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
[output]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
[progress]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
[meter]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
[fieldset]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
[legend]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
[details]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
[summary]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
[script]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
[noscript]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
[template]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
[slot]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
[canvas]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
[area]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
[col]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
[colgroup]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
[command]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command
[embed]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
[keygen]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen
[param]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
[wbr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
[h1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
[svg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg
[math]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math
[object]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
[menu]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
