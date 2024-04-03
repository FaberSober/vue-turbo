import { defineStore } from 'pinia';
import { useStorage, type RemovableRef } from '@vueuse/core';

/** Theme store */
export const useThemeStore = defineStore('theme', () => {
  const light: RemovableRef<boolean> = useStorage('theme.light', true); // 是否是light主题

  return { light };
});
