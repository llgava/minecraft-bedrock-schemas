module.exports = {
  extends: ['plugin:prettier/recommended'],

  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'check-file'],

  env: {
    es2020: true,
    node: true,
  },

  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/no-explicit-any': 'off',

    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{ts}': './__tests__/*/**',
        '*.schema.{json}': './schemas/*/**',
      },
    ],

    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
      },
    ],

    'no-useless-escape': 'off',
  },
};
