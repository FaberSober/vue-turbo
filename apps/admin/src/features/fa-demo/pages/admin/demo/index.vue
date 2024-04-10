<script lang="ts" setup>
definePage({
  meta: {
    requiresAuth: true,
  },
});

import styles from './demo.module.scss';
import '@/features/fa-demo/styles/demo.scss';
// import { FaButton } from '@fa/ui'; // 使用unplugin-vue-components支持自定义导入了

console.log('styles', styles);
</script>

<template>
  <main>
    <h1>Demo - Index</h1>
    <n-button type="primary">naive-ui</n-button>

    <div class="demo-text">SCSS样式测试</div>

    <div :class="styles.demoText2">SCSS样式测试（局部）</div>

    <div class="demo-text-global">SCSS样式测试（全局）</div>

    <n-date-picker type="date" />

    <FaButton name="hello" />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 20px;
}

.demo-text {
  color: red;
}
</style>
