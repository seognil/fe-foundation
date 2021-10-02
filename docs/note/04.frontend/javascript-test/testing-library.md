---
title: testing-library 学习指南
date: 2020-01-26 20:55:42
permalink: /frontend/testing-library
categories:
  - 前端开发
  - 前端工具
tags:
  - testing-library
---

# testing-library 学习指南

## testing-library 简介

### 什么是 testing-library

用于 DOM 和 UI 组件测试的一系列工具，  
主要 API 包含 DOM 查询，  
更可以和其他测试工具配合，用于更多场景：

- 测试工具
  - jest
  - cypress
- 框架
  - react
  - vue
  - svelte

UI 测试工具还有 Airbnb 的 [enzyme](https://airbnb.io/enzyme/)，侧重有所不同：

- enzyme 用于保证 React 组件的输入输出结构
- testing-library 的特性
  - 不面向具体组件代码进行测试
  - 面向最终 DOM 进行测试（Query）
  - 模拟用户的交互方式（`fireEvent`）
  - 所以也支持除了 React 以外的其他 UI 框架

### 为什么要用 testing-library

[Writing Better Tests with React Testing Library - Time to React - August 2019](https://www.youtube.com/watch?v=hFm0enk-qfM)

- 如果你需要 UI 测试
- 在 [2019 年 JavaScript 明星项目](https://risingstars.js.org/2019/zh#section-test-framework) 的测试分类中处于领先地位
- `create-react-app` 已经使用 `@testing-library/react`，  
  以及 React 官方文档中也推荐使它用

## 学习 testing-library

### 概览

- 耗时：
  - 到官网查看和练习所有主要 API，3~6 小时
  - 实战 4~12 小时
- 难点：该库比较重视无障碍的概念（`A11y`、`ARIA`），或需要了解
- 工具：[`@testing-library` 系列](https://www.npmjs.com/search?q=%40testing-library)

### 学习路线

- 前置学习
  - （[TypeScript](/cs/typescript-language-basic)）
  - （[Jest](/frontend/jest)）
  - （React 测试）
- 学习 testing-library
  - 练习文档中 DOM 章节所有主要 API，了解异同
  - 了解衍生库的 API，与 Jest、React 配合
  - 了解 [A11y](https://developer.mozilla.org/en-US/docs/Web/Accessibility) 和 [ARIA](https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion) 的概念
- 实战
  - 仿照文档中的 Recipe 章节进行练习
  - 为业务中的 UI 组件编写测试

## 资料

### 自学教材

- 概览
  - [通过写测试用例学习前端知识](https://www.bilibili.com/video/av44802599/)  
    12 分钟，通过编写测试学习其他前端知识
  - [Writing Better Tests with React Testing Library - Time to React - August 2019](https://www.youtube.com/watch?v=hFm0enk-qfM)  
    16 分钟，介绍基本用法和理念，和 [enzyme](https://airbnb.io/enzyme/) 的对比
- 我写的 demo：[testing-library - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/testing-library)
- [官方文档](https://testing-library.com/)
  - API
    - [DOM](https://testing-library.com/docs/dom-testing-library/cheatsheet)
    - [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)
    - [user-event](https://testing-library.com/docs/ecosystem-user-event)
    - [React](https://testing-library.com/docs/react-testing-library/api)
  - 实战
    - [Recipes](https://testing-library.com/docs/example-codesandbox)

### A11y 和 ARIA

- [Accessibility - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WAI-ARIA Roles - W3C](https://www.w3.org/TR/wai-aria-1.2/#introroles)
- [ARIA Query - GitHub](https://github.com/A11yance/aria-query#elements-to-roles)

## testing-library 知识体系

### package

- `@testing-library/dom`
- 部分衍生库，可搭配使用
  - `@testing-library/jest-dom`
  - `@testing-library/react`
  - `@testing-library/user-event`

### DOM API

是主要的 API，用于查找元素

- [query API 类型声明](https://github.com/testing-library/dom-testing-library/blob/main/types/queries.d.ts)
- [查找参数 类型声明](https://github.com/testing-library/dom-testing-library/blob/main/types/matches.d.ts)

* TextMatch 类型声明（query 查找参数）
  - Matcher
    - 字符串
    - 正则
    - `(content: string, element: HTMLElement) => boolean`
  - MatcherOptions
    - `exact = true`：严格检查，false 时支持子字符串、不区分大小写
    - `trim = true`：首尾去空格
    - `collapseWhitespace = true`：去除全部多余空格
    - `normalizer`：自定义预处理函数

- [**Query 查询**](https://testing-library.com/docs/guide-which-query)
  - API 前缀
    - Single（返回单个或报错）
      - `getBy`
      - `findBy`：异步化（Promise）
      - `queryBy`
    - All（返回数组）
      - `getAllBy`
      - `findAllBy`
      - `queryAllBy`
  - API 后缀
    - 主要
      - `ByLabelText`：用于表单
      - `ByPlaceholderText`：用于表单
      - `ByText`：查询 `TextNode`
      - `ByDisplayValue`：输入框等当前值
    - 语义
      - `ByAltText`：img 的 alt 属性
      - `ByTitle`：title 属性或元素
      - `ByRole`：ARIA role
    - 显式测试标签
      - `ByTestId`：查找 `data-testid` 属性
  - `screen`：用 `within` 绑定了 `document.body`
- **`fireEvent`**（两种写法）
  - `fireEvent(element, new MouseEvent('click', options?))`
  - `fireEvent.click(element, options?)`
- **`wait`** 系列（Promise，轮询或响应式等待 dom 变更）
  - `wait`
  - `waitForElement`
  - `waitForDomChange`
  - `waitForElementToBeRemoved`
- 其他
  - `within`：包装 element 参数的函数
  - `getNodeText`：得到 `value` 或 `textContent`
  - `getRoles`：将 HTML 根据 ARIA role 进行解析
  - `isInaccessible`：判断不可访问性，诸如 `aria-hidden="true"`
  - `prettyDOM`：HTML 格式化
  - `logRoles`：`getRoles` 的 log 版
- `configure`
  - `defaultHidden`：修改 `ByRole` 的 `hidden` 默认值
  - `testIdAttribute`：修改 `ByTestId` 的 `data-testid` 默认值
- `buildQueries`：封装自定义查询方法

### 和 jest-dom 一起

扩展 jest 的 `expect` 方法，新增了一些针对 dom 的断言函数

- [API 列表](https://github.com/testing-library/jest-dom#table-of-contents)
  - 表单和输入
    - `toBeDisabled`：判断属性（`button`、`input`、`select` 等）
    - `toBeEnabled`
    - `toBeInvalid`：根据 `aria-invalid` 属性规则
    - `toBeValid`
    - `toBeRequired`：根据属性 `required` 或 `aria-required`
    - `toBeChecked`：`checkbox`、`radio`
    - `toHaveValue`：`checkbox`、`radio`、`select`
    - `toHaveFormValues`：表单当前数据
  - 元素性质
    - `toBeVisible`：可见性（综合判断）
    - `toBeInTheDocument`
    - `toHaveAttribute`
    - `toHaveClass`
    - `toHaveFocus`
    - `toHaveStyle`
  - 元素内容
    - `toBeEmpty`：不包含任何内容（及空结构）
    - `toContainElement`
    - `toContainHTML`
    - `toHaveTextContent`

### 和 user-event 一起

相比 `fireEvent`，扩展了几个 API

- [API 列表](https://github.com/testing-library/user-event#api)
  - `click(element)`：单击
  - `dblClick(element)`：双击
  - `async type(element, text, [options])`：输入文本
  - `selectOptions(element, values)`：表单选择
  - `tab({shift, focusTrap})`：模拟 tab 键（切换 focus）

### 和 react 一起

`@testing-library/react` == `@testing-library/dom` + 三个新 API

- [API 列表](https://testing-library.com/docs/react-testing-library/api)
  - `render`：基于了 ReactDOM 的 `render`，扩展了 `getBy` 等方法
  - `cleanup`：清除内部的渲染树
  - `act`：包装了 [React 的 act](https://reactjs.org/docs/testing-recipes.html#act)（保证渲染、事件全部完成以便执行后续测试）

## testing-library 典型代码

参考 [testing-library - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/testing-library)

### Query 基本

[`getBy`、`queryBy`、`findBy` 之间的异同](https://testing-library.com/docs/dom-testing-library/cheatsheet)

```typescript
// * ------------------------------------------------ Query Basic

test('Query Basic', () => {
  const container = createHTML(
    `<span> Hello World! </span>`,
  );

  // * ---------------- getBy

  // getByText(dom, 'Hello'); // ❌ => Error, unable to find
  getByText(container, 'Hello World!'); // ✅ => HTMLSpanElement {}
  getByText(container, /hello/i); // ✅
  getByText(container, 'Hello', { exact: false }); // ✅

  // * MatcherFunction
  getByText(container, (content, element) => {
    return (
      content.startsWith('Hello') &&
      element.tagName.toLowerCase() === 'span'
    );
  }); // ✅

  // * ---------------- queryBy

  queryByText(container, 'Hello'); // ⭕ => null
  queryByText(container, 'Hello World!'); // ✅

  // * ---------------- findBy (Promise)

  findByText(container, /hello/i).then((e) => {
    // console.log(prettyDOM(e));
  }); // ✅ =>
  // `<span>
  //   Hello World!
  // </span>`
});
```

### Query 部分 API

```typescript
// * ------------------------------------------------ Query API

test('By***', () => {
  const container = createHTML(`
    <form>
      <label for="username-input">Username</label>
      <input id="username-input" />
    </form>
    `);
  getByText(container, 'Username'); // ✅ => HTMLLabelElement
  getByLabelText(container, 'Username'); // ✅ => HTMLInputElement

  container.querySelector('input').value = 'Learn Test';
  getByDisplayValue(container, 'Learn Test'); // ✅
});

test('ByTestId', () => {
  const container = createHTML(`
    <div>
      <span data-testid='notThis'> Hello World! </span>
      <span data-testid='target'> Hello World! </span>
    </div>
  `);

  getByTestId(container, 'target'); // ✅
});

// * ------------------------------------------------ within

test('within', () => {
  const container = createHTML(
    `<span> Hello World! </span>`,
  );
  const { getByText } = within(container);
  getByText(/Hello/); // ✅
});

// * ------------------------------------------------ event

test('fireEvent', () => {
  const container = createHTML(
    `<button onClick="console.log('fire')"></button>`,
  );

  fireEvent(container, new MouseEvent('click'));
  fireEvent.click(container);
});
```

### wait 系列（异步）

```typescript
// * ------------------------------------------------ wait

test('wait', async () => {
  const container = createHTML(
    `<span> Hello World! </span>`,
  );

  const asyncRender = (fn) => setTimeout(fn, 0);
  asyncRender(() => (container.textContent = 'Learn Test'));

  await wait(() => getByText(container, 'Learn Test'));
  getByText(container, 'Learn Test'); // ✅ => HTMLSpanElement
});

test('waitForElement', async () => {
  const container = createHTML(`<div></div>`);

  const asyncRender = (fn) => setTimeout(fn, 0);
  asyncRender(() =>
    container.appendChild(createHTML(`<span>Hello</span>`)),
  );

  const dom = await waitForElement(
    () => getByText(container, 'Hello'),
    { container },
  ); // ✅ => HTMLSpanElement
});

test('waitForDomChange', async () => {
  const container = createHTML(`<div></div>`);

  const asyncRender = (fn) => setTimeout(fn, 0);
  asyncRender(() =>
    container.appendChild(createHTML(`<span>Hello</span>`)),
  );

  await waitForDomChange({ container });
  getByText(container, 'Hello'); // ✅ => HTMLSpanElement
});
```

## testing-library 相关

### 和 TypeScript 一起

安装 `testing-library` 系列库会自动安装 `@types` 声明文件，  
以便更好地支持 TypeScript 自动完成功能

[Make it so the TypeScript definitions work automatically without config #123](https://github.com/testing-library/jest-dom/issues/123)

如 `@testing-library/jest-dom` 的依赖中包含 `@types/testing-library__jest-dom`

### 包名

很多视频中会提到 `react-testing-library`，这个是之前的名字，  
现已更名为 `@testing-library/react`

同理，其他包也都更名到 `@testing-library/xxx`

如 `dom-testing-library` => `@testing-library/dom`
