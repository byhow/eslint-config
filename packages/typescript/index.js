// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@byhow/eslint-config-base')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@byhow/eslint-config-base'
  ],
  overrides: basic.overrides
}
