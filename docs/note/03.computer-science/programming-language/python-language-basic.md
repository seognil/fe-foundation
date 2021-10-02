---
title: Python 语言基础（3.9）
date: 2021-08-01 20:54:56
permalink: /cs/python-language-basic
categories:
  - 计算机科学
  - 编程语言
tags:
  - 编程语言
  - Python
  - 基础
---

# Python 语言基础（3.9）

## 教材

- 视频
  - [Learn Python Programming - Python Course](https://www.youtube.com/watch?v=f79MRyMsjrQ) 2h
  - [Python Tutorial - Python for Beginners [Full Course]](https://www.youtube.com/watch?v=_uQrJ0TkZlc) 4h + 2h demo
- [官方文档](https://docs.python.org/zh-cn/3/)
  - [Python 教程](https://docs.python.org/zh-cn/3/tutorial/index.html)
  - [Python 语言参考手册](https://docs.python.org/zh-cn/3/reference/index.html)
  - [Python 标准库](https://docs.python.org/zh-cn/3/library/index.html)
    - [内置函数](https://docs.python.org/zh-cn/3/library/functions.html)
    - [内置类型](https://docs.python.org/zh-cn/3/library/stdtypes.html)
  - [术语对照表](https://docs.python.org/zh-cn/3/glossary.html)
  - [编程常见问题](https://docs.python.org/zh-cn/3/faq/programming.html)
  - [设计和历史常见问题](https://docs.python.org/zh-cn/3/faq/design.html#design-and-history-faq)
- 其他文档
  - [Python Quizzes – Real Python](https://realpython.com/quizzes/)
  - [Learn Python in Y Minutes](https://learnxinyminutes.com/docs/zh-cn/python-cn/)
  - [Learn Python Programming](https://www.programiz.com/python-programming)
  - [python3-in-one-pic](https://github.com/coodict/python3-in-one-pic)
- 工具
  - [Python runtime visualize](http://www.pythontutor.com/)

<!-- TODO -->
<!-- - [Intermediate Python](https://book.pythontips.com/en/latest/) -->
<!-- [Learn Python in Y Minutes](https://learnxinyminutes.com/docs/zh-cn/python-cn/) -->

## Python 生态

Python 目前有两个主要版本 2.7, 3+，语法有所区别，[Python 2 在 2020 年 1 月 1 号 停止维护](https://www.python.org/doc/sunset-python-2/)，本文基于 Python 3.9。

- [Python](https://www.python.org/)：A Programming Language
  - [PEP](https://www.python.org/dev/peps/)：Python Enhancement Proposals，Python 语言特性增强草案
- 包管理
  - [PyPI](https://pypi.org/)：The Python Package Index 官方包仓库（类似 Node.js 的 npm）
  - [pip](https://docs.python.org/zh-cn/3/installing/index.html#key-terms)
  - [pipenv](https://pipenv.pypa.io/en/latest/)：虚拟环境管理
- 包
  - 格式化：[Auto formatters for Python](https://www.kevinpeters.net/auto-formatters-for-python)
    - [autopep8](https://pypi.org/project/autopep8/)
    - [black](https://pypi.org/project/black/)
  - lint
    - [pylint](https://pypi.org/project/pylint/)
    - [flake8](https://pypi.org/project/flake8/)
    - [mypy](https://pypi.org/project/mypy/)：带类型检查
  - 测试
    - [pytest](https://pypi.org/project/pytest/)：测试
    - [coverage](https://pypi.org/project/coverage/)：代码覆盖率
- PyPI 榜单
  - [Python Wheels](https://pythonwheels.com/)
  - [Top PyPI Packages](https://hugovk.github.io/top-pypi-packages/)
  - [PyPI Stats](https://pypistats.org/top)
- VS Code 插件
  - [Microsoft Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)：VS Code 的 Python 语言扩展
  - [Wolf](https://marketplace.visualstudio.com/items?itemName=traBpUkciP.wolf)：类似 [Quokka.js](https://quokkajs.com/) 的 runner
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)：用快捷键运行当前脚本
  - [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)：基于 AI 的代码自动补全
- Misc
  - [Pythonic](https://docs.python.org/zh-cn/3/glossary.html#term-pythonic)：Python 风格
  - [`import this`](https://www.python.org/dev/peps/pep-0020/)：REPL 里的彩蛋《The Zen of Python》

## 安装和运行（Mac）

### python, pip

```sh
brew install python@2
brew install python@3.9

python --version
python3 --version

python -m site
python3 -m site

pip --version
pip3 --version

pip install -U pip
pip install black mypy
```

### pipenv

```sh
pip install pipenv
pipenv --help
pipenv shell
python --version
```

### REPL, script

```sh
python
>>> import this
>>> print('hello world')
>>> exit()

python script.py
```

## Python 基础知识体系

### Python 语言特性

- 语言特性
  - 动态类型，强类型
  - 万物皆对象
  - 函数一等公民

### 语法 语句 表达式 操作符

- [语法](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html)
  - 换行
    - 显式拼接行 `\`
    - 隐式拼接行 `( ) [ ] { }` 表达式括号内支持换行
  - 缩进
  - 注释 `#`, `"""Multi Line"""`
  - 变量声明
    - [有效变量名](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#identifiers) 区分大小写 `A-Z , a-z , 0-9 , _`
    - [保留字](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#keywords)
    - [序列解包](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tuples-and-sequences) `a, b, c = 1, 2, 3`, `a = b = c = 1`
  - [`_` 特殊标识符](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#reserved-classes-of-identifiers) 在 REPL 中获取最近一次的求值
  - [尾逗号](https://docs.python.org/zh-cn/3/faq/design.html?highlight=%E9%80%97%E5%8F%B7#why-does-python-allow-commas-at-the-end-of-lists-and-tuples)
  - [逗号不是运算符](https://docs.python.org/zh-cn/3/faq/programming.html#what-s-up-with-the-comma-operator-s-precedence) 只是分隔符
  - [三目运算符](https://docs.python.org/zh-cn/3/faq/programming.html#is-there-an-equivalent-of-c-s-ternary-operator) `small = x if x < y else y`
- [表达式](https://docs.python.org/zh-cn/3/reference/expressions.html) （运算符/操作符）
  - [算数](https://docs.python.org/zh-cn/3/reference/expressions.html#the-power-operator) `+`, `-`, `*`, `/`, `%`, `//`, `**`
  - [位运算](https://docs.python.org/zh-cn/3/reference/expressions.html#unary-arithmetic-and-bitwise-operations) `&`, `|`, `^`, `~`, `>>`, `<<`
  - （逻辑判断）
    - [比较运算符](https://docs.python.org/zh-cn/3/reference/expressions.html#value-comparisons) `<`, `>`, `==`, `!=`, `>=`, `<=`
      - 可串联
      - 序列的比较
    - [布尔运算](https://docs.python.org/zh-cn/3/reference/expressions.html#boolean-operations) `and`, `or`, `not`
    - [成员检测](https://docs.python.org/zh-cn/3/reference/expressions.html#membership-test-operations) `in`, `not in`
    - [identity 比较](https://docs.python.org/zh-cn/3/reference/expressions.html#is-not) `is`, `is not`
    - [set 运算](https://docs.python.org/zh-cn/3/library/stdtypes.html#set-types-set-frozenset) `<`, `<=`, `>`, `>=`, `|`, `&`, `-`, `^`
  - [赋值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#delimiters) `=`, `+=`, `*=`...
  - [赋值表达式/海象表达式](https://docs.python.org/zh-cn/3/reference/expressions.html#assignment-expressions) `[y for x in data if (y := f(x))]`
  - [运算符优先级](https://docs.python.org/zh-cn/3/reference/expressions.html#operator-precedence)
- 序列
  - [**切片**](https://docs.python.org/zh-cn/3/tutorial/introduction.html#lists) `a[:]`, `a[:-1]`, `a[0:10:1]`
    - 索引越界
    - 负数索引
  - [序列的比较](https://docs.python.org/zh-cn/3/reference/expressions.html#value-comparisons)
- [del](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#the-del-statement)
- [控制流，循环](https://docs.python.org/zh-cn/3/tutorial/controlflow.html)
  - `if`, `elif`, `else`
  - `for in`, `while`, `else`
  - `break`, `continue`
  - `pass`
- [with 语句](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#with)
- [错误和异常](https://docs.python.org/zh-cn/3/tutorial/errors.html)
  - `try`, `except`, `else`, `finally`
  - `raise`, `Exception`
  - [`assert`](https://docs.python.org/zh-cn/3/reference/simple_stmts.html#the-assert-statement)
- [列表、集合、字典推导式](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#list-comprehensions)
  - `[x for x in range(10)]`
  - `[x for x in range(10) if x % 2]`
  - `[[col + row * 3 for col in range(4)] for row in range(3)]`
  - `{x for x in range(10)}`
  - `{x: x ** 2 for x in range(10)}`

### 数据类型 数据结构

- [内置类型](https://docs.python.org/zh-cn/3/library/stdtypes.html)，[数据结构](https://docs.python.org/zh-cn/3/tutorial/datastructures.html)
  - [数字类型](https://docs.python.org/zh-cn/3/library/stdtypes.html#numeric-types-int-float-complex)
    - **int**: `0b111`, `0o777`, `0xfff`
      - [无长度限制](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#integer-literals)
      - [下划线](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#integer-literals) 提高可读性 `1_000_000`
    - **float**: `10.5`, `1.5e2`
      - [浮点数算不准](https://docs.python.org/zh-cn/3/faq/design.html#why-are-floating-point-calculations-so-inaccurate)
    - **complex**: `1+2j`
  - [**str**](https://docs.python.org/zh-cn/3/library/stdtypes.html#text-sequence-type-str)
    - `'Hello'`, `"Hello"`
    - `"""Multi Line"""`
    - [转义字符](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#strings)
    - [字符串合并](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#string-literal-concatenation)
    - [f-字符串](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html#formatted-string-literals) `f"x + y = {x + y}"`
      - [.format()](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html#the-string-format-method) `"x + y = {}".format(1 + 2)`
    - [原始字符串](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#string-and-bytes-literals) `r"raw \n"`
    - [unicode 字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#string-and-bytes-literals) `u"\u00dc \u00f6 \xf1"`
  - [**bytes**](https://docs.python.org/zh-cn/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview) `b'hello'` `b'hello'[0] == 104`
  - [布尔和比较](https://docs.python.org/zh-cn/3/library/stdtypes.html#boolean-operations-and-or-not)
    - **bool**: `True`, `False`
    - [真值/假值](https://docs.python.org/zh-cn/3/library/stdtypes.html#truth-value-testing)
    - `type(1) == int`, `isinstance(1, int)`
    - [`id(a)`](https://docs.python.org/zh-cn/3/library/functions.html#id), `a is a`
  - [`None`](https://docs.python.org/zh-cn/3/library/constants.html#None)
  - [序列类型](https://docs.python.org/zh-cn/3/library/stdtypes.html#sequence-types-list-tuple-range)
    - **list**: `[1, 2, 3]`
    - [**tuple**](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tuples-and-sequences): `(1,)`, `(1, 2, 3)`
      - 括号可以省略
      - 元组打包 - 序列解包 `a, b = 1, 2`
  - [集合](https://docs.python.org/zh-cn/3/library/stdtypes.html#set-types-set-frozenset)
    - **set**: `{'a', 'b', 'c'}`
    - **frozenset**
  - [映射/字典](https://docs.python.org/zh-cn/3/library/stdtypes.html#mapping-types-dict)
    - **dict**: `{'a': 1, 'b': 2, 'c': 3}`
- 一些特性
  - [_hashable_](https://docs.python.org/zh-cn/3/glossary.html#term-hashable)
  - [_immutable_](https://docs.python.org/zh-cn/3/glossary.html#term-immutable) immutable 的数据都能作为 dict 的 key
  - [_mutable_](https://docs.python.org/zh-cn/3/glossary.html#term-mutable): `list`, `dict`, `set`
  - [_iterable_](https://docs.python.org/zh-cn/3/glossary.html#term-iterable)
- [字典视图对象](https://docs.python.org/zh-cn/3/library/stdtypes.html#dict-views) 是动态的: `dict.keys()`, `dict.values()`, `dict.items()`
- 隐式类型转换，[显式/强制类型转换](https://docs.python.org/zh-cn/3/glossary.html#term-coercion)

### 函数 类

- [函数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#more-on-defining-functions)
  - [docstring](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#tut-docstrings)
  - [默认值参数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#default-argument-values) `def fn(value=2):`
  - [关键字参数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#keyword-arguments) `def fn(value, *arguments, **keywords):`
  - [特殊参数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#special-parameters) `def fn(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):`
  - [解包实参列表](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#unpacking-argument-lists) `fn(1, *tuple, **dict)`
  - [Lambda 表达式](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#lambda-expressions) `add = lambda x, y: x + y`
  - **作用域**
    - [Python 作用域和命名空间](https://docs.python.org/zh-cn/3/tutorial/classes.html#python-scopes-and-namespaces)
    - [变量明明有值，为什么还会出现 UnboundLocalError？](https://docs.python.org/zh-cn/3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value)
    - local -> `nonlocal` -> `global` -> built-in
    - [`globals()`](https://docs.python.org/zh-cn/3/library/functions.html#globals), [`locals()`](https://docs.python.org/zh-cn/3/library/functions.html#locals)
    - 闭包

* [类](https://docs.python.org/zh-cn/3/tutorial/classes.html)
  - [实例/类](https://docs.python.org/zh-cn/3/tutorial/classes.html#class-objects)
    - 实例 `obj = MyClass()`
    - 实例化函数 `def __init__(self):`
    - [实例变量](https://docs.python.org/zh-cn/3/tutorial/classes.html#class-and-instance-variables) `self`
  - [继承](https://docs.python.org/zh-cn/3/tutorial/classes.html#inheritance)
    - 继承/多继承 `class ClsC(ClsA, ClsB):`
    - [`super()`](https://docs.python.org/zh-cn/3/library/functions.html#super)
  - [私有名称](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#reserved-classes-of-identifiers) `__name`
  - [魔术方法/特殊方法](https://docs.python.org/zh-cn/3/reference/datamodel.html#specialnames)、[运算符重载](https://www.programiz.com/python-programming/operator-overloading#overload-plus) `__str__`
  - [@staticmethod](https://docs.python.org/zh-cn/3/library/functions.html#staticmethod), [@classmethod](https://docs.python.org/zh-cn/3/library/functions.html#classmethod)

- [实例属性和类属性](https://www.liaoxuefeng.com/wiki/1016959663602400/1017594591051072)
- [Python 多重继承 super()的 MRO 坑](https://note.qidong.name/2020/05/python-super-mro/)

### 模块化

- [模块](https://docs.python.org/zh-cn/3/tutorial/modules.html#modules), [导入系统](https://docs.python.org/zh-cn/3/reference/import.html)
  - `import math`, `from math import *`, `from math import pi, e`
  - `import math as m`, `from math import sqrt as s`
  - `import myutils.calc.add`
- 相关
  - [`__name__`](https://docs.python.org/zh-cn/3/reference/import.html#import-related-module-attributes), [`"__main__"`](https://docs.python.org/zh-cn/3/reference/import.html#special-considerations-for-main)
  - `__path__`
  - `__init__.py`
  - [`__all__`](https://docs.python.org/zh-cn/3/tutorial/modules.html#importing-from-a-package)

### Python 标准库

- [内置函数](https://docs.python.org/zh-cn/3/library/functions.html)
  - `print`, `input`
  - `int`, `float`, `complex`, `bool`
  - `dict`, `set`, `frozenset`
  - `str`, `tuple`, `list`, `iter`, `len`, `range`, `sorted`
  - `dir`, `locals`, `globals`
  - `hash`, `id`, `isinstance`, `issubclass`
  - `abs`, `round`, `max`, `min`, `pow`, `sum`
  - `map`, `filter`
- [内置库](https://docs.python.org/zh-cn/3/library/index.html)
  - 数学
    - [math](https://docs.python.org/zh-cn/3/library/math.html)：基础数学运算
    - [decimal](https://docs.python.org/zh-cn/3/library/decimal.html)：浮点运算
    - [fractions](https://docs.python.org/zh-cn/3/library/fractions.html)：分数
    - [random](https://docs.python.org/zh-cn/3/library/random.html)：随机工具
  - [array](https://docs.python.org/zh-cn/3/library/array.html)：数组
  - [datetime](https://docs.python.org/zh-cn/3/library/datetime.html)：时间和日期
  - [re](https://docs.python.org/zh-cn/3/library/re.html)：正则表达式
  - [json](https://docs.python.org/zh-cn/3/library/json.html)：（注意到 Python 的 dict 和 JS 的 object 不一样）

* I/O
  - [读写文件](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html#tut-files)
  - [open](https://docs.python.org/zh-cn/3/library/functions.html#open)
  - [os](https://docs.python.org/zh-cn/3/library/os.html#os.open)

### 类型提示

[typing](https://docs.python.org/zh-cn/3/library/typing.html)

```py
a: list[int] = [1, 2]

# Incompatible types in assignment (expression has type "float", variable has type "List[int]") mypy(error)
a = 2.3
```

```py
def greeting(name: str) -> str:
    return "Hello " + name

# Argument 1 to "greeting" has incompatible type "int"; expected "str" mypy(error)
greeting(233)
```

### 高级使用

- [iterator](https://docs.python.org/zh-cn/3/glossary.html#term-iterator) `__iter__`, `__next__`
- [generator](https://docs.python.org/zh-cn/3/glossary.html#term-generator) `yield`
- [decorator](https://docs.python.org/zh-cn/3/glossary.html#term-decorator) `@f`
- 描述器（getter/setter）
  - [描述器使用指南](https://docs.python.org/zh-cn/3/howto/descriptor.html)
  - [property](https://docs.python.org/zh-cn/3/library/functions.html#property)
- [协程与任务](https://docs.python.org/zh-cn/3/library/asyncio-task.html)
  - [coroutine](https://docs.python.org/zh-cn/3/glossary.html#term-coroutine)
  - [awaitable](https://docs.python.org/zh-cn/3/glossary.html#term-awaitable)

## Python 代码

### nonlocal 1

```py
def calc(x=0):
    def add():
        nonlocal x
        x += 1
        print("inner", x)

    def minus():
        nonlocal x
        x -= 1
        print("inner", x)

    return add, minus


add, minus = calc()

add()
add()
add()

minus()
minus()
```

### nonlocal 2

```py
def a():
    x = 1

    def b():
        def c():
            nonlocal x
            x += 1
            print("c", x)

        print("b1", x)
        c()
        print("b2", x)

    print("a1", x)
    b()
    print("a2", x)


a()
```

### 类实例属性查找

```py
class Student:
    name = "noname"

    def __init__(self, name):
        print("default_name:", self.name)
        self.name = name
        print("init_name:", self.name)

    def get_name(self):
        print("method_log:", self.name)


lc = Student("LC")


print("\nout log:", lc.name)
lc.get_name()

del lc.name

print("\nout log:", lc.name)
lc.get_name()
```
