import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      'capitalized-comments': ['error', 'always'],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
