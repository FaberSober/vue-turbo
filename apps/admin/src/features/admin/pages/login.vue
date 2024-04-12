<script setup lang="ts">
import { getColorPalette, mixColor } from '@fa/utils';
import { $t } from '@/locales';
import { useAppStore } from '@f/admin/stores/app';
import { useThemeStore } from '@f/admin/stores/theme';

const appStore = useAppStore();
const themeStore = useThemeStore();

const bgThemeColor = computed(() => (themeStore.darkMode ? getColorPalette(themeStore.themeColor, 7) : themeStore.themeColor));

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = themeStore.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, themeStore.themeColor, ratio);
});

const route = useRoute();
console.log('route', route);

const titleMap = {
  '/login/pwd-login': 'page.login.pwdLogin.title',
  '/login/code-login': 'page.login.codeLogin.title',
  '/login/register': 'page.login.register.title',
  '/login/reset-pwd': 'page.login.resetPwd.title',
  '/login/bind-wechat': 'page.login.bindWeChat.title',
};
const title = titleMap[route.path];
</script>

<template>
  <div class="relative size-full flex-center overflow-hidden" :style="{ backgroundColor: bgColor }">
    <WaveBg :theme-color="bgThemeColor" />
    <NCard :bordered="false" class="relative z-4 w-auto rd-12px">
      <div class="w-400px lt-sm:w-300px">
        <header class="flex-y-center justify-between">
          <SystemLogo class="text-64px text-primary lt-sm:text-48px" />
          <h3 class="text-28px text-primary font-500 lt-sm:text-22px">{{ $t('system.title') }}</h3>
          <div class="i-flex-col">
            <ThemeSchemaSwitch
              :theme-schema="themeStore.themeScheme"
              :show-tooltip="false"
              class="text-20px lt-sm:text-18px"
              @switch="themeStore.toggleThemeScheme"
            />
            <LangSwitch
              :lang="appStore.locale"
              :lang-options="appStore.localeOptions"
              :show-tooltip="false"
              @change-lang="appStore.changeLocale"
            />
          </div>
        </header>
        <main class="pt-24px">
          <h3 class="text-18px text-primary font-medium">{{ $t(title) }}</h3>
          <div class="pt-24px">
            <RouterView v-slot="{ Component }">
              <Transition :name="themeStore.page.animateMode" mode="out-in" appear>
                <component :is="Component" />
              </Transition>
            </RouterView>
          </div>
        </main>
      </div>
    </NCard>
  </div>
</template>

<style scoped></style>
