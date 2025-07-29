/**
 * @type {import('prettier').Options}
 **/
module.exports = {
  singleQuote: true,
  semi: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindStylesheet: './src/styles/global.css',
  tailwindFunctions: ['clsx', 'twJoin', 'twMerge'],
};
