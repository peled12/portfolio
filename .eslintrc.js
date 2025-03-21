module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'react/no-array-index-key': 0,
    'import/order': 0,
    'import/no-useless-path-segments': 0,
    'import/first': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'react/self-closing-comp': 0,
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    'no-confusing-arrow': 0,
    'react/no-deprecated': 0,
    'operator-linebreak': 0,
    'react/no-unescaped-entities': 0,
    'no-shadow': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
