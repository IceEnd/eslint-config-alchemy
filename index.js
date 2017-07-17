module.exports = {
  env: {
    node: true
  },
  extends: [
    './rules/errors.js',
    './rules/node.js',
    './rules/practices.js',
    './rules/strict.js',
    './rules/variales.js'
  ].map(require.resolve)
}
