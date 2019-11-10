# 终端客制化

## proxy

前文提到 proxy 有诸多好处，正确配置或能直接提高生产效率。

- 给 浏览器 和 软件 配置 proxy
- 给 Terminal 配置 proxy
- 给 其他工具 配置 proxy

不同工具的配置方式可能不同，  
对于命令行来说配置命令例如：  
（可以自行配置到 `.bashrc`、`.zshrc` 中）

```bash
# http://127.0.0.1:1080 是一个内网 IP
export http_proxy='http://127.0.0.1:1080'
export https_proxy='https://127.0.0.1:1080'
```

有一个工具叫 [ProxyChains](https://github.com/haad/proxychains)，能够管理不同程序的 proxy。

## Homebrew

> 从命令行中安装工具和软件

MacOS 生态有中有一个名为 [Homebrew](https://brew.sh/) 的命令行工具（需要安装）

它类似 Linux 中的 `apt` 或 `yum`，Windows 中的 [Chocolatey](https://chocolatey.org/)。  
或类似 Node.js 的 `npm`、Python 的 `pip`、PHP 的 `composer` …

虽然是不同生态的不同工具，  
但它们有一个共同点：可以通过命令行安装其他程序。

不需要再通过浏览器手动点击下载，  
软件配置过程能够更方便和自动化。

所以优先安装这些管理工具，能够更高效地下载别的工具。

### 安装 Homebrew

（可以先调整好 shell 的 proxy，这样 brew 下载包的速度可能会更快。）

安装 Homebrew：

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

安装完成后可用的命令：

- `brew`
  - 装 CLI 软件的
- `brew cask`
  - `brew` 自带的自命令，装 GUI 软件的

### Homebrew 基本用法

```bash
brew install node
brew uninstall node
brew info node
brew upgrade node

brew list
brew outdated

brew search iterm2
brew cask install iterm2
```

### 软件仓库

这些工具提供的下载安装过程，实际上是从各自维护的软件仓库中检索相应的包，  
如果仓库中没有某软件，就无法安装了。

这时候就需要加入其他仓库地址，进行下载安装。  
（或者根据工具文档中提供的命令完成，一般会借助 `sh`、`wget`、`curl` 等命令完成下载安装）

如在 Ubuntu 中安装 Node.js，  
官方的 apt 源并不维护最新的 Node.js 版本。  
安装 _Node.js v12_ 的命令：

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

[Installation instructions - NodeSource](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

### 环境变量

某些工具安装完成之后，还需要手动进行一些额外的步骤，  
因为安装脚本是通用的，不能完全知道你的系统是怎样的、或有些可选配置，  
所以需要手动完成。

比如 `brew install node@10` 之后，会有提示需要将 `node` 加入 `PATH`：  
（类似的还有 `openssl`、`mysql`、`ruby` 等）

```bash
If you need to have node@10 first in your PATH run:
  echo 'export PATH="/usr/local/opt/node@10/bin:$PATH"' >> ~/.zshrc

For compilers to find node@10 you may need to set:
  export LDFLAGS="-L/usr/local/opt/node@10/lib"
  export CPPFLAGS="-I/usr/local/opt/node@10/include"
```

我不需要 C++ 编译，所以只在 `.zshrc` 中加入了一行：

```bash
# 给环境变量加上 node 执行文件的位置
export PATH="$PATH:/usr/local/opt/node@10/bin"
```

## 打造趁手的终端

个人使用的命令行基本作业环境是：`iTerm2 + zsh + oh-my-zsh`  
（代替 MacOS 自带的 `Terminal.app + bash`）

（另一个流行的配置集：[Spaceship ZSH](https://github.com/denysdovhan/spaceship-prompt)）

- [iTerm2](https://iterm2.com/)：一个 terminal
  - `brew cask install iterm2`
- [zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)：一个 shell
  - `brew install zsh`
  - （`~/.zshrc`：装完自动生成的配置文件，可以在这里进行客制化）
- [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh#getting-started)：一个流行的 zsh 配置集
  - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)：一个 `fish` 风格的 zsh 高亮插件
  - `brew install zsh-syntax-highlighting`

![iterm2-showcase](./img/iterm2-showcase.png)
