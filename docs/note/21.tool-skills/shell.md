---
title: Linux Shell 快速入门笔记
date: 2022-11-18 17:44:35
permalink: /workspace/shell
categories:
  - 开发环境
tags:
  - 命令行
  - linux
  - shell
  - mac
---

# Linux Shell 快速入门笔记

## 前言

随着工作经历的增加，我在 `.zshrc` 里东拼西凑的 `alias` 和 `function` 越堆越多。对于轻度代码洁癖患者来说，看着这么多乱七八糟却又一知半解的代码片段实在是有点难受。无论是拆分整理还是重构，是时候系统学习一下 shell 了。

> 之前有几次想学没学成，原因还是方法不对，直接试图去啃 [ZSH Documentation](https://zsh.sourceforge.io/Doc/)，这谁顶得住啊。

由于已经有一丢丢使用经验（`mkdir`, `cd` 啥的平时都要用的），所以这次主要是查漏补缺一些符号的含义（比如 `2>&1`, `$()`, `[[]]`, `$#`）和一些 scripting 上的概念（`source`, `export`, `local`）。

通过《The Linux Command Line》中英两版 PDF 加上一些视频，总计两三天花了大约 16h。有了较为完整的概念，初步实现能读能写（一些语法细节还需要随用随查），满足了日常需要，对于速刷入门来说效果还不错。（也顺势重构了一些以前写的脚本）

## 教材

- 视频
  - [通过实例讲解 Bash 脚本的基本知识 | Bilibili](https://www.bilibili.com/video/BV1JE411G74W/)
  - [you need to learn BASH Scripting RIGHT NOW!! | YouTube](https://www.youtube.com/playlist?list=PLIhvC56v63IKioClkSNDjW7iz-6TFvLwS)
  - [Bash Scripting Full Course 3 Hours | YouTube](https://www.youtube.com/watch?v=e7BufAVwDiM)
- 书
  - [中：《快乐的 Linux 命令行》](https://billie66.github.io/TLCL/)
  - [英：《The Linux Command Line》](https://linuxcommand.org/tlcl.php)
  - [Bash scripting cheatsheet](https://devhints.io/bash)
- 补充文档
  - 内建变量
    - [Bash Varibles](https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html)
    - [Zsh Varibles Index](https://zsh.sourceforge.io/Doc/Release/Variables-Index.html)
  - 内建命令
    - [Zsh Shell Builtin Commands](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)
  - 参数展开
    - [Bash Shell Parameter Expansion](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html)
    - [Zsh Parameter Expansion](https://zsh.sourceforge.io/Doc/Release/Expansion.html#Parameter-Expansion)
  - 条件表达式 Conditional Expressions
    - [Bash Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html)
    - [Bash Conditional Expressions](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html)
    - [Zsh Conditional Expressions](https://zsh.sourceforge.io/Doc/Release/Conditional-Expressions.html)
  - [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
  - 重定向
    - [Bash Redirections](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)
    - [Zsh Redirections](https://zsh.sourceforge.io/Doc/Release/Redirection.html)
    - [Here Documents](https://tldp.org/LDP/abs/html/here-docs.html)
    - [Here Strings](https://tldp.org/LDP/abs/html/x17837.html)
- 实用工具
  - [tldr](https://tldr.sh/)
  - [explainshell](https://explainshell.com/)

## Shell 知识体系

- （结构和功能）
  - **Linux 文件系统层次标准**（基础目录结构）
    - `/`, `/bin`, `/usr/bin`, `/dev`, `/tmp`, `/etc`, `/opt`
  - **一些内建命令 Builtin Commands** `command -options arguments`
    - `echo`, `exit`
    - 路径：`ls`, `cd`, `pwd`
    - 文件：
      - `file`, `less`, `cat`
      - `cp`, `mv`, `mkdir`, `rm`, `ln`
      - `locate`, `find`, `touch`, `stat`
    - 使用命令：`type`, `which`, `man`, `info`, `whatis`, `help`, `--help`, `alias`
    - 权限：`id`, `chmod`, `chown`, `chgrp`, `umask`, `su`, `sudo`, `passwd`
    - 进程：`ps`, `top`, `jobs`, `bg`, `fg`, `kill`, `killall`, `shutdown`
    - Shell 环境：`printenv`, `set`, `export`, `source`
    - 文本编辑：`vi`, `nano`
    - Misc：`trap`, `wait`, `sleep`
  - **一些内建变量 Shell Varibles**
    - `$$`, `$?`, `$_`
    - `$PWD`, `$SHELL`, `$USER`, `$HOME`, `$HOSTNAME`
    - `$PATH`：环境变量
    - `$PS1`：提示符 Prompt
    - `$PS4`：追踪调试 `set -x`, `set +x`
    - `$RANDOM`
  - （更多内建命令）
    - 存储：`mount`, `unmount` （略）
    - 网络：`ping`, `traceroute`, `wget`, `ssh`
    - 归档压缩：`gzip`, `tar`, `rsync`
    - 正则表达式：`grep`
    - 文本处理：`cat`, `sort`, `uniq`, `diff`, `sed`
    - 格式化输出：`fmt`, `printf`
    - 打印机：（略）
    - 编译：`make`
- **键盘操作**
  - less、man 等控制：`h`, `?`, `q`, `/pattern`, `n`, `N`
  - 命令行光标：`Ctrl-u`, `Ctrl-y`
- （命令行书写）
  - **路径**
    - 相对路径：`./`, `../`
    - 绝对路径：`/usr/bin/env`
    - `cd -`, `cd ~username`
    - **通配符 Wildcards**：`*.txt`, `Data???`, `[abc]`, `[!abc]`, `[![:upper:]]`
  - **展开 Expansion**
    - 路径展开：`echo *.txt`, `ls ~username`
    - **算数表达式展开 Arithmetic Expansion**： `echo $(( (2+3)*4 ))`
    - **花括号展开 Brace Expansion**：`echo file_{A{1,2},B{1,2}}`, `echo {0..z}`
    - **参数展开 Parameter Expansion**：
      - `echo $USER`, `echo $PWD`, `echo ${USER}`
      - 值检查和替换：`echo ${var:-fallbackVal}`, `echo ${var:=defaultVal}`, `echo ${var:+successVal}`
      - 值检查和报错：`echo ${var:?errMsg}`
      - 子串：`echo ${parameter:offset:length}`
      - 替换：`echo ${parameter/pattern/replacer}`
      - 长度：`${#foo}`
      - （更多展开和处理 `${}` 略）
    - **命令替换 Command Substitution**：`ls -l $(which env)`
    - 引号，转义 Escape：`echo "Hello $USER"`, `echo '$USER'`, `echo "\$5.00"`
    - history：`!!`, `!number`
  - **标准输入输出，重定向 Redirection**
    - 输出重定向：`echo 123 > a.log`, `>>`, `2>`, `2>&1`, `&>`
    - **管道 Pipelines**：`ls /usr/bin | wxc -l`
    - 输入重定向：`python hello.py < foo.txt`
    - `xagrs`：把标准输入转化成参数列表
    - Here Documents：`<<`, `<<-`, `_EOF_`
    - Here Strings：`<<<`, `read -r -a Words <<< "This is a string of words."`
  - **控制编码 ANSI escape code**
    - reset：`\033[0m`
    - 4-bit black：`\033[0;30m`
    - foreground rgb：`\x1b[38;2;⟨r⟩;⟨g⟩;⟨b⟩m`
    - background rgb：`\x1b[48;2;⟨r⟩;⟨g⟩;⟨b⟩m`
    - 移动光标并清除上一行：`echo "\033[1F\033[2K\c"`
- （执行）
  - **权限 Permissions**
    - `-rwxr-xr-x`
    - `chmod +x ./file`, `chmod 755 ./file`
  - 进程操控 Processes （略）
- 包管理
  - Debian：`apt`, `dpkg`
  - 红帽：`dnf`, `yum`, `rpm`
- **Shell Script**
  - misc
    - dotfiles, rc files
    - shebang：`#!/usr/bin/env bash`
    - `source`, `.`：在当前 shell 环境执行脚本
    - `#`：注释
    - `: ""`：利用 true 写多行注释
  - **函数**
    - `function name {}`, `name () {}`
    - `local`
    - 参数
      - `$0`, `$1`, `$2`, `${99}`
      - 参数组：`$#`, `shift`, `$@`, `$*`
    - **退出状态 Exit Status**：0-255
  - **控制流 Control Flow**
    - **条件表达式 Conditional Expressions**
      - `test expression`, `[ expression ]`
      - 文件表达式、字符串表达式、整型表达式
      - 字符串的扩展：`[[ str =~ regex ]]`, `[[ $FILE == foo.* ]]`
      - 整数的扩展：`(( INT < 0 ))`
      - 逻辑操作符：`&&`, `||`, `!`
    - `if`, `while`, `continue`, `break`, `until`
    - `case`, `;;`, `;;&`
    - `for`, `done`
  - `read`, `IFS` Internal Field Separator
  - 变量
    - **字符串**
      - （在展开中做各种处理）
    - **数字**
      - 数基/进制：`$((033))`, `$((0x1b))`, `$((2#11011))`
      - （各种运算符）
        - `+`, `-`, `*`, `/`, `**`, `%`
        - `=`, `+=`, `++`, `--`
        - `˜`, `<<`, `>>`, `&`, `|`, `^`
        - `<`, `>`, `==`, `!=`, `&&`, `||`
        - `expr1?expr2:expr3`
      - 计算器：`bc <<< "2+3"`
    - **数组**
      - `arr[1]=val`, `arr=(foo bar)`
      - `${arr[@]}`
      - （数组展开类似字符串展开）
    - `declare`, `unset`
- Misc
  - **子 Shell Subshells**
  - **子进程替换 Process Substitution**
    - `read foo < <(echo "bar")`
    - `echo "bar" > >(read; echo "foo, $REPLY")`

## 代码片段

### proxy

自用，有时需要切换网络连通情况，来回修改 `export ALL_PROXY`，所以写了一个脚本来简化流程。

> 因为一些 subshell 的问题，似乎不太能像其他高级语言一样只 export 一部分变量，  
> 于是目前额外暴露出了 `_proxy_{set,unset}` 两个函数，搜了一圈似乎没什么解决方法，就这样吧…

```bash
# https://everything.curl.dev/usingcurl/proxies/env

# * ----------------------------------------------------------------

_proxy_set() {
  export ALL_PROXY=$1
  export http_proxy=$1
  export https_proxy=$1
  export HTTP_PROXY=$1
  export HTTPS_PROXY=$1
}

# * ----------------------------------------------------------------

_proxy_unset() {
  unset ALL_PROXY
  unset http_proxy
  unset https_proxy
  unset HTTP_PROXY
  unset HTTPS_PROXY
}

# * ----------------------------------------------------------------

proxy() {
  local localproxy='http://127.0.0.1:1080'
  local deadproxy="http://a.deadlink/"

  case "$1" in
  boot | on)
    _proxy_set $localproxy
    ;;
  dead)
    _proxy_set $deadproxy
    ;;
  off)
    _proxy_unset
    ;;
  esac

  if [[ $1 == 'boot' ]]; then
    echo 'Proxy on'
  elif [[ -n $ALL_PROXY ]]; then
    echo "Proxy: $ALL_PROXY"
  else
    echo "Proxy off"
  fi
}

# * ----------------------------------------------------------------

proxy boot

```

### ginit

自用，给当前目录快速初始化 git。

```bash
#!/bin/bash

# * ----------------------------------------------------------------

if [[ $(git rev-parse --is-inside-work-tree) ]]; then
  echo "Already in a git repository"
  exit 1
fi

# * ----------------------------------------------------------------

git_commit_init() {
  touch .gitignore
  git add .gitignore
  git commit -m "feat(init): initial commit"
  git tag init
}

# * ----------------------------------------------------------------

git init

if [ -f .gitignore ]; then
  TMP_FILE=$(mktemp)
  mv .gitignore $TMP_FILE

  git_commit_init

  mv $TMP_FILE .gitignore
else
  git_commit_init
fi

```
