<script setup lang="ts">
import { useAppStore } from '@f/admin/stores/app';
import { useThemeStore } from '@f/admin/stores/theme';
import { useRouteStore } from '@f/admin/stores/route';

defineOptions({
  name: 'GlobalContent',
});

interface Props {
  /** Show padding for content */
  showPadding?: boolean;
}

withDefaults(defineProps<Props>(), {
  showPadding: true,
});

const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      :name="themeStore.page.animateMode"
      mode="out-in"
      @before-leave="appStore.setContentXScrollable(true)"
      @after-enter="appStore.setContentXScrollable(false)"
    >
      <KeepAlive :include="routeStore.cacheRoutes">
        <component
          :is="Component"
          v-if="appStore.reloadFlag"
          :key="route.path"
          :class="{ 'p-16px': showPadding }"
          class="flex-grow bg-layout transition-300"
        />
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<style></style>
