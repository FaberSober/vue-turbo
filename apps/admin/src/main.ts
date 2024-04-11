import { createApp } from 'vue';
import '@f/admin/plugins/assets'; // 引入全局样式
import { setupDayjs, setupLoading, setupNProgress, setupStore } from '@f/admin/plugins';
import { setupRouter } from '@f/admin/router';
import { setupI18n } from '@f/admin/locales';
import App from './app.vue';

// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'

async function setupApp() {
  setupLoading();
  setupNProgress();
  setupDayjs();

  const app = createApp(App);

  setupStore(app);
  await setupRouter(app);
  setupI18n(app);

  app.mount('#app');
}

setupApp();
