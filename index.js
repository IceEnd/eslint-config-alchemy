module.exports = {
  env: {
    node: true
  },
  extends: [
    './rules/errors.js',
    './rules/es6.js',
    './rules/node.js',
    './rules/practices.js',
    './rules/strict.js',
    './rules/variales.js'
  ].map(require.resolve)
}
