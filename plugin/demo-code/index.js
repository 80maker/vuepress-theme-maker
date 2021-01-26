const { path } = require('@vuepress/shared-utils')

module.exports = {
  name: 'maker-code',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ]
}