/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}', './shared/components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E14817',
          50: '#F9DAD1',
          100: '#F6C8B9',
          200: '#F3B6A2',
          300: '#F0A48B',
          400: '#ED9174',
          500: '#EA7F5D',
          600: '#E76D45',
          700: '#E45A2E',
          800: '#E14817',
        },
        warning: '#F9DA70',
        success: '#10B26E',
        neutral: {
          50: '#CFCFD1',
          100: '#B7B7B9',
          200: '#9F9FA2',
          300: '#87888B',
          400: '#6F7074',
          500: '#57585D',
          600: '#3F4045',
          700: '#27282E',
          800: '#0F1017',
        },
      },
      gridTemplateColumns: {
        website: 'repeat(12, 1fr)',
        mobile: 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [],
};
