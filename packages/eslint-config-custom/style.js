module.exports = {
  "extends": "stylelint-config-standard-scss",
  rules: {
    "at-rule-no-vendor-prefix": null,
    "at-rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "property-no-vendor-prefix": null,
    "rule-empty-line-before": null,
    'scss/at-import-partial-extension': ['always', , { "except": ["scss"] }]
  },
}