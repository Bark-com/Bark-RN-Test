/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import jestPlugin from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import sortKeys from 'eslint-plugin-sort-destructure-keys';
import tsLint from 'typescript-eslint';

export default tsLint.config(
  eslint.configs.recommended,
  ...tsLint.configs.strictTypeChecked,
  {
    plugins: {
      'sort-destructure-keys': sortKeys,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      'react-native': fixupPluginRules(reactNativePlugin),
      jest: jestPlugin,
      react,
      pluginQuery,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Sort keys rule
      'sort-destructure-keys/sort-destructure-keys': 'error',

      // Restricted imports
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@testing-library/react-native',
              message:
                'Use render and other functions from the @jest-utils instead of @testing-library/react-native.',
            },
          ],
        },
      ],

      // React rules
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],

      // React Native rules
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'error',
      'react-native/no-single-element-style-arrays': 'error',

      // Jest Tests
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/valid-expect': 'error',
    },
  },
  {
    ignores: [
      'jest.config.js',
      'metro.config.js',
      'babel.config.js',
      '.prettierrc.js',
      '.detoxrc.js',
      '**/packages/*',
    ],
  },
  {
    files: ['**/**test.ts', '**/**.test.tsx'],
    plugins: { jest: jestPlugin },
    rules: {
      // Disable @typescript-eslint/unbound-method only for test files
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
);
