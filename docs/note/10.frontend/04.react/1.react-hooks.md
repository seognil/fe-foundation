---
title: React Hooks 学习指南
date: 2019-11-17 13:17:17
permalink: /frontend/react-hooks
categories:
  - 前端开发
  - 前端工具
tags:
  - react
---

# React Hooks 学习指南

## Hooks 简介

### 什么是 React Hooks

> Hooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

换句话说：只用函数 + Hooks 来完成组件编写。

Hooks 隐藏了 Class 写法中生命周期的概念，  
或者说 React 自己尽量帮你处理了生命周期。

### 为什么要用 Hooks

如果你喜欢写 FP 而不是 OOP 风格的代码，  
那么你可能早就开始用函数来写 Presentational Components 了。

但是函数组件有自己的局限性，  
而 Hooks 突破了函数组件的局限性，  
实现了一些 Class 组件才有的功能。

## 学习 Hooks

### 概览

- 耗时：从入门到熟悉需要大约 10~20 小时（个人估计）
- 难点：
  - 理解 FP 范式（并知道 Hooks 并不是纯 FP）
  - 理解 JS 执行原理
  - 探索最佳实践
- 工具：
  - [react@16.8+](https://www.npmjs.com/package/react)
  - `webpack/parcel/cli`

### 学习路线

- 前置学习
  - 理解 functional programming
    - side effect
  - [JavaScript 进阶指南](/frontend/javascript-advanced)
- 了解 React 基本概念
  - 理解 展示组件、容器组件 的区别
  - 学习 Context 的特性
- 学习 Hooks
  - 练习所有 React 自带的基本 Hooks API
  - 结合 TypeScript
  - 了解下 react-use（社区 Hooks）
  - 对比 Hooks 和 Class 写法的异同
- 实战
  - 敲点小型应用 Demo
  - 结合 redux/rxjs
- 进阶
  - 编写自己的 custom hooks
  - 阅读 Hooks 相关源码
- 迷思
  - useEffect 的作用和运用
  - 探索最佳实践

## 资料

### 我的学习代码

- [React - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/react)

### 自学教材

- [Hooks API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)
- [How to useContext in React? - RWieruch](https://www.robinwieruch.de/react-usecontext-hook)
- [【译】什么时候使用 useMemo 和 useCallback](https://jancat.github.io/post/2019/translation-usememo-and-usecallback/)
- [如何錯誤地使用 React hooks useCallback 來保存相同的 function instance](https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E9%8C%AF%E8%AA%A4%E5%9C%B0%E4%BD%BF%E7%94%A8-react-hooks-usecallback-%E4%BE%86%E4%BF%9D%E5%AD%98%E7%9B%B8%E5%90%8C%E7%9A%84-function-instance-7744984bb0a6)

### 实战

- [示例 - React](https://zh-hans.reactjs.org/community/examples.html)
- [react-use](https://github.com/streamich/react-use)

### 进阶

- [React Hooks in TypeScript](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)
- [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
- [useEffect vs. useLayoutEffect in plain, approachable language](https://blog.logrocket.com/useeffect-vs-uselayouteffect/)
- [精读《React Hooks 最佳实践》](https://zhuanlan.zhihu.com/p/81752821)
- [精读《怎么用 React Hooks 造轮子》](https://github.com/dt-fe/weekly/blob/v2/080.%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%80%8E%E4%B9%88%E7%94%A8%20React%20Hooks%20%E9%80%A0%E8%BD%AE%E5%AD%90%E3%80%8B.md)

### 扩展阅读

- [V8 将为 React hooks 改进数组解构的性能](https://zhuanlan.zhihu.com/p/49077183)

## Hooks 知识体系

### Hooks 主要概念

Hooks 主要是 `useXXX` 系列 API，  
以及实现 Hooks 机制的 React 内部代码（resolveDispatcher 等）。

- 常用 API
  - useContext
  - useState
  - useReducer
  - useRef
  - useEffect
  - useLayoutEffect
  - useCallback
  - useMemo

另外社区中还衍生出了更多 API：[react-use](https://github.com/streamich/react-use)

## Hooks 典型代码

### Hooks 大致用法

- useState
  ```javascript
  const Comp = () => {
    const [state, setState] = useState(initialState)
    const handler = (e) => setState(newState || prevState => nextState)
    return <div onClick={handler}>{state.myKey}</div>
  }
  ```
- useReducer
  ```javascript
  const Comp = () => {
    const [state, dispatch] = useReducer(
      reducer,
      initialState,
    );
    return (
      <div onClick={() => dispatch(action)}>
        {state.myKey}
      </div>
    );
  };
  ```
- useCallback
  ```javascript
  const Comp = () => {
    const sameFn = useCallback(fn, [byDeps]);
    return <div onClick={() => sameFn()}></div>;
  };
  ```
- useMemo
  ```javascript
  const Comp = () => {
    const sameResult = useMemo(fn, [byDeps]);
    return <div>{sameResult}</div>;
  };
  ```
- useContext
  ```javascript
  const MyContext = createContext(null);
  const Comp = () => {
    const color = useContext(MyContext);
    return <p style={{ color }}>Hello World</p>;
  };
  const App = () => (
    <MyContext.Provider value="green">
      <Comp />
    </MyContext.Provider>
  );
  ```
- useRef
  ```javascript
  const Comp = () => {
    const refer = useRef(null);
    return (
      <div
        ref={refer}
        onClick={() => refer.current.innerHTML}
      ></div>
    );
  };
  ```
- useEffect
  ```javascript
  const Comp = () => {
    const sideEffectFn = () => {
      myLogic();
      return cancelSideEffectFn();
    };
    useEffect(sideEffectFn, [byDeps]);
    return <div></div>;
  };
  ```
- useLayoutEffect
  ```javascript
  const Comp = () => {
    const sideEffectFn = () => {
      myDOMLogic();
      return cancelSideEffectFn();
    };
    useLayoutEffect(sideEffectFn, [byDeps]);
    return <div></div>;
  };
  ```
- useImperativeHandle
  ```javascript
  const ChildInput = forwardRef((props, parentRef) => {
    const realRef = useRef(null);
    useImperativeHandle(parentRef, () => realRef.current);
    return (
      <input type="text" name="child input" ref={realRef} />
    );
  });
  ```

## Hooks 相关

### 使用上的注意点

- 函数组件，在函数体中使用 Hooks API。
- 为了表现出清晰的逻辑，Hooks 最好在函数代码的顶层结构中使用。

### Hooks 大致原理

> 代码没有黑魔法

以 useState 为例，直接追踪代码关系（删减了部分细节代码）

```javascript
// in 'react'
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function resolveDispatcher() {
  return ReactCurrentDispatcher.current;
}

// in 'react-dom'
HooksDispatcherOnMount = {
  useState: function (initialState) {
    return mountState(initialState);
  },
};
HooksDispatcherOnUpdate = {
  useState: function (initialState) {
    return updateState(initialState);
  },
};
```

观察代码可以发现：  
`dispatcher` 是 React 提供和维护的一个公共对象，  
React 会在不同生命周期（`mount`、`update`）提供不同的 `dispatcher`，  
而不同的 `dispatcher` 包含不同的（相应的）处理方法。

函数组件代码中看上去调用了同一个 Hooks API，  
但实际上会在不同时期取到不同的方法，  
也就实现了以前 Class 写法中的生命周期的效果。

### Hooks 和 Class 的差异

Hooks 写法和之前的 Class 写法算是截然不同的范式。

Runtime 层面的直观差异是：

- Hooks 组件每次渲染时，函数内可能所有东西都是重新声明的。  
  （比如依赖 `setState` 的简单的 `onClickHandler`）
- Class 组件，`render()` 中的局部方法一般都指向原型上的同一个，不会重新声明。

这算是在内存和性能上的差异（注意不是好坏）。

根据这一状况，  
Hooks API 自带了一些简单的优化措施（如 第二参数）

### 第二参数和优化

- useEffect
- useCallback
- useMemo

以上方法都有第二个可选参数，用作依赖对比，目的是减少重复执行。  
但是，依赖对比也需要一定的计算开销（在 React 内部，至少也有十来行）。

所以理解 JS 执行原理并加以权衡，  
单行的简单 `onClickSetStateHandler` 可以不包裹到 `useCallback` 里。

可以只在以下情况使用 `useCallback`：

- 避免重复执行
  - 需要同一个函数（如 timer）
  - 缓存大开销的函数（如 fetch）

也可以根据团队标准全部使用 `useCallback`，降低心智负担。

### Hooks 的运用

随着 Hooks 的普及和社区的发展，  
函数组件能做的事情越来越多了，  
甚至可以尝试只使用函数组件来写整个应用。

对于大型前端软件来说，也可以采取以下方案：

- 直接由更专业的外部工具（如 redux、rxjs、ramda）  
  来处理复杂逻辑业务（如 sideEffect 实体、fetch 竞态、memo 计算）
- React 只负责渲染相关逻辑

这样也就不用太关心 Hooks 本身的优化技巧了。

需要根据实际情况灵活运用。
