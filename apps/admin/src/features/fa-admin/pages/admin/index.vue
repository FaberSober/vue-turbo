<script lang="ts" setup>
import { NButton, NSwitch } from 'naive-ui';
import '@/styles/demo.scss';

import { useThemeStore } from '@/features/fa-admin/stores/useThemeStore';

const theme = useThemeStore();
</script>

<template>
  <main>
    <h1>Feature 1 - Index</h1>
    <n-button>naive-ui</n-button>

    <h3>CSS样式</h3>
    <div class="demo-text">SCSS样式测试（这个样式应该不生效）</div>
    <div class="demo-text2">SCSS样式测试</div>
    <div class="demo-text-global">SCSS样式测试（全局）</div>

    <h3>主题</h3>
    <n-switch v-model:value="theme.light"></n-switch>
  </main>
</template>

<style scoped>
main {
  padding: 24px;
}
</style>
