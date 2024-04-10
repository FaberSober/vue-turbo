# store共享状态存储pinia

## 定义

> 使用了`unplugin-auto-import`插件，不需要明文引入，省略了代码`import { defineStore } from 'pinia'`

```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0); // 使用了`unplugin-auto-import`，不需要明文引入，省略了代码`import { ref, computed } from 'vue'`

  function increment() {
    count.value++;
  }

  return { count, increment };
});
```
