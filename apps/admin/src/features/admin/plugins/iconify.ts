import { addAPIProvider, disableCache } from '@iconify/vue';

/** Setup the iconify offline */
export function setupIconifyOffline() {
  const { VITE_ICONIFY_URL } = import.meta.env;

  if (VITE_ICONIFY_URL) {
    // https://iconify.design/docs/icon-components/vue/add-api-provider.html
    addAPIProvider('', { resources: [VITE_ICONIFY_URL] });

    disableCache('all');
  }
}
