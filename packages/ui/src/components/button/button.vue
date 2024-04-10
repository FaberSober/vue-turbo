<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <button>{{ props.name }}</button>
</template>
