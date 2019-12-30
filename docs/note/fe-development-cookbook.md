# 前端开发入门指南

> 从野路子入门到系统性~~精通~~略懂

## 路线图

### 编程入门和开发环境准备

- （可以看看我关于学习的一些杂谈（鸡汤））
  - [为什么要学习](./study-the-only-way.md)
  - [关于学习的鸡汤](./study-fortune.md)
  - [培训机构的局限性](./study-the-costly-way.md)
  - [关于学习指南系列](./about-the-guild.md)
  - [学习指南模板](./study-guild-abstraction.md)

* 铺垫学习
  - [硬核前端（劝退篇）](./fe-hardcore-overview.md)：了解现代前端开发的概况
  - [学习方法论](./study-methodology.md)：打造自己的知识管理体系
  - [英语 训练指南（编程篇）](./english-using.md)：打造英语使用环境
  - [计算机科学 入门指南](./computer-science.md)：了解编程思想

- 配置一套开发环境，准备学习前端开发
  - 魔法丝袜之影（略）：保障稳定的网络
  - [我的 2019 装了啥](./my-workstation.md)：以供参考
  - [命令行 简介](./terminal-intro.md)：了解命令行（前端开发的重要组成部分）
  - [打造趁手的终端](./terminal-config.md)：配置命令行
  - [Mac、设置和软件](./mac.md)：调一下系统，装一些工具
  - [关于 Chrome](./chrome.md)：装个浏览器和插件
  - [关于 VS Code](./vscode.md)：装个代码编辑器和扩展
  - [用快捷键控制视频播放](./video-hotkey.md)：增强学习体验

### 前端开发入门

（学习前端开发除 JS 以外的部分，JS 单独成节，因为内容实在太多了…）

- 别人的路线图
  - [2019 年成為 Web 開發人員的路線圖](https://github.com/goodjack/developer-roadmap-chinese)
  - [Web Development In 2020 - A Practical Guide](https://www.youtube.com/watch?v=0pThnRneDjw)
  - [Front-end Developer Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019/)

* 铺垫学习
  - [Markdown 学习指南](./markdown.md)：学习写文档用的标记语言
  - [Git 学习指南](./git.md)：学习版本管理和周边概念
  - [Node 概览（先行版）](./npm-overview.md)：了解 Node.js（前端开发的重要组成部分）
  - [进一步提高 npm 安装速度（Proxy）](./npm-speedup.md)：npm 配置调优
  - [关于 Chrome](./chrome.md)：学习浏览器调试
  - [关于 VS Code](./vscode.md)：学习使用代码编辑器
* HTML5
  - 基本 HTML 元素和属性
* CSS
  - 基本 CSS 模型和属性
  - 响应式布局
  - Less/Sass 预处理
* [JavaScript ↓](#javascript-%e8%b7%af%e7%ba%bf%e5%9b%be)

### JavaScript 生态路线图

-  别人的路线图
  - [JavaScript Tutorials - freeCodeCamp.org](https://www.youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V)
  - [Web Development Crash Courses - Traversy Media](https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8)

* [JavaScript 学习指南](./js-foundation.md)（系列）
* [TypeScript 学习指南](./typescript.md)
* 框架类库
  - Vue/React
    - 组件渲染（[React Hooks 学习指南](./react-hooks.md)）
    - 状态管理方案（[Redux 学习指南](./redux.md)）
    - Router
    - 衍生框架
  - Svelte
  - GraphQL
* 工程
  - 打包（[webpack-starter](https://github.com/seognil-lab/webpack-starter)）
  - npm 组件开发（[lib-starter](https://github.com/seognil-lab/lib-starter)）
  - 静态检查/编码规范
  - 自动化测试
  - 持续集成
  - （静态）部署
  - 性能优化
* 套路
  - 算法和数据结构
  - 小把戏
    - 节流防抖去重等
  - 范式
    - 面向对象编程
    - 函数式编程
    - 响应式编程
    - 流式编程（[RxJS 学习指南](./rxjs.md)）
    - 面向切面编程
  - 设计模式
    - 设计模式（特指 GoF 的 23 种）
    - MVC、MVP、MVVM
    - 依赖注入
  - 软件工程（思想）
* 特化
  - BFF（Backends For Frontends）
  - SSR（Server-Side Rendering）
  - PWA（Progressive Web App）
  - 微前端（Micro Frontend Architecture）
  - WebGL
  - WebAssembly

- 框架技术
  - [TodoMVC](http://todomvc.com/)
  - [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
  - [vue-cli 源码分析](https://kuangpf.com/vue-cli-analysis/)
  - [Evan You on Vue.js: Seeking the Balance in Framework Design | JSConf.Asia 2019](https://www.youtube.com/watch?v=ANtSWq-zI0s)
  - [React 模式](https://github.com/SangKa/react-in-patterns-cn)
  - [React 源码解析](https://github.com/KieSun/react-interpretation)
  - [深入浅出 Webpack](https://webpack.wuhaolin.cn/)
  - [[webpack]源码解读：命令行输入 webpack 的时候都发生了什么？](https://github.com/DDFE/DDFE-blog/issues/12)

---

以上这么多内容仅仅只涉及了前端开发的技术储备部分。

对于实际的业务和代码产出，还有无数细节和额外的套路，  
例如：兼容性、骨架屏、小程序、动画、表单、i18n、同构…

不过当你的技能体系能覆盖以上至少一半内容时，  
那么你已经是一个不错的工程师了，  
你可以自己发现的未来道路：）
