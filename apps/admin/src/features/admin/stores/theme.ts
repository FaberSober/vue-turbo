import { type RemovableRef } from '@vueuse/core';
import { themeSettings } from '@/features/admin/theme/settings';

/** Theme store */
export const useThemeStore = defineStore('theme', () => {
  const light = useStorage('theme.light', true); // 是否是light主题

  /** Theme settings */
  const settings: Ref<App.Theme.ThemeSetting> = ref(themeSettings);

  const darkMode = '';
  const themeColor = '';
  const themeScheme: UnionKey.ThemeScheme = 'auto';

  function toggleThemeScheme() {}

  return {
    ...toRefs(settings.value),
    light,
    darkMode,
    themeColor,
    themeScheme,
    toggleThemeScheme,
  };
});
