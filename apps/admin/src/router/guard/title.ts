import { useTitle } from '@vueuse/core';
import type { Router } from 'vue-router';
import { $t } from '@/locales';

/**
 * create document title guard
 * @param router
 */
export function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    const { i18nKey, title = 'title not set' } = to.meta;

    const documentTitle = i18nKey ? $t(i18nKey) : title;

    useTitle(documentTitle);
  });
}
