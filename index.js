module.exports = {
  env: {
    node: true
  },
  extends: [
    './rules/best-practices.js'
  ].map(require.resolve)
}
