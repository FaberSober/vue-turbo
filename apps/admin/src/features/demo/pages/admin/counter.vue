<script lang="ts" setup>
import { useCounterStore } from '@f/demo/stores/counter';

const counter = useCounterStore();
// counter.count++;
// 自动补全！ ✨
// counter.$patch({ count: counter.count + 1 });
// 或使用 action 代替
// counter.increment();
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>

  <n-button type="primary" @click="counter.increment()">Add</n-button>
</template>
