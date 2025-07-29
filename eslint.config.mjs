import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    settings: {
      tailwindcss: {
        callees: ['twMerge', 'twJoin', 'classnames', 'clsx'],
        classRegex: '^(active)?[cC]lass(Name)?$',
      },
    },
  },
  {
    env: {
      node: true,
    },
  },
];
