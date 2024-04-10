module.exports = {
  root: true,
  extends: ["@fa/eslint-config-custom/style"],
  "plugins": ["stylelint-scss"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  }
};