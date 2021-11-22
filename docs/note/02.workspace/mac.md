---
title: Mac 环境（M1 + Monterey）
date: 2021-11-15 15:43:26
permalink: /workspace/mac
categories:
  - 开发环境
tags:
  - mac
  - 工具
---

# Mac 环境（M1 + Monterey）

## Mac 简介

- 视频
  - [学生党 M1 Mac 入门指北](https://www.bilibili.com/video/BV1sD4y1X7MQ)
  - [Mac Tutorial for Beginners - Switching from Windows to macOS](https://www.youtube.com/watch?v=67keaaWOKzE)
  - [How to Set Up Your Mac for Maximum Productivity](https://www.youtube.com/watch?v=XBi3OB23Utk)
- 官方文档
  - [macOS 使用手册](https://support.apple.com/zh-cn/guide/mac-help/welcome/mac)
  - [Mac 键盘快捷键](https://support.apple.com/zh-cn/HT201236)
- M1 兼容性相关
  - [Is Apple Silicon ready?](https://isapplesiliconready.com/)
  - [Does It ARM?](https://doesitarm.com/)

## 配置

（如果有其他 Mac 的话用 Time Machine 直接迁移就好）

配一个新电脑？

### System Preferences

- Language & Region：英语、简体中文
- Sharing：改电脑名字
- Software Update
- Keyboard：先把 Key Repeat 和 Delay 调到最快

安装 [Additional Tools for Xcode](https://developer.apple.com/download/more/?=additional%20tools) 里的 [Network Link Conditioner](https://nshipster.com/network-link-conditioner/)（给电脑限速用的）

安装 [Paragon NTFS for Mac](https://www.seagate.com/cn/zh/support/software/paragon/) （希捷永久授权）（之后 [Reduced Security](https://support.apple.com/en-gb/guide/mac-help/mchl768f7291/mac) 要一直开着）

（其他配置略）

### dotfiles

```sh
.zprofile
.zshrc
.zsh_history
.nrmrc
```

### 终端配置

sudo 无需密码：

```sh
echo -e "\n$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers
```

允许安装运行任意软件：

```sh
sudo spctl --global-disable
sudo spctl --status
```

bin 目录权限（解决 npm global install 问题）：

```sh
sudo chown -R $USER /usr/local/bin
```

复制来的 ssh 私钥要调成只读：

```sh
sudo chmod 600 <ssh-file-path>
```

禁止 PressAndHold（需重启）（解决 [这个 VS Code 问题](https://github.com/microsoft/vscode/issues/31919)）：

```sh
defaults write -g ApplePressAndHoldEnabled -bool false
```

更快的按键重复（控制面板的 KeyRepeat 最快才到 2）（需重启）：

```sh
defaults write -g InitialKeyRepeat -int 15
defaults write -g KeyRepeat -int 1
```

提高 Time Machine 的速度（重启后失效，可以做一个 function）：

```sh
sudo sysctl debug.lowpri_throttle_enabled=0
```

### 安装基本工具

魔法丝袜之影（略）

```sh
export ALL_PROXY='http://127.0.0.1:1080'
```

安装 Xcode Command Line Tools：

```sh
xcode-select --install
```

安装 [Brew](https://brew.sh/)：

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

（按照提示）激活 `brew` 命令：

```sh
echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> $HOME/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

安装一些基本工具（虽然系统自带一些，但是用 brew 来做后续更新）：

```sh
brew install --formula bat git n scc tig trash tree zsh
brew install --cask google-chrome visual-studio-code iterm2
```

安装 [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)：

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

安装 [更纱黑体](https://github.com/be5invis/Sarasa-Gothic)（`"sarasa term sc"`）：

```sh
brew tap homebrew/cask-fonts
brew install font-sarasa-gothic
```

安装 Node.js（我用 n 来管理）：

```sh
sudo n 16
```

### Finder

- 显示扩展名：`cmd + ,` > Advanced
- （剪切功能的快捷键：`cmd + option + v`）

总是显示隐藏文件：

```sh
defaults write com.apple.finder AppleShowAllFiles -boolean true; killall Finder
```

标题显示完整路径：

```sh
defaults write com.apple.finder \_FXShowPosixPathInTitle -bool true; killall Finder
```

Open In Terminal，（装好到 System Preferences > Extensions 开启）：

```sh
brew install openinterminal
```

（其他配置略，`cmd + ,`、`cmd + j`）

## 其他安装的工具

### npm global

`npm -g i`

- [serve](https://github.com/vercel/serve)：读本地文件夹起一个 server（类似 http-server）
- [tldr](https://github.com/tldr-pages/tldr)：简化的 help 工具（类似 man 或 --help）
- [vercel](https://github.com/vercel/vercel)：部署本地 app dist 到 vercel

### brew

`brew install`

- [bat](https://github.com/sharkdp/bat)：显示文件内容（类似 cat）
- [n](https://github.com/tj/n)：Node 版本管理器
- [neofetch](https://github.com/dylanaraps/neofetch)：显示当前环境信息（类似 screenfetch）
- [pngquant](https://pngquant.org/)：png 图片压缩
- [scc](https://github.com/boyter/scc)：统计代码行数（类似 cloc）
- [smartmontools](https://apple.stackexchange.com/questions/135565/how-do-i-get-detailed-smart-disk-information-on-os-x-mavericks-or-later)：磁盘健康度
- [tig](https://jonas.github.io/tig/doc/manual.html)：更方便的 git history
- [trash](https://hasseg.org/trash/)：扔到垃圾桶（用来代替 `rm -rf`）
- [tree](https://sourabhbajaj.com/mac-setup/iTerm/tree.html)：显示文件夹树状结构
- [you-get](https://github.com/soimort/you-get)：视频下载器

### brew cask

`brew install --cask`

- 开发相关
  - [docker](https://www.docker.com/)：轻量级虚拟化技术
  - [switchhosts](https://github.com/oldj/SwitchHosts)：Host 编辑器
  - [postman](https://www.getpostman.com/)：网络请求监听
- 系统增强
  - [alfred](https://www.alfredapp.com/)：增强版 spotlight
  - [bettertouchtool](https://folivora.ai/)：快捷键绑定
  - [hiddenbar](https://github.com/dwarvesf/hidden)：菜单栏图标折叠
  - [karabiner-elements](https://karabiner-elements.pqrs.org/)：键位映射
  - [openinterminal](https://github.com/Ji4n1ng/OpenInTerminal)：Finder 打开到终端
  - [unshaky](https://github.com/aahung/Unshaky)：防止按键误触发的工具（解决蝴蝶键盘问题）
- 性能和监控
  - [cinebench](https://www.maxon.net/en/products/cinebench-r20-overview/)：CPU/GPU 性能测试
  - [coconutbattery](https://coconut-flavour.com/coconutbattery/)：电池健康度检查
  - [daisydisk](https://daisydiskapp.com/)：磁盘空间分析
  - [istat-menus](https://bjango.com/mac/istatmenus/)：任务栏硬件监控
- 其他日用
  - [fliqlo](https://fliqlo.com/)：一个翻页时钟屏保
  - [keka]：压缩软件
  - [keycastr](https://github.com/keycastr/keycastr)：显示按键（录屏时用）
  - [iina](https://iina.io/)：视频播放器
  - [itsycal](https://www.mowglii.com/itsycal/)：菜单栏日历
  - [imazing](https://imazing.com/)：备份 iPhone 的软件
  - [telegram-desktop](https://desktop.telegram.org/)：Telegram 桌面客户端
- 网盘/下载
  - [onedrive](https://onedrive.live.com/)：One Drive
  - [megasync](https://mega.nz/sync)：Mega Sync，可以排除 node_modules，放一些临时项目用
  - [thunder](https://mac.xunlei.com/)：迅雷

### App store

- [Blackmagic Disk Speed Test](https://apps.apple.com/us/app/blackmagic-disk-speed-test/id425264550)：磁盘速度测试
- [Desktop Clock](https://apps.apple.com/us/app/desktop-clock-live/id894760156?mt=12)：桌面时钟
- [GIPHY CAPTURE](https://giphy.com/apps/giphycapture)：截动图/视频工具
- [OneNote](https://www.onenote.com/)：微软的跨平台笔记
- [QQ](https://im.qq.com/)：QQ
- [Unsplash Wallpapers](https://apps.apple.com/us/app/unsplash-wallpapers/id1284863847?mt=12)：Unsplash 随机壁纸
- [WeChat](https://mac.weixin.qq.com/)：微信
- [Xcode](https://developer.apple.com/xcode/)：苹果自家的 IDE
- [Xnip](https://xnipapp.com/)：截图工具
