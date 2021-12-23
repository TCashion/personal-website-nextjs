module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // enabled: true,
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        card: '2px 2px 20px rgba(0,0,0,0.1)',
        light: '2px 2px 20px rgba(200,200,200,0.2)',
        extralight: '2px 2px 20px rgba(200,200,200,0.5)',
      },
      colors: {
        'jade-default': '#6CA39A',
        'jade-darker': '#4A706A',
      },
      container: {
        screens: {
          xl: '1600px',
        },
      },
      maxHeight: {
        450: '450px',
        300: '300px'
      },
      width: {
        '30%': '30%',
      },
      maxWidth: {
        900: '900px' 
      }
    },
  },
  variants: {},
  plugins: [],
};
