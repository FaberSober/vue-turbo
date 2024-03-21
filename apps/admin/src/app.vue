<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <RouterView />
  </n-config-provider>
</template>
