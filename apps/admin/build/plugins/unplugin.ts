import process from 'node:process';
import path from 'node:path';
import type { PluginOption } from 'vite';
import AutoImport from "unplugin-auto-import/vite"; // API按需导入
import { VueRouterAutoImports } from "unplugin-vue-router"; // API按需导入-router
import Icons from "unplugin-icons/vite"; // Icon图标按需导入
import IconsResolver from 'unplugin-icons/resolver'; // Icon图标自动导入
import { FileSystemIconLoader } from "unplugin-icons/loaders"; // Icon图标按需导入
import Components from "unplugin-vue-components/vite"; // 组件按需导入
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"; // 组件按需导入-NaiveUi解析器
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // 生产svg雪碧图


/**
 * 设置unplugin按需自动导入差价合集
 * 1. AutoImport - API按需导入
 * 2. Icons - Icon图标按需引入
 * 3. Components - 组件按需引入，配置后，指定dirs目录中的组件会被自动按需引入
 * @param viteEnv
 */
export function setupUnplugin(viteEnv: Env.ImportMeta) {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  /** The name of the local icon collection */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

  const plugins: PluginOption[] = [
    AutoImport({
      dts: './auto-imports.d.ts',
      imports: [
        'vue',
        // 'vue-router', // 使用unplugin-vue-router，需要屏蔽此preset预设项
        VueRouterAutoImports,
        // custom
        {
          'pinia': ['defineStore'],
          '@vueuse/core': [
            'useStorage', 'useTitle',
          ],
          '@fa/utils': ['FaUtils'],
        },
        // custom
        // '@vueuse/core',
      ],
      eslintrc: {
        enabled: true, // <-- this
      },
    }), // API按需导入
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, (svg) => (
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        )),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }), // Icon图标按需引入
    Components({
      dts: 'src/typings/components.d.ts',
      dirs: ['src/features/*/components'],
      resolvers: [
        // importing @fa/ui auto
        (name) => {
          // where component `name` is always start with `Fa`
          if (name.startsWith('Fa'))
            return { name, from: '@fa/ui' }
        },
        NaiveUiResolver(),
        IconsResolver({ customCollections: [collectionName], prefix: VITE_ICON_PREFIX }),
      ],
    }), // 组件按需引入，配置后，dirs目录中的组件会被自动按需引入
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [localIconPath],
      // 指定symbolId格式
      symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
      // 自定义插入位置
      inject: 'body-last',
      // custom dom id
      customDomId: '__SVG_ICON_LOCAL__'
    }), // svg雪碧图
  ]

  return plugins;
}
