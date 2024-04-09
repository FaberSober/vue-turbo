/** Theme store */
export const useThemeStore = defineStore('theme', () => {
  const light = useStorage('theme.light', true); // 是否是light主题

  return { light };
});
