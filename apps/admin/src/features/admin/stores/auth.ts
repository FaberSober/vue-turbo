import { promiseTimeout, type RemovableRef } from '@vueuse/core';
import { useLoading } from '@fa/hooks';

/** auth store */
export const useAuthStore = defineStore('auth', () => {
  const { loading: loginLoading, startLoading, endLoading } = useLoading();

  /**
   * Login
   *
   * @param userName User name
   * @param password Password
   * @param [redirect=true] Whether to redirect after login. Default is `true`
   */
  async function login(userName: string, password: string, redirect = true) {
    startLoading();

    await promiseTimeout(1200);

    // TODO fetch login api
    // const { data: loginToken, error } = await fetchLogin(userName, password);

    // if (!error) {
    //   const pass = await loginByToken(loginToken);
    //
    //   if (pass) {
    //     await routeStore.initAuthRoute();
    //
    //     if (redirect) {
    //       await redirectFromLogin();
    //     }
    //
    //     if (routeStore.isInitAuthRoute) {
    //       window.$notification?.success({
    //         title: $t('page.login.common.loginSuccess'),
    //         content: $t('page.login.common.welcomeBack', { userName: userInfo.userName }),
    //         duration: 4500
    //       });
    //     }
    //   }
    // } else {
    //   resetStore();
    // }

    endLoading();
  }

  return {
    loginLoading,
    login,
  };
});
