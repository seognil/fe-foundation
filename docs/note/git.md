# Git 学习指南

## Git 简介

### 什么是 Git

Git 是一个流行的文件版本管理工具。

基于 Git 本体还衍生了出很多相关工具，如：

- 图形化的 Git 管理界面
- 各种 Git Diff 编辑器
- Git 规范提交工具

等…这些工具围绕 Git 配合着一同工作。

### 学习 Git 需要先学一门编程语言吗

不需要。

Git 的作用是管理**文件内容**的版本，而不是**代码内容**的，  
不需要先学习一门编程语言。

甚至如果你不是开发人员，也可以利用 Git，  
用于管理 '.psd'、游戏存档…、诗集、文稿等等…

比如 [本站](http://fe.rualc.com/) 一开始就是仅由两篇文章组成。

### 为什么要用 Git

- 可以方便地管理文件的多个版本，轻松回退切换
- 在产业界广泛被使用
- 使多人协作更好进行
  - 使开发工作更好地并行化

### GitHub 社区

GitHub 是一个免费的 Git 远端仓库，  
有很多著名的项目和工具都托管在 GitHub 上，  
如 [VSCode](https://github.com/microsoft/vscode)、 [React](https://github.com/facebook/react) 等

（类似的远端仓库还有 [GitLab](https://about.gitlab.com/)、[Bitbucket](https://bitbucket.org/product/)、[CODING](https://coding.net/) 等）

GitHub 也是一个社区和服务，除 Git 基本功能外还有很多其他功能，  
如 issues 系统，page 服务 等

## 学习 Git

### 概览

- 耗时：从入门到掌握基本命令到理解理念需要大约 1~10 小时 （个人估计）
- 难点：
  - 操作规范性/开发工作流程
  - 了解一些不常用的命令的用途
- 工具：
  - [git](https://git-scm.com/)
  - [GitHub 账号](https://github.com/)

### 学习路线

- 练习 Git 基本用法
  - 完整的提交合并等操作
- 练习使用 Git Flow 开发模型
- 练习 Git 其他常用命令
- 理解操作规范
  - branch 和 commit 的合理运用方式
  - 约定式提交

## 资料

如果可以，开两个 Github 账号，以便自己尝试 `pull request` 等功能

### 自学教材

- [学习 Git 分支（有中文）](https://learngitbranching.js.org/)
- [Git 菜单](https://github.com/geeeeeeeeek/git-recipes/blob/master/README.md)
- [Introduction to Git Use](https://developpaper.com/introduction-to-git-use/)
- [Git and GitHub for Poets - Daniel Shiffman](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)
- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)

### Git Flow

- [Git 工作流程 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
- [Git flow 入门教程](https://www.jianshu.com/p/b446c43577f9)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

### 进阶

- [Git Merge - Atlassian Tutorials](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
- [What is the difference between `git merge` and `git merge --no-ff`?](https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff)
- [Git 协同与提交规范](https://www.yuque.com/fe9/basic/nruxq8)
- [Pro Git](https://git-scm.com/book/zh/v2)

## Git 知识体系

### Git & Git Flow

- Git
  - 基本操作
    - init
    - add/reset
    - commit
    - checkout
    - merge
    - pull/push/fetch
    - remote
  - 其他常用操作
    - stash
    - revert
    - rebase
    - diff
    - cherry-pick
- Git Flow 分支模型
  - master
  - release
  - develop
  - feature
  - fix

### Git 工具

- CLI
  - [Git](https://git-scm.com/)
    - `brew install git`
    - [How to Install Git on Linux, Mac or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
  - [Tig](https://github.com/jonas/tig)
    - `brew install tig`
    - 相当于命令行版的 'source-tree'
    - Git 自带的 `git log --oneline --decorate --all --graph` 也能达到类似效果
  - [gitignore.io](https://www.gitignore.io/)
    - 自动生成 gitignore 的工具
- GUI
  - [Sourcetree](https://www.sourcetreeapp.com/)
    - `brew cask install sourcetree`
    - 好用的图形化 Git 管理器
  - [GitHub Desktop](https://desktop.github.com/)
    - `brew cask install github`
    - GitHub 官方出品 GUI 管理器，对 GitHub 本身比较友好

### Git 周边生态

- Git Flow 工作流模型
- `--no-ff` (no fast forward merge) 参数，使 merge 的时候总是建立新提交，保持各分支含义清晰。
- 语义化版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）
  - [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
  - `npm i -g standard-version`
- 约定式提交（[Conventional Commits](https://www.conventionalcommits.org/zh-hans/)）
  - [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
  - `npm i -g commitizen`
- changelog（[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)）
- [submodule](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)/[lerna](https://github.com/lerna/lerna)，管理多仓库项目的方式
- badge（[shields.io](https://shields.io/)），为项目提供元信息图标

## Git 基本命令

```bash
# shell

git init

git status
git log

git add <. | files-names >
git commit -m <messages>

git branch <new-branch>
git checkout <existed-branch>
git checkout -b <new-branch> <based-branch>

git merge [--no-ff] <from-branch>

get reset [--hard] <existed-branch>

git fetch --all
git pull <origin> <master>
git push <origin> <master>
```

![git-cheatsheet-cn](./img/git-cheatsheet-cn.jpeg)
