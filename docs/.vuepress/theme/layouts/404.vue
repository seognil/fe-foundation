<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>链接挂了呢…</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回到主页</router-link>
    </div>
  </div>
</template>

<script>
const msg = [
  //
  `本站处于迭代期，如果结构调整导致链接失效…非常抱歉 >_<`,
].join('\n');

export default {
  methods: {
    getMsg() {
      return msg;
    },
  },
};
</script>
