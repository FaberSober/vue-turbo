import { promiseTimeout, type RemovableRef } from '@vueuse/core';
import { useLoading } from '@fa/hooks';
import { $t } from '@/locales';
import { useRouterPush } from '@f/admin/hooks/common/router';
import { useRouteStore } from '../route';
import { clearAuthStorage, getToken, getUserInfo } from './shared';

/** auth store */
export const useAuthStore = defineStore('auth', () => {
  const routeStore = useRouteStore();
  const { route, toLogin, redirectFromLogin } = useRouterPush(false);
  const { loading: loginLoading, startLoading, endLoading } = useLoading();

  const token = ref(getToken());
  const userInfo: Api.Auth.UserInfo = reactive(getUserInfo());
  /** Is login */
  const isLogin = computed(() => Boolean(token.value));

  /**
   * Login
   *
   * @param userName - User name
   * @param password - Password
   * @param [redirect=true] - Whether to redirect after login.
   */
  async function login(userName: string, password: string, redirect = true) {
    startLoading();

    // TODO fetch login api
    await promiseTimeout(2000);

    // const { data: loginToken, error } = await fetchLogin(userName, password);
    const { data: loginToken, error } = {
      data: {
        token: '11',
        refreshToken: '22',
      },
      error: undefined,
    };

    if (!error) {
      // const pass = await loginByToken(loginToken);
      const pass = true;

      if (pass) {
        await routeStore.initAuthRoute();

        if (redirect) {
          await redirectFromLogin();
        }

        window.$notification?.success({
          title: $t('page.login.common.loginSuccess'),
          content: $t('page.login.common.welcomeBack', { userName: 'userInfo.userName' }),
          duration: 4500,
        });
      }
    } else {
      resetStore();
    }

    endLoading();
  }

  /** Reset auth store */
  async function resetStore() {
    const authStore = useAuthStore();

    clearAuthStorage();

    authStore.$reset();

    if (!route.value.meta.constant) {
      await toLogin();
    }

    routeStore.resetStore();
  }

  return {
    loginLoading,
    login,
    resetStore,
    isLogin,
    userInfo,
  };
});
