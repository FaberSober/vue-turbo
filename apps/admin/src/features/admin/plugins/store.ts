import type { App } from 'vue';
import type { PiniaPluginContext } from 'pinia';
import { createPinia } from 'pinia';

/** Setup Vue store plugin pinia */
export function setupStore(app: App) {
  const store = createPinia();
  store.use(resetSetupStore);
  app.use(store);
}

/**
 * The plugin reset the state of the store which is written by setup syntax
 *
 * @param context
 */
export function resetSetupStore({ store }: PiniaPluginContext) {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$patch(initialState);
  };
}
