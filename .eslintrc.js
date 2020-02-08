module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    quotes: [1, 'single']
  },
  globals: {
    process: 'readable',
    global: 'readable',
    console: 'readable',
    setTimeout: 'readable',
    clearTimeout: 'readable',
    module: 'writable'
  },
  ignorePatterns: ['eslintrc.js', 'node_modules/']
};
