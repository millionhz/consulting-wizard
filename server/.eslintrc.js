module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-param-reassign': 0,
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
