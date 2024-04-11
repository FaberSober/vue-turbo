/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "@fa/custom/vue", './.eslintrc-auto-import.json'],
  settings: {
    "import/core-modules": ["vue-router/auto", "vue-router/auto-routes"]
  },
  rules: {
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['/^icon-/']
      }
    ],
  },
};
