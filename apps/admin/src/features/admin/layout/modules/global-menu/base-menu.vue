<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { MentionOption, MenuProps } from 'naive-ui';
import { FaSimpleScrollbar } from '@fa/ui';
import { useAppStore } from '@f/admin/stores/app';
import { useThemeStore } from '@f/admin/stores/theme';
import { useRouteStore } from '@f/admin/stores/route';
import { useRouterPush } from '@f/admin/hooks/common/router';

defineOptions({
  name: 'BaseMenu',
});

interface Props {
  darkTheme?: boolean;
  mode?: MenuProps['mode'];
  menus: App.Global.Menu[];
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
});

const route = useRoute();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
const { routerPushByKey } = useRouterPush();

const naiveMenus = computed(() => props.menus as unknown as MentionOption[]);

const isHorizontal = computed(() => props.mode === 'horizontal');

const siderCollapse = computed(() => themeStore.layout.mode === 'vertical' && appStore.siderCollapse);

const headerHeight = computed(() => `${themeStore.header.height}px`);

const selectedKey = computed(() => {
  const { hideInMenu, activeMenu } = route.meta;
  const name = route.name as string;

  const routeName = (hideInMenu ? activeMenu : name) || name;

  return routeName;
});

const expandedKeys = ref<string[]>([]);

function updateExpandedKeys() {
  if (isHorizontal.value || siderCollapse.value || !selectedKey.value) {
    expandedKeys.value = [];
    return;
  }
  expandedKeys.value = routeStore.getSelectedMenuKeyPath(selectedKey.value);
}

function handleClickMenu(key: any) {
  const { query } = routeStore.getSelectedMenuMetaByKey(key) || {};

  routerPushByKey(key, { query });
}

watch(
  () => route.name,
  () => {
    updateExpandedKeys();
  },
  { immediate: true },
);
</script>

<template>
  <FaSimpleScrollbar>
    <NMenu
      v-model:expanded-keys="expandedKeys"
      :mode="mode"
      :value="selectedKey"
      :collapsed="siderCollapse"
      :collapsed-width="themeStore.sider.collapsedWidth"
      :collapsed-icon-size="22"
      :options="naiveMenus"
      :inverted="darkTheme"
      :indent="18"
      responsive
      @update:value="handleClickMenu"
    />
  </FaSimpleScrollbar>
</template>

<style scoped>
:deep(.n-menu--horizontal) {
  --n-item-height: v-bind(headerHeight) !important;
}
</style>
