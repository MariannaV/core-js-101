module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-plusplus': 0,
    'no-use-before-define': 0,
    "linebreak-style": 0,
    'prefer-template': 1,
    'no-restricted-properties': 1,
    'no-param-reassign': 1
  },
};
