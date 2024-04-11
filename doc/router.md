# router路由

## 路由跳转

```typescript
import { useRouter, useRoute } from 'vue-router/auto';
const router = useRouter();
router.push('');
```

```vue
$router.push('/counter');
```

## 定义路由meta等参数

```vue
<script lang="ts" setup>
definePage({
  meta: {
    requiresAuth: true,
  },
});
</script>
```
