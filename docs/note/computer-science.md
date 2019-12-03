# 计算机科学入门指南

## 计算机科学 简介

### 什么是 计算机科学

> 计算机科学（英语：Computer Science，有时缩写为 CS）是系统性研究信息与计算的理论基础以及它们在计算机系统中如何实现与应用的实用技术的学科。

### 为什么要学习 计算机科学

- 如果你想从事开发工作并作为自己的长期事业
- 如果你想写一点小脚本提高自己的工作效率
- 如果你想了解计算机、程序、代码是如何工作的

就像造汽车需要了解物理化学，  
写代码需要了解一定的 CS 体系知识。

## 入门 计算机科学

CS 是一个很大的体系，不然也不可能在高校中专门开设一个专业。

无论目标是**从事开发工作**还是**满足自己的好奇心**，  
无论是**科班的新生**还是**跨专业的初学者**，

在**入门阶段**，首先要了解的不是具体的工程技能，  
而是导论：了解 CS 学科体系的全貌和大致分支。  
以便为之后的学习和开发工作指明方向。

之后再根据需要，深入学习具体的分支即可。

### 概览

- 耗时：
  - CCCS 系列视频总长大约 7 个小时
  - （CS50 系列视频总长大约 18 个小时）
  - 额外的学习和理解控制在 20~40 个小时内（先入门）
- 难点：
  - 建立思维模式和知识体系
  - 给学习划分重要性和优先级
- 工具：
  - 一台电脑
  - 稳定的网络

### 学习路线

- 前置基础
  - （英语）
  - （[学习方法论](https://fe.rualc.com/note/study-methodology.html)）
- 入门 CS
  - 学习 CCCS 系列视频
  - 建立自己的 CS 知识体系
- 下一步
  - （前端）学习 JavaScript （或其他你想从事的领域的基本编程语言）
  - 深入学习各个子课程
- 进阶
  - 学习 CS50 系列视频（入门课程）
  - CSAPP（《深入理解计算机系统》）
- 迷思
  - 记得自己记录

## 资料

### 自学教材

- 概览
  - [Map of Computer Science](https://www.youtube.com/watch?v=SzJ46YA_RaA)
  - [How do computers read code?](https://www.youtube.com/watch?v=QXjU9qTsYCc)
  - [如何自学编程？](https://www.zhihu.com/lives/860490807847841792)
- 系列教程
  - CCCS
    - [Crash Course Computer Science - YouTube](https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)
    - [计算机科学速成课 - bilibili](https://www.bilibili.com/video/av21376839/)
  - CS50
    - [CS50 Lectures 2018 - YouTube](https://www.youtube.com/watch?v=5azaK2cBKGw&list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH&index=2)
    - [CS50 Lectures 2018 - bilibili](https://www.bilibili.com/video/av45936507)

### 编程漫谈

- [如何掌握所有的程序语言](http://www.yinwang.org/blog-cn/2017/07/06/master-pl)
- [如何评价王垠新博文《如何掌握所有的程序语言》？](https://www.zhihu.com/question/62097662)
- [编程究竟难在哪？](https://www.zhihu.com/question/311432227)
- [编程到底难在哪里？](https://www.zhihu.com/question/22508677)
- [把代码写的太灵活不好吗？为什么会被上司批评？](https://www.zhihu.com/question/52951851)
- [为何部分程序员从不使用 break 或 continue 语句？](https://www.zhihu.com/question/334216911)

### 知识体系 

- [Coding Interview University](https://github.com/jwasham/coding-interview-university)
- [The System Design Primer](https://github.com/donnemartin/system-design-primer)

### 中国高校 CS 课程体系

- [顶尖中文大学计算机专业课程体系 - 网易云课堂](https://study.163.com/curricula/cs.htm)

* [清华大学计算机系课程攻略](https://github.com/PKUanonym/REKCARC-TSC-UHT)
* [北京大学信息学院计算机系 本科&研究生课程大作业选集](https://github.com/tongtzeho/PKUCourse)
* [libpku - 贵校课程资料民间整理](https://github.com/lib-pku/libpku)
* [上海交通大学课程分享](https://github.com/CoolPhilChen/SJTU-Courses)
* [浙江大学课程攻略共享计划](https://github.com/QSCTech/zju-icicles)
* [中国科学技术大学课程资源](https://github.com/USTC-Resource/USTC-Course)

## CS 知识体系

### CCCS 视频小结

- 核心概念
  - 抽象、封装、分治
  - 复杂度 vs 速度

* **计算机历史** 【1~2, 24~25】
  - 【1 计算工具发展史】
  - 【2 电子计算机发展史】继电器（relay）、BUG、真空管、晶体管
  - 【24 战争和商业对技术的推动】
  - 【25 个人计算机】
* **计算机组成** 【3~9】
  - 【3 布尔逻辑】 布尔、逻辑电路、逻辑门、二进制
  - 【4 二进制】二进制和编码
  - 【5 ALU】ALU（算数逻辑单元）
  - 【6 内存】锁存器、寄存器、内存
  - 【7 CPU】寄存器 + 控制器 + ALU => CPU、时脈、超频、时钟周期
  - 【8 指令和程序】指令、指令集
  - 【9 高级 CPU 设计】硬件加速、CPU 缓存、总线、内存一致性、CPU 流水线、乱序执行、分支预测、多发射
* **编程** 【10~16】
  - 【10 早期编程】打孔纸带、patch（补丁）、插线板、Console、冯诺依曼结构
  - 【11 编程语言】伪代码、机器码、汇编、编译器、程序语言设计
  - 【12 语言特性】语句、语法、变量、控制流、函数、模块化、库
  - 【13 算法】复杂度、大 O 表示法
  - 【14 数据结构】数组、字符串、结构体、链表、队列、栈、树、图、堆
  - 【15 图灵】可判定性问题、Lambda 算子、图灵机、图灵完备、停机问题、图灵测试
  - 【16 软件工程】面向对象编程、API、IDE、README、版本控制、QA
* **半导体工业** 【17】
  - 【17 集成电路】集成电路（IC）、PCB、晶圆、光刻、摩尔定律、量子隧穿
* **近代计算机** 【18~23, 26~27】
  - 【18 操作系统】操作系统（OS）、设备驱动、多任务、分时系统、虚拟内存、内存保护、内核
  - 【19 存储】磁存储器、磁带、磁盘、存储层次体系、光盘、SSD
  - 【20 文件系统】文件格式、文件头、元数据、目录、磁盘碎片、分层文件系统
  - 【21 压缩】游程编码、无损压缩、哈夫曼编码、感知编码
  - 【22 命令行界面】人机交互、命令行界面（CLI）、键盘、打字机、终端
  - 【23 屏幕】CRT、LCD、ASCII、矢量图、位图
  - 【26 图形用户界面】图形用户界面（GUI）、鼠标、DEMO、窗口、桌面、事件驱动编程、WYSIWYG
* **图形学** 【27】
  - 【27 图形学】线框渲染、投影、polygon（多边形）、mesh（网格）、减面、扫描线算法、AA（抗锯齿）、画家算法、深度缓冲、z-fighting、背面剔除、Shading（着色）、法线、纹理
* **计算机网络** 【28~30】
  - 【28 计算机网络】LAN（局域网）、MAC 地址、以太网、载波侦听多路访问（CSMA）、带宽、指数退避、交换机、互联网、路由、报文、跳数、packet（数据包）、IP 地址、拥塞控制、TCP/IP、分组交换、ICMP、BGP、IoT
  - 【29 互联网】互联网（Internet）、LAN（局域网）、ISP（互联网服务提供商）、WAN（广域网）、骨干网、traceroute、IP、端口、UDP、TCP、DNS、顶级域名（TLD）、OSI 模型（七层）
  - 【30 万维网】WWW（万维网）、URL、HTTP、状态码、HTML、CSS、JavaScript、浏览器、搜索引擎、backlink、网络中立性
* **计算机安全** 【31~33】
  - 【31 计算机安全】保密性、完整性、可用性、威胁模型分析、身份认证、暴力攻击、两步验证、访问控制、BLP 模型、可信计算、形式化验证、isolation（隔离）、sandbox（沙盒）、虚拟机
  - 【32 黑客和攻击】黑客、白帽子、网络犯罪、社会工程学、钓鱼、电话诈骗、恶意软件、缓冲区溢出、SQL 注入、零日漏洞、僵尸网络、DDOS
  - 【33 密码学】替换加密、移位加密、DES、AES、DH 密钥交换算法、对称加密、非对称加密、RSA
* **新产业**【34~40】
  - 【34 人工智能】ML（机器学习）、AI（人工智能）、分类器、决策树、支持向量机、深度神经网络、强 AI、强化学习（RL）
  - 【35 计算机视觉】边缘检测、kernal（线性算子）、卷积神经网络、人脸识别
  - 【36 自然语言处理】NLP（自然语言处理）、分词、知识图谱、语音识别、FFT（快速傅里叶变换）
  - 【37 机器人】robot、CNC、PID 控制器、无人驾驶、机器人三定律、机器人伦理
  - 【38 计算机心理学】Usability、视觉感知、分块、affordance（示能性）、情感计算、人机交互（HRI）、恐怖谷
  - 【39 教育科技】维基、教学视频、MOOC、领域模型、贝叶斯知识追踪
  - 【40 未来】普适计算、奇点、技术性失业、cyborg、数字永生、VR、可穿戴设备、虚拟助手、加密货币、无线通讯、3D 打印、生物信息学、量子计算

### 本科 CS 基本课程

- CS
  - 计算机导论
  - 计算机组成原理
  - C/C++/Java/Python 语言
  - 算法与数据结构
  - 软件工程
  - 编译原理
  - 操作系统
  - 计算机网络
- EE
  - 数字电路、模拟电路
  - 信号处理
- 杂项
  - （数学/物理相关）
  - 编程范式
  - 设计模式
  - 系统设计

### 前端中的 CS

CS 在前端开发中的重要性，  
前端工作中的各个部分都或多或少涉及 CS 的子领域，  
举例说明：

- 编译原理：Babel、TypeScript、JSX
- 软件工程：Webpack、CI/DI、单元测试
- 设计模式：框架源码、网站架构设计
- 图形学：WebGL、three.js
- 安全：HTTPS、权限、XSS、CSRF、输入验证
- 编程范式：MVVM、Ramda（函数式）、RxJS（响应式）
- 算法和数据结构：Immutable.js、merge、diff
- 计算机网络：HTTP、状态码
