# Mac 和软件

## Mac 的键盘

| 符号 |  名称   | 缩写 |
| :--: | :-----: | :--: |
|  ⌘   | Command | Cmd  |
|  ⌥   | Option  | Alt  |
|  ⌃   | Control | Ctrl |
|  ⇧   |  Shift  |      |
|  ⇥   |   Tab   |      |

[Mac 键盘快捷键](https://support.apple.com/zh-cn/HT201236)

Mac 和 Windows 的按键布局差异（空格左侧）：

- Mac：<kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Cmd</kbd>
- Win：<kbd>Ctrl</kbd> <kbd>Win</kbd> <kbd>Alt</kbd>

值得注意的是：

Mac 中的快捷键，主要使用 <kbd>Cmd</kbd> 键，  
作用**相当于** Windows 中 <kbd>Ctrl</kbd> 键。

然而 Mac 上的 [Meta 键](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/metaKey)是 <kbd>Cmd</kbd> 键，  
而 Windows 上的是 Meta 键却是 <kbd>Win</kbd> 键。

## 环境配置脚本

[我的环境自动配置脚本（未完成）](https://github.com/seognil/dotfiles)

## 安装软件/工具

我用的一些重要工具

- 优先 [打造趁手的终端](./terminal-config.md)
  - [Homebrew](https://brew.sh/)
  - [iTerm2](https://iterm2.com/)
  - [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)

然后在命令行中使用 `brew`、`brew cask`、`mas`、`npm` 等命令，安装其他工具，  
省去频繁打开网页点击下载和下一步的繁琐过程。

- - Parallels Desktop
- `brew install`
  - 保持更新
    - [git](./git.md)：版本管理工具（我的《[Git 学习指南](./git.md)》）
    - [nginx](https://www.nginx.com/)
    - [node](./npm-overview.md)（我的《[Node.js/npm 概览](./npm-overview.md)》）
    - [nvm](https://github.com/nvm-sh/nvm)
  - 工具
    - [mas](https://github.com/mas-cli/mas)：命令行安装 AppStore 应用
    - [tldr](https://github.com/tldr-pages/tldr)：常用命令查询工具
    - [screenfetch](https://github.com/KittyKatt/screenFetch)：系统信息
  - 增强
    - [tig](https://github.com/jonas/tig)：git history
    - [trash](https://github.com/sindresorhus/trash)：扔到垃圾桶（代替 `rm -rf`）
    - [tree](https://sourabhbajaj.com/mac-setup/iTerm/tree.html)：文件夹树型显示
    - [htop](https://hisham.hm/htop/)：命令行系统监控
- `brew cask install`
  - 软件（开发）
    - [google-chrome](https://www.google.com/chrome/)：浏览器（我的《[关于 Chrome](./chrome.md)》）
    - [firefox](https://www.mozilla.org/en-US/firefox/)：浏览器
    - [visual-studio-code](https://code.visualstudio.com/)：轻量级代码编辑器（我的《[关于 VS Code](./vscode.md)》）
    - [docker](https://www.docker.com/)：轻量级虚拟机
    - [postman](https://www.getpostman.com/)：网络请求监听
    - [sourcetree](https://www.sourcetreeapp.com/)：图形界面 Git 管理器
    - [go2shell](https://zipzapmac.com/Go2Shell)：Finder 打开到终端
    - [switchhosts](https://github.com/oldj/SwitchHosts)：Host 编辑器
  - 软件（日常）
    - [bettertouchtool](https://folivora.ai/)：改键软件
    - [unshaky](https://github.com/aahung/Unshaky)：防止 Mac 键盘问题（屏蔽触发过快）
    - [dropbox](https://www.dropbox.com/)：网盘
    - [iina](https://iina.io/)：视频播放器
    - [itsycal](https://www.mowglii.com/itsycal/)：日历
    - [imazing](https://imazing.com/)：iPhone 备份
  - 增强
    - [font-sarasa-gothic](https://github.com/be5invis/Sarasa-Gothic)：字体
    - [tuxera-ntfs](https://www.tuxera.com/products/tuxera-ntfs-for-mac/)：NTFS 读写
  - 监控
    - [daisydisk](https://daisydiskapp.com/)：磁盘空间分析
    - [intel-power-gadget](https://software.intel.com/en-us/articles/intel-power-gadget)：功耗占用监控
    - [istat-menus](https://bjango.com/mac/istatmenus/)：功耗占用监控
- `mas install`
  - 软件（开发）
    - [Xcode](https://developer.apple.com/xcode/)：Mac 开发基本套件
  - 软件（日常）
    - QQ
    - WeChat
    - [Xnip](https://xnipapp.com/)：截图
    - [GIPHY CAPTURE](https://giphy.com/apps/giphycapture)：截动图/视频
    - [Unsplash Wallpapers](https://apps.apple.com/us/app/unsplash-wallpapers/id1284863847?mt=12)：壁纸
    - [Desktop Clock](https://apps.apple.com/us/app/desktop-clock-live/id894760156?mt=12)：桌面时钟

## 关于 Mac

我认为和 Windows 最大的区别在于：  
有一个 Unix-like 命令行，比较适合目前的前端开发。

当然，Windows 上的 [Termianl](https://github.com/microsoft/terminal)、WSL 也在逐步发展，  
但目前还比较折腾、不够成熟。  
（[Windows Subsystem For Linux Performance At The End Of 2019](https://www.phoronix.com/scan.php?page=article&item=wsl-windows-eo2019&num=2)）

同时对比于 Linux，Mac 不那么硬核，软件和社区生态对新手较为友好。  
在 Mac 上装虚拟机或 Docker 也可以方便地拥有 Linux 环境，反之则麻烦很多。

所以综合地来考虑，我目前选择 Mac 作为我的前端开发主力系统。

Mac 在软硬件上有一些的**特色**和**差异**，诸如：

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
  - 很多软件的一部分快捷键具有通用的规则
    - <kbd>Cmd</kbd>+<kbd>,</kbd> 打开软件设置
    - <kbd>Cmd</kbd>+<kbd>s</kbd> 保存
    - <kbd>Cmd</kbd>+<kbd>t</kbd> 打开新标签页
  - 切换窗口的逻辑（区别于 Windows）
    - <kbd>Cmd</kbd>+<kbd>Tab</kbd> 切换不同程序（前置该软件的所有窗口）
    - <kbd>Cmd</kbd>+<kbd>`</kbd> 切换相同程序的不同窗口
