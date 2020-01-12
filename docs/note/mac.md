# Mac、设置和软件

> 返回 [前端开发入门指南](./fe-development-cookbook.md) 系列

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

## 配置

### 基本设置

- 优先 [打造趁手的终端](./terminal-config.md)

  - [Homebrew](https://brew.sh/)
  - [iTerm2](https://iterm2.com/)
  - [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)

  然后就可以在命令行中使用 `brew`、`brew cask`、`mas`等命令安装其他工具，  
  省去频繁打开网页点击下载和下一步的繁琐过程。

- [更纱黑体](https://github.com/be5invis/Sarasa-Gothic) ：等宽的中英文编程字体  
  基于 Iosevka 和 Source Han Sans

  ```bash
  brew tap homebrew/cask-fonts
  brew cask install font-sarasa-gothic
  ```

  后续配置以 VS Code 为例：`"editor.fontFamily": "sarasa term sc"`

- 系统设置，将光标移动速度调到极快  
  在命令行执行以下代码并重启
  ```bash
  defaults write -g InitialKeyRepeat -int 15
  defaults write -g KeyRepeat -int 1
  ```

### 软件/工具

我用的一些重要工具：

- 手动安装
  - [Network Link Conditioner](https://nshipster.com/network-link-conditioner/)：网络环境模拟实用工具（限速）
  - [DriveDx](https://binaryfruit.com/drivedx)：磁盘健康信息
- `brew install`
  - 开发
    - [git](./git.md)：版本管理工具（参考 [Git 学习指南](./git.md)）
    - [nginx](https://www.nginx.com/)
    - [node](./npm-overview.md)（参考 [Node.js/npm 概览](./npm-overview.md)）
    - [nvm](https://github.com/nvm-sh/nvm)：Node 版本管理器
  - 工具
    - [mas](https://github.com/mas-cli/mas)：从命令行安装 AppStore 应用的工具
    - [tldr](https://github.com/tldr-pages/tldr)：命令文档查询工具
    - [screenfetch](https://github.com/KittyKatt/screenFetch)：显示当前系统信息
  - 增强
    - [tig](https://github.com/jonas/tig)：更好的 git history
    - [trash](https://github.com/sindresorhus/trash)：扔到垃圾桶（代替 `rm -rf`）
    - [tree](https://sourabhbajaj.com/mac-setup/iTerm/tree.html)：文件夹树型显示
    - [htop](https://hisham.hm/htop/)：命令行系统监控
- `brew cask install`
  - 开发
    - [google-chrome](https://www.google.com/chrome/)：浏览器（参考 [关于 Chrome](./chrome.md)）
    - [firefox](https://www.mozilla.org/en-US/firefox/)：浏览器
    - [visual-studio-code](https://code.visualstudio.com/)：轻量级代码编辑器（参考 [关于 VS Code](./vscode.md)）
    - [sourcetree](https://www.sourcetreeapp.com/)：图形界面 Git 管理器
    - [docker](https://www.docker.com/)：轻量级虚拟化技术
    - [parallels](https://www.parallels.com/products/desktop/)：虚拟机客户端
    - [switchhosts](https://github.com/oldj/SwitchHosts)：Host 编辑器
    - [postman](https://www.getpostman.com/)：网络请求监听
    - [rocket-chat](https://rocket.chat/)：开发聊天、Bot
  - 杂项
    - 增强
      - [font-sarasa-gothic](https://github.com/be5invis/Sarasa-Gothic)：更纱黑体
      - [openinterminal](https://github.com/Ji4n1ng/OpenInTerminal)：Finder 打开到终端
        <!-- - [go2shell](https://zipzapmac.com/Go2Shell)：Finder 打开到终端 -->
      - [tuxera-ntfs](https://www.tuxera.com/products/tuxera-ntfs-for-mac/)：NTFS 读写支持
      - [rcdefaultapp](http://www.rubicode.com/Software/RCDefaultApp/)：默认应用配置面板
    - 监控
      - [daisydisk](https://daisydiskapp.com/)：磁盘空间分析
      - [intel-power-gadget](https://software.intel.com/en-us/articles/intel-power-gadget)：功耗占用监控
      - [istat-menus](https://bjango.com/mac/istatmenus/)：功耗占用监控
    - 硬件
      - [coconutbattery]：电池性能检查
      - [cinebench](https://www.maxon.net/en/products/cinebench-r20-overview/)：CPU/GPU 测评
      - [geekbench](https://www.geekbench.com/)：CPU/GPU 测评
  - 日常
    - 其他
      - [bettertouchtool](https://folivora.ai/)：改键软件
      - [unshaky](https://github.com/aahung/Unshaky)：防止 Mac 键盘问题（屏蔽触发过快）
      - [keka]：压缩软件
      - [iina](https://iina.io/)：视频播放器
      - [itsycal](https://www.mowglii.com/itsycal/)：日历
      - [imazing](https://imazing.com/)：iPhone 备份
      - [aliwangwang](https://wangwang.1688.com/)：阿里旺旺客户端
      - [android-file-transfer](https://www.android.com/filetransfer/)：Android 文件传输
    - 网盘/下载
      - [dropbox](https://www.dropbox.com/)：网盘
      - [megasync](https://mega.nz/sync)：网盘
      - [google-backup-and-sync](https://www.google.com/drive/download/backup-and-sync/)：网盘
      - [baidunetdisk](https://pan.baidu.com/)：网盘
      - [resilio-sync](https://www.resilio.com/individuals/)：网盘
      - [motrix](https://motrix.app/)：下载
      - [thunder](https://mac.xunlei.com/)：下载
- `mas install`
  - 开发
    - [Xcode](https://developer.apple.com/xcode/)：Mac 开发基本套件
  - 硬件
    - [Blackmagic Disk Speed Test](https://apps.apple.com/us/app/blackmagic-disk-speed-test/id425264550?mt=12)：磁盘测速
  - 日常
    - [QQ](https://im.qq.com/)：QQ
    - [WeChat](https://mac.weixin.qq.com/)：微信
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
