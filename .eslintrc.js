module.exports = {
  // root: true, // https://github.com/webpack-contrib/eslint-loader/issues/333
  extends: [
    'plugin:@typescript-eslint/recommended', // 우선 순위 마지막
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb/hooks',
    'airbnb',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier', // 우선 순위 1
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // project 옵션이란?: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject
    // 해결 방법: https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject
    project: 'tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    // eslint
    'no-console': 'warn',

    // prettier
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true,
        proseWrap: 'never',
        singleQuote: true,
        printWith: '120',
      },
    ],

    // typescript
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/restrict-template-expressions': 'off',

    // import
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],

    // react
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',

    // eslint
    curly: 1,
    'no-shadow': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // return 블럭 전에
      { blankLine: 'always', prev: '*', next: 'block' }, // 블럭 코드 전에
      { blankLine: 'always', prev: '*', next: 'block-like' }, // 유사 블럭 코드 전에
    ],
  },
};
