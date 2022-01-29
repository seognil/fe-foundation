---
title: 用 Proxy 进一步提高 npm 安装速度
date: 2019-11-10 22:20:59
permalink: /frontend/speeding-up-npm-install
categories:
  - 前端开发
  - Node.js
tags:
  - npm
  - 命令行
---

# 用 Proxy 进一步提高 npm 安装速度

## 碰到的问题

在前一篇 [Node 概览](/frontend/introduction-to-npm) 中我们提到：  
可以使用换源的方式提高 npm 的安装速度，  
`nrm use taobao` 已经足够快。

但在安装一些包的时候，还是会表现出假死状态或失败报错。  
例如安装 `node-sass`、`cypress`、`puppeteer` 等。  
（用 npm 或 yarn 或其他工具都有这个问题）

## 原因

这是网络原因，因为这些包需要从 npm 以外的地址下载数据。  
所以只有 npm 换源起不到作用。

**node-sass**

```bash
$ npm i --save-dev node-sass
...
> node-sass@4.13.1 install /Users/lc/0Work/temp/test/node_modules/node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.13.1/darwin-x64-79_binding.node
```

**cypress**

```bash
$ npm i --save-dev cypress
...
> cypress@4.3.0 postinstall /Users/lc/0Work/temp/test/node_modules/cypress
> node index.js --exec install

Installing Cypress (version: 4.3.0)

  ⠧  Downloading Cypress
     Unzipping Cypress
     Finishing Installation
```

**puppeteer**

```bash
$ npm i --save-dev puppeteer
...
> puppeteer@2.1.1 install /Users/lc/0Work/temp/test/node_modules/puppeteer
> node install.js

Downloading Chromium r722234 - 116.4 Mb [                    ] 1% 536.9s
```

在这些包的实际文件中，  
也果然能够找到关于下载链接或代理的代码。

**node-sass**: `node_modules/node-sass/lib/extensions.js`

```js
function getBinaryUrl() {
  var site =
    getArgument('--sass-binary-site') ||
    process.env.SASS_BINARY_SITE ||
    process.env.npm_config_sass_binary_site ||
    (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) ||
    'https://github.com/sass/node-sass/releases/download';

  return [site, 'v' + pkg.version, getBinaryName()].join(
    '/',
  );
}
```

**cypress**: `node_modules/cypress/lib/tasks/download.js`

```js
var defaultBaseUrl = 'https://download.cypress.io/';

var getProxyUrl = function getProxyUrl() {
  return (
    process.env.HTTPS_PROXY ||
    process.env.https_proxy ||
    process.env.npm_config_https_proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy ||
    process.env.npm_config_proxy ||
    null
  );
};
```

**puppeteer**: `node_modules/puppeteer/lib/BrowserFetcher.js`

```js
const DEFAULT_DOWNLOAD_HOST =
  'https://storage.googleapis.com';

const supportedPlatforms = [
  'mac',
  'linux',
  'win32',
  'win64',
];
const downloadURLs = {
  linux:
    '%s/chromium-browser-snapshots/Linux_x64/%d/%s.zip',
  mac: '%s/chromium-browser-snapshots/Mac/%d/%s.zip',
  win32: '%s/chromium-browser-snapshots/Win/%d/%s.zip',
  win64: '%s/chromium-browser-snapshots/Win_x64/%d/%s.zip',
};
```

那么如果环境访问外网太慢或无法访问外网，  
显然就会导致安装太慢或失败。

## 解决方法

有几个解决方法：

一是添加 `--ignore-scripts` 直接无视额外安装脚本，  
例如：`npm i --save-dev node-sass --ignore-scripts`

二是使用**对应的镜像源**参数，  
例如：`npm i --save-dev node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`

这也适用于离线安装的情况，比如指向企业的内网镜像库。

## 代理的方法

而个人开发的万金油方法，是使用代理连接到高速服务器，  
（也可以指向企业的内网镜像库，实现离线安装）

（以下内容基于 mac，windows 的命令可能不同但原理类似）  
在终端中执行：

```bash
export http_proxy="http://127.0.0.1:1080"
```

其中的 `http://127.0.0.1:1080` 是我们配置的一个内网 proxy，  
直接将所有请求转发到（公司的）高速服务器。  
（关于 proxy 的配置方式这里不详细说明。）

可以在 `~/.zshrc` 里做更详细的处理，  
并把代理封装成两个函数作为快捷开关。  
（`bash` 或 `fish` 等其他 `shell` 类似）

```bash
export no_proxy=localhost,127.0.0.1,mysite.com # 白名单

function proxy() {
  export http_proxy="http://127.0.0.1:1080" # 改成你自己的地址
  export https_proxy="http://127.0.0.1:1080" # 改成你自己的地址
  echo "HTTP Proxy on"
}

function unproxy() {
  unset http_proxy https_proxy # 取消 proxy
  echo "HTTP Proxy off"
}

proxy # 可以加入这一行实现打开终端直接开启 proxy
```

这样就生成了 `proxy`、`unproxy` 两个开关代理的方法。  
然后打开新的终端，再尝试安装：

```bash
# cd temp/test/
# proxy
npm i --save-dev puppeteer
```

此时外部文件的下载已经通过高速代理，所以不会再卡住安装。

```bash
Downloading Chromium r722234 - 116.4 Mb [======              ] 28% 19.7s
```
