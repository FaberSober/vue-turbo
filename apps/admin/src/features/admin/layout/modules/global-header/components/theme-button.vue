<script setup lang="ts">
import { useAppStore } from '@f/admin/stores/app';
import { $t } from '@/locales';

defineOptions({
  name: 'ThemeButton',
});

const appStore = useAppStore();
</script>

<template>
  <ButtonIcon icon="majesticons:color-swatch-line" :tooltip-content="$t('icon.themeConfig')" @click="appStore.openThemeDrawer" />
</template>

<style scoped></style>
