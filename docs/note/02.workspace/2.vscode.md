---
title: 关于 VS Code
date: 2019-12-14 22:03:19
permalink: /workspace/vscode
categories:
  - 开发环境
tags:
  - vscode
  - 工具
---

# 关于 VS Code

## VS Code 简介

[VS Code](https://code.visualstudio.com/) 是一个跨平台代码编辑器，由微软开发并开源，  
VS Code 兼顾了轻便性和扩展性，是前端开发（甚至其他语言）的主流编辑器。  
（另一些编辑器/IDE，例如：WebStorm、Sublime Text 等）

用 Brew 安装 VS Code：`brew cask install visual-studio-code`

安装完成后，可以 [注册 `code` 命令](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)，  
使得在命令行中执行 `code ./project1` 即可用 VS Code 打开项目或文件。

### VS Code 基本功能

- 命令行
  - [注册 `code` 命令](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- 功能系统
  - [命令面板](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
  - [插件系统](https://code.visualstudio.com/docs/editor/extension-gallery)
  - [内建终端](https://code.visualstudio.com/docs/editor/integrated-terminal)
  - [内建 Git](https://code.visualstudio.com/Docs/editor/versioncontrol#_git-support)
  - [snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
  - [settings](https://code.visualstudio.com/docs/getstarted/settings)
- 增强功能
  - [intellisense](https://code.visualstudio.com/docs/editor/intellisense)
  - [定义跳转](https://code.visualstudio.com/Docs/editor/editingevolved#_peek)
  - [全局重命名](https://code.visualstudio.com/Docs/editor/editingevolved#_rename-symbol)
  - [代码格式化](https://code.visualstudio.com/docs/editor/codebasics#_formatting)
- 开发
  - [Debugger](https://code.visualstudio.com/Docs/editor/debugging)
- [快捷键](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)（Mac）
  - <kbd>cmd + p</kbd>、<kbd>cmd + shift + p</kbd>
  - <kbd>cmd + f</kbd>、<kbd>cmd + shift + f</kbd>
  - <kbd>cmd + d</kbd>、<kbd>cmd + shift + L</kbd>
  - <kbd>opt + shift + o</kbd>：organize imports

### VS Code 源码

- [从 VSCode 看大型 IDE 技术架构](https://zhuanlan.zhihu.com/p/96041706)

## 使用 VS Code

### 入门

- [VS Code Top-Ten Pro Tips](https://www.youtube.com/watch?v=u21W_tfPVrY)  
  10 分钟：10 个 VS Code 常用功能一览
- [Visual Studio Code Intro & Setup](https://www.youtube.com/watch?v=fnPhJHN0jTE)  
  40 分钟：（2017 年的视频，有些功能现在可能改变，但总体是相似的）  
  VS Code 界面功能和配置，基本使用，一些插件介绍，Git 简介
- [Visual Studio Code Can Do That: Tips & Tricks : Build 2018](https://www.youtube.com/watch?v=OOG3xcUQY5k)  
  80 分钟：
  <!-- - [15 VS Code Extensions For Front-End Developers in 2019](https://www.youtube.com/watch?v=LdF2RcelRg0) -->
- [25 VS Code Productivity Tips and Speed Hacks](https://www.youtube.com/watch?v=ifTF3ags0XI)

### 插件

我用的一些重要插件：

- 功能增强
  - [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)：同步所有配置到 Git Gist
  - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)：Git 增强
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)：快捷键直接运行代码文件
  - [Diff Tool](https://marketplace.visualstudio.com/items?itemName=jinsihou.diff-tool)：Diff 两个文件
  - [Code Outline](https://marketplace.visualstudio.com/items?itemName=patrys.vscode-code-outline)：显示代码大致结构
  - [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)：直接显示代码运行结果
  - [LeetCode](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)：在本地刷 LeetCode
  - [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)：用浏览器打开文件
- 界面增强
  - [Dracula](https://draculatheme.com/)：高亮主题
  - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)：图标主题
  - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)：不同颜色标记不同类型的注释
  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)：高亮显示 TODO
  - [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)：用不同颜色配对不同层级的括号
  - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)：彩虹色缩进
  - [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)：显示包的 import 大小
  - [filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize)：显示文件大小
- 自动化
  <!-- - [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)：npm 自动导入补全 -->
  - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)：路径自动补全
  - [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)：包名自动补全
  - [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)：代码自动补全（AI-based）
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)：格式化
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)：静态检查
  - [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)：多行字典排序
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)：Markdown 增强（参考 [Markdown 学习指南](/cs/markdown)）
- HTML/JSX
  - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)：自动闭合标签
  - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)：自动重命名标签（同步开头结尾）
- CSS
  - 无
- JS
  - 无
- React
  - [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)：React 开发插件集
- Vue
  - [Vue.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack)：Vue 开发插件集
  - [Vue 2 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)：Vue 代码片段
