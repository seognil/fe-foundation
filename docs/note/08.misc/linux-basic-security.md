---
title: Ubuntu 服务器基本防护
date: 2019-11-10 21:57:03
permalink: /misc/linux-basic-security
categories:
  - 杂项
tags:
  - 杂谈
---

# Ubuntu 服务器基本防护

记录一下步骤

- 加一个新用户
- 禁用 root 登录
- 禁用密码登录（只允许 rsa）
- 修改 ssh 端口
- 防火墙

## 用户

```bash
# * 加用户
sudo adduser USERNAME
# * 加到 root 组
sudo usermod -aG sudo USERNAME

# * 删除用户（可能要先 kill 该用户进程）
# ps -aux | grep USERNAME
# sudo pkill -u USERNAME
sudo deluser USERNAME
sudo groupdel GROUPNAME

# * 查看用户和组
cat /etc/passwd
cat /etc/group

# * 修改密码，ubuntu 初始 root 无密码
sudo su root
sudo passwd root

# * sudo 免密
echo -e "\n USERNAME   ALL=(ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers

# * 加 shh key （在 host 操作 需要在关闭密码登录前操作）
ssh-copy-id -i ~/LOCALKEY.public USER@HOST

# * ssh 认证文件位置 每条 append
# /root/.ssh/authorized_keys
# /home/USERNAME/.ssh/authorized_keys

# * change user
su
```

## ssh 配置

```bash
# * check
# sudo vi /etc/ssh/sshd_config

# * tweak config
sudo sed -i 's/^.*\bPort\b.*$/Port 0000/' /etc/ssh/sshd_config
sudo sed -i 's/^.*PasswordAuthentication.*$/PasswordAuthentication no/' /etc/ssh/sshd_config
# sudo sed -i 's/^.*PasswordAuthentication.*$/PasswordAuthentication yes/' /etc/ssh/sshd_config

# * default is 'prohibit-password', so its not necessery
sudo sed -i 's/^.*PermitRootLogin.*$/PermitRootLogin no/' /etc/ssh/sshd_config
# sudo sed -i 's/^.*PermitRootLogin.*$/PermitRootLogin yes/' /etc/ssh/sshd_config
# sudo sed -i 's/^.*PermitRootLogin.*$/#PermitRootLogin prohibit-password/' /etc/ssh/sshd_config

# * 重启服务
sudo service sshd restart
# sudo systemctl restart sshd
```

## ufw 防火墙

```bash
# * 拒绝所有，打开指定

sudo ufw default deny incoming

# sudo ufw allow ssh
sudo ufw allow 0000
sudo ufw allow from 0.0.0.0 to any port 0000 proto tcp

# * 禁止 ping
sudo copy /etc/ufw/before.rules /etc/ufw/before.rules.bak
sudo sed -ir 's/\(ufw-before-input -p icmp --icmp-type.*\) .*/\1 DROP/' /etc/ufw/before.rules
# sudo sed -ir 's/\(ufw-before-input -p icmp --icmp-type.*\) .*/\1 ACCEPT/' /etc/ufw/before.rules

# * 直接改了配置文件需要重启 ufw
sudo ufw reload
```

## 系统

```bash
# * 设置主机名
hostnamectl set-hostname  example.com

# * 查看 shell
echo $SHELL
cat /etc/shells

# * 查看系统信息
cat /etc/*-release
```

## 其他命令

```bash

# * 生成秘钥
ssh-keygen -t rsa -b 4096 -f ~/folder/id_rsa

# * 端口转发
ssh -LN localhost:2000:theirlocalhost:80 root@0.0.0.0 -p 0000

# * 清除某个 known_hosts
ssh-keygen -R HOSTNAME

# * proxy
export http_proxy=http://
export https_proxy=http://
```
