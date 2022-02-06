const basic = require('@byhow/eslint-config-base');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@byhow/eslint-config-base'
  ],
  override: basic.overrides
}
