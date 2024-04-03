import { createApp } from 'vue';
// 引入全局样式
import '@/features/fa-admin/plugins/assets';
import { createRouter, createWebHistory, DataLoaderPlugin } from 'vue-router/auto';
import { createPinia } from 'pinia';
import NProgress from 'nprogress';
import App from './app.vue';

// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'

/** Setup plugin NProgress */
{
  NProgress.configure({ easing: 'ease', speed: 500 });
  // mount on window
  window.NProgress = NProgress;
}

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes;
  },
});
const pinia = createPinia();

const app = createApp(App);

app.use(DataLoaderPlugin, { router });
app.use(router);
app.use(pinia);

app.mount('#app');
