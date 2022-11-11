module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundOpacity: {
        '04': '.04'
      },
      backgroundImage: {
        logo: "url('/src/assets/image/背景2.png')",
        shadow: "url('/src/assets/image/背景1.png')"
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      lineHeight: {
        22: '22px'
      },
      width: {
        senIcon: '22px',
        book: '151px',
        logo: '173.43px',
        '20': '20px',
        logoShadow: '438px',
        trial: '40px'
      },
      height: {
        rank: '300px',
        tabBar: '128px',
        line: '240px',
        book: '206px',
        '22': '22px',
        logo: '142.67px',
        logoShadow: '360px',
        '20': '20px'
      },
      minWidth: {
        1200: '1200px'
      },
      maxWidth: {
        280: '280px',
        230:'230px'
      },
      minHeight: {
        280: '280px',
        material: '408px',
      },
      fontSize: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '14px',
        tl: ['16px', '24px']
      },
      textColor: {
        primary: 'rgba(0,0,0,0.65);',
        warning: '#FF8F13',
        success: '#19BE6B',
        error: '#ED4014',
        normal: 'rgba(0,0,0,0.85)',
        yellow_define: '#FF8F13',
        blue_define: '#3691F2'
      },
      padding: {
        '40': '40px',
        '22': '22px',
        '25': '25px',
        '34': '34px'
      },
      margin: {
        '172': '172px',
        '71.33': '71.33px',
        '30': '30px',
        '7': '7px'
      },
      inset: {
        17: '17px'
      },
    }
  },
  plugins: []
}
