<script lang="ts" setup>
definePage({
  meta: {
    requiresAuth: true,
  },
});

import styles from './demo.module.scss';
import '@f/demo/styles/demo.scss';
// import { FaButton } from '@fa/ui'; // 使用unplugin-vue-components支持自定义导入了

console.log('styles', styles);
</script>

<template>
  <main>
    <h1>Demo - Index</h1>
    <NButton type="primary">naive-ui</NButton>

    <div class="demo-text">SCSS样式测试</div>

    <div :class="styles.demoText2">SCSS样式测试（局部）</div>

    <div class="demo-text-global">SCSS样式测试（全局）</div>

    <NDatePicker type="date" />

    <FaButton name="hello" />

    <div>使用本地svg图标</div>
    <div class="flex text-100px text-primary">
      <FaSvgIcon local-icon="avatar" />
    </div>

    <div>使用icon图标库</div>
    <div class="flex text-100px text-primary">
      <FaSvgIcon icon="material-symbols:sunny" />
      <FaSvgIcon icon="material-symbols:nightlight-rounded" />
      <FaSvgIcon icon="line-md:moon-filled-to-sunny-filled-loop-transition" />
    </div>
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
