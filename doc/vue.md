# vue

## 基础知识

### [defineOptions](https://cn.vuejs.org/api/sfc-script-setup.html#defineoptions)

> 这个宏可以用来直接在 `<script setup>` 中声明组件选项，而不必使用单独的 `<script>` 块

```typescript
defineOptions({
  inheritAttrs: false, // 默认值：true。用于控制是否启用默认的组件 attribute 透传行为。
  name: 'PwdLogin', // 用于显式声明组件展示时的名称。
});
```
