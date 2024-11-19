import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
];
