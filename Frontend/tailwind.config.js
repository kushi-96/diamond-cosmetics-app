const defaultConfig = require('./src/config/tailwind.config')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: { ...defaultConfig.theme },
}
