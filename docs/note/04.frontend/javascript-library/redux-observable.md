---
title: redux-observable 学习指南
date: 2019-11-27 18:16:27
permalink: /frontend/redux-observable
categories:
  - 前端开发
  - 前端工具
tags:
  - react
  - redux
  - rxjs
---

# redux-observable 学习指南

## redux-observable 简介

### 什么是 redux-observable

`redux-observable === redux + rxjs`

是一个胶水库，包含几个胶水 API 和新的 Interface，  
作用是将 Redux 中的朴素同步 dispatch 事件转化成 RxJS 事件流。

本身不提供额外的 Redux 功能或 RxJS 操作符。  
可以使用两个库原有的功能（需要引入）。

### 为什么要用 redux-observable

当你要用 Redux 和 RxJS。

## 学习 redux-observable

### 概览

- 耗时：（在掌握 Redux 和 RxJS 的前提下）4H （个人估计）
- 难点：（库本身）暂无
- 工具：
  - [redux-observable](https://www.npmjs.com/package/redux-observable)
  - `webpack/parcel/cli`

### 学习路线

- 前置学习
  - [Redux 学习指南](/frontend/redux)
  - [RxJS 学习指南](/frontend/rxjs)
  - [TypeScript 学习指南](/cs/typescript-language-basic)
- 学习 redux-observable
  - 练习使用所有 API 和 Interface
- 在业务中实战

## 资料

### 自学教材

<!-- - [简介 - redux-observable](https://redux-observable-cn.js.org/) -->

- [Introduction - redux-observable](https://redux-observable.js.org/)

### 进阶

- [如何实现一个 redux-observable](http://yoyoyohamapi.me/2018/08/21/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA_redux-observable/)

## redux-observable 知识体系

### redux-observable 核心概念

- interface
  - **Epic**: `(action$: Observable<Action>, state$: StateObservable<State>): Observable<Action>`
  - **EpicMiddleware**: `{ run: (Epic) => void }`
  - **StateObservable** `<State>`
- API
  - **ofType** `('myActionType')`  
    等价于 `filter(action => action.type === 'myActionType')`
  - **createEpicMiddleware** () => EpicMiddleware
  - **combineEpics** `(...Epic[]) => Epic`

### Epic

Epic 是 `redux-observable` 的核心概念，用于把 `dispatch(action)` 映射成 RxJS 流。

当 `store.dispatch(action)` 时，立即进行原始 `dispatch`（Redux 的 reducer/state 环节），  
之后将 `action` 映射成 Epic 流，流触发 `dispatch(mappedAction)`。

### createEpicMiddleware

`redux-observable` 通过中间件进行功能实现。

以下代码必须按顺序进行。

```javascript
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  myReducer,
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(pingEpic);
```

## redux-observable 典型代码

### redux-observable

```typescript
// ts-node

import {
  AnyAction,
  applyMiddleware,
  createStore,
} from 'redux';
import {
  createEpicMiddleware,
  EpicMiddleware,
  Epic,
  ofType,
} from 'redux-observable';
import { delay, filter, mapTo } from 'rxjs/operators';

const PING = 'PING';
const PONG = 'PONG';

const pingAction = { type: PING };
const pongAction = { type: PONG };

// * ----------------

const pingEpic: Epic = (action$) =>
  action$.pipe(
    ofType(PING),
    // 等价于 filter((action: AnyAction) => action.type === PING),
    delay(500),
    mapTo(pongAction),
  );

const pingReducer = (state = PING, { type }) =>
  type === PING ? PING : type === PONG ? PONG : state;

const epicMiddleware: EpicMiddleware<AnyAction> =
  createEpicMiddleware();
const store = createStore(
  pingReducer,
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(pingEpic);

// * ----------------

const render = () =>
  console.log(
    'render',
    `${Date.now()}`.slice(-5),
    store.getState(),
  );

store.subscribe(render);

setTimeout(() => store.dispatch(pingAction), 0);
setTimeout(() => store.dispatch(pongAction), 2000);
```

### Epic 等价

Epic 的第二参数可以用于取值 `state$.value`  
逻辑等价于 `withLatestFrom(state$) => [action, state]`

### ofType 等价

```javascript
ofType(TYPE);
```

```javascript
filter((action) => action.type === TYPE);
```

### combineEpics 等价

```javascript
import { combineEpics } from 'redux-observable';
const rootEpic = combineEpics(aEpic, bEpic);
```

```javascript
import { merge } from 'rxjs';
const rootEpic = (action$, state$) =>
  merge(aEpic(action$, state$), bEpic(action$, state$));
```
