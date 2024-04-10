// const { resolve } = require("node:path");

// const project = resolve(process.cwd(), "tsconfig.json");


module.exports = {
  extends: [
    'eslint:recommended',
    // require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vue/eslint-config-typescript"),
  ],
  parserOptions: {
    ecmaVersion: "latest",
    // project,
  },

  // settings: {
  //   "import/resolver": {
  //     // FIXME: https://github.com/import-js/eslint-plugin-import/issues/2301
  //     // error  Unable to resolve path to module '@/features/fa-admin/stores/counter'  import/no-unresolved
  //     // alias: {
  //     //   map: [
  //     //     ['@', './src'],
  //     //   ],
  //     //   // "extensions": [".js", ".ts", ".jsx", ".vue"]
  //     // },
  //     typescript: {
  //       project,
  //     },
  //     // node: {
  //     //   project,
  //     // },
  //   },
  // },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

  rules: {
    "import/no-default-export": "off",
    "vue/multi-word-component-names": "off", //关闭组件命名规则
    "vue/no-multiple-template-root": "off",
    "no-console": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    // ignore配置vite配置的别名，临时办法
    // "import/no-unresolved": [2, {"ignore": ["@/"]}],
    // add specific rules configurations here
  },
};
