import { useRouter } from 'vue-router/auto';
// import type { RouteLocationRaw } from 'vue-router';
import { router as globalRouter } from '@f/admin/router';

/**
 * Router push
 *
 * Jump to the specified route, it can replace function router.push
 *
 * @param inSetup Whether is in vue script setup
 */
export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter;
  const route = globalRouter.currentRoute;

  const routerPush = router.push;

  const routerBack = router.back;

  interface RouterPushOptions {
    query?: Record<string, string>;
    params?: Record<string, string>;
  }

  async function routerPushByKey(key: FaRouter.RouteKey, options?: RouterPushOptions) {
    const { query, params } = options || {};

    // const routeLocation: RouteLocationRaw = { // FIXME 这里的ts类型有问题
    const routeLocation: any = {
      name: key,
    };

    if (query) {
      routeLocation.query = query;
    }

    if (params) {
      routeLocation.params = params;
    }

    return routerPush(routeLocation);
  }

  async function toHome() {
    return router.push('/admin');
  }

  /**
   * Navigate to login page
   *
   * @param loginModule The login module
   * @param redirectUrl The redirect url, if not specified, it will be the current route fullPath
   */
  async function toLogin(loginModule?: UnionKey.LoginModule, redirectUrl?: string) {
    const module = loginModule || 'pwd-login';

    const options: RouterPushOptions = {
      params: {
        module,
      },
    };

    const redirect = redirectUrl || route.value.fullPath;

    options.query = {
      redirect,
    };

    return routerPushByKey('login', options);
  }

  /**
   * Toggle login module
   *
   * @param module
   */
  async function toggleLoginModule(module: UnionKey.LoginModule) {
    const query = route.value.query as Record<string, string>;

    return routerPushByKey('login', { query });
  }

  /** Redirect from login */
  async function redirectFromLogin() {
    const redirect = route.value.query?.redirect as string;

    if (redirect) {
      routerPush(redirect);
    } else {
      toHome();
    }
  }

  return {
    route,
    routerPush,
    routerBack,
    routerPushByKey,
    toLogin,
    toggleLoginModule,
    redirectFromLogin,
  };
}
