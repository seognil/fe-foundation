# Redux 学习指南

## Redux 简介

### 什么是 Redux

Redux 一种用于 JS 应用的状态管理工具。  
可以直接使用，也可以搭配其他工具（比如 React）

Redux 的诞生：`redux == reducer 方法 + flux 架构`  
所以它的核心理念是：纯函数 + 单向数据流

### 什么是 react-redux

Redux 可以和 React 搭配使用。

`react-redux` 是用于连接 React 和 Redux 的库，  
用于简化代码，它包含了几个胶水 API 。

### 为什么要用 Redux

- Model Driven View （数据驱动）
  - 分离数据和视图
    - 业务逻辑清晰化，降低代码耦合度和复杂度
- （跨平台/易测试）

## 学习 Redux

### 概览

- 耗时：
  - 从入门到熟悉 Redux 模式大致需要 15~40 小时（个人估计）
  - 简单了解 redux 衍生生态需要大致需要 2~5 小时（个人估计）
- 难点：
  - 理解 FP 和 Redux 理念
  - 设计出合理的数据结构和数据流
  - 探索不同业务下的设计，全局状态和局部状态如何管理和划分
- 工具：
  - [redux](https://www.npmjs.com/package/redux)
  - [react-redux](https://www.npmjs.com/package/react-redux)
  - `webpack/parcel/cli`

### 学习路线

- 前置基础
  - 理解 FP 编程范式
  - （学习 React）
  - （学习 TypeScript）
- 学习 Redux
  - `redux`
    - `createStore` & `Store`
    - enhancer & middleware
      - （`react-logger`）
      - （`redux-thunk`）
  - `react-redux`
    - `Provider` & `connect`
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
  - 整个应用只有一个 store，那么如何设计大型应用的数据流。

## 资料

### 自学教材

- [What is Redux?](https://www.youtube.com/watch?v=np8A_aW7Pew)
- [Redux 中文文档](https://cn.redux.js.org/)
- [Getting Started with Redux - Redux](https://redux.js.org/introduction/getting-started)
- [Redux Tutorial by Dan Abramov on egghead.io](https://egghead.io/courses/getting-started-with-redux)
- [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

### 实战

- [Recipes - Redux](https://redux.js.org/recipes/recipe-index)

## Redux 知识体系

### Redux 的三个原则

- 整个 App 只有一个 store（便于维护）
- state （本身）是只读的
  - 变更只通过 dispatch(action) **替换**旧的 state 完成
- reducer 是纯函数

### Redux & react-redux API

- redux
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
- react-redux
  - **Provider**
    - `<Provider store={store}> <App /> </Provider>`
  - **connect** (mapStateToProps?, mapDispatchToProps?)
    - mapStateToProps: `(state, ownProps?) => Object`
    - mapDispatchToProps: `Object | (dispatch, ownProps?) => Object`

## Redux 典型代码

### Redux

```javascript
// Node.js

import { createStore } from 'redux';

const reducer = (state = 0, { type, payload = 1 }) =>
  state + (type === 'INCREMENT' ? payload : type === 'DECREMENT' ? -payload : 0);

const store = createStore(reducer);

const observer = () => console.log(store.getState());

observer();

store.subscribe(observer);
store.dispatch({ type: 'INCREMENT', payload: 7 });
store.dispatch({ type: 'DECREMENT' });
```

### react-redux

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

const reducer = (state, { type }) => (type === 'add' ? state + 1 : state);
const store = createStore(reducer, 123);

let App = ({ value, clicker }) => <button onClick={clicker}>count: {value}</button>;

App = connect(
  (state) => ({ value: state }),
  (dispatch) => ({ clicker: () => dispatch({ type: 'add' }) }),
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
```

### redux-thunk & redux-logger

```typescript
// ts-node

import { createStore, applyMiddleware, Dispatch } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state: number, { type }) => (type === 'add' ? state + 1 : state);
const store = createStore(reducer, 123, applyMiddleware<Dispatch<any>>(thunk, logger));

store.subscribe(console.log);

const syncAction = { type: 'add' };
store.dispatch(syncAction);

const asyncAction = (dispatch) => setTimeout(() => dispatch({ type: 'add' }), 1000);
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

React 有个 `Context/Provider` 的功能用来实现全局数据访问，  
react-redux 利用了 Context 来存放 Store 并封装了 API，  
从而实现任意深度的组件都能进行 Redux 操作。
