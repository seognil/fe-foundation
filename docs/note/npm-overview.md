# npm 相关概念

- 同义词
  - registry、仓库、源
  - package、包

* [cnpm](https://github.com/cnpm) 是由淘宝开发的一套 npm 生态，包含服务端、客户端、npm 镜像（可视为已配置好的服务端），等等一系列工具和服务。
* [package.json](https://github.com/stereobooster/package.json) 是一个包含 npm package 相应信息的配置文件。

## 服务端

`verdaccio`、`sinopia` 等私有库工具都是属于服务端。  
也有其他 SaaS 形式的服务（比如 [Nexus Repository Manager](https://www.sonatype.com/nexus-repository-sonatype)、[GitHub Package Registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry)）。

## 客户端

- [npm](https://docs.npmjs.com/about-npm/)：Node.js 默认的包管理器。
- [yarn](https://yarnpkg.com/)：Facebook 出品，业界流行的包管理器，可代替 npm。默认源配置为 yarn 的源。
- [cnpm (cli)](https://github.com/cnpm/cnpm)：cnpm 的客户端部分，可代替 npm，默认源配置为淘宝源。

客户端基本使用方式：

- `npm i the-answer` / `npm un the-answer`
- `yarn add the-answer` / `yarn remove the-answer`
- `cnpm i the-answer` / `cnpm un the-answer`

## registry

源、仓库，存放众多开发者所开发的 package 的地方。

很多公开源都只是官方 npm 的镜像，  
定期自动同步（只读），并且拒绝接收 package 发布。

- 官方仓库：https://registry.npmjs.org/
- 淘宝源：https://registry.npm.taobao.org/
- yarn：https://registry.yarnpkg.com/

当我们搭建了私有仓库之后，也就成为了一个可供我们访问的源，  
只需要在客户端配置好地址即可。

## registry 的切换方式

上文提到的三个客户端都兼容 npm 的配置方式。  
那么下面的例子只列举 npm 的方式，  
也可以将命令中的 npm 替换成 yarn 或 cnpm 查看效果。

仓库的切换有几种方式。

### 通过参数

只需要在命令最后加 `--registry=${url}` 参数即可，例如：  
`npm i the-answer --registry=https://registry.npm.taobao.org/`

### 通过 config

npm 自带的命令 `config set registry ${url}`，例如：  
`npm config set registry https://registry.npm.taobao.org/`  
这个方式避免了每次输相关命令都需要敲入参数。  
输入 `config --help` 看到 config 的命令有 `set, get, delete, list` 等。

### 通过 nrm

config 能够保存配置到全局，但是在切换不同仓库的时候依然过于繁琐。  
有一个工具简化这个过程，就是 [nrm](https://github.com/Pana/nrm)。

nrm 是 npm registry manager 的缩写，顾名思义，也就是仓库源的管理工具。  
有 `add、del、ls、use、current` 等命令。  
并且自带了一些常用的 npm 源清单。

比如可以执行 `nrm use taobao`、`nrm use npm` 在淘宝源和官方仓库之间快速切换。

例如使用自己搭建的本地私有仓库：

```
nrm add localnpm http://localhost:4873/
nrm use localnpm
```
