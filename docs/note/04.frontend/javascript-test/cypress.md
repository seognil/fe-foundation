---
title: Cypress 学习指南
date: 2020-01-29 20:31:10
permalink: /frontend/cypress
categories:
  - 前端开发
  - 前端工具
tags:
  - cypress
---

# Cypress 学习指南

## Cypress 简介

### 什么是 Cypress

一个前端测试工具

- Cypress 能测试什么
  - - E2E 测试
    - 集成测试
    - 单元测试（因为内嵌了 Mocha）
  - 任何在浏览器中运行的内容

* Cypress 提供的一些功能
  - 时间旅行
  - 自动等待（类似 Jest 中的 wait）
    - 以同步风格的代码完成异步操作
  - 网络流量控制
  - 截屏
  - 持续集成

- Cypress 语法设计（及内置对象）
  - jQuery + 链式调用
  - Promise（Bluebird）
  - Mocha + Chai

### 为什么要用 Cypress

- 当你需要 E2E 测试
- 在 [2019 年 JavaScript 明星项目](https://risingstars.js.org/2019/zh#section-test-framework) 的测试分类中位于第二名
- 比其他同类 E2E 测试工具更简单、灵活、健壮

## 学习 Cypress

### 概览

- 耗时：从入门到熟悉基本概念，大约需要 8~16 小时
- 难点：充分利用需要花一定时间学习和配置（报告、覆盖率、CI 等）
- 工具：[cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

### 学习路线

- 前置学习
  - [前端开发入门指南](/note/frontend-development-cookbook)
  - （[Jest](/frontend/jest)）
  - （有一定实际应用开发经验）
- 学习 Cypress
  - 了解 Cypress 的组成，全面阅读文档
  - 掌握基本使用
- 实战
  - 在业务中编写测试
    - 进一步熟悉各 API 的大量细节
  - 为项目调整 Cypress 配置，使用高级功能

## 资料

### 自学教材

- [Cypress End-to-End Testing](https://www.youtube.com/watch?v=7N63cMKosIE)：10 分钟，Cypress 概览
- [Cypress 官方文档](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
  - [API](https://docs.cypress.io/api/api/table-of-contents.html)
  - [最佳实践](https://docs.cypress.io/guides/references/best-practices.html)

### 实战

- [Cypress - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/cypress)
- [cypress-example-recipes](https://github.com/cypress-io/cypress-example-recipes)

## Cypress 知识体系

### Cypress 概览

#### 安装/初始化

```bash
# 在已有项目中安装 cypress
npm install cypress --save-dev

# 接着运行这个命令，cypress 将初始化并生成一堆用例
npx cypress open
```

#### [文件结构](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)

- **/cypress**
  - **/fixtures** （mock 数据）
    - example.json
  - **/integration** （测试文件）
    - **/examples**
      - example.spec.js （一般格式为 `*.spec.js`）
  - **/plugins** （用于配置安装的 [插件](https://docs.cypress.io/guides/tooling/plugins-guide.html)，task 系统）
    - index.js
  - **/support** （用于调整 [自定义选项](https://docs.cypress.io/guides/references/configuration.html)）
    - commands.js
    - index.js
  - /screenshots （默认截屏文件夹）
- **cypress.json**

#### 测试文件 典型代码

```typescript
///  <reference types="cypress" />

describe('描述', () => {
  before(() => console.log('---- Test Start! ----'));
  beforeEach(() => cy.visit('https://witch.url'));
  afterEach(() => cy.clearCookies());

  it('测试用户交互', () => {
    cy.get('#app').children('.intro').click();
    cy.contains('Welcome').should('be.exist');
  });

  it('测试显示文本', () => {
    cy.get('div').should('have.text', 'Hello');
    // * 另一种风格
    cy.get('div').should(($div) => {
      const text = $div.text();
      expect(text).to.match(/hello/i);
    });
  });
});
```

大致分为几个部分

- TypeScript 自动完成支持（第一行的注释）
- 运行器和生命周期（`describe`、`it`、`before` 等）
- 元素查找和操作（`cy` 相关命令）
- 断言/测试（`should`、`expect`、`assert` 多种风格）

#### Cypress 对象

[`Cypress` 和 `cy` 的区别](https://docs.cypress.io/api/events/catalog-of-events.html#Cypress)

- `Cypress`：全局对象，影响所有测试
  - [内置工具](https://docs.cypress.io/api/utilities/_.html)
    - [`Cypress._`](https://docs.cypress.io/api/utilities/_.html#Syntax)：[Lodash](https://lodash.com/)
    - [`Cypress.$`](https://docs.cypress.io/api/utilities/$.html)：[jQuery](https://jquery.com/)
    - [`Cypress.Blob`](https://docs.cypress.io/api/utilities/blob.html)：[blob-utli](https://github.com/nolanlawson/blob-util)
    - [`Cypress.minimatch()`](https://docs.cypress.io/api/utilities/minimatch.html)：[minimatch](https://github.com/isaacs/minimatch)
    - [`new Cypress.Promise(fn)`](https://docs.cypress.io/api/utilities/promise.html)：[Bluebird](https://github.com/petkaantonov/bluebird)
  - [全局 API](https://docs.cypress.io/api/cypress-api/custom-commands.html)
- `cy`：在每个测试中相互独立
  - [测试命令](https://docs.cypress.io/api/commands/and.html)

### 测试/断言

[Cypress 中内置的断言](https://docs.cypress.io/guides/references/assertions.html) 包含了几种类型：

- **Chai**：断言
  - `expect('test').to.be.a('string')`：BDD 风格
  - `assert.equal(3, 3, 'vals equal')`：TDD 风格
- **Chai jQuery**：关于 DOM 的断言
  - `expect(\$el).to.have.attr('foo', 'bar')`
- **Sinon-Chai**：关于函数调用情况的断言
  - `expect(spy).to.be.called`
- **`.should()`**：在 Cypress 中封装了以上所有可用断言
  - `cy.get('li.selected').should('have.length', 3)`：should
  - `cy.get('div').should(($div) => { expect($div)... })`：BDD

注意到 [Cypress 使用 Mocha BDD 风格的生命周期](https://docs.cypress.io/guides/references/bundled-tools.html#Mocha)，  
不同测试的命名风格：

| Mocha BDD            | Mocha TDD       | Jest        |
| :------------------- | :-------------- | :---------- |
| `describe`/`context` | `suite`         | `describe`  |
| `specify`/`it`       | `test`          | `test`/`it` |
| `before`             | `setup`         | `beforeAll` |
| `after`              | `teardown`      | `afterAll`  |
| `beforeEach`         | `suiteSetup`    | `before`    |
| `afterEach`          | `suiteTeardown` | `after`     |

### `cy` 命令

用来编写测试

- 测试
  - `should`：断言
  - `then`：类似 Promise 的 then
  - `each`：遍历执行（对于数组）
  - `spread`：then 的 each 版
- 查询
  - `contains`、`get`
    - `children`、`closest`、`find`
    - `eq`、`filter`、`not`
    - `first`、`last`
    - `next`、`nextAll`、`nextUntil`
    - `parent`、`parents`、`parentsUntil`
    - `prev`、`prevAll`、`prevUntil`
    - `siblings`
  - `window`、`document`、`title`
  - `its`：取得对象中的字段，如 `cy.get('ul li').its('length')`
  - `root`：当前上下文的根元素节点
  - `within`：设定上下文元素（类似 JS 中的 with）
- 操作
  - 用户操作
    - `click`、`dblclick`、`rightclick`
    - `blur`、`focus`、`focused`
    - ~~`hover`~~：不支持
    - `trigger`：触发事件
  - 表单/输入框
    - `check`、`uncheck`、`select`
    - `clear`：清除文本框
    - `type`：输入文本框
    - `submit`
  - `scrollIntoView`、`scrollTo`
  - `invoke`：调用对象中的函数，如 `cy.get('div').invoke('show')`
- 浏览器
  - `viewport`：设置应用窗口大小
  - `clearCookie`、`clearCookies`、`getCookie`、`getCookies`、`setCookie`
  - `clearLocalStorage`
- 网络请求
  - `visit`、`reload`：访问
  - `hash`、`location`、`url`：获取
  - `go`：历史跳转，相当于 `window.history.go`
  - `request`：HTTP 请求
  - `server`：启动一个服务
  - `route`：跳转路由
- 功能性
  - 任务
    - `log`、`debug`、`pause`
    - `exec`：执行 shell 命令
    - `readFile`、`writeFile`
    - `screenshot`：截屏到 `/screenshots`
    - `fixture`：读取 `/fixtures` 中文件内容
    - `task`：执行 `/plugins` 中声明的事件
  - 语法糖
    - `as`：设置为别名
    - `and`：进行多个测试
    - `end`：截断当前测试（后续链式调用将重新计算）
    - `wrap`：包装一个对象（以便支持 cy 命令）
  - 调用监听
    - `spy`：监听对象中的函数
    - `stub`：替换对象中的函数（用于监听）
  - Timer
    - `clock`：覆写原生时钟（将会影响 setTimeout 等原生函数）
    - `tick`：跳过时间，加快测试速度（需要先 `cy.clock()`）
    - `wait`：显式等待（不推荐使用）

### `Cypress` API

包含定制选项方法，或公共静态方法

- 定制
  - `Commands`：添加自定义命令
  - `Cookies`：测试时的 Cookie 行为控制
  - `Screenshot`：截屏参数配置
  - `SelectorPlayground`：调整选择器规则
  - `Server`：调整 `cy.server()` 默认参数
  - `config`：修改 Cypress 的 [配置选项](https://docs.cypress.io/guides/references/configuration.html)
  - `env`：管理自定义全局变量
  - `log`：配置 log 参数
- 辅助
  - `dom`：一组 dom 相关方法
    - 如 `Cypress.dom.isHidden($el)`
  - `isCy`：是否是 cy 对象
- 环境信息
  - `arch`：获取 CPU 架构，来源于 Node `os.arch()`
  - `browser`：获取浏览器信息
  - `platform`：获取操作系统名字
  - `spec`：当前测试文件信息
  - `version`：版本号

### 事件

事件绑定机制是 [Node Events](https://nodejs.org/api/events.html)，  
用法如：`Cypress.on`/`cy.on`

- 应用（页面）事件
  - `uncaught:exception`
  - `window:confirm`、`window:alert`、`window:before:load`、`window:load`、`window:before:unload`、`window:unload`
  - `url:changed`
- Cypress 事件
  - `fail`
  - `viewport:changed`
  - `scrolled`
  - `command:enqueued`、`command:start`、`command:end`、`command:retry`
  - `log:added`、`log:changed`
  - `test:before:run`、`test:after:run`

## Cypress 典型代码

查看上文中的 [实战链接](#%e5%ae%9e%e6%88%98) 及 [典型代码](#%e6%b5%8b%e8%af%95%e6%96%87%e4%bb%b6-%e5%85%b8%e5%9e%8b%e4%bb%a3%e7%a0%81)
