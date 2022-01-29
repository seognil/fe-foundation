---
title: 用快捷键控制视频播放
date: 2019-12-14 22:03:19
permalink: /workspace/my-video-player-shortcuts
categories:
  - 开发环境
tags:
  - 脚本
---

# 用快捷键控制视频播放

如果你有通过视频学习的经历，  
你应该知道快进快退暂停调速等视频控制功能有多重要。

## 我的快捷键

我在用的一组桌面快捷键，  
通过覆盖键盘左侧，实现方便的（左手）单手控制。

（注意到 [FrontendMasters](https://frontendmasters.com/) 的 <kbd>Q</kbd> 键是切换视频质量，有冲突）

- 通用
  - <kbd>Q</kbd>：快退 3 秒
  - <kbd>E</kbd>：快进 3 秒
  - <kbd>Z</kbd>：播放速度 -0.25
  - <kbd>X</kbd>：播放速度 +0.25
  - <kbd>V</kbd>：在（当前播放速度，1）之间切换
- 网页 Only（YouTube 自带）
  - <kbd>T</kbd>：切换网页全屏
  - <kbd>C</kbd>：切换字幕/弹幕
- 本地 Only
  - <kbd>PageUp</kbd>：上一文件
  - <kbd>PageDown</kbd>：下一文件
  - <kbd>Shift</kbd>+<kbd>←</kbd>：快进 30 秒
  - <kbd>Shift</kbd>+<kbd>→</kbd>：快退 30 秒

## 工具

### Video Speed Controller

Chrome 插件：[Video Speed Controller](https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk)

### User JavaScript and CSS

Chrome 插件：[User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)

自定义脚本注入插件

我在 BiliBili 的配置，实现类似 YouTube 的观看体验。

```javascript
{
  let maskShown = true;
  document.addEventListener('keypress', (e) => {
    if (e.key === 't') {
      $('.bilibili-player-video-web-fullscreen').click();
    }
    if (e.key === 'c') {
      // * use opacity but not disable the feature
      maskShown = !maskShown;
      $('.bilibili-player-video-danmaku').css(
        'opacity',
        maskShown ? 1 : 0,
      );
      $('.bilibili-player-video-danmaku-switch').css(
        'opacity',
        maskShown ? 1 : 0.1,
      );
    }
  });
}
```

### IINA/PotPlayer

都支持快捷键改键

- [IINA](https://iina.io/)：macOS 上的播放器
- [PotPlayer](https://potplayer.daum.net/)：Windows 上的播放器
