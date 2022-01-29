---
title: 关于 Chrome
date: 2019-12-14 22:03:19
permalink: /workspace/chrome
categories:
  - 开发环境
tags:
  - 浏览器
  - chrome
---

# 关于 Chrome

## Chrome 简介

[Chrome](https://www.google.com/chrome/) 是一个免费的跨平台浏览器，由 Google 开发，  
Chrome 对于前端开发来说（尤其是调试代码）非常方便，  
并且有丰富的插件市场，包括很多前端框架的调试插件。

用 Brew 安装 Chrome：`brew cask install google-chrome`

### Chrome 界面设计

- [Redesigning Chrome Desktop: The value of a pixel](https://medium.com/google-design/redesigning-chrome-desktop-769aeb5ab987)
- [Unboxing Chrome: Redesigning the omnibox](https://medium.com/@san_toki/unboxing-chrome-f6af7b8161a2)

## 浏览器的知识

### 浏览器基本调试技巧

- [在 Chrome DevTools 中调试 JavaScript 入门](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=zh-cn)
- [Performance Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference?hl=zh-cn)

### 浏览器原理

- [当···时发生了什么？](https://github.com/skyline75489/what-happens-when-zh_CN)
- [浏览器输入 URL 后发生了什么？](https://zhuanlan.zhihu.com/p/43369093)
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/)

* [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

- [[译] 现代浏览器内部揭秘（第一部分）](https://juejin.im/post/5b9b0932e51d450e9059c16a)
- [[译] 现代浏览器内部揭秘（第二部分）](https://juejin.im/post/5bc293cf6fb9a05ce95c8468)
- [[译] 现代浏览器内部揭秘（第三部分）](https://juejin.im/post/5bc29d56e51d450e9e4466cc)
- [[译] 现代浏览器内部揭秘（第四部分）](https://juejin.im/post/5bc95247e51d450e40072e49)

## 设置 Chrome

### 浏览器设置

- 确认搜索引擎设置为 Google （或 bing、DuckDuckGo，反正不要用百度）
- 开启账号同步

### 插件

我用的一些重要插件：

#### 私人

- [Google Keep](https://keep.google.com/)：笔记速写工具
- [LastPass](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd)：密码管理工具
- [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb)：广告屏蔽
- [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca)：个性化新标签页
- [PocketTube: Youtube Subscription Manager](https://chrome.google.com/webstore/detail/pockettube-youtube-subscr/kdmnjgijlmjgmimahnillepgcgeemffb)：YouTube 订阅管理器

#### 干活

- 杂项
  - [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)：Proxy 管理工具
  - [Workona](https://chrome.google.com/webstore/detail/workona/ailcmbgekjpnablpdkmaaccecekgdhlh?hl=en)：工作区管理器（增强的标签管理器）
  - ~~[Tab Manager Plus for Chrome](https://chrome.google.com/webstore/detail/tab-manager-plus-for-chro/cnkdjjdmfiffagllbiiilooaoofcoeff)：标签管理器~~
  - [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)：脚本扩展平台
  - [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)：网站样式扩展平台
- 英语
  - [沙拉查词-聚合词典划词翻译](https://chrome.google.com/webstore/detail/%E6%B2%99%E6%8B%89%E6%9F%A5%E8%AF%8D-%E8%81%9A%E5%90%88%E8%AF%8D%E5%85%B8%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/cdonnmffkdaoajfknoeeecmchibpmkmg)：划词翻译（参考 [英语 训练指南](/study/using-english)）
  - [Grammarly for Chrome](https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen)：英语语法检查助手
- 增强
  - [Video Speed Controller](https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk)：视频快捷键（参考 [用快捷键控制视频播放](/workspace/my-video-player-shortcuts)）
  - [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)：自定义脚本和样式注入
  - [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)：JSON 格式化查看器
- Github
  - [Enhanced Github](https://chrome.google.com/webstore/detail/enhanced-github/anlikcnbgdeidpacdbdljnabclhahhmd?hl=en)：GitHub 功能增强
  - [Isometric Contributions](https://chrome.google.com/webstore/detail/isometric-contributions/mjoedlfflcchnleknnceiplgaeoegien)：GitHub 提交活动 3D 化
  - [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)：Repo 侧边栏文件树
- 开发
  - [Console Importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie)：在控制台安装 npm 包
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)：React DevTools
  - [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)：Redux DevTools
  - [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)：Vue DevTools
  - [MobX Developer Tools](https://chrome.google.com/webstore/detail/mobx-developer-tools/pfgnfdagidkfgccljigdamigbcnndkod)：MobX DevTools
