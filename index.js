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
    './rules/style.js',
    './rules/variales.js',
    './rules/react-a11y.js',
    './rules/react.js',
    './rules/imports.js',
  ].map(require.resolve)
};
