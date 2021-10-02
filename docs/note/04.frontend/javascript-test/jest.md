---
title: Jest 学习指南
date: 2020-01-21 16:43:12
permalink: /frontend/jest
categories:
  - 前端开发
  - 前端工具
tags:
  - jest
---

# Jest 学习指南

## Jest 简介

### 什么是 Jest

> Jest 是一个令人愉快的 JavaScript 测试框架，专注于简洁明快。  
> 他适用但不局限于使用以下技术的项目：Babel, TypeScript, Node, React, Angular, Vue

Jest 本体主要专注于单元测试

### 为什么要使用 Jest

对于代码的类型正确性检查，我们可以借助 TypeScript，不需要通过 Jest，  
而对于代码实现的具体业务逻辑，我们可以使用 Jest 进行测试和保证。

Jest 包括一些方便的特性：

- 零配置
- 快照功能
- Mock 功能
- 代码覆盖率
- 并行化

在 [2018 年 JavaScript 明星项目](https://risingstars.js.org/2018/zh/#section-test-framework) 的排名中，Jest 位于测试分类的第一名，  
而在 [2019 年 JavaScript 明星项目](https://risingstars.js.org/2019/zh#section-test-framework) 中也位于第三  
（前两名的 [Puppeteer](https://pptr.dev/) 和 [cypress](https://www.cypress.io/) 是 E2E 测试工具）

可见 Jest 是一个备受好评的测试工具

JS 生态中有很多类似的单元测试框架，  
Jest 相比 Mocha 有更为清晰的说明文档，  
并且和 AVA 一样支持并行测试提高效率。

配合衍生工具或其他类型的测试工具，  
可以全面覆盖前端开发中的测试环节。

## 学习使用 Jest

### 概览

- 耗时：从入门到熟悉基本使用及 API，6~16 小时
- 难点：理解 Jest 的一些特性（快照、Timer 等）
- 工具：[jest](https://jestjs.io/en/)

### 学习路线

- 前置学习
  - [npm](/frontend/introduction-to-npm)、[模块化](/frontend/javascript-modules)
  - [JavaScript](/frontend/javascript-foundation)
  - （[TypeScript](/cs/typescript-language-basic)）
- 学习 Jest
  - 如何使用 Jest
  - babel 支持及配置文件
  - 练习文档中的所有 `expect` API
  - Mock 方法
- 实战
  - 为项目的业务逻辑代码编写单元测试
- 进阶
  - Jest 概念
    - 快照
    - Timer
    - Clear
    - 生命周期钩子
    - each

## 资料

### 自学教材

- [Jest](https://jestjs.io/en/)：官方文档
- [Jest - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/jest)：我搭建的一个 Jest 基本使用环境

## Jest 知识体系

### Jest 运行配置

- 运行选项
  - [Jest CLI Options](https://jestjs.io/docs/en/cli)
- `jest.config.js` 文件
  - [Configuring Jest](https://jestjs.io/docs/en/configuration)
- 搭配 `babel` 支持 `ESNext`、`TypeScript` 等扩展语法
  - [Jest - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/jest)

### Jest 基本 API

- [全局 API](https://jestjs.io/docs/en/api)
  - 基本测试 API
    - `describe`、`test`、`expect`
  - 特化
    - `.each(table)(name, fn, timeout)`
    - `.only(name, fn)`
    - `.skip(name, fn)`
    - `test.todo(name)`
  - 生命周期钩子
    - `afterAll`、`afterEach`、`beforeAll`、`beforeEach`
- [`expect` API](https://jestjs.io/docs/en/expect)
  - 辅助
    - 元检查器
      - `expect.assertions(number)`：`test` 内必须有几次检查
      - `expect.hasAssertions()`：`test` 内必须有检查
    - 静态对比对象
      - `expect.anything()`：任意值
      - `expect.any(constructor)`：任意具体类型
      - 检查器的静态版
        - `expect.arrayContaining(array)`：数组子集
        - `expect.objectContaining(object)`
        - `expect.stringContaining(string)`
        - `expect.stringMatching(string | regexp)`
    - 扩展
      - `expect.extend(matchers)`：自定义编写的检查器
    - 包装器
      - `.not`：取反
      - `.resolves`、`.rejects`：支持 `Promise`/`async/await`
  - 检查器
    - 相等性
      - `.toBe(value)`：检查规则为 `===` + `Object.is`
    - 对象
      - 类似 `toBe`，支持对象的递归检查
        - `.toEqual(value)`：递归对比对象字段（鸭式辩型）
        - `.toStrictEqual(value)`：`toEqual` + 对比显式和隐式 `undefined`
        - `.toMatchObject(object)`：`toEqual` + 支持不完整对比
      - 其他
        - `.toHaveProperty(keyPath, value?)`：对象字段检查
        - `.toBeInstanceOf(Class)`：`instanceof`
    - 数字
      - `.toBeGreaterThan(number)`
      - `.toBeGreaterThanOrEqual(number)`
      - `.toBeLessThan(number)`
      - `.toBeLessThanOrEqual(number)`
      - `.toBeCloseTo(number, numDigits?)`：精度近似，解决 IEEE754 问题
      - `.toBeNaN()`：值是 `NaN`，`Number.isNaN()`
    - 字符串/数组
      - `.toMatch(regexpOrString)`：字符串的 `match`
      - `.toContain(item)`：字符串子串，数组项（严格对比）
      - `.toContainEqual(item)`：数组子集（当数组项是对象时使用 Equal 对比）
      - `.toHaveLength(number)`：`.length`
    - 函数（mock 函数的调用检查）
      - `.toHaveBeenCalled()`
      - `.toHaveBeenCalledTimes(number)`
      - `.toHaveBeenCalledWith(arg1, arg2, ...)`
      - `.toHaveBeenLastCalledWith(arg1, arg2, ...)`
      - `.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`
      - `.toHaveReturned()`
      - `.toHaveReturnedTimes(number)`
      - `.toHaveReturnedWith(value)`
      - `.toHaveLastReturnedWith(value)`
      - `.toHaveNthReturnedWith(nthCall, value)`
      - `.toThrow(error?)`：被检查函数应该报错
    - Nullish
      - `.toBeUndefined()`：值是 `undefined` （显式或隐式）
      - `.toBeDefined()`：任意非 `undefined` 值（包括 null）
      - `.toBeNull()`：值是 `null`
      - `.toBeFalsy()`：假值，包括 `0`/`""`/`undefined` 等隐式假值
      - `.toBeTruthy()`：真值，非假值的其他所有值
- Mock（模拟函数相关 API）
  - [函数 mock 包装器](https://jestjs.io/docs/en/jest-object#mock-functions)
    - `jest.fn(implementation)`：mock 包装函数，以便支持 `toHaveBeenCalled` 等检查器测试
    - `jest.spyOn(object, methodName, accessType?)`：相比 `jest.fn`，支持直接调用原始对象字段
    - `jest.isMockFunction(fn)`
  - [mock 实例](https://jestjs.io/docs/en/mock-function-api)
    - 名字
      - `mockFn.mockName(value)`
      - `mockFn.getMockName()`
    - 运行情况
      - `mockFn.mock.calls`：传的参数
      - `mockFn.mock.results`：得到的返回值
      - `mockFn.mock.instances`：mock 包装器实例
    - 模拟函数
      - `mockFn.mockImplementation(fn)`：重新声明被 mock 的函数
      - `mockFn.mockImplementationOnce(fn)`
    - 模拟结果
      - `mockFn.mockReturnThis()`
      - `mockFn.mockReturnValue(value)`
      - `mockFn.mockReturnValueOnce(value)`
      - `mockFn.mockResolvedValue(value)`
      - `mockFn.mockResolvedValueOnce(value)`
      - `mockFn.mockRejectedValue(value)`
      - `mockFn.mockRejectedValueOnce(value)`
  - clear（TODO）
    - `mockFn.mockClear()`
    - `mockFn.mockReset()`
    - `mockFn.mockRestore()`
    - `jest.clearAllMocks()`
    - `jest.resetAllMocks()`
    - `jest.restoreAllMocks()`
- 快照（TODO）
  - `expect.addSnapshotSerializer(serializer)`
  - `.toMatchSnapshot(propertyMatchers?, hint?)`
  - `.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)`
  - `.toThrowErrorMatchingSnapshot(hint?)`
  - `.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)`
- Timer（TODO）

## Jest 典型代码

参考 [Jest - Learn By Doing](https://github.com/seognil-study/learn-by-doing/tree/master/testing/jest)

### 基本使用

```typescript
// add.ts

export const add = (a: number, b: number) => a + b;
```

```typescript
// add.test.ts

import { add } from './add';

test('test add function', () => {
  expect(add(1, 2)).toBe(3);
});
```

<br />

```typescript
describe('描述：基本使用', () => {
  test('简单测试项', () => {
    // expect.hasAssertions();
    expect(2).toBe(2);
  });
  test('简单测试项2', () => {
    // expect.assertions(2);
    expect('hello').toEqual('hello');
    expect('hello').not.toEqual('world');
  });
});

describe('基本类型简单测试', () => {
  test('数字', () => {
    expect(0.1 + 0.2).not.toEqual(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);

    expect(1 + 2).toBeLessThanOrEqual(4);

    expect(Infinity / Infinity).toBeNaN();
  });
  test('字符串/数组', () => {
    expect('Quick fox').toMatch(/quick/i);

    expect('Quick fox').toContain('ck fo');
    expect(['Hello', 'world']).toContain('Hello');

    expect([{ id: 1 }, { id: 2 }]).not.toContain({ id: 1 });
    expect([{ id: 1 }, { id: 2 }]).toContainEqual({
      id: 1,
    });
    expect([{ id: 1 }, { id: 2 }]).not.toContainEqual({
      id: 1,
      name: 'John',
    });

    expect('Quick').toHaveLength(5);
    expect(['Hello', 'world']).toHaveLength(2);
  });
});
```

### 假值检测

```typescript
describe('Nullish', () => {
  test('', () => {
    const obj = {};

    // @ts-ignore
    expect(obj.key).toBeUndefined();
    expect(undefined).toBeUndefined();

    expect(undefined).not.toBeDefined();
    expect(null).toBeDefined();
    expect(0).toBeDefined();

    expect(null).toBeNull();
    expect(undefined).not.toBeNull();

    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();

    expect('0').toBeTruthy();
    expect([]).toBeTruthy();
  });
});
```

### 容易混淆的相等性 API

```typescript
describe('容易混淆的相等性 API，对象', () => {
  test('toBe', () => {
    expect({ hello: 'world' }).not.toBe({ hello: 'world' });

    const obj = { hello: 'world' };
    expect(obj).toBe(obj);
  });

  test('toEqual', () => {
    expect({ hello: 'world' }).toEqual({ hello: 'world' });
    expect({ hello: 'world' }).toEqual({
      hello: 'world',
      un: undefined,
    });
  });

  test('toStrictEqual', () => {
    expect({ hello: 'world' }).toStrictEqual({
      hello: 'world',
    });
    expect({ hello: 'world' }).not.toStrictEqual({
      hello: 'world',
      un: undefined,
    });
  });

  test('toMatchObject', () => {
    expect({
      val: 2,
      arr: [4, 3, 2, 1],
      hello: 'world',
    }).toMatchObject({
      val: expect.any(Number),
      arr: expect.arrayContaining([1, 2]),
    });
  });
});
```

### Mock 系列

```typescript
describe('Mock 系列', () => {
  test('jest.fn', () => {
    const hello = (name = 'John') => `Hello ${name}`;
    const mockFn = jest.fn(hello);
    mockFn.mockName('hello there');

    mockFn('Chirs');

    // console.log(mockFn.getMockName()); // => hello there
    // console.log(mockFn.mock.calls); // => [ [ 'Chirs' ] ]

    // console.log(mockFn.mock.results);
    // => [ { type: 'return', value: 'Hello Chirs' } ]

    // console.log(mockFn.mock.instances); // => [ undefined ]

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('Chirs');
    expect(mockFn).toHaveReturnedTimes(1);
    expect(mockFn).toHaveReturnedWith('Hello Chirs');
  });

  test('jest.spyOn', () => {
    const obj = {
      hello: (name = 'John') => `Hello ${name}`,
    };

    const spyFn = jest.spyOn(obj, 'hello');

    obj.hello('Freddie');
    obj.hello('Bob');

    // console.log(spyFn.getMockName()); // => jest.fn()
    // console.log(spyFn.mock.calls); // => [ [ 'Freddie' ], [ 'Bob' ] ]
    // console.log(spyFn.mock.results); // =>
    // [
    //   { type: 'return', value: 'Hello Freddie' },
    //   { type: 'return', value: 'Hello Bob' }
    // ]

    // console.log(spyFn.mock.instances);
    // => [ { hello: [Function: mockConstructor] {} }, {...} ]

    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(2);
    expect(spyFn).toHaveBeenCalledWith('Freddie');
    expect(spyFn).toHaveBeenLastCalledWith('Bob');
    expect(spyFn).toHaveBeenNthCalledWith(1, 'Freddie');
    expect(spyFn).toHaveReturned();
    expect(spyFn).toHaveReturnedTimes(2);
    expect(spyFn).toHaveReturnedWith('Hello Bob');
    expect(spyFn).toHaveLastReturnedWith('Hello Bob');
    expect(spyFn).toHaveNthReturnedWith(2, 'Hello Bob');
  });

  test('mock 实例方法', () => {
    // * ---------------- 等价写法
    {
      const hello = (name = 'John') => `Hello ${name}`;
      jest.fn(hello);
      jest.fn().mockImplementation(hello);
    }

    // * ---------------- mockImplementationOnce
    {
      const myMockFn = jest
        .fn()
        .mockImplementationOnce((cb) => cb(null, true))
        .mockImplementationOnce((cb) => cb(null, false));

      const result = [
        myMockFn((err, val) => val),
        myMockFn((err, val) => val),
      ];
      expect(result).toEqual([true, false]);
    }

    // * ---------------- mockReturnValueOnce
    {
      const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockReturnValueOnce('first call')
        .mockReturnValueOnce('second call');

      expect([
        myMockFn(),
        myMockFn(),
        myMockFn(),
        myMockFn(),
      ]).toEqual([
        'first call',
        'second call',
        'default',
        'default',
      ]);
    }
  });
});
```
