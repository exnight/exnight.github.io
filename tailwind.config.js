module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'home-cover-1080': "url('../../assets/img/sharp_island-1080.png')",
        'home-cover-720': "url('../../assets/img/sharp_island-720.png')",
        'home-cover-360': "url('../../assets/img/sharp_island-360.png')",
      }),
      height: {
        coverMd: '36rem',
        coverLg: '48rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
