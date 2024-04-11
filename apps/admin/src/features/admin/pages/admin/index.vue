<script lang="ts" setup>
import { useThemeStore } from '@f/admin/stores/theme';

const theme = useThemeStore();
</script>

<template>
  <main>
    <h1>Feature 1 - Index</h1>
    <NButton>naive-ui</NButton>

    <h3>CSS样式</h3>
    <div class="demo-text">SCSS样式测试（这个样式应该不生效）</div>
    <div class="demo-text2">SCSS样式测试</div>
    <div class="demo-text-global">SCSS样式测试（全局）</div>

    <h3>主题</h3>
    <NSwitch v-model:value="theme.light"></NSwitch>

    <NButton @click="() => $router.push('/admin/counter')">to /counter</NButton>
  </main>
</template>

<style scoped>
main {
  padding: 24px;
}
</style>
