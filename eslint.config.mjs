import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: [
      "eslint.config.mjs",
    ],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
];
