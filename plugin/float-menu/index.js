const { path } = require('@vuepress/shared-utils')

module.exports = {
  name: 'maker-float-menu',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],

  globalUIComponents: ['FloatMenu', 'Search']
}