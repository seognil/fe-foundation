---
title: 使用 verdaccio 搭建私有 npm 仓库
date: 2019-11-10 22:20:59
permalink: /frontend/set-up-a-private-npm-registry-using-verdaccio
categories:
  - 前端开发
  - Node.js
  - 前端工具
tags:
  - Node.js
  - npm
  - verdaccio
---

# 使用 verdaccio 搭建私有 npm 仓库

私有仓库可用于包的开发和发布测试。  
或作为镜像仓库缓存离线使用。

## 背景

### 基本需求分析

私有的 npm 仓库是实现不同项目的代码库共享的方式之一，  
基本需求依次为：

- 私有仓库
- 可正常使用 npm 的功能
- 小团队使用，避免太过复杂的配置过程
- 私有权限管理

### 可选方案

经初步调研，有几款工具可以覆盖上述需求。

- [verdaccio](https://github.com/verdaccio/verdaccio)
- [sinopia](https://github.com/rlidwka/sinopia)
- [cnpm（server）](https://github.com/cnpm/cnpmjs.org)

cnpm 的实现 [略显复杂](https://cnpmjs.org/)，可能不适用于轻度使用；  
sinopia 基本已经不再维护（3 years ago）；  
verdaccio fork 于 sinopia，并且在持续更新。

于是对于私有仓库，我们可以尝试 verdaccio。

有一些好的特性，不过由于其轻量级的特性，也会有一些不足之处。

- **Pro**
  - 配置简单可控，文档和示例丰富
  - 使用本地文件缓存代替 sql，无需配置存储
  - 私有的发布访问
  - 简单的权限系统
  - 图形化管理界面
  - 可以同时使用多个源地址
- **Con**
  - 一些附加功能不太成熟（比如权限管理之于大型团队）
  - 文档中文化程度一般。

综合来说，verdaccio 比较适合小团队或个人。

### 相关文档

- [Installation · Verdaccio](https://verdaccio.org/docs/zh-CN/installation)
- [npm-publish | npm Documentation](https://docs.npmjs.com/cli/publish)

## 配置 verdaccio

### 搭建和配置

`verdaccio` 虽然是一个私有仓库搭建工具，但本身也是一个基于 `npm` 的包。  
所以需要预先安装 `node` 和 `npm`，接着执行：

```shell
# 终端
npm i -g verdaccio # 安装
verdaccio # 启动 verdaccio
```

可以看到 log 信息：

```shell
warn --- config file  - /Users/lc/.config/verdaccio/config.yaml
warn --- Plugin successfully loaded: htpasswd
warn --- Plugin successfully loaded: audit
warn --- http address - http://localhost:4873/ - verdaccio/3.11.5
```

说明已经启动成功，可以看到仓库的默认地址是 `http://localhost:4873/`  
配置文件在 `~/.config/verdaccio/config.yaml`  
并且在浏览器中访问 <http://localhost:4873/> ，可以看到一个图形化管理界面。  
verdaccio 可以设置多个源，我们加入淘宝源。  
（也可以直接删掉 npmjs 相应的行，只使用淘宝源，以提高响应速度。）

```yaml
# config.yaml
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
    # 其他设置 ...
  taobao:
    url: https://registry.npm.taobao.org/
    # 其他设置 ...
# 其他设置 ...
packages:
  '@*/*':
    proxy:
      - npmjs
      - taobao
    # 其他设置 ...
  '**':
    proxy:
      - npmjs
      - taobao
    # 其他设置 ...
```

设置完成后，保存并重启命令行中的 verdaccio。  
保持 verdaccio 的运行状态，打开新的终端窗口备用。

### set registry

我们先将 npm registry 改为这个地址：

```shell
# npm config
npm config set registry http://localhost:4873/
npm config get registry # -> http://localhost:4873/

# 或 nrm
nrm add localnpm http://localhost:4873/
nrm use localnpm
```

### npm install

测试对于现有包的安装是否正常，建立一个空项目，安装 `the-answer` 这个包。

```shell
mkdir test-localnpm
cd test-localnpm
npm init -y
npm i the-answer # 安装 the-answer
```

回到运行 verdaccio 的终端窗口可以看到一下内容，  
说明 verdaccio 从多个源获取包信息，并传回 npm 客户端。

```shell
http --> 200, req: 'GET https://registry.npm.taobao.org/the-answer' (streaming)
http --> 200, req: 'GET https://registry.npm.taobao.org/the-answer', bytes: 0/2632
http --> 200, req: 'GET https://registry.npmjs.org/the-answer' (streaming)
http --> 200, req: 'GET https://registry.npmjs.org/the-answer', bytes: 0/2661
http <-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
http <-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
```

而重新安装或全新安装的 log 则会变成：

```shell
http <-- 304, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/0
http <-- 304, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/0
```

```shell
http --> 304, req: 'GET https://registry.npm.taobao.org/the-answer' (streaming)
http --> 304, req: 'GET https://registry.npm.taobao.org/the-answer', bytes: 0/0
http --> 304, req: 'GET https://registry.npmjs.org/the-answer' (streaming)
http --> 304, req: 'GET https://registry.npmjs.org/the-answer', bytes: 0/0
http <-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
http <-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
```

一些地方的 http status 从 200 变成了 304，  
表示有缓存功能的存在，不会每次都重新从远端仓库下载包代码。  
尝试在代码中调用，可以发现 `the-answer` 这个包能够正常工作。

```javascript
// .js
const theAnswer = require('the-answer');
console.log(theAnswer); // -> 42
```

### 包的发布

具体流程和 npm 官方一致。  
（只不过现在仓库地址指向我们建立的私有仓库，可以更自由地进行实验。）

下面简单重现一下使用步骤。  
（详细步骤可参考[这篇文章](https://www.jianshu.com/p/36d3e0e00157)）

#### 开发一个 package

建立一个新的目录用以开发一个新的 package。

```bash
mkdir test-lib-local
cd test-lib-local
npm init -y
```

可以看到 `package.json` 中默认有 `"main": "index.js"`，  
表示 cjs 规范中的文件入口。  
那么（新建这个文件并）添加简单代码：

```javascript
// index.js
module.exports = 'check1234';
```

#### 发布这个 package

执行 `npm adduser`（或 alias `npm login`）登录，  
执行 `npm publish` 发布。  
如果控制台看到以下信息，则说明发布成功。

```shell
npm notice
+ test-lib-local@1.0.0
```

#### 调用这个 package

参考之前的章节，建立新的项目、链接到本地仓库，并安装我们新发布的包：  
`npm i test-lib-local`  
测试安装是否正常：

```javascript
// .js
const lib = require('test-lib-local');
console.log(lib); // -> 'check1234'
```

此时可以切换回官方仓库看看，再进行安装应该是不成功的，  
因为我们的包发布在私有仓库中，并不是在官方仓库中。

### 权限管理

verdaccio 的权限管理（以及注册登录等等）功能目前还是比简单的。  
并且不支持用户分组，可配置程度相比 cnpm 要弱。  
也没有设计接口，只能通过修改配置文件并重启程序的方式刷新。

```yaml
packages:
  '@my-custom-lib/*':
    access: username1
    publish: username1
    # 其他设置 ...
  '**':
    access: $all
    publish: $authenticated
    # 其他设置 ...
```
