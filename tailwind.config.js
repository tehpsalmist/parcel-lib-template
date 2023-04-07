const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.indigo,
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
      }),
      inset: (theme) => ({
        ...theme('spacing'),
      }),
      spacing: {
        36: '9rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '100vw': '100vw',
        content: 'calc(100vh - 3rem)',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 -1px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
