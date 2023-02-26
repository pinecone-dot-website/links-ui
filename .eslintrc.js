module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'react/function-component-definition': 0,
    camelcase: 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
  },
};
