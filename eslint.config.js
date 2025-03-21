import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  { ignores: ['dist'] },
  {
    name: 'js: recommended',
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    name: 'global languageOptions',
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    name: 'stylistic',
    plugins: {
      '@stylistic/js': stylistic,
      '@stylistic/ts': stylistic,
    },
    rules: {
      '@stylistic/js/linebreak-style': 'error',
      '@stylistic/js/jsx-curly-spacing': 'error',
      '@stylistic/js/max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/semi': 'error',
      '@stylistic/js/quote-props': ['error', 'as-needed'],
      '@stylistic/js/space-in-parens': 'error',
      '@stylistic/ts/indent': ['error', 2, { MemberExpression: 1, SwitchCase: 1, ArrayExpression: 1, offsetTernaryExpressions: true }],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/array-bracket-spacing': ['error', 'never'],
      '@stylistic/js/block-spacing': ['error', 'always'],
      '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/js/space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
      '@stylistic/js/space-infix-ops': 'error',
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/ts/type-generic-spacing': 'error',
      '@stylistic/js/rest-spread-spacing': 'error',

      '@stylistic/js/lines-around-comment': [
        'error',
        {
          beforeBlockComment: false,
          allowBlockStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ],
      '@stylistic/js/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'export', 'function'],
        },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
  {
    name: 'typescript',
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    },
  },
  {
    name: 'global rules',
    rules: {
      'no-redeclare': ['off'],
      'no-unused-vars': ['off'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unexpected-multiline': 'error',
      'no-var': 'error',
      'no-unsafe-optional-chaining': 'error',
      curly: ['error', 'all'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-sparse-arrays': ['off'],
      'func-style': ['error'],
    },
  },
];
