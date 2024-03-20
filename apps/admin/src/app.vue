<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router/auto';

const router = useRouter();
router.push('/admin');
</script>

<template>
  <RouterView />
</template>
