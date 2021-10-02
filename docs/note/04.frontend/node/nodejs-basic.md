---
title: Node.js 入门指南
date: 2020-05-26 15:43:00
permalink: /frontend/nodejs-basic
categories:
  - 前端开发
  - Node.js
tags:
  - Node.js
  - npm
---

# Node.js 入门指南

## Node.js 简介

### 什么是 Node.js

一个 JavaScript 运行时，它能让你在命令行中运行 JS 代码。让 JS 跳出浏览器的约束成为更通用的编程语言。  
借助自带的包管理器 npm，能够使用超过百万个第三方开源库，提高日常开发效率。  
借助一些扩展库，如 ts-node 可以运行 TypeScript 代码，拥有更多可能性。

### Node.js 的版本

[Releases - Node.js](https://nodejs.org/en/about/releases/)

Node.js 的偶数版本作为 LTS（long-term support，长期维护支持），有 30 个月的生命周期。生产环境应该使用 Active LTS 或 Maintenance LTS 版本。  
（比如现在是 2020 年 5 月，v14 还处于开发状态中，可以用于个人使用；但服务器部署应该用 v12 或 v10。）

### 为什么要学习使用 Node.js

- 你要用前端框架 CLI 进行开发，需要通过 Node.js 运行
- 你要为业务代码进行单元测试，需要通过 Node.js 运行
- 搭个服务器，搞搞 Serverless
- 写一些 JS 代码来自动化一些日常琐事（比如文件批量重命名）
- ...

## 学习 Node.js

### 概览

- 耗时：
  - 入门，大约需要 0.5~2 小时（基本使用）
  - 熟悉，大约需要 10~20 小时（理解基本设计，踩各种坑：版本管理、调用参数、tsconfig、ESM、Polyfill 等）
  - 深入，……
- 难点：
  - 理解概念熟练掌握，如模块化、Event Loop 等
  - Node 源码包含 C++ 代码，如果你想深入……
- 工具：
  - [Node.js](http://nodejs.org/)
  - [VS Code](/workspace/vscode)
  - [终端](/workspace/terminal-settings)

### 学习路线

- 前置学习
  - [计算机科学 入门指南](/cs/crash-course-computer-science)：代码运行的基本原理
  - [JavaScript 学习指南](/frontend/javascript-foundation)：初级 JavaScript 知识
- 学习 Node.js 基础
  - Node
    - 学习 Node.js 主要概念
      - 安装 Node.js
      - Node.js 基本概念
      - 模块化相关知识
      - 熟悉内置的核心模块
      - 熟悉使用 npm
    - 通过 Node.js 运行 JS 代码
    - 通读一遍 Node.js 官方文档，了解大致有哪些 API
  - npm
    - 了解 npm 有哪些著名的库
    - 尝试和使用一些流行的 npm 框架、工具
- 下一步
  - 写一些具有 Node.js 功能的代码，比如自己实现一个 CLI、Task Runner、搭个服务器、给终端写一个 [`Welcome`](https://github.com/seognil-craft/color-welcome) 等

## 资料

### 我的其他文章

我写的一些和 Node.js 有关的其他文章。

- [打造趁手的终端](/workspace/terminal-settings)：如何安装和管理 Node.js
- [运行 JavaScript 代码的十几种方式](/frontend/how-to-run-javascript-code)：学习使用 Node.js、ts-node、VS Code 和终端
- [npm 基本概念和使用](/frontend/introduction-to-npm)
- [用 Proxy 进一步提高 npm 安装速度](/frontend/speeding-up-npm-install)：npm + proxy

### 我的学习代码

- [Node - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/node)

### 自学教材

#### 文字

- [一杯茶的时间，上手 Node.js](https://zhuanlan.zhihu.com/p/97413574)
- [【知乎 Live】狼叔：如何正确的学习 Node.js](https://github.com/i5ting/How-to-learn-node-correctly)：2018 年，有点老了，当时还是 Node v8 版本的，现在都 v14 了。不过变化只发生在工具生态和一些 API 上，Node 本身的基本设计和理论知识没有太大变化。所以依然值得一看。
- [Node 官方文档](https://nodejs.org/api/index.html)

#### 视频 {#video .timeline-note}

- [Node.js Ultimate Beginner’s Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4)：16 分钟，2020 年，Node 大致概念和基本使用
  - 0:00 - Node 和 Deno 的关系
  - 1:13 - 1. Node 是一个 Runtime，在服务器上（命令行中）运行 JS 代码
  - 2:28 - 2. 如何安装 Node.js，NVM
  - 3:25 - 3. Hello World，REPL（Read Eval Print Loop），默认入口文件名
  - 4:26 - 4. 熟悉 Node.js，`console`、`global`、`process`
  - 5:18 - 5. 事件，Event Loop，回调函数，`EventEmitter`
  - 6:58 - 6. 文件系统， `fs`、`promises`
  - 9:01 - 7. 模块，COMMON JS，ES MODULES，NPM，`package.json`
  - 11:40 - 建立一个服务器，`express`
  - 14:57 - 通过 Google Cloud 将代码部署到公网
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh](https://www.youtube.com/watch?v=TlB_eWDSMt4)：78 分钟，2018 年，简单 Node 原理和一些 Node 自带的模块介绍
  - 00:00 - **What is Node**：Node.js 的作用，PayPal 使用 Node.js 的情况
  - 03:01 - **Node Architecture**：Runtime VS 语言 VS 框架
  - 06:04 - **How Node Works**：单线程异步架构，擅长 IO，不擅长 CPU 密集计算
  - 10:29 - **Installing Node**
  - 13:01 - **Your First Node Program**
  - 15:22 - **Node Module System**
  - 15:52 - **Global Object**：顶层声明不会像在浏览器里一样变成全局变量
  - 19:14 - **Modules**：模块化、局部性，module 对象
  - 22:51 - **Creating a Module**：`module.exports`
  - 27:35 - **Loading a Module**：`require`，省略文件后缀名，const
  - 32:59 - **Module Wrapper Function**：Node 加载模块的原理：为什么 module 不是全局对象，为什么不能直接写 `exports = xxx`。`__filename`，`__dirname`
  - 39:53 - **Path Module**：`path`，路径处理和解析
  - 44:03 - **OS Module**：`os`，系统信息
  - 48:22 - **File System Module**：`fs`，文件读写
  - 53:14 - **Events Module**：`events`，事件
  - 59:33 - **Event Arguments**：事件参数
  - 62:43 - **Extending EventEmitter**
  - 70:46 - **HTTP Module**：`http`
- [Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)：90 分钟，2019 年，视频结构和上面这个类似。有更多 API 演示
  - 1:18 - **What is Node.js**：Node.js 的组成，为什么使用 Node.js，特性，适用场景
  - 7:42 - **NPM**：NPM 简介，Node.js 内置的核心模块，第三方库，自定义模块
  - 10:16 - **Install Node.js**：安装和使用，REPL 模式，NPM 和模块的使用
  - 20:05 - **Module Wrapper Function**：`(function(exports, require, module, __filename, __dirname) {})`
  - 22:50 - **Path Module**
  - 28:50 - **File System Module**
  - 38:00 - **OS module**
  - 41:25 - **URL Module**
  - 47:00 - **Event Module**
  - 50:00 - **Logger With Event Emitter**
  - 56:00 - **HTTP Module**
  - 59:00 - **Create a Server**：使用 `http` 模块建立一个简单的服务器，多页面，响应多种类型的文件，404。
  - 84:55 - **Deploy to Heroku**

### NPM 生态

- [npm rank](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491)：了解有哪些著名的工具库、框架，可以从中学习到很多代码设计模式和理念。按被依赖次数排名。
- [JavaScript 明星项目](https://risingstars.js.org/)：年度 JS 工具热度榜。了解主流开发生态的趋势。按 star 增长率排名。

## Node.js 基本知识体系

### Node.js 基本组成

- Node.js
  - [JS 的部分](https://github.com/nodejs/node/tree/master/lib)：JS 接口层，作为可以调用的内置模块，对接 C++ 底层
  - [C/C++ 的部分](https://github.com/nodejs/node/tree/master/src)：大部分具体实现，对接第三方底层
- 第三方底层
  - [V8](https://github.com/v8/v8)：Google 的 JS 引擎
  - [Libuv](https://github.com/libuv/libuv)：主要为 Node.js 而开发的异步 IO 库，功能包含 Event Loop、线程池、文件系统、网络等

### Node.js 的特性

- 单线程非阻塞 IO
- 事件，EventEmitter，Event Loop
- 错误优先回调风格

- 适合场景
  - RESTful，微服务
  - 即时服务（聊天）
  - CRUD 应用：博客，商城等
  - 小工具

### npm 基本概念

- `node_modules` 文件夹
- `package.json` 文件

### Node 基本概念和常用核心模块 API

- **全局对象**
  - [全局对象](https://nodejs.org/api/globals.html)
    - [Buffer](https://nodejs.org/api/buffer.html)：二进制数据结构，和一些其他内置模块相关，比如 fs 读取文件
    - [global](https://nodejs.org/api/globals.html#globals_global)：全局对象，相当于浏览器中的 window 对象
    - [process](https://nodejs.org/api/process.html)：进程相关，做命令行工具可能会用到
      - [process.argv](https://nodejs.org/api/process.html#process_process_argv)：命令行参数
      - [process.env](https://nodejs.org/api/process.html#process_process_env)：环境变量
      - [process.cwd()](https://nodejs.org/api/process.html#process_process_cwd)：current working directory，当前 Node 进程的启动目录
      - [process.exit()](https://nodejs.org/api/process.html#process_process_exit_code)：退出，就像退出函数要用 `return`，退出 Node 对 JS 脚本的执行要用 `process.exit()`
  - 模块作用域中的关键字。并非挂载在 global 上，而是根据文件的不同而不同。这些变量通过 [模块包装器](https://nodejs.org/api/modules.html#modules_the_module_wrapper) 生成。
    - [\_\_dirname](https://nodejs.org/api/modules.html#modules_dirname)：当前目录名（完整路径）
    - [\_\_filename](https://nodejs.org/api/modules.html#modules_filename)：当前文件名（完整路径）
    - [exports](https://nodejs.org/api/modules.html#modules_exports)：`module.exports` 的引用
    - [module](https://nodejs.org/api/modules.html#modules_module)：当前模块（文件）元信息
    - [require](https://nodejs.org/api/modules.html#modules_require_id)：CJS 模块加载函数

* **特性**
  - [Command Line Options](https://nodejs.org/api/cli.html)：node 命令的运行参数
    - [--](https://nodejs.org/api/cli.html#cli_1)：传递参数
    - [--experimental-json-modules](https://nodejs.org/api/cli.html#cli_experimental_json_modules)：解析 JSON 文件
    - [--experimental-loader=module](https://nodejs.org/api/cli.html#cli_experimental_loader_module)：解析 ESM 模块化文件
    - [--max-old-space-size=SIZE (in Mbytes)](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_mbytes)：一般用于申请更多内存，避免内存不足程序崩溃。
  - [Debugger](https://nodejs.org/api/debugger.html)：`inspect` 子命令用于调试。调试也可以用 VS Code 集成的调试功能，功能更丰富。
  - [ECMAScript Modules](https://nodejs.org/api/esm.html)：ES Module 模块化规范，ES 的官方模块化规范，是未来的趋势。截止本文 v14 版本还需要开启试验选项。
  - [Modules](https://nodejs.org/api/modules.html)：Common JS 模块化规范，Node.js 比较主流的模块化规范。大部分库的源码都用它。

- **部分核心模块和 API**
  - [child_process](https://nodejs.org/api/child_process.html)：建立子进程，用于执行额外的终端命令，比如执行 shell 脚本，需要注意建立子进程有很大的开销，如果是大量的小命令，可以尝试直接用 JS 代码实现这些需求，或生成一个 sh 文件再调用。终端输出需要借助 stdout 手动控制。也有同步的 `execSync`、`spawnSync` 等用于简单使用。
    - [child_process.exec(command[, options][, callback])](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)：执行一条命令。
    - [child_process.spawn(command[, args][, options])](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)：执行一条命令，参数是分开的，带事件系统。
  - [events](https://nodejs.org/api/events.html)：事件系统，观察者模式，很多其他内置模块都是基于这个类
    - [emitter.emit(eventName[, ...args])](https://nodejs.org/api/events.html#events_emitter_emit_eventname_args)：触发事件，后续参数作为携带参数
    - [emitter.off(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_off_eventname_listener)：卸载事件，alias `removeListener`
    - [emitter.on(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_on_eventname_listener)：挂载事件，alias `addListener`
    - [emitter.once(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_once_eventname_listener)：挂载一次性事件（只执行一次）
    - [emitter.prependListener(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener)：挂载到事件列表的头部
    - [emitter.prependOnceListener(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_prependoncelistener_eventname_listener)
    - [emitter.removeAllListeners([eventName])](https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname)：清除所有事件
    - [emitter.eventNames()](https://nodejs.org/api/events.html#events_emitter_eventnames)：取得当前挂载的事件名
    - [emitter.listenerCount(eventName)](https://nodejs.org/api/events.html#events_emitter_listenercount_eventname)：取得某事件名上挂载的函数数量
    - [emitter.listeners(eventName)](https://nodejs.org/api/events.html#events_emitter_listeners_eventname)：取得某事件名上挂载的函数列表
  - [fs](https://nodejs.org/api/fs.html)：文件系统，文件目录读写等函数，有同步、异步 Callback、[异步 Promise](https://nodejs.org/api/fs.html#fs_fs_promises_api) 三种使用方式。支持 [流](https://nodejs.org/api/fs.html#fs_class_fs_writestream)
    - [fs.access(path[, mode], callback)](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback)：检查文件权限
    - [fs.appendFile(path, data[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback)：写入到文件结尾，如果不存在该文件，则新建这个文件。（类似 `echo >> file`）
    - [fs.chmod(path, mode, callback)](https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback)：修改权限
    - [fs.chown(path, uid, gid, callback)](https://nodejs.org/api/fs.html#fs_fs_chown_path_uid_gid_callback)：修改所有者
    - [fs.copyFile(src, dest[, mode], callback)](https://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_mode_callback)：复制文件
    - [fs.exists(path, callback)](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback)：检查是否存在
    - [fs.mkdir(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback)：新建文件夹
    - [fs.mkdtemp(prefix[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_mkdtemp_prefix_options_callback)：新建 temp 文件夹
    - [fs.readdir(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)：读取文件夹信息
    - [fs.readFile(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)：读取文件内容
    - [fs.readlink(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readlink_path_options_callback)：读取 link 文件内容
    - [fs.rename(oldPath, newPath, callback)](https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback)：重命名
    - [fs.rmdir(path[, options], callback)](//nodejs.org/api/fs.html#fs_fs_rmdir_path_options_callback)：删除文件夹（不支持递归删除非空文件夹，可以找个库）
    - [fs.stat(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback)：获得详细信息
    - [fs.symlink(target, path[, type], callback)](https://nodejs.org/api/fs.html#fs_fs_symlink_target_path_type_callback)：生成一个 symlink
    - [fs.unlink(path, callback)](https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback)：unlink，可以用于删除文件
    - [fs.writeFile(file, data[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)：写入文件（覆盖）
  - [os](https://nodejs.org/api/os.html)：读取系统信息，系统版本、CPU、内存等
  - [path](https://nodejs.org/api/path.html)：路径（的字符串）处理
    - [path.basename(path[, ext])](https://nodejs.org/api/path.html#path_path_basename_path_ext)：取得文件名（第二参数可以去除后缀）
    - [path.dirname(path)](https://nodejs.org/api/path.html#path_path_dirname_path)：取得文件夹名
    - [path.extname(path)](https://nodejs.org/api/path.html#path_path_extname_path)：取得后缀名
    - [path.relative(from, to)](https://nodejs.org/api/path.html#path_path_relative_from_to)：取得相对路径
    - [path.join([...paths])](https://nodejs.org/api/path.html#path_path_join_paths)：路径拼接
    - [path.resolve([...paths])](https://nodejs.org/api/path.html#path_path_resolve_paths)：高级版的路径拼接
    - [path.delimiter](https://nodejs.org/api/path.html#path_path_delimiter)：环境变量分隔符
    - [path.sep](https://nodejs.org/api/path.html#path_path_sep)：文件夹路径分隔符
    - [path.parse(path)](https://nodejs.org/api/path.html#path_path_parse_path)：将路径字符串解析成详细信息的对象
  - 网络系列
    - [dns](https://nodejs.org/api/dns.html)：DNS 解析
    - [http](https://nodejs.org/api/http.html)、[http2](https://nodejs.org/api/http2.html)、[https](https://nodejs.org/api/https.html)、[net](https://nodejs.org/api/net.html)：服务器相关功能。也可以直接使用基于这些封装的框架（比如 [Express](https://github.com/expressjs/express)）。
    - [querystring](https://nodejs.org/api/querystring.html)：解析 URL 的 query 参数
    - [URL](https://nodejs.org/api/url.html)：用于解析 URL 到对象
  - [readline](https://nodejs.org/api/readline.html)：读取用户输入（终端），做交互式命令行会用到，比如 [inquirer](https://github.com/SBoudrias/Inquirer.js) 这个库的源码中就有它
  - [util](https://nodejs.org/api/util.html)：实用工具集
    - [util.callbackify(original)](https://nodejs.org/api/util.html#util_util_callbackify_original)：将 Async 函数转为 Callback 风格的函数
    - [util.inspect(object[, options])](https://nodejs.org/api/util.html#util_util_inspect_object_options)：将对象显示为字符串，相比 JSON.stringify 更宽松和功能丰富，支持循环引用。
    - [util.promisify(original)](https://nodejs.org/api/util.html#util_util_promisify_original)：将 Callback 风格的函数转为 Promise 风格
    - [util.types](https://nodejs.org/api/util.html#util_util_types)：数据类型判断的函数集合

## Node.js 典型代码

### 一个简单的例子

通过一个简短的例子了解 Node.js 的基本使用以及特色功能。  
使用了 `path`、`fs`、`util` 这几个内置模块。  
涉及了模块化、`async`、`__dirname` 这些概念。

文件结构如下：

```
├── index.js
└── text
    └── hello.md
```

`index.js`：

```js
const path = require('path');
const { readFile } = require('fs');
const { promisify } = require('util');

const asyncReadFile = promisify(readFile);

const srcFile = path.resolve(__dirname, 'text/hello.md');

(async () => {
  const txt = await asyncReadFile(srcFile, 'utf8');
  console.log('path is:', srcFile);
  console.log('context:', txt);
})();
```

`text/hello.md`：

```md
Hello World!
```

运行：

```sh
node index.js
```

输出：

```sh
# 将显示你自己的文件夹路径
path is: /tmp/node-demo/text/hello.md
context: Hello World!
```
