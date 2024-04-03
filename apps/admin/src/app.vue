<script setup lang="ts">
import { computed } from 'vue';
import { NConfigProvider, darkTheme } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';
import { useThemeStore } from '@/features/fa-admin/stores/theme';

defineOptions({
  name: 'App',
});

const themeStore = useThemeStore();

const naiveDarkTheme = computed(() => (themeStore.light ? undefined : darkTheme));
</script>

<template>
  <NConfigProvider :theme="naiveDarkTheme" :locale="zhCN" :date-locale="dateZhCN" class="h-full bg-layout">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>
