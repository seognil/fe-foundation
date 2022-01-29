---
title: CSS 学习指南
date: 2020-06-04 01:59:52
permalink: /frontend/css
categories:
  - 前端开发
  - Web
tags:
  - css
---

# CSS 学习指南

## CSS 简介

### 什么是 CSS

> 层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

大白话：CSS 是用来让网页变好看的。

CSS 本身只是一些规则的描述，具体的渲染是依靠浏览器的渲染引擎完成的。  
它不是图灵完备的通用编程语言，所以 CSS 肯定有它的局限性。

而且，虽然 CSS 现在也有编程接口的草案，提高了一点它的能力，但也不完善。  
[Is Houdini ready yet‽](https://ishoudinireadyyet.com/) （想想当你要兼容 IE 或者小程序…）

所以，不是所有的设计稿的效果都能通过 CSS 直接或方便地实现。  
或许需要借助 JS 或其他工具手动进行。

不过，仅仅要实现“让 HTML 页面变好看”这件事，CSS 做得还算不错。

### 什么是 W3C

> 万维网联盟（英语：World Wide Web Consortium，縮寫 W3C），又称 W3C 理事会，是万维网的主要国际标准组织。

大白话：CSS 是他们修订的标准之一。

### 为什么要学习 CSS

- 当你要让 HTML 页面变好看

和 [HTML](/frontend/html) 一样，现代前端开发可以直接利用现成的框架和组件，  
但如果涉及定制开发，或当我们谈到框架组件的实现，归根结底总还是要接触 CSS。

## 学习 CSS

CSS 的知识体系很大，大量的规则细节需要在实践中不断踩坑。

### 概览

通过快速浏览 W3C 标准文档和 MDN，了解 CSS 的大致样貌。并尝试自己练习。

- 耗时：
  - 从入门到了解 CSS 的基本知识体系，10~30 小时
  - 通过刻意训练和实战熟悉 CSS 的很多效果，20~60 小时
  - 在实际工作中踩坑各种细节，……
- 难点：
  - CSS 本身的表达能力不足，想提高生产力还需要学习 Sass/Less 等额外工具（基本使用其实没多难）
  - 写出漂亮的页面，完美还原设计稿
  - 响应式设计
  - 如何写出可维护的 CSS 代码
- 工具：
  - [Chrome](/workspace/chrome)
  - [VS Code](/workspace/vscode)
    - [Sass](http://sass-lang.com/)
    - [Less](http://lesscss.org/)

### 学习路线

- 前置学习
  - [计算机科学 入门指南](/cs/crash-course-computer-science)
  - [关于 Chrome](/workspace/chrome)
- 学习 CSS
  - 快速阅读文档
    - 翻阅 CSS 标准文档
    - 翻阅 MDN 中 CSS 的文档，查看例子和实际效果
    - 建立自己的 CSS 知识体系
  - 动手玩，亲自尝试各种样式效果
  - 学习 Sass/Less 等 CSS 预编译工具
- 实战
  - 你可以直接开发一个 Web 应用，随用随查，通过完成实际的需求来熟悉 CSS。
- 进阶
  - 了解和处理不同浏览器的兼容性问题
  - 尝试实现酷炫的效果，比如曲线裁切、叠加混合、水波纹、动画
  - CSS houdini 编程
  - 了解视觉格式化模型

## 资料

### 自学教材

#### 入门

- [CSS Cheat Sheet](https://websitesetup.org/css3-cheat-sheet/)：CSS 常用属性速查表
- [CSS - Learn X in Y minutes](https://learnxinyminutes.com/docs/zh-cn/css-cn/)
- [CSS（层叠样式表） - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

#### 视频 {#video .timeline-note}

- [CSS Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=yfoY53QXEnI)：85 分钟，CSS 从入门到了解
  - 2:02 - 什么是 CSS，准备开发基本环境
  - 5:33 - 添加 CSS 的三种方式：行内（元素的 `style` 属性），内嵌（`<style>` 标签），外链（`<link>` 标签引入外部 `.css` 文件）。以 `color` 为例进行演示
  - 11:14 - 选择器，基本语法结构
  - 13:31 - 颜色（color）
  - 15:46 - 文字样式
  - 20:00 - class 和 id
  - 24:53 - 盒子模型
  - 33:00 - 文字样式、列表（li）
  - 39:10 - 链接（a）、图片（img）
  - 44:20 - 表单（form）样式
  - 51:20 - 浮动（float）
  - 57:10 - 定位（position）
  - 63:41 - 背景（background）
  - 66:20 - 伪类
  - 68:55 - 通过一个简单的页面 Demo 练习 CSS，支持响应式。

#### 布局 {#layout}

- [学习 CSS 布局](http://zh.learnlayout.com/)：布局基本知识，闯关式教程

以及几种来自新标准的布局方案：

- Flex
  - [Flexbox CSS In 20 Minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc)：视频，20 分钟
  - [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)：Flex 速查文档
  - [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)：Flex 速查表
  - [FLEXBOX FROGGY](http://flexboxfroggy.com/)：Flex，闯关式教程
- Grid
  - [CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)：视频，28 分钟
  - [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)：Grid 速查文档
  - [LEARN CSS GRID](https://learncssgrid.com/)：Grid 速查文档
- Column
  - [写给自己看的 CSS columns 分栏布局教程](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-columns-layout/)

### CSS 框架、库

如果你打开搜索引擎搜索 `css frameworks`，你会发现相比预处理器，CSS 的框架要多得多。

现在的前端开发可以使用组件框架，直接内置了很多风格统一的组件，  
比如 [Ant Design](https://ant.design/components/overview-cn/) 或 [Element UI](https://element.eleme.cn/#/zh-CN/component/layout)。  
又例如 Material Design 有 React 组件版本的 [@mui/material](https://mui.com/)。

如果不使用第三方组件库而是自行开发，也可以选择 CSS 框架。  
（我近几年接触 CSS 不太多，这里就简单列举几个我了解过的高星 CSS 框架。）

- 布局和组件，配合它们提供的 JS 文件还能实现交互效果。
  - [Bootstrap](https://getbootstrap.com/)：老牌 CSS 框架
  - [Materialize](https://materializecss.com/)：Material Design 风格的框架
  - [Bulma](https://bulma.io/)：一个基于 Flex 的框架，纯 CSS，不含 JS
- 2D 动画，提供元素的简单动画效果
  - [Animate.css](https://animate.style/)
  - [CSShake](https://elrumordelaluz.github.io/csshake/)
- 其他
  - [Font Awesome](https://fontawesome.com/)：一个矢量图标库
  - [98.css](https://jdan.github.io/98.css/)：Win98 风格的样式

### 现代 CSS 技术

- [The State of CSS 2019](https://2019.stateofcss.com/tw/)：2019 年 CSS 领域技术分析，可以了解很多 CSS 的新标准和新技术。

正如 The State of CSS 所描绘的那样，CSS 的世界也像 JS 那样在爆发式发展，各种新技术的使用率在不断上升。例如 React SSR 框架 [Next.js](https://nextjs.org/)，就同时集成并运用了 css-modules、styled-jsx、Sass、PostCSS 多种 CSS 技术。

#### CSS 预处理器

- [2019 年，你是否可以抛弃 CSS 预处理器？ | Aotu.io「凹凸实验室」](https://aotu.io/notes/2019/10/29/css-preprocessor/index.html)
- [CSS 预处理器 - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_preprocessor)

> CSS 预处理器是一个能让你通过预处理器自己独有的语法来生成 CSS 的程序。

CSS 预处理器是近年来前端开发的标配，  
不同工具各有差别，但它们的目的都是提高编写样式的效率，  
有一些公共的主要特性：

- 嵌套结构：你可以用类似 HTML 同样的结构编写样式，使代码具有更高的可读性
- 变量系统：满足 DIY 原则，提高代码可维护性
- 预处理：比如 PostCSS 可以自动为属性添加 prefixes

主流的预处理器有以下这些，通常会选择 Sass/Less + PostCSS 搭配使用：

- [Sass](http://sass-lang.com/)
- [Less](http://lesscss.org/)
- [Stylus](https://stylus-lang.com/)
- [PostCSS](https://postcss.org/)

#### CSS 方法论

这些理论不属于 CSS 规范，它们是实践中产生的方法论，  
目的都是为了提升大型项目中，样式代码的可维护性和可扩展性。

- [方法论 - The State of CSS 2019](https://2019.stateofcss.com/tw/technologies/methodologies/)
  - BEM - [BEM](http://getbem.com/introduction/)：一种 class 的命名规范
  - Atomic CSS - [Atomic CSS](https://acss.io/)：原子 CSS，通过基本样式库的组合而不是直接写 CSS 代码来编写样式
  - OOCSS
  - SMACSS - [Scalable and Modular Architecture for CSS](http://smacss.com/)：一种可扩展和模块化的 CSS 架构模式
  - ITCSS - [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)：一种可扩展和可维护的 CSS 架构模式

#### CSS in JS

- [CSS in JavaScript - 2019 JavaScript Rising Stars](https://risingstars.js.org/2019/zh#section-css-in-js)
- [CSS-in-JS - The State of CSS 2019](https://2019.stateofcss.com/tw/technologies/css-in-js/)
- [What actually is CSS-in-JS?](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757)

现代 Web 框架可以通过 JS 编写 HTML 和业务逻辑，  
同样的，借助额外的工具，还可以用 JS 来编写 CSS。  
（当然，不用这些高科技，直接编写 CSS 或使用预处理器的方案也很常见，胜在简单方便。）

其实 CSS in JS 技术主要是 React 技术圈在使用。  
像 Vue 有 [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html) 的开发方案，Angular 也有标准的 [文件结构](https://angular.cn/guide/file-structure#application-source-files)。  
唯独 React 只解决了 JS 和 HTML 的问题，没怎么照顾到 CSS，产生了技术缺口。

一些 CSS in JS 的库：

- [styled-components](https://github.com/styled-components/styled-components)：通过 JS 函数生成绑定样式的 React 组件。
- [css-modules](https://github.com/css-modules/css-modules)：可模块化的 CSS，可以用于组件的样式计算和切换。
- [styled-jsx](https://github.com/vercel/styled-jsx)：在 JSX 中写样式，使 React 也能单文件编写组件。

### 工具和网站

- [CSS Triggers](https://csstriggers.com/)：速查表，样式变更对重绘的影响

* [Can I use](https://caniuse.com/#feat=flexbox)：兼容性查询
* [CSS STATS](https://cssstats.com/stats?url=google.com)：网站样式分析工具

- [CSS-Tricks](https://css-tricks.com/)：CSS 实践技巧和前沿资讯
- [CODEPEN](https://codepen.io/)：平台网站，包含大量酷炫的设计（其实这个站点不完全是关于 CSS，还包括了 JS，只是偏设计的作品比较多）

### 动画和性能

鄙人前几年做过一段时间 CSS 动画开发，踩过一些坑。  
关于 CSS 的渲染性能和动画性能。要点是如何选择合适的属性。  
（比如避免重布局、利用硬件加速等等）

- [CSS 动画的性能优化](http://zencode.in/14.CSS%E5%8A%A8%E7%94%BB%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html)
- [CSS3 硬件加速也有坑](https://juejin.im/entry/5adec11151882567236e64ee)
- [前端性能优化（CSS 动画篇）](https://segmentfault.com/a/1190000000490328)
- [CSS3 动画卡顿性能优化解决方案](https://segmentfault.com/a/1190000013045035)
- [CSS3 动画之补间动画](https://aotu.io/notes/2016/05/06/Guide-To-Tween-Animation/index.html)

不过说到动画，纯 CSS 有它的局限性（比如复杂场景下的性能）。  
而且如果要支持交互或动态动画，一般还需要额外的编程工具。  
进一步深入，甚至可能会涉及游戏开发和图形学的知识。  
这里我没有太多的经验。贴几个略微使用和了解过的工具，权当开眼。

- 3D 动画
  - [three.js](https://threejs.org/)
  - [css3d-engine](https://github.com/shrekshrek/css3d-engine)
- 2D 动画
  - [GreenSock](https://greensock.com/)
  - [Lottie](http://airbnb.io/lottie/#/)
  - [Spirit](https://spiritapp.io/)
  - [mo.js](https://mojs.github.io/)

### 扩展阅读

- [为什么 CSS 这么难学？](https://www.zhihu.com/question/66167982)
- [CSS Grid 布局那么好，为什么至今没有人开发出基于 Grid 布局的前端框架呢？](https://www.zhihu.com/question/397861009/answer/1260563343)
- [iCSS](https://github.com/chokcoco/iCSS)：“CSS 奇技淫巧，在这里，都有。”
- [css-guidelines](https://github.com/chris-pearce/css-guidelines#general-principles)：推荐编码风格（看看就好，应该保持和自己的团队风格统一）
- [编写可维护的 CSS](https://segmentfault.com/a/1190000000388784)：另一份编码风格指南（可能比较陈旧）

## CSS 知识体系

**通过阅读标准文档，建立 CSS 知识体系**

根据我自己的开发经验，以及交叉对比不同的资料，我粗略总结出了一套 CSS 知识体系。  
基于这套体系，快速阅读官方文档和示例，就能够系统地了解 CSS 的整体概念。  
在实际的开发任务中，随用随查（如字体、边框等细节样式），即可满足开发需求。

以下列表中的所有链接都来自：

- [CSS SPEC­I­FI­CA­TIONS - W3C](https://www.w3.org/Style/CSS/current-work)：CSS 标准文档的归档页，**所有**标准（和草案）都可以在这里找到。
- [CSS - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)：MDN 开发者文档

（还有什么比标准文档更权威呢？）

- 基本语法：[Syntax and basic data types - W3C](https://www.w3.org/TR/CSS2/syndata.html)
  - [CSS 基本语法 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
  - [浏览器的 prefix - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)
  - [错误的语法会解析失败 - W3C](https://www.w3.org/TR/CSS2/syndata.html#parsing-errors)
  - [CSS 支持注释 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments)
- 选择器：[Selectors Level 3 - W3C](https://www.w3.org/TR/selectors-3/)
  - [CSS 选择器 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)：单选，分组，组合，伪类/伪元素
  - [选择器优先级算法 - W3C](https://www.w3.org/TR/selectors-3/#specificity)：3 个优先级，ID > 类/属性/伪类 > 元素/伪元素；无视通用选择器
- 层叠和继承：[CSS Cascading and Inheritance Level 3 - W3C](https://www.w3.org/TR/css-cascade-3/)
  - [@import - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import) 用于从其他样式表导入样式规则
  - [样式规则的来源 - W3C](https://www.w3.org/TR/css-cascade-3/#cascading-origins)：用户修改的，开发者写，浏览器默认的，animation 即时生成的，transition 即时生成的
  - [!important - W3C](https://www.w3.org/TR/css-cascade-3/#importance) 相比普通规则有更高的优先级
  - [层叠优先级 - W3C](https://www.w3.org/TR/css-cascade-3/#cascading)：8 个优先级，transition > 浏览器默认!imp > 用户!imp > 开发!imp > animation > 开发 > 用户 > 浏览器默认
- 值和单位：[CSS Values and Units Module Level 3 - W3C](https://www.w3.org/TR/css-values-3/)
  - [单条样式的语法示例 - W3C](https://www.w3.org/TR/css-values-3/#value-examples)
  - [各种数值单位 - W3C](https://www.w3.org/TR/css-values-3/#lengths)：`em`, `vh`, `px`, `deg`, `Hz` 等
  - [calc() - W3C](https://www.w3.org/TR/css-values-3/#calc-notation) 可以用来进行数值计算
  - [attr() - W3C](https://www.w3.org/TR/css-values-3/#attr-notation) 可以读取 HTML 元素属性来计算
- CSS 变量：[CSS Custom Properties for Cascading Variables Module Level 1 - W3C](https://www.w3.org/TR/css-variables-1/)
  - [CSS 现在自带变量功能了 - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- 盒子模型：[Box Model - W3C](https://www.w3.org/TR/CSS2/box.html#box-model)
  - [盒子模型 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E7%9B%92%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%90%84%E4%B8%AA%E9%83%A8%E5%88%86)：4 个部分，外边距、边框、内边距、内容
  - [border-box - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E6%9B%BF%E4%BB%A3%EF%BC%88IE%EF%BC%89%E7%9B%92%E6%A8%A1%E5%9E%8B)
  - [外边距折叠 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E5%A4%96%E8%BE%B9%E8%B7%9D%E6%8A%98%E5%8F%A0)
  - [overflow - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)
- 布局方案（三个新的布局方案，详情见 [上文](#layout)
  - [CSS Flexible Box Layout Module Level 1 - W3C](https://www.w3.org/TR/css-flexbox-1/)：`flexbox` 弹性盒子
  - [CSS Grid Layout Module Level 1 - W3C](https://www.w3.org/TR/css-grid-1/)：`grid` 网格布局
  - [CSS Multi-column Layout Module Level 1 - W3C](https://www.w3.org/TR/css-multicol-1/)：`column` 多列
- 定位：[CSS Positioned Layout Module Level 3 - W3C](https://www.w3.org/TR/css-position-3/)
  - [position - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/%E5%AE%9A%E4%BD%8D#%E4%BB%8B%E7%BB%8D%E5%AE%9A%E4%BD%8D)：共 5 个，`static`/`relative`/`sticky`/`absolute`/`fixed`
  - [定位的上下左右偏移 - W3C](https://www.w3.org/TR/css-position-3/#coords)
  - [z-index - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/%E5%AE%9A%E4%BD%8D#%E4%BB%8B%E7%BB%8D_z-index)
  - [float - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)：浮动定位和清除浮动（现在一般很少用 float 了）
- 媒体查询：[Media Queries - W3C](https://www.w3.org/TR/css3-mediaqueries/)
  - [可以用从来实现响应式设计 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries#%E5%AE%9A%E4%BD%8D%E5%AA%92%E4%BD%93%E7%89%B9%E6%80%A7)
  - [响应式设计 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)
- 变换：[CSS Transforms Module Level 1 - W3C](https://www.w3.org/TR/css-transforms-1/)
  - [transfrom - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 系列属性可以用于 2D 或 3D 变换
  - [transition-duration - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)：变换效果可以有一定运动时间
  - [transition-timing-function - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)：速度曲线
  - [perspective - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)：3D 的景深
- 动画：[CSS Animations Level 1 - W3C](https://www.w3.org/TR/css-animations-1/)
  - [animation - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
  - [@keyframes - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)：动画的关键帧
  - [animation-timing-function - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)：速度曲线
- 剩下其他的各种样式属性
  - [background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)、[border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)、[color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)、[font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)、[text](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent)等等

## CSS 典型代码

### 元素样式

```css
#demo-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
```

<div id="demo-element"></div>

<style>
  #demo-element {
    background-color: #1766aa;
    margin: 20px;
    border: 5px solid #333;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
</style>

### 动画

[animation - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

```css
#demo-animation {
  animation: 1s ease-in-out 1s infinite alternate slidein;
}

@keyframes slidein {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
```

<div id="demo-animation"></div>

<style>
  #demo-animation {
    animation: 1s ease-in-out 1s infinite alternate none running slidein;
    background-color: #1766aa;
    margin: 20px;
    border: 5px solid #333;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  @keyframes slidein {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>

### Flex

[flex-grow](https://yoksel.github.io/flex-cheatsheet/#flex-grow)

```css
.parent {
  display: flex;
  height: 100%;
}
.child:nth-child(3) {
  flex-grow: 1;
}
```

<div id="demo-flex">
  <div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child child--featured"></div>
    <div class="child"></div>
  </div>
</div>

<style>
  #demo-flex {
    height: 250px;
  }
  #demo-flex .parent {
    display: flex;
    height: 100%;
    border-color: #3b8686;
  }
  #demo-flex .child {
    position: relative;
    min-width: 2.5rem;
    min-height: 2.5rem;
    padding: .5rem;
    background-color: #79bd9a;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 1px solid #cff09e;
  }
  #demo-flex .child:nth-child(3) {
    flex-grow: 1;
    background-color: #3b8686;
  }

  #demo-flex .child:nth-child(1) {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='%230B486B' fill-opacity='.7'%3E 1 %3C/text%3E%3C/svg%3E");
  }
  #demo-flex .child:nth-child(2) {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='%230B486B' fill-opacity='.7'%3E 2 %3C/text%3E%3C/svg%3E");
  }
  #demo-flex .child:nth-child(3) {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='%230B486B' fill-opacity='.7'%3E 3 %3C/text%3E%3C/svg%3E");
  }
  #demo-flex .child:nth-child(4) {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.25em' style='font: 30px/1 Georgia, serif' fill='%230B486B' fill-opacity='.7'%3E 4 %3C/text%3E%3C/svg%3E");
  }
</style>

### Sass

- [Sass](https://sass-lang.com/)
- [Sass.js Playground](https://sass.js.org/)

Sass 支持变量和嵌套，还有很多其他功能。

以下 Sass 代码：

```scss
$brandColor: #f60;
$size: 1em;

.selector {
  margin: $size;
  background-color: $brandColor;

  .nested {
    margin: $size / 2;
  }
}
```

会被编译成如下 CSS 代码：

```css
.selector {
  margin: 1em;
  background-color: #f60;
}

.selector .nested {
  margin: 0.5em;
}
```

### Less

- [Less](http://lesscss.org/)
- [Less-To-CSS Playground](http://lesscss.org/less-preview/)

同样的，Less 也支持变量和嵌套，还有很多其他功能。

以下 Less 代码：

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}

#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

会被编译成如下 CSS 代码：

```css
#header {
  width: 10px;
  height: 20px;
}
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

### PostCSS

- [PostCSS](https://postcss.org/)
- [Autoprefixer CSS online](https://autoprefixer.github.io/)

Post 之于 CSS，像是 [Babel](https://www.babeljs.cn/) 之于 JS。作用之一是提高代码兼容性。

以下 CSS 代码：

```css
.example {
  display: grid;
  transition: all 0.5s;
  user-select: none;
  background: linear-gradient(to bottom, white, black);
}
```

会被预处理成如下 CSS 代码：

```css
.example {
  display: -ms-grid;
  display: grid;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(white),
    to(black)
  );
  background: -o-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
```

## CSS 相关

这一小节中的内容比较琐碎，以及有一些经验知识。

### 伪类和伪元素

- [Pseudo-classes - W3C](https://www.w3.org/TR/selectors-3/#pseudo-classes)
- [Pseudo-elements - W3C](https://www.w3.org/TR/selectors-3/#pseudo-elements)

经典的面试题：这两者有何异同。

其实很简单，看看它们的名字，伪“类”、伪“元素”。

伪类，就像 `class` 类一样，相当于筛选，找出符合条件的一部分元素。  
常见如 `:first-child`、`:visited`、`:hover`  
语法用 1 个冒号。

伪元素，重点在元素，可以理解为当前元素的隐式子元素。  
常见如 `::before`、`::after`、`::placeholder`。  
语法用 2 个冒号。

### 浏览器的默认样式

> [Default style sheet for HTML 4](https://www.w3.org/TR/CSS2/sample.html)

不同显示设备和浏览器具有不同的默认样式，比如：

- 输入框样式
- 进度条样式
- 设备自带哪些字体
- 浏览器的最小字号
- 手机上的最小字号

等等。

### 浏览器兼容性

随时通过 [Can I use](https://caniuse.com/#feat=flexbox) 查询兼容性。

[PostCSS](https://postcss.org/) 可以有限地处理 CSS 兼容性问题。
