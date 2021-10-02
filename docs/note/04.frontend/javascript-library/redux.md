---
title: Redux 学习指南
date: 2019-11-26 15:24:23
permalink: /frontend/redux
categories:
  - 前端开发
  - 前端工具
tags:
  - redux
---

# Redux 学习指南

## Redux 简介

### 什么是 Redux

Redux 一种用于 JS 应用的状态管理工具。可以直接使用，也可以借助响应式编程的范式，搭配视图层（比如 React）或其他逻辑。

Redux 的诞生：`redux == reducer 方法 + flux 架构`

所以它的核心理念是：纯函数 + 单向数据流

### 什么是 react-redux

Redux 可以和 React 搭配使用。

基本方式是利用 React 的 `Context`/`Provider` 对任意组件直接进行数据传递。`react-redux` 整合了这一常见需求，它包含了几个胶水 API，能够简化业务代码。将 Redux Store 和 React 组件进行连接后，当数据变更时，将自动进行组件视图的更新。

### 什么是 redux-react-hook

类似 `react-redux`，但 `redux-react-hook` 采用了 React Hooks 风格的 API，使用上更简单灵活。

### 为什么要用 Redux

- 使用数据驱动的编程模型
- 当你要做一个大型应用，想要拆分数据逻辑和视图层的代码
- （并且你用的是 React）

这时候你可以使用 Redux 集中管理应用的数据

## 学习 Redux

### 概览

- 耗时：
  - 从入门到熟悉 Redux 模式，15~40 小时
  - 简单了解 Redux 衍生生态需要，2~5 小时
  - 练习 Redux + React，2~5 小时
- 难点：
  - 理解 FP 和 Redux 理念
  - 设计出合理的数据结构和数据流
  - 探索不同业务下的设计，全局状态和局部状态如何管理和划分
- 工具：
  - [redux](https://www.npmjs.com/package/redux)
  - [react-redux](https://www.npmjs.com/package/react-redux)
  - [redux-react-hook](https://www.npmjs.com/package/redux-react-hook)
  - `webpack/parcel/cli`

### 学习路线

- 前置学习
  - [函数式编程 入门指南](/cs/introduction-to-functional-programming)
  - （[React 学习指南](/frontend/react-hooks)）
  - （[TypeScript 学习指南](/cs/typescript-language-basic)）
- 学习 Redux
  - `redux`
    - `createStore` & `Store`
    - enhancer & middleware
      - （`react-logger`）
      - （`redux-thunk`）
  - `react-redux`
    - `Provider`
    - `connect`
    - `useSelector`、`useDispatch`、`useStore`
  - `redux-react-hook`
    - `StoreContext`、`useMappedState`、`useDispatch`
- 实战
  - 掌握基本用法
  - 异步操作，设计数据流
  - 设计 state 的数据层次（基于项目）
- 进阶
  - 亲自实现一下 Redux 源码
  - 学习周边生态
    - `redux-saga`
    - `dva`
    - `redux-observable`
- 迷思
  - 如果整个应用只能有一个 Store，那么如何设计和管理大型应用的数据。

## 资料

### 自学教材

- [What is Redux?](https://www.youtube.com/watch?v=np8A_aW7Pew)
- [Redux 中文文档](https://cn.redux.js.org/)
- [Getting Started with Redux - Redux](https://redux.js.org/introduction/getting-started)
- [Hooks - React Redux](https://react-redux.js.org/next/api/hooks)
- [Redux Tutorial by Dan Abramov on egghead.io](https://egghead.io/courses/getting-started-with-redux)
- [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

### 实战

- [Recipes - Redux](https://redux.js.org/recipes/recipe-index)
- Learn By Doing
  - [redux](https://github.com/seognil-study/learn-by-doing/tree/master/redux)
  - [react-redux](https://github.com/seognil-study/learn-by-doing/tree/master/react-redux)
  - [redux-react-hook](https://github.com/seognil-study/learn-by-doing/tree/master/redux-react-hook)

## Redux 知识体系

### Redux 的三个原则

- 整个 App 只有一个 Store（便于维护和实施）
- State （本身）是只读的
  - 变更只通过 Dispatch(Action) **替换**旧的 State 完成
- Reducer 是纯函数

### API

#### redux

- **createStore** `(Reducer, initState?, enhancer?) => Store`
  - Reducer: `(State, Action) => State`
    - `Action: {type, ...[payload]?}`
  - **combineReducers** `(ReducersMapObject<State, Action>) => Reducer<State, Action>`
  - **applyMiddleware** `(...[middlewares]?) => createStore()`
    - middleware: `store => next => action => next(action)`
- **compose** === Ramda.compose
- **bindActionCreators** `(actionCreators, Dispatch) => dispatchers`
- Store
  - **getState**: `() => State`
  - **dispatch** `(action) => void`
  - **subscribe** `(listener) => unsubscriber`

#### react-redux

- **Provider**
  - `<Provider store={store}> <App /> </Provider>`
- **connect** (mapStateToProps?, mapDispatchToProps?)
  - mapStateToProps: `(state, ownProps?) => Object`
  - mapDispatchToProps: `actionCreators | (dispatch, ownProps?) => Object`
- **useSelector** `(selector: Function, equalityFn?: Function) => AnyData`
- **useDispatch** `() => Dispatch`
- **useStore** `() => Store`

#### redux-react-hook

- **create** `<TState, TAction, TStore>() => {/* 返回下面三个 */}`
  - **StoreContext** `React.Context<TStore | null>`
  - **useMappedState** `<TResult>(mapState: (state: TState) => TResult) => TResult`
  - **useDispatch** `() => Dispatch<TAction>`

## Redux 典型代码

### Redux

```javascript
// Node.js

import { createStore } from 'redux';

const reducer = (state = 0, { type, payload = 1 }) =>
  state +
  (type === 'INCREMENT'
    ? payload
    : type === 'DECREMENT'
    ? -payload
    : 0);

const store = createStore(reducer);

const observer = () => console.log(store.getState());

observer();

store.subscribe(observer);
store.dispatch({ type: 'INCREMENT', payload: 7 });
store.dispatch({ type: 'DECREMENT' });
```

### react-redux (connect)

connect 的写法

`parcel index.html`

```html
<!-- index.html -->

<div id="app"></div>
<script src="script.tsx"></script>
```

```javascript
// script.tsx

import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const reducer = (state, { type }) =>
  type === 'add' ? state + 1 : state;
const store = createStore(reducer, 123);

const App = ({ value, clicker }) => (
  <button onClick={clicker}>count: {value}</button>
);

const ConnectedApp = connect(
  (state) => ({ value: state }),
  (dispatch) => ({
    clicker: () => dispatch({ type: 'add' }),
  }),
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#app'),
);
```

### react-redux (hooks)

hooks 的写法，注意到写法上的区别，组件的 props 部分能够更干净。

`parcel index.html`

```html
<!-- index.html -->

<div id="app"></div>
<script src="script.tsx"></script>
```

```javascript
// script.tsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  Provider,
  connect,
  useSelector,
  useDispatch,
} from 'react-redux';

const reducer = (state, { type }) =>
  type === 'add' ? state + 1 : state;
const store = createStore(reducer, 123);

const App = () => {
  const value = useSelector((state) => state);
  const dispatch = useDispatch();
  const clicker = () => dispatch({ type: 'add' });
  return <button onClick={clicker}>count: {value}</button>;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
```

### redux-react-hook

注意到，`redux-react-hook` 和 `react-redux` 的主要区别在于 API，其实原理都是类似的，都是对 React hooks 中 `useReducer`、`useMemo`、`useContext` 等 API 的封装。

它和 `react-redux` 的 hooks 版区别在于，`redux-react-hook` 中的函数是生成的，而不是通用函数，TS 数据类型可以绑定而不用每次都重新写，这样使用 TS 时会更方便。理解了这一点，那么也可以基于 `react-redux` 进行简单的二次封装，来更好地支持 TS。

`parcel index.html`

```html
<!-- index.html -->

<div id="app"></div>
<script src="script.tsx"></script>
```

```javascript
// script.tsx

import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import {
  useDispatch,
  useMappedState,
  StoreContext,
} from 'redux-react-hook';

const reducer = (state, { type }) =>
  type === 'add' ? state + 1 : state;
const store = createStore(reducer, 123);

const App = () => {
  const value = useMappedState((state) => state);
  const dispatch = useDispatch();
  const clicker = () => dispatch({ type: 'add' });
  return <button onClick={clicker}>count: {value}</button>;
};

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.querySelector('#app'),
);
```

直接引入的 `useDispatch, useMappedState, StoreContext` 三个 API 是库内预先 `create` 好的，如果使用场景不复杂的话可以直接使用。

但是更好的方式是自己 `create`，这样的好处是可以自行添加 TypeScript 类型声明，让代码表达性更强。

```tsx
import { create } from 'redux-react-hook';

const { useDispatch, useMappedState, StoreContext } =
  create<TState, TAction, TStore>();
```

### redux-thunk & redux-logger

```typescript
// ts-node

import {
  createStore,
  applyMiddleware,
  Dispatch,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state: number, { type }) =>
  type === 'add' ? state + 1 : state;
const store = createStore(
  reducer,
  123,
  applyMiddleware<Dispatch<any>>(thunk, logger),
);

store.subscribe(console.log);

const syncAction = { type: 'add' };
store.dispatch(syncAction);

const asyncAction = (dispatch) =>
  setTimeout(() => dispatch({ type: 'add' }), 1000);
store.dispatch(asyncAction);
```

## Redux 相关

### Redux 和 redux-XXX 第三方库

Redux 本身的职责比较单一和明确，  
为了实现更多功能，社区中出现了很多第三方库。

比如：

- [redux-logger](https://github.com/LogRocket/redux-logger) （简单 log）
- [redux-thunk](https://github.com/reduxjs/redux-thunk) （简单支持异步 Action 的中间层）
- [redux-saga](https://github.com/redux-saga/redux-saga) （更强大的副作用（异步）数据流操作库）
- [dva](https://github.com/dvajs/dva) （二次封装简化了 redux-saga 的数据流库）
- [redux-observable](https://github.com/redux-observable/redux-observable) （redux + rxjs）
- [redux-devtools](https://github.com/reduxjs/redux-devtools) （调试面板）
- [redux-persist](https://github.com/rt2zz/redux-persist) （数据持久化）
- [react-undo](https://github.com/omnidan/redux-undo) （undo、redo）
- [redux-actions](https://github.com/redux-utilities/redux-actions) （简化 action 写法的生成器）
- [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) （用于编写测试的库）

### Redux 和 TypeScript

Redux 源码是 TS 写的，  
但在使用上还无法完美地开箱即用，比如：

- `redux-thunk` 支持 `dispatch(Function)`，但不符合 Action 接口 `{ type: any; }`，需要手动修正。
- `combineReducers` 无法 _自动_ 合并 Action 类型，如果需要严格限制业务中写 Action，需要手动处理。

### react-redux 是怎么实现的

React 一组 `Context/Provider` 的功能用来实现全局数据访问，  
react-redux 利用了 Context 来存放 Store 并封装了 API，  
从而实现任意深度的组件都能读写 Store。
