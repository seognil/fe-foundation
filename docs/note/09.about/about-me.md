---
title: 关于我（2019）
date: 2020-01-13 21:16:36
permalink: /about/me
categories:
  - 关于
tags:
  - 关于我
---

# 关于我（2019）

## 我自己

目前状态

- 技能
  - 略懂点 JS
    - 写过些功能、优化和修复
    - 做过点架构改进：  
      公司 40 万行 JS 的老项目  
      从 ES5/jQuery/Backbone/Underscore/Require.js  
      到 TS/React Hooks/Redux/RxJS/Ramda/Webpack
- 学习中
  - 修炼 TS
  - 学习现代化、工程化前端开发
  - 学习 CS
- 其他
  - 写文章
  - 做了些技术文档翻译

## 价值产出

给 2019 年（工作以外的部分）做个小结吧

### 写文章

> repo：[seognil/fe-foundation](https://github.com/seognil/fe-foundation)

（从 2019/10 起）开始系统地写文章，目前有几个系列：

- [前端入门指南系列](/note/frontend-development-cookbook)
- [JavaScript 语言学习系列](/frontend/javascript-foundation)
- [其他学习指南系列](/study/crash-course-study-skills)

主要的目的有两个：

- 梳理自己的知识体系
- 教朋友学前端

然而目前完成度可能只达到的 30%  
还有很多篇没写、或者写了草稿没整理的  
~~毕竟写得比朋友们学得快就好了（~~

正式发布的文章：  
`cloc` 统计约 五千行  
`wc -m` 统计约 17 万字（符）

争取明年先完整写完（然后进入日常更新模式）

### 开源贡献

> repo 分类：[seognil-contributor](https://github.com/seognil-contributor)

#### 翻译和校对

完成的工作：

- [2019 年 JavaScript 明星项目](https://risingstars.js.org/2019/zh)：[翻译](https://github.com/bestofjs/javascript-risingstars/pull/49)
- [2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh)：[翻译](https://github.com/bestofjs/javascript-risingstars/pull/39)
- [The State of JavaScript 2019](https://2019.stateofjs.com/zh/)：[翻译](https://github.com/StateOfJS/State-of-JS-2019/pull/50)
- [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)：[校对](https://github.com/conventional-commits/conventionalcommits.org/pull/124)、[改进](https://github.com/conventional-commits/conventionalcommits.org/pull/126)、[版本更新](https://github.com/conventional-commits/conventionalcommits.org/pull/155)
- [Typescript-Handbook](https://github.com/zhongsp/TypeScript)：[翻译](https://github.com/zhongsp/TypeScript/pull/274)了 [TS 官方文档中的一章](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
- [用 TypeScript 写 React & Redux - 完全指南](https://github.com/seognil-contributor/react-redux-typescript-guide)：[翻译](https://github.com/piotrwitek/react-redux-typescript-guide/pull/199)（但还未合并）
- [开始 – React 官方文档](https://zh-hans.reactjs.org/docs/getting-started.html)：React 官方翻译计划几篇文章 [翻译和校对](https://github.com/reactjs/zh-hans.reactjs.org/pulls?q=is%3Apr+is%3Aclosed+author%3Aseognil)

原本目的有几个：

- 了解 GitHub 社区（和开源项目协作流程）
- 锻炼英语
- 了解前端和相关生态的知识
- （回馈社区）

但是做翻译实在太累了：  
包括翻译和校对、理解和斟酌，尽力追求翻译质量。  
导致我的产出速度大致是每小时一千（汉）字，太花时间了。  
这么看收益还低：  
仅对于学习来说，自己直接看英文版好像更有效率，  
大致理解核心意思就行了，毕竟不用考虑分享就不用锱铢必较。

（而且已经开始看硬核技术资料的人，英语水平应该也不会差，谁会去看汉化版呢…）

所以明年不准备搞了，多搞点代码层面的事情好像更有价值一点……

<!-- [关于翻译](./) -->

#### PR

做了一些微小的工作：

- [给 AlloyFinger 修了一个 bug](https://github.com/AlloyTeam/AlloyFinger/pull/85)
- [给 Homebrew cask 提了一个软件升级](https://github.com/Homebrew/homebrew-cask/pull/71677)

像上面说的，今年争取多搞点代码的事情。

### 造轮子

> repo 分类：[seognil-lab](https://github.com/seognil-lab)

写了点业务中碰到的需求，放在 GitHub 和 npm 上。  
都是些杂七杂八的小玩意儿，后来也没怎么维护和推广，所以基本没产生什么社区影响…  
（但是对于工程化的开发模式，基本算是入门并在内部推广了，还算有点收获）

部分轮子：

- [webpack-starter](https://github.com/seognil-lab/webpack-starter)  
  已经落地。  
  全特性 Webpack 项目模板，作为内部项目技术升级的试验地。  
  但还有优化空间（比如热重载没完成）

- [drag-resize-rotate](https://github.com/seognil-lab/drag-resize-rotate)  
  已经落地。  
  原本是给常见的 [DRR](https://www.npmjs.com/search?q=drag%20rotate) 功能设计的计算层，  
  这样就能方便地支持不同的 UI 层了（比如 jQuery/React/Vue）。  
  代码设计上还有优化空间。

- [vector-math-fp](https://github.com/seognil-lab/vector-math-fp)  
  已经落地。  
  函数式风格的 2D 平面计算库，  
  用于几个内部功能，包括上一个提到的 [DRR](https://github.com/seognil-lab/drag-resize-rotate/blob/master/package.json#L66)。

- [approx-fix](https://github.com/seognil-lab/approx-fix)  
  给 vector-math-fp 用的，  
  解决 IEEE 754 问题的快速方案。
