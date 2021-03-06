const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')

module.exports = withPlugins([withFonts], {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  exportPathMap: function() {
    /*
      В объект ниже следует добавлять те страницы, которые должны будут экспорироваться и быть видны на GitHub Pages.

      К примеру, после создания файла страницы `examplePage.jsx` в директории `pages`, нужно добавить такую строчку:
      '/examplePage': { page: '/examplePage' },
    */
    return {
      '/': { page: '/' },
    }
  },
})
