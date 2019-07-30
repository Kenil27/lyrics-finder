const isProd = process.env.NODE_ENV === 'production'

const withCSS = require('@zeit/next-css')
/* Without CSS Modules, with PostCSS */

module.exports = withCSS({
    assetPrefix: isProd ? '/lyrics-finder' : '',
})
