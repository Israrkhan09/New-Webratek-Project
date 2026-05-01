/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#14d9c4',
          dark:    '#0d9e8e',
          light:   '#14b8a6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Placeholder', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        pill: '50px',
        full: '9999px',
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #0d9e8e 0%, #14b8a6 100%)',
        'hero-bg':       'linear-gradient(135deg, #062b27 0%, #083d36 100%)',
      },
      boxShadow: {
        card:       '0 4px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
        teal:       '0 4px 24px rgba(14,158,142,0.4)',
        nav:        '0 2px 16px rgba(0,0,0,0.10)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'float':      'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
