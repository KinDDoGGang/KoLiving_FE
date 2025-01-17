module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        r1: '#FF8E00',
        r2: '#FE75B9',
        r3: '#FFD3DD',
        r4: '#DD5D18',
        a1: '#F42500',
        a2: '#717D96',
        g0: '#FFFFFF',
        g1: '#FAFAFA',
        g2: '#EEEEEE',
        g3: '#E0E0E0',
        g4: '#BDBDBD',
        g5: '#757575',
        g6: '#424242',
        g7: '#212121',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      maxWidth: {
        default: '335px',
      },
      spacing: {
        default: '335px',
      },
      width: {
        default: '335px',
        medium: '125px',
        small: '77px',
      },
    },
  },
  plugins: [],
};
