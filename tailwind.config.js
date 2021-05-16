module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        coverMd: '36rem',
        coverLg: '48rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
