import { useTitle } from '@vueuse/core';
import type { Router } from 'vue-router';
import { $t } from '@f/admin/locales';

/**
 * create document title guard
 * @param router
 */
export function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    const { i18nKey, title = 'title not set' } = to.meta;

    const documentTitle = i18nKey ? $t(i18nKey as any) : title;

    useTitle(documentTitle as string);
  });
}
