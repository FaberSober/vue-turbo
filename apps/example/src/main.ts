import { createApp } from 'vue';
import App from './app.vue';
import { createRouter, createWebHistory, DataLoaderPlugin } from 'vue-router/auto';

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes;
  },
});

const app = createApp(App);

app.use(DataLoaderPlugin, { router });
app.use(router);

app.mount('#app');
