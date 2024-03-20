<script setup lang="ts">
import { FaUtils } from '@fa/core';
import { Button } from '@fa/ui';

const a = FaUtils.add(1, 2);
console.log('add:', a)
</script>

<template>
  <div>
    <Button name="Hello2" />
  </div>
</template>
