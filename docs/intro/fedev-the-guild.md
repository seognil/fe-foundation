# 前端开发入行指南

> 从野路子入门到系统性~~精通~~略懂

## 前言

近年来，前端已从最早的玩具发展为成体系的系统性的工程开发，  
逐步赶上了传统软件开发和编程领域的步伐。

现在做前端开发，在真正开始写第一行业务代码之前，需要很多前置的技术储备。

前端本身的技术教程千千万，  
~~（比如之前在掘金 EventLoop 每个月看到八百遍）~~  
但是很少有文章专门介绍：  
一个现代化的前端工程应该从哪里开始入门和起步，  
在前端体系之外、之前，应该要做，或最好要做什么事情。  
在前端体系之后，还可以做哪些事情，向何处发展。

本文的目标是在有限的篇幅中，对前端开发的职业规划做一个向导，  
一个只有一台全新的 Mac 的新手，如何从零学习并从事前端开发的工作。

所基于的开发环境是 MacOS。  
（Windows 和 Linux 有部分是相同的，另一部分是有替代方案的）

当然，有很多更全面的资料，  
比我有限的人生经验不知道高到哪里去了，  
这些资料的链接对应地分散在本文的各个章节。

根据自己的实际情况，**学以致用，循序渐进**，这是坠吼的。

> —— 此文写给我的朋友 东神

## 前置知识 和 外部知识

::: tip
这一章用于了解一些相关概念（不用过于深入）
:::

最好要逐渐熟悉 Unix-like 系统中的命令行的概念和常用命令，  
它是现代化前端开发流程中的一个重要部分，也是编程领域中的通用技能。

熟悉 `brew、node、git` 等工具的安装和使用。  
熟悉 `Markdown` 标记语言，html 的语法糖语言，可以用来做笔记。

可选的还有：  
`vim` 的简单操作，  
了解基本 `shell script` 语法。

持续练习英语 —— 编程世界的通用语言。

以上这些内容可能需要花费好多天入门（以及更多的时间精通），  
但是，工欲善其事必先利其器，这是值得的。

### 名词解释

- **Unix-like**：泛指所有具有类似 Unix 表现和行为的系统。
- **Terminal**：终端，以前指一类硬件，现在泛指 Terminal emulator，也就是虚拟终端（一类软件）
- **shell**：壳层，前接 Terminal 后接 Kernel 的一层接口
- **Kernel**：内核，系统底层代码
- **console**：控制台，以前指一类硬件，现在泛指调试面板（各软件中的一部分）
- **tty**：来源于 Teletypewriter 的缩写，以前指终端的打字机（硬件）部分，现在泛指虚拟终端的一个
- **session**：会话，一组执行命令的环境，由终端提供，可以创建多个会话（表现为多窗口）处理不同任务。
- **PATH**：环境变量，系统提供的配置入口，用于查找可执行文件

* **CLI**：Command-line interface，命令行界面
* **GUI**：Graphical user interface，图形用户界面
* **API**：Application programming interface，应用程序接口，常见为类方法或函数，用以抽象封装常用逻辑

- **WSL**：Subsystem for Linux，Windows 中的 Linux 子系统
- **VSC**：Visual Studio Code，VSCode，微软出的一个代码编辑器
- **Docker**： 一种类似虚拟机，但是更轻量级和灵活的虚拟化技术。

* **TLDR**：Too Long Dont Read，太长不看，一般用增加一个简短结论在万字长文之前
* **cheat sheet**：速查表，一般是一张图涵盖一个工具各种常用命令
* **dotfile**：以 `.` 开头的文本文件，类 Unix 系统中的隐藏文件，  
  一般用作程序配置，例如：`.bashrc`，备份分发即可软件环境  
  [Mathias’s dotfiles](https://github.com/mathiasbynens/dotfiles)  
  我的 [基本环境自动配置脚本（unfinished）](https://github.com/seognil/dotfiles)
* **rc**：常用于配置文件名的后缀，和 dot 配合  
  如：`.bashrc、.zshrc、.npmrc`  
  rc 可解释为 runcom、run commands、runtime configuration 等

- **protocol**：协议，一种约定/规范，如 `http://www.zhihu.com/` 中的 `http`
- **hostname**：域名，如 `www.zhihu.com`
- **ip address**：ip 地址，如 `127.0.0.1`
- **DNS**：Domain Name System，域名系统，将域名查找成 IP
- **port**：端口，网络通讯中所需的标识，`127.0.0.1:80` 中的 `80`，
- **proxy**：代理，通过代理访问网络地址代替直接访问
- **ping**：命令行中检查地址可访问性的工具，`ping baidu.com`
- **curl**：Client URL 缩写，命令行中的地址访问工具，`curl baidu.com`

### 关于 Mac

我认为和 Windows 最大的区别在于，有一个 Unix-like 命令行，比较适合现在的前端开发，  
（当然，Windows 上的 Termianl、WSL 也在逐步发展，但目前还不够成熟）

同时相比 Linux，Mac 相对得不那么需要折腾，软件和社区生态对新手比较友好。  
以及在 Mac 上装虚拟机或 Docker 即可方便地拥有 Linux 环境，反之麻烦很多。

Mac 本身的特色和交互上的差异，诸如：

- 触控板
  - 成熟的多点触控和手势
- 鼠标
  - 四向滚轮、滚动不分段（其实表面就是个触摸板）
  - 没有侧键
  - 无法关闭加速度
- 触控板
  - 四向滚动
  - 三指左右滑动切换多桌面
  - 二指左右滑动可以在浏览器中跳转历史
- 快捷键和操作逻辑
  - `command 键` 作为 `meta 键`， 可以类比 Windows 中 `ctrl 键` 的作用。  
    （然而 Windows 中的 `meta 键`是 `win 键`）
  - 很多软件的一部分快捷键具有通用的规则
    - `command + ,` 打开软件设置
    - `command + s` 保存
    - `command + t` 打开新标签页
  - 切换窗口的逻辑（区别于 Windows）
    - `command + tab` 切换不同程序（前置该软件的所有窗口）
    - `` command + ` `` 切换相同程序的不同窗口

### 关于命令行

[Computers 101: terminals, kernels and shells](https://www.integralist.co.uk/posts/terminal-shell/)  
[终端、Shell、tty 和控制台（console）有什么区别？](https://www.zhihu.com/question/21711307)  
[什麼是程序 (Process) - 鳥哥的 Linux 私房菜](http://linux.vbird.org/linux_basic/0440processcontrol.php)  
[Bash Shell Syntax](https://www.gnu.org/software/bash/manual/bash.html#Shell-Syntax)  
[Zsh Shell Grammar](http://zsh.sourceforge.net/Doc/Release/Shell-Grammar.html#Shell-Grammar)

使用命令行（Terminal），每一个新窗口都将创建一个独立的会话，  
所需的运行环境从一个根环境分叉（fork）而来，  
（这样就避免了对根环境的大量改动，以方便后续创建其他会话）

（有一个名为 `tmux` 的命令行工具，可以在一个窗口内管理多个 session）

（会话内执行不同的命令，根据类型也 _可能_ 有类似的效果，比如再次执行 `bash`）

也正因为这个原因，当窗口关闭（会话结束）后，所调整的环境配置可能会丢失，  
所以 `PATH、alias` 等等自己调整的配置、所安装的工具需要的配置代码，  
都需要写到 shell 的启动配置文件中（`~/.bashrc`、`~/.zshrc` 等）

最好能够掌握一些基本的 shell script 语法。  
（Windows 上的 powershell 就算了，别学…）  
需要注意，不同的 shell 实现，语法有一些细微的差别。

### 命令行中退出

有一个著名的问题：  
[How To Exit Vim? Multiple Ways To Quit Vim Editor](https://itsfoss.com/how-to-exit-vim/)

VI 或 VIM 是一个 Linux 上普及的命令行编辑器（区别于图形界面），  
常见于在命令行里远程连接到 Linux 服务器上进行文件改动。

它的退出命令是通过键入 `:q`

顺便一提，其他工具的中断退出方式可能是：  
`ctrl + c`、`ctrl + d`、  
`q`、`exit`、`quit`、`exit()`

### 从命令行安装软件

Mac 生态有中有一个名为 `brew` 的命令行软件（需要安装）

类似 Linux 中的 `apt` 或 `yum`，Windows 中的 `chocolatey`。  
或类似 Node.js 的 `npm`，Python 的 `pip`，PHP 的 `composer` 等。

它们都是通过命令行管理（安装卸载等）各自生态中的软件、工具、包的工具，  
不需要再通过浏览器手动点击下载了。

（brew 的介绍参考后面单独一小节）

#### 需要注意的一点

这些工具提供的下载安装过程，实际上是从各自维护的软件仓库中检索相应的包，  
如果仓库中没有某软件，就无法安装了。

这时候就需要注册其他仓库地址，进行下载安装。  
或直接通过包自己提供的几行命令完成（一般会借助系统自带的 `curl` 程序）

如 ubuntu 中安装 node，apt 源并没有最新的 node 版本，  
需要先执行一句调整仓库的命令，如安装 _node version 10_：  
`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`  
再进行安装：  
`apt install nodejs`

（这个步骤在 Node 官网上有说明）

#### 需要注意的另一点

某些工具安装完成之后，还需要手动进行一些额外的步骤，  
（因为安装器不一定完全知道你的环境是怎样的，或不知道你想如何配置，所以需要手动完成）

比如 `brew install node` 之后，会有提示需要将 `node` 加入 `PATH`：

```shell
If you need to have node@10 first in your PATH run:
  echo 'export PATH="/usr/local/opt/node@10/bin:$PATH"' >> ~/.zshrc

For compilers to find node@10 you may need to set:
  export LDFLAGS="-L/usr/local/opt/node@10/lib"
  export CPPFLAGS="-I/usr/local/opt/node@10/include"
```

我目前是在 `.zshrc` 中手动管理这些，  
比如我的 `.zshrc` 的一部分：

```shell
export PATH="$PATH:/usr/local/opt/node@10/bin"
alias gnpm="npm -g list --depth 0"
```

## 系统环境准备

::: tip
这一章是准备工作的准备工作，需要对工具的使用加以练习
:::

优先做这些事，可以使后续做别的事时更高效。

### proxy

要进行开发，首先需要一些基本的环境，  
比如 一些硬件、一些软件、一些网络。

首先要能上网，要会上网。  
（当然，这很难，首先你得会上网才能查资料变得更会上网 ~~#doge#~~）

给 浏览器 和 软件 配置 proxy  
给 Terminal 配置 proxy  
给 工具 配置 proxy

不同工具的配置方式不同，可能有图形界面面板，  
配置命令例如：  
（可以固化到 `.bashrc`、`.zshrc` 中）

```shell
export http_proxy='http://127.0.0.1:1080'
export https_proxy='https://127.0.0.1:1080'
```

proxy 可以为狭义的 proxy，  
也可以是广义的“换源”操作，如：替换 brew remote、npm registry 等。

### brew

先调整好 shell 的 proxy，这样 brew 下载包的速度会更快。

- brew
  - 装 CLI 软件的
  - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- brew cask
  - `brew` 自带的，装 GUI 软件的

基本用法：

```shell
brew search iterm2

brew install zsh
brew uninstall zsh
brew list
brew upgrade

brew cask install iterm2
brew cask uninstall iterm2
brew cask list
brew cask upgrade
```

### 系统设置

- 将光标移动速度调到极快（需重启）
  ```shell
  defaults write -g InitialKeyRepeat -int 15
  defaults write -g KeyRepeat -int 1
  ```

* 把系统调成英语（给自己创造一个使用英语环境）

- 字体推荐使用等宽的中英文编程字体 [更纱黑体](https://github.com/be5invis/Sarasa-Gothic)  
  基于 Iosevka 和 Source Han Sans
  ```shell
  brew tap homebrew/cask-fonts
  brew cask install font-sarasa-gothic
  ```
  后续配置以 VSCode 为例：`"editor.fontFamily": "sarasa term sc"`

### Terminal 相关

配置 `iterm 2` 作为默认终端，代替系统自带 `Terminal.app`  
配置 `zsh` 作为默认 `shell`，代替系统默认的 `bash`

- iterm 2
  - `brew cask install iterm2`
- zsh
  - `brew install zsh`
- oh-my-zsh
  - 一个流行的 zsh 配置集
  - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
- zsh-syntax-highlighting
  - zsh 终端高亮
  - `brew install zsh-syntax-highlighting`
- `~/.zshrc`
  - 装好自带的，前文提到的配置文件

## 开发环境体系

::: tip
这一章是开发环境的准备工作，需要对工具的使用加以练习
:::

### Node

[Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)  
[npm-package.json | npm Documentation](https://docs.npmjs.com/files/package.json)

简单开发只需安装某一个版本的 `node`  
多项目开发环境可以利用 `nvm` 进行切换

提高 npm 装包的速度，可以安装 `nrm` 接着 `nrm use taobao`，然后正常使用 npm 安装命令。

- node
  - 现代化前端开发基本环境，在命令行中运行 JS 代码
  - Node 偶数版是长期支持版，进度参考官网
  - `brew install node`、`brew install node@10`（可指定版本）
- nvm
  - Node Version Manager，Node 版本（环境）切换工具
  - `brew install nvm`
- npm
  - nope pacckage manager，包管理器，node 装好自带的工具
  - `npm i -g npm` 是升级 npm 自己
- nrm
  - Npm registry manager，npm 仓库切换器
  - `npm i -g nrm`
- yarn
  - 可代替 npm 的 manager，运行更快
  - `brew install yarn`

#### 基本用法

```shell
# 查看版本
node -v
npm -v
yarn -v

# nvm
nvm ls
nvm use 10

# nrm
nrm ls
nrm use taobao

npm i -g @vue/cli # 全局安装
npm init # 新建一个项目
npm i lodash # 在项目中安装一个包
npm un lodash # 在项目中卸载一个包

yarn global add @vue/cli # 全局安装
npm init # 新建一个项目
yarn add lodash # 在项目中安装一个包
yarn remove lodash # 在项目中卸载一个包
```

### GIT

[Introduction to Git Use](https://developpaper.com/introduction-to-git-use/)  
[Git and GitHub for Poets - Daniel Shiffman](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)  
[Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)  
[Git 工作流程 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)  
[git flow 入门教程](https://www.jianshu.com/p/b446c43577f9)
[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)  
[Git Merge - Atlassian Tutorials](https://www.atlassian.com/git/tutorials/using-branches/git-merge)  
[What is the difference between `git merge` and `git merge --no-ff`?](https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff)

git 是一个版本管理工具，比较适合前端项目。  
svn 是另一种版本管理工具。

（版本管理不只可以用于项目代码，也可以用来管理 '.psd'、游戏存档…等）

- 相关工具
  - CLI
    - git
      - `brew install git`
    - tig
      - 命令行版的 'source-tree'
      - git 自带的 `git log --oneline --decorate --all --graph` 也能达到类似效果
      - `brew install tig`
  - GUI
    - source-tree
      - 好用的图形化 git 管理器
      - `brew cask install sourcetree`
    - githubDeskop
      - git 官方出品 GUI 管理器，对 github 本身比较友好
      - `brew cask install github`
- 概念/规范/工具
  - git flow 工作流模型
  - `--no-ff` (no fast forward merge) 参数，merge 的时候总是建立新分支，保持各分支含义清晰。
  - 语义化版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）
    - [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
    - `npm i -g standard-version`
  - 约定式提交（[Conventional Commits](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)）
    - [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
    - `npm i -g commitizen`
  - changelog（[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)）
  - submodules/lerna，管理多仓库项目的方式
  - badge（[shields.io](https://shields.io/)）

#### 基本用法

```shell
# tldr git

# tig --all

git init

git status
git log

git add <. | files-names >
git commit -m <messages>

git branch <new-branch>
git checkout <existed-branch>
git checkout -b <new-branch> <based-branch>

git merge [--no-ff] <from-branch>

git reset [--hard] <existed-branch>

git fetch --all
git pull <origin> <master>
git push <origin> <master>
```

### GitHub 社区

GitHub 是一个免费的 git 远端仓库，  
有很多著名的项目和工具都是托管在 GitHub 上的。

类似的远端仓库还有 gitlab、bitbucket、coding 等…

但 GitHub 也是一个社区，除 git 基本功能外还提供很多服务。

### 有关命令行的其他工具

有了 brew、node，以及了解 git 的概念之后，  
就可以接触更多工具了。

- mas
  - 管理 app store 软件的。
  - `brew install mas`
- cloc
  - 代码行数统计
  - `npm i -g cloc`
- http-server
  - 用本地文件夹快速启动一个本地服务器
  - `npm i -g http-server`
- go2shell
  - 给 finder 的工具栏加一个打开到终端按钮
  - `brew cask install go2shell`

装好 VSCode 可以注册 `code` 命令，  
完成后在命令行中输入 `code ./project1`，即可在 VSCode 中打开项目或文件。

### 软件（GUI）

我喜欢装一些资源监控软件，能让我更好地了解电脑和程序的运作情况。

- Parallels Desktop，虚拟机软件
- BetterTouchTool，改系统快捷键的软件
- 资源监控
  - `brew cask intel-power-gadget`，intel 自家的功耗 CPU 监控软件
  - `brew cask istat-menus`，显示在 menu bar 中的监控软件

### 浏览器

Chrome，对于前端来说调试代码非常方便的浏览器  
`brew cask install google-chrome`

有丰富的插件市场，包括很多前端框架的调试插件。

- 了解调试技巧
  - [在 Chrome DevTools 中调试 JavaScript 入门](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=zh-cn)
- 至少要装这些插件
  - Video Speed Controller，Html 视频变速器，看教程利器
  - 找个喜欢的划词翻译（沙拉查词-聚合词典划词翻译）
  - Proxy SwitchyOmega，调 proxy 用的
- 设置
  - 确认搜索引擎设置为 google （或 bing、duckduckgo，反正不要用百度）
- 高级
  - [Performance Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference?hl=zh-cn)
  - [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
  - [Redesigning Chrome Desktop: The value of a pixel](https://medium.com/google-design/redesigning-chrome-desktop-769aeb5ab987)
  - [Unboxing Chrome: Redesigning the omnibox](https://medium.com/@san_toki/unboxing-chrome-f6af7b8161a2)

### 编辑器

[Visual Studio Code Intro & Setup](https://www.youtube.com/watch?v=fnPhJHN0jTE)

VSCode，微软家的开源代码编辑器  
`brew cask install visual-studio-code`

（其他主流的 GUI 编辑器还有 WebStorm、Sublime Text 等）

- 了解和熟悉这些功能
  - 插件市场
  - 内建 git 管理功能
  - console
  - snippets
  - settings
  - 代码格式化
  - 快捷键系统
    - `cmd + p`，`cmd + shift + p`
    - `cmd + f`，`cmd + shift + f`
    - `cmd + d`，`cmd + shift + L`
  - diff 功能

### 系统设置

- 解决有时候 VSCode 持续高占用的问题  
  `alias kk="kill $(ps aux | grep -e Code\ Helper | awk '{if($3>60)print\$2}')"`
- timemachine 提高速度（重启后失效）  
  `sudo sysctl debug.lowpri_throttle_enabled=0`
- 控制面板的"允许任何软件运行"  
  `sudo spctl --master-disable`
- Finder 显示隐藏文件
  ```shell
  defaults write com.apple.finder AppleShowAllFiles TRUE
  killall Finder
  ```

## 学习计划

::: tip
这一章包含我个人总结的结构性资料，以供参考，作为前端开发的正式入门
:::

### 路线图

[2019 年成為 Web 開發人員的路線圖](https://github.com/goodjack/developer-roadmap-chinese)  
[Front-end Developer Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019/)

严格来讲，下表并不能称之为路线图，只是对学习和工作内容的大致分类，  
根据学习曲线的合理性，有一定先后顺序，或也可以穿插进行。

- 准备工作
  - 上文中所有的准备工作
- JS 技术栈
  - Step 1 （入门）
    - JavaScript 语法
    - 利用框架/脚手架（如 [vue-cli](https://cli.vuejs.org/zh/)）实现完整的简单业务（如 [TodoMVC](http://todomvc.com/)）
  - Step 2 （初中级）
    - 浏览器和 Node 中的 JS
    - 试用各种库、了解生态
      - 源码分析
    - 设计模式、代码技巧
    - 小型后端、数据库、网络
      - GraphQL
    - 完整的 Application 和 Package 开发
      - 完整的工作流，如预处理、测试、CI、发布、更新
  - Step 3 （高级）
    - 性能优化
    - 安全
    - ECMAScript 执行原理
    - ECMAScript 语言标准
    - V8 引擎
    - libuv
- 业务
  - BFF（Backends For Frontends）
  - SSR（Server-Side Rendering）
  - PWA（Progressive Web App）
  - 微前端（Micro Frontend Architecture）
  - WebGL
  - WebAssembly
  - 大规模站点
  - 前端软件
- CS 科班课程
  - 算法与数据结构
  - 软件工程
  - 编译原理
  - 计算机组成原理
  - 计算机网络
  - 操作系统
  - 系统设计
  - 图形学
  - 密码学
- 跨界（凭个人喜好）
  - 接触别的编程语言
    - Python、C、Java、Shell、汇编、Haskell、Ruby 等…
  - 爬虫/数据分析
  - 人工智能
  - 物联网
  - 计算机视觉

### 资源/教材

- 站点
  - GitHub
  - Google
  - YouTube
    - [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
    - [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)
    - [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
    - [DesignCourse](https://www.youtube.com/user/DesignCourse)
  - [Programming - Medium](https://medium.com/topic/programming)
  - [Stack Overflow](https://stackoverflow.com/)
  - [阮一峰的网络日志](http://www.ruanyifeng.com/blog/)
  - [廖雪峰的官方网站](https://www.liaoxuefeng.com/)
  - [掘金](https://juejin.im/)
- JS 技术栈
  - 入门
    - [前端开发入行指南（本文）](https://fe.rualc.com/intro/fedev-the-guild.html)
    - [JavaScript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)
    - [新手向：Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551)
    - [Vue JS Crash Course - 2019](https://www.youtube.com/watch?v=Wy9q22isx3U)
    - [TodoMVC](http://todomvc.com/)
    - [ECMAScript 6 入门](https://es6.ruanyifeng.com/)
    - [Vue.js 官方文档](https://cn.vuejs.org/index.html)
    - [JS foundation](https://fe.rualc.com/js/js-foundation.html)
  - 概论
    - [2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh)
    - [Evan You on Vue.js: Seeking the Balance in Framework Design | JSConf.Asia 2019](https://www.youtube.com/watch?v=ANtSWq-zI0s)
    - [为什么认为 Backbone 是现代前端框架的基石](https://zhuanlan.zhihu.com/p/30982369)
    - [未来的前端工程师](https://juejin.im/post/5a474c8ff265da430a50ea57)
    - [[译文] 现代 js 框架存在的根本原因](https://juejin.im/post/5b111436e51d4506d06205fd)
  - 框架技术
    - [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
    - [vue-cli 源码分析](https://kuangpf.com/vue-cli-analysis/)
    - [React 模式](https://github.com/SangKa/react-in-patterns-cn)
    - [React 源码解析](https://github.com/KieSun/react-interpretation)
- CS
  - [Coding Interview University](https://github.com/jwasham/coding-interview-university)
  - [The System Design Primer](https://github.com/donnemartin/system-design-primer)
  - [上海交通大学课程分享](https://github.com/CoolPhilChen/SJTU-Courses)
  - [中国科学技术大学课程资源](https://github.com/USTC-Resource/USTC-Course)
  - [浙江大学课程攻略共享计划](https://github.com/QSCTech/zju-icicles)
  - [清华大学计算机系课程攻略](https://github.com/PKUanonym/REKCARC-TSC-UHT)
  - [北京大学信息学院计算机系 本科&研究生课程大作业选集](https://github.com/tongtzeho/PKUCourse)
  - [libpku - 贵校课程资料民间整理](https://github.com/lib-pku/libpku)
- Conferences
  - [JSConf](https://jsconf.com/)
  - [Vue.js Events - Conferences](https://events.vuejs.org/conferences/)

### 软件工程知识

[Design Patterns](https://sourcemaking.com/design_patterns)  
[When and why to clean up your code: now, later, never](https://codewithoutrules.com/2018/11/02/when-clean-up-your-code/)  
[Block comments - C Style](http://syque.com/cstyle/ch4.6.htm)

软件工程的知识，目标是为了写出更健壮的代码，  
当面对大规模项目和灵活的需求变动的时候，能够游刃有余。

可以从使用框架（比如 vue-cli）开始学习工程体系：  
代码要怎么分段，怎么分类，怎么命名…  
（文件名最好全小写，以兼容 git 和不同操作系统）

（这一部分我还没有系统性学习，无法给出更多，先罗列一些关键字：）

- 通用概念
  - 模块化
  - 抽象
  - IoC，控制反转，DI，依赖注入
  - 响应式
  - 面向对象
  - 函数式
  - AOP，Aspect-oriented programming，面向切面编程
  - 设计模式
  - 自动化测试
  - 代码覆盖率
  - CI，Continuous Integration，持续集成
  - 自动加载机制
  - 错误处理
- 规范化
  - [Prettier](https://prettier.io/) 格式化
  - [ESLint](https://eslint.org/) 代码检查
  - 变量命名
  - 注释/文档

## 方法论

::: tip
这一章包含我个人总结的一些方法论，以供参考
:::

当然，每个人也可以或应该有适合自己的理解和职业目标。

### 持续前进

[【C 菌】全是干货！GPA4.0 研究生 UP 主教你学习诀窍！](https://www.bilibili.com/video/av63716273/)  
[永远投资你的教育](https://wanqu.co/a/4092/%E6%B0%B8%E8%BF%9C%E6%8A%95%E8%B5%84%E4%BD%A0%E7%9A%84%E6%95%99%E8%82%B2/)

> 学而时习之 温故而知新 -- 孔子

保持兴趣，循序渐进  
广泛涉猎，融汇贯通

编程是理科，同时也是工科。  
行业中有一些部分，可能并不是极难的研发性质的工作，  
仅仅只是学习前人的经验，并仿照着实现而已。

根据自己当前的水平适当调整节奏。  
不要经历“习得性无助” —— “我总是不行，太难了，做不了。”  
反之，不断给自己创造微小的成就感，持之以恒就能点亮整片技能树。

（曾经我周末花了一整天，仅仅在反复琢磨 node 和 npm 的版本和安装卸载，并在之后快乐了一个星期）

### 练习英语

- 系统语言调到英语
- 不断练习给变量有意义地起名
- 通过英文关键字使用搜索引擎
- 看英文教材和视频
- 学会看报错信息和 Stack Overflow
- 试着看工具源码，了解行业前沿动态

### 工程师思维

养成解决问题的思维，而不仅仅是解决问题。  
学会发现问题，而不是人云亦云。  
（这也是工作和上学最大的区别之一）

随着工作经历的增加，一定会碰到无数之前没有见过的问题、知识、技能需要学习。  
这其中有的新技能是通用的，掌握之后是可以长期受用的，  
也有一些问题，仅仅是暂时的，以后永远不会再碰到的。  
（当然，能够提前区分这两种类型也需要靠不断的经验积累）

那么通过预先学习来覆盖所有情况是不现实的。

要学会发现新的问题，并运用一定的技巧去尝试解决，  
比如基于本文，就能产生很多问题：

- “很多资料链接都是英文的，以我目前的英语水平会很吃力，有没有可能已经有翻译版了呢”
- “这个概念我不懂，文中的解释也不够充分，我从哪里可以查阅呢”
- “我从不同的地方看到了相反的答案，如何判断哪个是正确的呢”
- “这是别人的心得，我如何定制适合自己的计划呢”
- “这个东西我用着很别扭，有什么方式能改进呢”

互联网上有无数开源和付费的资料。

### 理解编程

[编程究竟难在哪？](https://www.zhihu.com/question/311432227)  
[编程到底难在哪里？](https://www.zhihu.com/question/22508677)  
[把代码写的太灵活不好吗？为什么会被上司批评？](https://www.zhihu.com/question/52951851)  
[为何部分程序员从不使用 break 或 continue 语句？](https://www.zhihu.com/question/334216911)  
[如何掌握所有的程序语言 - 王垠](http://www.yinwang.org/blog-cn/2017/07/06/master-pl)

了解框架原理，而不是背诵框架 API。  
学习编程思想，而不是深究实现细节。  
（比如在起步阶段就深究 JS 里的隐式类型转换）

你是工具的主人，不是工具的奴隶，  
语言、框架、软件、电脑是你的工具。

了解工具的性质才能更好地使用它们。

### 调整心态

前期避免过分追求变现，  
先追求掌握技能和创造价值，  
有技术水平才能有议价能力。

（说人话就是不要太关心能拿多高的工资）  
（但是另一方面，要考虑工作是否可以和学习生活平衡）

面向解决技术问题开发，而不是面向解决具体业务开发。  
（如果有机会的话…）

~~尤其是在互联网资本寒冬的现在（真的吗？）~~  
夯实基础，稳步前进。

### 费曼学习法

我理解的一句话版本：

> 如果你能将一个概念完整地教会别人，那么说明你掌握了它。

对于任何一个知识/技术体系来说，  
你第一次发现它的时候，它还不属于你，  
你只能通过查阅来弄懂。

而当你不断地在脑海中构建和修正出自己的结构化体系，  
你能够基于自己的体系，在脑海中直接快速地检索到它的每一个细节，  
那么你就掌握了它。

可以利用 VSCode、Markdown、GitHub、Dropbox 等工具来做笔记。

### 小黄鸭调试法

> 小黄鸭调试法，又称橡皮鸭调试法、黄鸭除虫法（Rubber Duck Debugging）是可在软件工程中使用的一种调试代码的方法。方法就是在程序的调试、调试或测试过程中，操作人耐心地向小黄鸭解释每一行程序的作用，以此来激发灵感与发现矛盾。

看似很胡扯，但是其实是非常严肃的道理。

> 就在解释的过程中，程序员可能就发觉了问题的解决方案。

程序的运作，代码的运行都是有据可循的：  
运行结果不符合预期，肯定是某一步或者某几步出了问题。  
通过不断拆分步骤并逐步分析，就能定位到问题所在，才能试图解决它。

### 训练

> 限制方法的灵活性几乎总能使你把事情做得更好。 -- DOOM 之父 约翰卡马克  
> 学而不思则罔，思而不学则殆 —— 孔子  
> 最高级的想象力是不自由的 —— 同人于野

一定要向古老的智慧学习，理解久经考验的技术思路的精髓。

算法、设计模式、范式、特性、规范、协议等等，各式各样的名词…  
不严谨地来讲，我认为指的都是同一件事 —— 别人总结的成熟可靠的经验。

> 纸上得来终觉浅，绝知此事要躬行 —— 陆游

同时，写代码的事情，一定只能通过反复的实际编写运行和推敲才能掌握，  
（就像学会开车）  
（就像前文中我安装 node 的故事那样）

才更有机会形成（潜意识的）技术直觉。

> fail fast, fail cheap, move on  
> 工欲善其事必先利其器 —— 孔子

软件工程中有敏捷开发的概念，学习也可以。  
想办法优先提高效率。  
（即使这个过程很耗时）  
（举个例子：在仿写新代码的时候如何快速验证代码的正确性）

### environment body mind

[每月高效工作 200 小时](https://wanqu.co/a/5765/%E6%AF%8F%E6%9C%88%E9%AB%98%E6%95%88%E5%B7%A5%E4%BD%9C-200-%E5%B0%8F%E6%97%B6/)

利用环境和工具  
保持健康的身体和清醒的头脑  
自我激励和自我意志

适当休息暂停学习，长期来看反而能产生更大的效益（边际效益最大化）
