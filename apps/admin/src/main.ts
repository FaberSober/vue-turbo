import { createApp } from 'vue';
import '@/features/fa-admin/plugins/assets'; // 引入全局样式
import { setupDayjs, setupLoading, setupNProgress, setupStore } from '@/features/fa-admin/plugins';
import { setupRouter } from '@/features/fa-admin/router';
import { setupI18n } from '@/features/fa-admin/locales';
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
