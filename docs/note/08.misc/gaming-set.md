---
title: 游戏环境折腾笔记（2022-01）
date: 2022-01-16 18:54:11
permalink: /misc/gaming-set/
categories:
  - 游戏
tags:
  - 游戏
  - 硬件
---

# 游戏环境折腾笔记（2022-01）

> 电子产品折旧率高，通常来说隔几年就会有更多快好省的产品，没必要追求顶配一步到位。

（资料整理，仅供参考）

## 平台

### PC 硬件

总结：现阶段比较理想的是 Win10 + N 卡，可光追可串流（**不过现在谁买得到原价显卡啊**）

- Win11 + DX12
  - 存储直通
  - DX12U 指 DirectX 12 Ultimate
  - 但是 Win11 系统现在做得挺烂的（全网迷之问题出现率比 Win10 高多了、UI 逻辑也一塌糊涂）
- 显卡
  - [PassMark 显卡天梯](http://www.videocardbenchmark.net/high_end_gpus.html)
  - N 卡光追 + DLSS 游戏覆盖率比 A 家要好一些
- 内存
  - [不是贵的才是对的 DDR5 VS DDR4 内存超频游戏测试 20 款游戏 3 种分辨率告诉你搭配 12 代酷睿内存超频能为游戏带来多少提升？](https://www.bilibili.com/video/BV1Gr4y1i7vN) 省流：现在 DDR5 没卵用，中高频 DDR4 凑合用用得了

### PS5

- [PS5 小白问题全记录 篇一：国行 ps5 真香，你想要的都有，懂的都懂 - 什么值得买](https://post.smzdm.com/p/a855ng67/)
- [ps5 国行怎么变成港版 超详细教程 手把手教你 - TGBUS](https://www.tgbus.com/news/157425)

### Xbox Series S/X

- [超详细的 XGP 购买指南！最便宜的 XGPU 购买指引！- 游民星空](https://club.gamersky.com/activity/479639?club=74)

省流：

没有锁区概念，账号全区域自由切换。**直接淘宝买三年 XGPU** 就好（阿根廷的朋友）。

系统（Xbox/PC）**区域调到美国**或者香港，语言调回简体或繁体中文，不然游戏库很不全（比如搜不到战争机器/光环）。

PC 上用 [Xbox App](https://www.microsoft.com/zh-cn/p/xbox/9mv0b5hzvk9z) 也能玩（大部分，不是全部）。但是 PC 的 EA Play 走的 EA 自家平台，有点烂，**推荐入个 XSX**（性价比高）。

## 扩展存储

### 关于 USB 接口

- [PlayStation®5 console USB ports guide - PlayStation](https://www.playstation.com/en-us/support/hardware/ps5-usb-ports-guide/)
- [PS5 has this killer feature Xbox Series X can't beat](https://www.tomsguide.com/news/ps5-has-this-killer-feature-xbox-series-x-cant-beat)

省流：

- PS5 有三个 10 Gbps USB 接口（前 Type-C + 后 Type-A \* 2）
- XSS/X 只有三个 5 Gbps USB 接口

### 关于 SSD

产品宣传页上不会告诉你的事情：

- 持续和满盘后写入都会掉速，就看掉到多少了（有些垃圾盘掉速后性能还不如 U 盘）
- 发热（一般越快越热，压个散热片就好了）

### PS5 （PCI-E 4.0 SSD）

- [如何将 M.2 SSD 添加到 PS5 主机 - PlayStation](https://www.playstation.com/zh-hans-hk/support/hardware/ps5-install-m2-ssd/)
- [防踩雷，PS5 玩家必收藏！高/低规格 SSD 硬盘外接性能实测 - BiliBili](https://www.bilibili.com/video/BV12f4y1H7fd)
- [【PS5 最全扩容方案】教程+对比：M.2 固态 VS 移动固态 VS 机械硬盘(7200&5400) - BiliBili](https://www.bilibili.com/video/BV1U34y1z7GS)
- [Can the Slowest PS5 SSD Upgrade Run Ratchet and Clank: Rift Apart? - YouTube](https://www.youtube.com/watch?v=zWQs4UpiKlg)

省流，有几个关键点：

- 内接扩展的方案基本上就是全功能了，但是要满足
  - PCI-E 4.0 x4 M.2 NVMe SSD
  - 连续读取 5500 MB/s 以上
    - （不过纸面不达标的最弱的 SN750 SE 也能运行，且差距不大）
- USB 外接硬盘只能运行 PS4 游戏，或者作备份空间腾挪用途
  - （USB 外接硬盘的方案可以参考下一节 Xbox 的）

一些满足需求的 4.0 固态，以 1TB 为例：

- 西数
  - SN750 SE
    - [京东自营](https://item.jd.com/100025295846.html)
    - 读写 3600/3830 MBps；
  - SN850
    - [京东自营](https://item.jd.com/100009210507.html)、[Benchmark](https://www.tomshardware.com/reviews/wd-black-sn850-m-2-nvme-ssd-review/3)
    - 读写 7000/5300 MBps；全盘写入最低 1340 MBps
- 希捷
  - FireCuda 520
    - [京东自营](https://item.jd.com/100010087346.html)、[Benchmark (2TB)](https://www.tomshardware.com/reviews/seagate-firecuda-520-ssd/2)
    - 读写 5000/4400 MBps；全盘写入最低 600 MBps
  - FireCuda 530
    - [京东自营](https://item.jd.com/100024621732.html)、[Benchmark](https://www.tomshardware.com/reviews/seagate-firecuda-530-m2-nvme-ssd-review/3)
    - 读写 7300/6000 MBps；全盘写入最低 1600 MBps
- 铠侠
  - SE10（EXCERIA PRO）
    - [京东自营](https://item.jd.com/100015438959.html)
    - 读写 7300/6400 MBps；
- 英睿达
  - P5 Plus
    - [京东自营](https://item.jd.com/100024883350.html)、[Benchmark](https://www.tomshardware.com/reviews/crucial-p5-plus-m2-nvme-ssd-review/3)
    - 读写 6600/5000 MBps；全盘写入最低 1300 MBps
- 致钛
  - Ti Pro 7000
    - [京东自营](https://item.jd.com/100017474683.html)、[Benchmark](https://www.expreview.com/81587.html)
    - 读写 7400/5400 MBps；全盘写入最低 835 MBps
- 三星
  - 980 Pro
    - [京东自营](https://item.jd.com/100008757393.html)、[Benchmark](https://www.tomshardware.com/reviews/samsung-980-pro-m-2-nvme-ssd-review/3)
    - 读写 7000/5100 MBps；全盘写入最低 1800 MBps

### Xbox Series S/X （Portable SSD）

- [管理 Xbox 主机上的存储 - Microsoft](https://support.xbox.com/zh-CN/help/hardware-network/storage/manage-storage)
- [将 Seagate 存储扩展卡用于 Xbox 系列 X|S - Microsoft](https://support.xbox.com/zh-CN/help/hardware-network/storage/use-storage-expansion-card-xbox-series-x-s)
- [Xbox Series X|S 扩容全攻略全面详尽版&自制高速扩展卡评测 - BiliBili](https://www.bilibili.com/video/BV1Yb4y117hu)
- [Xbox Series X: What's The Best SSD Option For Back Compat Xbox Games? - YouTube](https://www.youtube.com/watch?v=7y-Fy1Q2O2k)

省流：

- 专用的扩展棒（希捷，可以无脑买，可以视为内置存储，但是非常贵）
  - [京东自营](https://item.jd.com/100009909841.html)、[官网产品页](https://www.seagate.com/cn/zh/products/gaming-drives/xbox-gaming/storage-expansion-for-xbox-series-x/)
- USB 外接硬盘只能跑老游戏或做备份，针对 Series S/X 优化的游戏只能移到主机中运行（和 PS5 类似）
  - 受限于 USB 接口速度（5 Gbps），更快的固态感知不强，是个正经固态就行
- （还有其他的方式路子太野了…这里略，自制固态也略，可以参考下一节 PC 的）

移动机械硬盘现在基本都是叠瓦盘了，没什么意思（有需求可以看 3.5 寸 pmr 盘）。目前固态硬盘的价格跌倒 1 块 1G 以内。10 GBps 的品牌零售移动固态性价比也不错了（相比买裸盘自己套壳），更高规格的没必要，更低规格的性价比没那么显著，综合来说可以考虑下（比如 SanDisk Extreme v2）。以 1TB 为例：

- SanDisk
  - E30（无后缀的型号）
    - [京东自营](https://item.jd.com/100009615099.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/sandisk-usb-3-2-ssd#SDSSDE30-1T00-Z25)
    - 读写 520/-- MBps；
  - E60（Extreme v1）
    - [京东自营](https://item.jd.com/6510874.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/sandisk-extreme-usb-3-1-ssd#SDSSDE60-1T00-Z25)、[Benchmark](https://www.tomshardware.com/reviews/sandisk-extreme-v2-portable-ssd-review/2)
    - 读写 550/-- MBps；全盘写入最低 500 MBps，后期有一些 GC Pause
  - E61（Extreme v2）
    - [京东自营](https://item.jd.com/100016047082.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/sandisk-extreme-usb-3-2-ssd#SDSSDE61-1T00-Z25)、[Benchmark](https://www.tomshardware.com/reviews/sandisk-extreme-v2-portable-ssd-review/2)
    - 读写 1050/1000 MBps；（SN550E），全盘写入最低 850 MBps
  - E81（Extreme Pro v2）
    - [京东自营](https://item.jd.com/100009085871.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/sandisk-extreme-pro-usb-3-2-ssd#SDSSDE81-1T00-Z25)、[Benchmark (2TB)](https://www.tomshardware.com/reviews/sandisk-extreme-pro-v2-portable-ssd-review/2)
    - 读写 2000/2000 MBps；（SN730），全盘写入最低 1600 MBps
- 西数
  - Elements SE
    - [京东自营](https://item.jd.com/100027431448.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/wd-elements-se-usb-3-0-ssd#WDBAYN0010BBK-CESN)
    - 读写 400/-- MBps；
  - My Passport
    - [京东自营](https://item.jd.com/100014561102.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/wd-my-passport-usb-3-2-ssd#WDBAGF0010BBL-CESN)、[Benchmark](https://www.tomshardware.com/reviews/wd-my-passport-ssd-review/2)
    - 读写 1050/1000 MBps；（SN550E），全盘写入最低 710 MBps
  - WD_BLACK D30
    - [京东自营](https://item.jd.com/100021803210.html)、[官网产品页](https://www.westerndigital.com/products/external-drives/wd-black-d30-game-drive-usb-3-2-ssd#WDBATL0010BBK-WESN)
    - 读写 900/-- MBps；
  - WD_BLACK P50
    - [京东自营](https://item.jd.com/100010567290.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/portable-drives/wd-black-p50-game-drive-usb-3-2-ssd#WDBA3S0010BBK-CESN)、[Benchmark](https://www.tomshardware.com/reviews/wd-black-p50-game-drive-ssd-review/2)
    - 读写 2000/2000 MBps；（SN750），全盘写入最低 1475 MBps
- 三星
  - T7
    - [京东自营](https://item.jd.com/100007164145.html)、[Benchmark](https://www.tomshardware.com/reviews/samsung-t7-touch-portable-ssd/2)
    - 读写 1050/1000 MBps；全盘写入最低 600 MBps
- 英睿达（不推荐，缓外掉速严重）
  - X6
    - [京东自营](https://item.jd.com/100016979044.html)、[Benchmark (2TB)](https://www.tomshardware.com/reviews/crucial-x6-portable-ssd-review/2)
    - 读写 540/-- MBps；全盘写入掉速会到 100 MBps 以下
  - X8
    - [京东自营](https://item.jd.com/100013021696.html)、[Benchmark](https://www.tomshardware.com/reviews/crucial-x8-portable-ssd/3)
    - 读写 1050/1000 MBps；全盘写入掉速会到 100 MBps 以下

### PS4/Xbox （更换 SATA SSD）

- PS4/PS4 Pro
  - [PS4 Pro 开箱+更换硬盘实录 篇二：下篇：PS4 Pro 硬盘更新、安装系统、加载速度测试](https://www.playstation.com/zh-hans-cn/support/hardware/ps4-upgrade-hdd/)
  - [PS4：升级内置硬盘 - PlayStation](https://www.playstation.com/zh-hans-cn/support/hardware/ps4-upgrade-hdd/)
- Xbox One
  - [无需 UBuntu，最高效的 XBox 换硬盘方法。](https://post.smzdm.com/p/apzemrlx/)
  - [执行离线系统更新 - Microsoft](https://support.xbox.com/zh-CN/help/hardware-network/console/system-update-solution/offline-system-update)

SATA 现在比较成熟了，正经盘基本不会有太多掉速。

一些多快好省的 1TB SATA SSD：

- 致钛
  - SC001
    - [京东自营](https://item.jd.com/100008587483.html)、[Benchmark](https://www.expreview.com/76016.html)
    - 读写 520/510 MBps；全盘写入最低 470 MBps
- 铠侠
  - TC10（EXCERIA）
    - [京东自营](https://item.jd.com/100007080971.html)、[Benchmark](https://www.guru3d.com/articles_pages/kioxia_exceria_960_gb_sata3_ssd_review,14.html)
    - 读写 555/540 MBps；全盘写入最低 400 MBps
- 英睿达
  - MX500（SATA）
    - [京东自营](https://item.jd.com/6164587.html)、[Benchmark](https://www.tomshardware.com/reviews/crucial-mx500-ssd-review-nand,5390-3.html)
    - 读写 560/510 MBps；全盘写入最低 400 MBps

### PC （PCI-E 3.0 SSD）

- [Does a Faster SSD Matter for Gamers?? - $h!t Manufacturers Say - YouTube](https://www.youtube.com/watch?v=4DKLA7w9eeA)

省流：NVMe 和 SATA 针对游戏场景感知不强，是个正经 SSD 就行，PCI-E 4.0 目前对 PC 来说几乎有点过剩。

一些多快好省的 1TB PCI-E 3.0 SSD：

- 致钛
  - PC005
    - [京东自营](https://item.jd.com/100008608665.html)、[Benchmark](https://www.expreview.com/76002.html)
    - 读写 3500/2900 MBps；全盘写入最低 575 MBps
- 铠侠
  - RC10（EXCERIA）
    - [京东自营](https://item.jd.com/100012956294.html)、[Benchmark](https://www.techpowerup.com/review/kioxia-exceria-1-tb/6.html)
    - 读写 1700/1600 MBps；全盘写入最低 600 MBps
  - RC20（EXCERIA G2）
    - [京东自营](https://item.jd.com/100015242141.html)
    - 读写 2100/1700 MBps；
  - RD20（EXCERIA PLUS G2）
    - [京东自营](https://item.jd.com/100017367170.html)、[Benchmark (2TB)](https://www.techpowerup.com/review/kioxia-exceria-plus-g2-2-tb/6.html)
    - 读写 3400/3200 MBps；全盘写入最低 1400 MBps
- 英睿达
  - P2
    - [京东自营](https://item.jd.com/100016795946.html)、[Benchmark](https://www.tomshardware.com/reviews/crucial-p2-m-2-nvme-ssd/2)
    - 读写 2400/1800 MBps；全盘写入最低 450 MBps
  - P5
    - [京东自营](https://item.jd.com/100013613734.html)、[Benchmark](https://www.tomshardware.com/reviews/crucial-p5-m-2-nvme-ssd-review/2)
    - 读写 3400/3000 MBps；全盘写入最低 1100 MBps
- 西数（最近的固件似乎有冷数据读取掉速问题）
  - SN550
    - [京东自营](https://item.jd.com/100005926991.html)、[Benchmark](https://www.tomshardware.com/reviews/wd-blue-sn550-m2-nvme-ssd-review-best-dramless-ssd-yet/3)
    - 读写 2400/1950 MBps；全盘写入最低 880 MBps
  - SN750
    - [京东自营](https://item.jd.com/100002206075.html)、[Benchmark](https://www.tomshardware.com/reviews/wd-black-sn750-ssd,5957-3.html)
    - 读写 3470/3000 MBps；全盘写入最低 1600 MBps
- SanDisk
  - Ultra
    - [京东自营](https://item.jd.com/100011213836.html)
    - 读写 2400/1950 MBps；
  - Extreme Pro
    - [京东自营](https://item.jd.com/7652347.html)、[Benchmark](https://www.tomshardware.com/reviews/sandisk-extreme-pro-m.2-nvme-3d-ssd,5538-2.html)
    - 读写 3400/2800 MBps；全盘写入最低 1400 MBps
- 三星
  - 970 EVO Plus
    - [京东自营](https://item.jd.com/100002183461.html)、[Benchmark](https://www.tomshardware.com/reviews/samsung-970-evo-plus-ssd,5608-3.html)
    - 读写 3500/3300 MBps；全盘写入最低 1700 MBps
  - 980
    - [京东自营](https://item.jd.com/100018768506.html)、[Benchmark](https://www.tomshardware.com/reviews/samsung-980-m2-nvme-ssd-review/3)
    - 读写 3500/3000 MBps；全盘写入最低 430 MBps

### Nintendo Switch （TF 卡）

- [microSD Card FAQ - Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22481/~/microsd-card-faq)

一般来说给 NS 做扩展，官方文档推荐 60-95 MBps （应该是指读取）的 UHS-I microSD 卡就足够了（再高性能应该也发挥不出来）。

- [存储卡选购，看这一篇就够咯 - 知乎](https://zhuanlan.zhihu.com/p/80646515)
- [摄影新手也要知道的存储卡知识 | 2022 新版 - 知乎](https://zhuanlan.zhihu.com/p/57915063)

TF 卡上标识的含义：

- I、II、III：UHS-I、UHS-II、UHS-III，表示技术代际（之间似乎有兼容的问题，不过通常都是 USH-I）
- 连续读写
  - U1、U3：最低 10/30 MBps 写入
  - C10：最低 10 MBps 写入
  - V10、V30、V60：最低 10/30/60 MBps 写入
- A1、A2：A For App，用来表示随机读写性能（也是越大越好），不过 NS 场景下意义不大。

TF 卡受限于体积，读写性能很有限，高速卡公示的速度只是特定条件下的最高速度，非高速卡甚至很多都没标写入速度，这时候可以以速度等级标识作为参考。（比如 U3/V30 也有 30 MBps 作为保证）

要更快的读写速度，选更大容量和更高规格型号就好（加钱可及，但是没必要）。

以 128G 为例：

- 三星
  - Evo（黄卡）
    - [京东自营](https://item.jd.com/100013314296.html)、[官网产品页](https://www.samsung.com/us/computing/memory-storage/memory-cards/evo-microsdxc-memory-card-128gb-mb-mp128ha-am/)
    - 读写 100/-- MBps；U3
  - Evo Plus（红卡）
    - [京东自营](https://item.jd.com/100013308318.html)、[官网产品页](https://www.samsung.com/us/computing/memory-storage/memory-cards/evo-plus-microsdxc-memory-card-128gb-mb-mc128ha-am/)
    - 读写 100/60 MBps；U3
  - Evo Plus（2021 白卡）
    - [京东自营](https://item.jd.com/100013973839.html)、[官网产品页](https://www.samsung.com/us/computing/memory-storage/memory-cards/evo-plus---adapter-microsdxc-128gb-mb-mc128ka-am/)
    - 读写 130/-- MBps；U3、V30、A2
  - Pro Plus（蓝卡）
    - [京东自营](https://item.jd.com/100026098654.html)、[官网产品页](https://www.samsung.com/us/computing/memory-storage/memory-cards/pro-plus---reader-microsdxc-128gb-mb-md128kb-am/)
    - 读写 160/120 MBps；U3、V30、A2
- SanDisk
  - Ultra
    - [京东自营](https://item.jd.com/1887518.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/memory-cards/sandisk-ultra-uhs-i-microsd#SDSQUA4-128G-GN6MA)
    - 读写 120/-- MBps；U1、A1
  - Extreme
    - [京东自营](https://item.jd.com/3024767.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/memory-cards/sandisk-extreme-uhs-i-microsd#SDSQXA1-128G-ZN6MA)
    - 读写 160/90 MBps；U3、V30、A2
  - Switch 认证
    - [京东自营](https://item.jd.com/100010373462.html)、[官网产品页](https://www.westerndigital.com/zh-cn/products/memory-cards/sandisk-nintendo-switch-microsd#SDSQXAO-128G-ZNCZN)
    - 读写 100/90 MBps；
- Kingston
  - Canvas Select Plus
    - [京东自营](https://item.jd.com/100003467417.html)、[官网产品页](https://www.kingston.com.cn/cn/memory-cards/canvas-select-plus-microsd-card)
    - 读写 100/-- MBps；U1、V10、A1
  - Canvas Go!Plus
    - [京东自营](https://item.jd.com/100011846980.html)、[官网产品页](https://www.kingston.com.cn/cn/memory-cards/canvas-select-plus-microsd-card)
    - 读写 170/90 MBps；U3、V30、A2
- 铠侠
  - Exceria
    - [京东自营](https://item.jd.com/100007081065.html)、[官网产品页](https://personal.kioxia.com/en-apac/micro-sd/exceria.html)
    - 读写 100/-- MBps；U1
  - EXCERIA PLUS（只有 256G）
    - [京东自营](https://item.jd.com/100012956466.html)、[官网产品页](https://personal.kioxia.com/en-apac/micro-sd/exceria-plus.html)
    - 读写 100/85 MBps；U3、V30、A1
- 雷克沙
  - 633x
    - [京东自营](https://item.jd.com/100011325168.html)、[官网产品页](https://www.lexar.com/en/product/lexar-high-performance-633x-microsdhc-microsdxc-uhs-i-cards-blue-series/)
    - 读写 100/45 MBps；U3、V30、A1
  - 1066x
    - [京东自营](https://item.jd.com/100016340754.html)、[官网产品页](https://www.lexar.com/en/product/lexar-professional-1066x-microsdxc-uhs-i-cards-silver-series/)
    - 读写 160/120 MBps；U3、V30、A2
  - Play
    - [京东自营](https://item.jd.com/100018187482.html)、[官网产品页](https://www.lexar.com/en/product/lexar-play-microsdxc-uhs-i-card/)
    - 读写 150/-- MBps；U1、V10、A1

## 显示器

显示器相比电视价格区间更大，按功能各取所需就行了。

2K/4K/带鱼 + IPS + 60/75/120Hz + (HDR)

## 便携屏

（小众需求，没有什么量产水桶型号，没什么研究）

## 电视

### 参考资料

- [2021 年索尼电视产品线介绍及选购攻略 - 知乎](https://zhuanlan.zhihu.com/p/374571182)
- [索尼电视 2022 年新品信息 - 知乎](https://zhuanlan.zhihu.com/p/453357912)
- [PS5 音画质设置研究及电视推荐（HDR、120Hz、环绕声） - 知乎](https://zhuanlan.zhihu.com/p/326928209)
- [殃及主机、显卡与功放，HDMI 2.1 的那点糟心事 - 知乎](https://zhuanlan.zhihu.com/p/409413485)
- [最适合 PS5 的游戏电视？索尼 X91J 体验 | 先睹为快 - BiliBili](https://www.bilibili.com/video/BV1kp4y1b7Vy)
- [Sony XH90/ X900H Best Settings for PS5 & Xbox Series X Gaming - YouTube](https://www.youtube.com/watch?v=7VEC9Zvm588)

### 型号

- 55X90J [京东自营](https://item.jd.com/100018938206.html)
- 65X95J [京东自营](https://item.jd.com/100011943637.html)
- 65X95K（2022 新品）

索尼型号的意思：55X90J

- 55 表示尺寸
- X90 表示产品定位（X90 -> X95 -> Z9，堆更多特性）
- J 表示代际（ H -> J -> K ）

### （笔记）

#### 120 帧

现在没必要太追求 4K@120，不是所有游戏都支持（算力也跟不上啊） [PS5 and Xbox Series X games with 120fps support](https://www.techradar.com/news/ps5-and-xbox-series-x-games-with-120fps-support)

- PS5
  - [如何在 PlayStation®5 主机上启动和调节 4K 分辨率](https://www.playstation.com/zh-hans-cn/support/hardware/ps5-4k-resolution-guide/)
- Xbox
  - [配置 Xbox Series X|S 以支持 FPS 增强和自动 HDR - Microsoft](https://support.xbox.com/zh-CN/help/hardware-network/display-sound/fps-boost-and-auto-hdr)
  - [在 Xbox Series X 上设置 120 Hz 的 4K 游戏 - Microsoft](https://support.xbox.com/zh-CN/help/hardware-network/display-sound/4k-gaming-at-120hz)

#### HDMI 2.1

主要是带宽大，就能高分高刷了，用原装线即可

- VRR：Variable refresh rate，可变刷新率

#### HDR

HDR10、HDR400、HDR600、HDR1000 主要区别在峰值亮度

## 投影仪

### 参考资料

- [选投影仪：从入门到精通，3000 元 10 款横评 - BiliBili](https://www.bilibili.com/video/BV13L4y1n7WQ)
- [2022 年 4K 投影仪选购攻略及 4K 投影仪推荐 - 知乎](https://zhuanlan.zhihu.com/p/368055845)

### 型号

- 极米 new z6x
  - [京东自营](https://item.jd.com/100009019727.html)
  - HDMI 2.0、1080P、60 帧、MEMC、HDR10、0.33 DMD、800 流明
- 极米 RS Pro2
  - [京东自营](https://item.jd.com/100020967254.html)
  - HDMI 2.0、4K、120 帧\*、MEMC、HDR10、0.47 DMD、2200 流明
- 明基 TK700st（st 版为短焦）
  - [京东自营](https://item.jd.com/100012615263.html)、[官网产品页 TK700st](https://www.benq.com/zh-tw/projector/home-entertainment/tk700sti.html)、[官网产品页 TK700](https://www.benq.com/zh-tw/projector/home-entertainment/tk700.html)
  - HDMI 2.0、4K、240 帧\*、（无 MEMC）、HDR10、0.47 DMD、3000 流明
- 明基 TK850
  - [京东自营](https://item.jd.com/100006643327.html)、[官网产品页](https://www.benq.com/zh-tw/projector/home-entertainment/tk850.html)
  - HDMI 2.0、4K、60 帧、MEMC、HDR10、0.47 DMD、3000 流明

### （笔记）

#### 4K

真 4K == True 4K == 抖 4K

原生 4K == 不是抖出来的

万元价位的 4K 都是抖出来的，原生 4K 真买不起…

#### 对角线英寸 -> 厘米宽度 系数：2.2138

120 英寸 == 宽 266 厘米

```ts
2.54 * (16 / (16 ** 2 + 9 ** 2) ** 0.5); // => 2.213801864296355
```

#### 投射比：投影距离 / 成像宽度

投射比越小，需要的投屏空间越小

比如 `RS Pro2` （宣传页） 1.2 的投射比：

```ts
1.2 * (150 * 2.2138); // => 3.98 米
```

## 串流

### PC -> 手机（Moonlight）

（只有 N 卡可以）

- Moonlight：<https://moonlight-stream.org/>
- [【亦】掌机主机 PC 大一统！我把家打造成了游戏宅的天堂 - BiliBili](https://www.bilibili.com/video/BV1g341187id)
- [【亦】画质进化！手机玩 3A，挑战 HDR 游戏串流 - BiliBili](https://www.bilibili.com/video/BV1rR4y1g7px)

### PS/Xbox -> PC（采集卡）

- 圆刚 GC553
  - [京东自营](https://item.jd.com/8770009.html)
  - USB 3.0 Type-C、HDMI 2.0、4K@30、1080P@120
- 圆刚 GC573
  - [京东自营](https://item.jd.com/8770003.html)
  - PCI-E、HDMI 2.0、4K@60、1080P@240、HDR

### PS4/5 -> 手机（Remote Play）

（TODO）

### Xbox -> 手机/平板（Xbox App）

[用 iPad 也能玩地平线 4！(Xbox 远程连接) - BiliBili](https://www.bilibili.com/video/BV1by4y1r7Ya)

手机/平板上装 Xbox App

- iOS 成功（局域网成功；蜂窝能启动，但是连不上，怀疑是 NAT 问题）
- Android 失败（App 打开一直在 loading，不知道是不是国内专属问题）

画面有点糊，有轻微延迟，不过总体效果还不错

### Xbox Series S/X -> Mac M1（失败）

试了两个方法都不行：

1. 装 Xbox App（Mac 不支持）：

苹果禁止安装 ipa 的手机应用了：[Apple once again starts blocking M1 Mac users from side loading iPhone and iPad apps](https://9to5mac.com/2021/02/09/apple-once-again-starts-blocking-m1-mac-users-from-side-loading-iphone-and-ipad-apps/)

2. OneCast（XSX 不支持，只支持 Xbox One）

OneCast <https://www.onecast.me/download/>

> Please note that at the current time, OneCast only supports Xbox One generation consoles. The newly released Xbox Series X/S are not currently supported.

因为 Xbox Series S/X 上没有 allow game streaming to other devices 这个选项：[XBOX Series X does not support streaming to a Windows 10 PC!! - YouTube](https://www.youtube.com/watch?v=r9_gGbPf1uw)

## 云游戏（不太行）

试过 XBox Cloud 的，国内网络根本不行，延迟+卡顿

## 外设

### 手机手柄

- 雷蛇骑仕
  - [京东自营 iOS 版](https://item.jd.com/10020769139716.html)
  - [京东自营 Android 版](https://item.jd.com/10020769139715.html)

### 无线耳机

- 赛睿寒冰 7X
  - 支持 XBox、PS、PC、NS；2.4G 接收器；似乎只有海淘
  - [官网产品页 7X](https://steelseries.com/gaming-headsets/arctis-7x)、[官网产品页 7P](https://steelseries.com/gaming-headsets/arctis-7p)
  - 7X 和 7P 的区别：X for Xbox（也能支持 PS）、P for PS（不支持 Xbox），所以 7X 就好了。
  - [【赫日】详谈 Steelseries Arctis 赛睿寒冰 7X 全平台无线耳机 - BiliBili](https://www.bilibili.com/video/BV1Fy4y1j7zv)
- PS PULSE 3D
  - [京东自营](https://item.jd.com/100020673354.html)、[京东国际](https://npcitem.jd.hk/100017496034.html)
  - （唯不支持 Xbox）
  - [次世代游戏耳机值不值？PS5 专用耳机体验介绍 - BiliBili](https://www.bilibili.com/video/BV19h411y7dY)
