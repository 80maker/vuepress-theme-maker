module.exports = {
  title: '1980\'s Maker',
  description: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人',
  port: 8088,
  markdown: {
    lineNumbers: true
  },
  theme: require.resolve('../../theme-inside'), // 使用本地主题
  themeConfig: require('./config/themeConfig'),
  plugins: require('./config/plugins')
}