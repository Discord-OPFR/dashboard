import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    '**/node_modules',
    '**/build',
    '**/dist',
    '**/coverage',
    '**/public',
    '**/*.d.ts',
    'src/api/generated',
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
      ),
    ),

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
      },

      linkComponents: [
        'Hyperlink',
        {
          name: 'Link',
          linkAttribute: 'to',
        },
      ],
    },

    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'jsx-quotes': ['warn', 'prefer-double'],
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
      'no-useless-escape': 'off',

      quotes: [
        'warn',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],

      'react/display-name': 'off',

      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: false,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: 'first',
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      semi: ['warn', 'always'],
    },
  },
  {
    files: ['**/*.stories.*'],

    rules: {
      'import/no-anonymous-default-export': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
]);
