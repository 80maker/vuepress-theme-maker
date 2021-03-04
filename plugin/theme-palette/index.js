module.exports = (options = {}, context) => ({
  name: 'maker-theme-palette',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ]
})