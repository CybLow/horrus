/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'autoprefixer',
    'tailwindcss',
    '@csstools/postcss-minify'
  ]
}

module.exports = config