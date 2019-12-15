# 用快捷键控制视频播放

如果你有通过视频学习的经历，  
你应该知道快进快退暂停调速等视频控制功能有多重要。

## 我的快捷键

我在用的一组快捷键，  
通过覆盖键盘左侧，实现方便的（左手）单手控制。

- 通用
  - Q：快退 3 秒
  - E：快进 3 秒
  - Z：播放速度 -0.25
  - X：播放速度 +0.25
  - V：在（当前播放速度，1）之间切换
- 网页 Only（YouTube 自带）
  - T：切换网页全屏
  - C：切换字幕/弹幕
- 本地 Only
  - PageUp：上一文件
  - PageDown：下一文件
  - Shift + 左：快进 30 秒
  - Shift + 右：快退 30 秒

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
      $('.bilibili-player-video-danmaku').css('opacity', maskShown ? 1 : 0);
      $('.bilibili-player-video-danmaku-switch').css('opacity', maskShown ? 1 : 0.1);
    }
  });
}
```

### IINA/PotPlayer

macOS 和 Windows 上的播放器
