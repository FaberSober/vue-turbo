const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal that utilize VueJS.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vue/eslint-config-typescript",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: "latest",
  },
  
  settings: {
    "import/resolver": {
      // FIXME: https://github.com/import-js/eslint-plugin-import/issues/2301
      // error  Unable to resolve path to module '@/features/fa-admin/stores/counter'  import/no-unresolved
      // alias: {
      //   map: [
      //     ['@', './src'],
      //   ],
      //   // "extensions": [".js", ".ts", ".jsx", ".vue"]
      // },
      typescript: {
        project,
      },
      // node: {
      //   project,
      // },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

  rules: {
    "import/no-default-export": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    "no-console": "off",
    // ignore配置vite配置的别名，临时办法
    "import/no-unresolved": [2, {"ignore": ["@/"]}],
    // add specific rules configurations here
  },
};
