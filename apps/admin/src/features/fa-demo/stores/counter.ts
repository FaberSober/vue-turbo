export const useCounterStore = defineStore('counter', () => {
  const count = ref(0); // 使用了`unplugin-auto-import`，不需要明文引入，省略了代码`import { ref, computed } from 'vue'`
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
