# VUE-Turbo

## 开发

```
pnpm dev
```

## 打包

```
pnpm build
```

# 技术栈

| 插件                                | 说明                   | 官网                                                   |
| :---------------------------------- | :--------------------- | :----------------------------------------------------- |
| vue3                                | vue3                   | https://cn.vuejs.org/                                  |
| vite                                | vitejs 构建            | https://www.vitejs.net/                                |
| vite-plugin-vue-devtools            | 开发调试工具           | https://devtools-next.vuejs.org/                       |
| vue-router                          | 路由                   | https://router.vuejs.org/zh/                           |
| vue-i18n                            | i18n国际化             | https://github.com/intlify/vue-i18n-next               |
| vite-plugin-svg-icons               | 生成 svg 雪碧图        | https://github.com/vbenjs/vite-plugin-svg-icons        |
| unplugin-vue-router                 | 生成式路由             | https://github.com/posva/unplugin-vue-router           |
| unplugin-vue-components             | Vue的按需组件自动导入  | https://github.com/unplugin/unplugin-vue-components    |
| unplugin-auto-import                | API按需导入            | https://github.com/unplugin/unplugin-auto-import       |
| unplugin-icons                      | Icon按需导入           | https://github.com/unplugin/unplugin-icons             |
| @iconify/json                       | Icon图标数据           |                                                        |
| Pinia                               | 状态管理库             | https://pinia.vuejs.org/zh/                            |
| eslint                              | 代码检查               | https://eslint.org/                                    |
| stylelint                           | CSS代码检查            | https://stylelint.io/                                  |
| naive-ui                            | naive-ui组件库         | https://www.naiveui.com/                               |
| vfonts                              | naive-ui推荐字体       | https://www.npmjs.com/package/vfonts                   |
| xicons                              | naive-ui推荐图标       | https://www.xicons.org/                                |
| sass                                | sass样式               | https://github.com/sass/dart-sass                      |
| postcss                             | JS插件转换样式         | https://github.com/postcss/postcss                     |
| nprogress                           | 进度条                 | https://github.com/rstacruz/nprogress                  |
| dayjs                               | 日期库                 |                                                        |
| vite-plugin-progress                | vite打包展示进度条插件 | https://github.com/jeddygong/vite-plugin-progress      |
| colord                              | 色彩工具               | https://github.com/omgovich/colord                     |
| unocss                              | CSS引擎                | https://unocss.dev/                                    |
| @iconify/vue                        | 图标库                 | https://iconify.design/                                |
| ❌fa-cron-react-editor              | cron 编辑器            | https://github.com/xrutayisire/react-js-cron           |
| ❌use-bus                           | bus 事件通知           | https://github.com/fabienjuif/use-bus                  |
| ❌tailwindcss                       | tailwindcss            | https://tailwindcss.com                                |
| vueuse                              | vue use库              | https://vueuse.org/                                    |
| ❌ahooks                            | ahooks.js              | https://ahooks.js.org/                                 |
| tinymce                             | 富文本编辑器           | https://github.com/tinymce/tinymce                     |
| ❌fontawesome                       | 图标库                 | https://fontawesome.com/                               |
| ❌dnd-kit                           | 拖动库                 | https://dndkit.com/                                    |
| ❌tree-node-cli                     | list dir as tree       | https://github.com/yangshun/tree-node-cli              |
| ❌react-grid-layout                 | 网格布局               | https://github.com/react-grid-layout/react-grid-layout |
| ❌@react-pdf-viewer                 | pdf 查看               | https://github.com/react-grid-layout/react-grid-layout |
| ❌@onlyoffice/document-editor-react | office 文件在线编辑    | https://api.onlyoffice.com/                            |
| ❌@uiw/react-amap 高德地图          | 高德地图               | https://uiwjs.github.io/react-amap/                    |
| ❌react-device-detect               | 浏览器判断             | https://github.com/duskload/react-device-detect/       |
| ❌prismjs                           | 代码样式               | http://prismjs.com/                                    |

## 安装依赖包

```
# 工作空间安装
pnpm i -D stylelint -w
pnpm i -D stylelint-scss -w

# 指定模块安装
pnpm i pinia --filter @fa/admin
pnpm i @vueuse/core --filter @fa/admin
pnpm i nprogress --filter @fa/admin
pnpm i dayjs --filter @fa/admin
pnpm i vue-i18n --filter @fa/admin

pnpm i -D naive-ui --filter @fa/admin
pnpm i -D vfonts --filter @fa/admin
pnpm i -D xicons --filter @fa/admin
pnpm i -D sass --filter @fa/admin
pnpm i -D postcss --filter @fa/admin
pnpm i -D @vitejs/plugin-vue-jsx --filter @fa/admin
pnpm i -D unplugin-vue-components --filter @fa/admin
pnpm i -D @types/nprogress --filter @fa/admin
pnpm i -D unplugin-auto-import --filter @fa/admin
pnpm i -D unplugin-icons --filter @fa/admin
pnpm i -D @iconify/json --filter @fa/admin
pnpm i -D @iconify/utils --filter @fa/admin
pnpm i -D vite-plugin-progress --filter @fa/admin
pnpm i -D unocss --filter @fa/admin
pnpm i -D vite-plugin-svg-icons --filter @fa/admin

pnpm i -D rollup-plugin-visualizer --filter @fa/admin
pnpm i -D vite-plugin-vue-devtools --filter @fa/admin
pnpm i -D @vue/eslint-config-prettier --filter @fa/admin
pnpm i -D @vercel/style-guide --filter @fa/admin

pnpm i -D stylelint stylelint-config-standard-scss --filter @fa/admin

pnpm i -D eslint-plugin-import eslint-import-resolver-alias --filter @fa/admin
pnpm i -D eslint-plugin-import eslint-import-resolver-typescript --filter @fa/admin
```

# 优秀开源项目

| 名称          | 官网                                       |
| :------------ | :----------------------------------------- |
| soybean-admin | https://github.com/soybeanjs/soybean-admin |
