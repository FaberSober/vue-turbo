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

| 插件                                | 说明                | 官网                                                   |
| :---------------------------------- | :------------------ | :----------------------------------------------------- |
| vue3                                | vue3                | https://cn.vuejs.org/                                  |
| vite                                | vitejs 构建         | https://www.vitejs.net/                                |
| vite-plugin-vue-devtools            | 开发调试工具        | https://devtools-next.vuejs.org/                       |
| vue-router                          | 路由                | https://router.vuejs.org/zh/                           |
| unplugin-vue-router                 | 生成式路由          | https://github.com/posva/unplugin-vue-router           |
| Pinia                               | 状态管理库          | https://pinia.vuejs.org/zh/                            |
| naive-ui                            | naive-ui组件库      | https://www.naiveui.com/                               |
| vfonts                              | naive-ui推荐字体    | https://www.npmjs.com/package/vfonts                   |
| xicons                              | naive-ui推荐图标    | https://www.xicons.org/                                |
| sass                                | sass样式            | https://github.com/sass/dart-sass                      |
| postcss                             | JS插件转换样式      | https://github.com/postcss/postcss                     |
| ❌fa-cron-react-editor              | cron 编辑器         | https://github.com/xrutayisire/react-js-cron           |
| ❌use-bus                           | bus 事件通知        | https://github.com/fabienjuif/use-bus                  |
| ❌tailwindcss                       | tailwindcss         | https://tailwindcss.com                                |
| ❌react-use                         | React Hooks — �     | https://github.com/streamich/react-use                 |
| ❌ahooks                            | ahooks.js           | https://ahooks.js.org/                                 |
| tinymce                             | 富文本编辑器        | https://github.com/tinymce/tinymce                     |
| ❌fontawesome                       | 图标库              | https://fontawesome.com/                               |
| ❌dnd-kit                           | 拖动库              | https://dndkit.com/                                    |
| ❌tree-node-cli                     | list dir as tree    | https://github.com/yangshun/tree-node-cli              |
| ❌react-grid-layout                 | 网格布局            | https://github.com/react-grid-layout/react-grid-layout |
| ❌@react-pdf-viewer                 | pdf 查看            | https://github.com/react-grid-layout/react-grid-layout |
| ❌@onlyoffice/document-editor-react | office 文件在线编辑 | https://api.onlyoffice.com/                            |
| ❌@uiw/react-amap 高德地图          | 高德地图            | https://uiwjs.github.io/react-amap/                    |
| ❌react-device-detect               | 浏览器判断          | https://github.com/duskload/react-device-detect/       |
| ❌prismjs                           | 代码样式            | http://prismjs.com/                                    |

## 安装依赖包

```
# 工作空间安装
pnpm i -D stylelint -w

# 指定模块安装
pnpm i pinia --filter @fa/admin

pnpm i -D naive-ui --filter @fa/admin
pnpm i -D vfonts --filter @fa/admin
pnpm i -D xicons --filter @fa/admin
pnpm i -D sass --filter @fa/admin
pnpm i -D postcss --filter @fa/admin

pnpm i -D rollup-plugin-visualizer --filter @fa/admin
pnpm i -D vite-plugin-vue-devtools --filter @fa/admin
pnpm i -D @vue/eslint-config-prettier --filter @fa/admin
pnpm i -D @vercel/style-guide --filter @fa/admin

pnpm i -D stylelint stylelint-config-standard-scss --filter @fa/admin

pnpm i -D eslint-plugin-import eslint-import-resolver-alias --filter @fa/admin
pnpm i -D eslint-plugin-import eslint-import-resolver-typescript --filter @fa/admin
```
