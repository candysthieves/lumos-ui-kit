// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';

export default defineConfig([globalIgnores(['dist']), {
    files: ['**/*.{ts,tsx}'],
    plugins: {
        react,
        '@typescript-eslint': tseslint.plugin,
        'import': importPlugin,
        perfectionist,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs.flat.recommended,
        reactRefresh.configs.vite,
        eslintConfigPrettier,
    ],
    languageOptions: {
        globals: globals.browser,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    rules: {
        // Perfectionist - import sorting
        'perfectionist/sort-imports': [
            'error',
            {
                type: 'natural',
                order: 'asc',
            },
        ],

        // Import rules
        'import/extensions': [
            'error',
            { css: 'always', json: 'always', scss: 'always', svg: 'always' },
        ],
        'import/no-duplicates': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',

        'no-unused-vars': 'off',
        'import/no-dynamic-require': 'warn',
        'import/no-nodejs-modules': 'warn',

        // React rules
        'react/button-has-type': 'error',
        'react/display-name': 'off',
        'react/jsx-boolean-value': ['error'],
        'react/jsx-curly-brace-presence': [
            'error',
            { children: 'ignore', propElementValues: 'always', props: 'always' },
        ],
        'react/void-dom-elements-no-children': ['error'],
    },
}, // Overrides for Storybook files
{
    files: ['**/*.stories.tsx'],
    rules: {
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'off',
    },
}, ...storybook.configs["flat/recommended"]])