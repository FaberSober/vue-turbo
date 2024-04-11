import { type RemovableRef } from '@vueuse/core';
import { setLocale } from '@/locales';

/** app store */
export const useAppStore = defineStore('app', () => {
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

  return { locale, localeOptions, changeLocale };
});
