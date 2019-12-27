# 进一步提高 npm 安装速度（Proxy）

在 [上一篇](./npm-overview.md) 中我们提到：  
可以使用换源的方式提高 npm 的安装速度，  
`nrm use taobao` 已经够快。

但有的时候 npm 的安装还是会表现出假死的状态。  
（yarn 或其他工具也有这个问题）  
这是网络问题，从某些地址下载包文件可能太慢，从而造成了假死的现象。

例如：

```bash
npm i puppeteer # 安装 puppeteer（或者 node-sass、cypress 等也有类似情况）
> puppeteer@1.12.2 install /Users/lc/0Work/test-npm/node_modules/puppeteer
> node install.js
```

```bash
yarn add puppeteer
# ...
[4/4] 🔨  Building fresh packages...
[1/1] ⢀ puppeteer
```

将会一直卡在这一步  
是因为 `puppeteer` 这个包有自己安装脚本，  
会从 `https://storage.googleapis.com` 下载 Chromium。  
（在安装成功后，到 `node_modules/puppeteer` 查找这个地址即可确认）  
而因为网络问题速度太慢，导致安装过程卡死在这一步。

有两个解决方法：  
一是添加 `--ignore-scripts` 无视额外安装脚本，  
例如：`npm i puppeteer --ignore-scripts`

另一种方法，是使用代理，  
（以下内容仅限 mac，不涉及 windows，命令可能不同但原理类似）  
在终端中执行：

```bash
export http_proxy="http://127.0.0.1:1080"
```

其中的 `http://127.0.0.1:1080` 是我们配置的一个内网 proxy，  
启用代理以达到提速的效果。proxy 的配置这里不详细说明。

但是手动操作有点麻烦，我们可以封装成函数。  
拿 bash 举例。  
编辑 `~/.bashrc` 这个 bash runtime config 文件，  
在文件最后加入以下代码并保存。  
（zsh 或其他环境原理类似，在配置文件的语法上可能略有差异。）

```bash
# .bashrc
export no_proxy=localhost,127.0.0.1,mysite.com # no_proxy 列表
function proxy() {
  export http_proxy="http://127.0.0.1:1080" # 改成你自己的地址
  export https_proxy="http://127.0.0.1:1080" # 改成你自己的地址
  echo "HTTP Proxy on"
}
function unproxy() {
  unset http_proxy https_proxy # 取消 proxy
  echo "HTTP Proxy off"
}
proxy # 可以加入这一行实现打开终端就直接开启 proxy
```

这样就生成了 `proxy`、`unproxy` 两个开关代理的方法。  
然后打开新的终端，再尝试执行：

```bash
# cd ./test-npm/
proxy
npm i puppeteer
```

此时 Chromium 的下载已经通过代理，所以不会再卡死。

```bash
Downloading Chromium r624492 - 84.5 Mb [==                 ] 12% 79.0s
```
