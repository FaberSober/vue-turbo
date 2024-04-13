<script setup lang="ts">
import { computed } from 'vue';
import { NConfigProvider, darkTheme } from 'naive-ui';
import { useAppStore } from '@f/admin/stores/app';
import { useThemeStore } from '@f/admin/stores/theme';
import { naiveDateLocales, naiveLocales } from '@f/admin/locales/naive';

defineOptions({
  name: 'App',
});

const appStore = useAppStore();
const themeStore = useThemeStore();

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined));

const naiveLocale = computed(() => {
  return naiveLocales[appStore.locale];
});

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.locale];
});
</script>

<template>
  <NConfigProvider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="h-full"
  >
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
