import { promiseTimeout, type RemovableRef } from '@vueuse/core';
import { breakpointsTailwind, useBreakpoints, useTitle } from '@vueuse/core';
import { useBoolean } from '@fa/hooks';
import { setLocale } from '@/locales';

/** app store */
export const useAppStore = defineStore('app', () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const { bool: themeDrawerVisible, setTrue: openThemeDrawer, setFalse: closeThemeDrawer } = useBoolean();
  const { bool: reloadFlag, setBool: setReloadFlag } = useBoolean(true);
  const { bool: fullContent, toggle: toggleFullContent } = useBoolean();
  const { bool: contentXScrollable, setBool: setContentXScrollable } = useBoolean();
  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean();
  const { bool: mixSiderFixed, setBool: setMixSiderFixed, toggle: toggleMixSiderFixed } = useBoolean();

  /** Is mobile layout */
  const isMobile = breakpoints.smaller('sm');

  const locale = useStorage<App.I18n.LangType>('app.lang', 'zh-CN');
  const localeOptions: App.I18n.LangOption[] = [
    {
      label: '中文',
      key: 'zh-CN',
    },
    {
      label: 'English',
      key: 'en-US',
    },
  ];

  function changeLocale(lang: App.I18n.LangType) {
    locale.value = lang;
    setLocale(lang);
  }

  /**
   * Reload page
   *
   * @param duration -  Duration time
   */
  async function reloadPage(duration = 300) {
    setReloadFlag(false);
    if (duration > 0) {
      await promiseTimeout(duration);
    }
    setReloadFlag(true);
  }

  return {
    isMobile,
    reloadFlag,
    reloadPage,
    fullContent,
    locale,
    localeOptions,
    changeLocale,
    themeDrawerVisible,
    openThemeDrawer,
    closeThemeDrawer,
    toggleFullContent,
    contentXScrollable,
    setContentXScrollable,
    siderCollapse,
    setSiderCollapse,
    toggleSiderCollapse,
    mixSiderFixed,
    setMixSiderFixed,
    toggleMixSiderFixed,
  };
});
