module.exports = {
  title: '1980\'s Maker',
  description: '一个出生于80年代的程序员、创[客]、美[食]、动[画]、读[书]、怀[旧]的新手艺人',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '程序员', link: '/frontend/' },
      { text: '创(客)', link: '/maker/' },
      { text: '美(食)', link: '/foods/' },
      { text: '动(画)', link: '/movie/' },
      { text: '读(书)', link: '/books/' },
      { text: '旧时光', link: '/old-time/' },
    ]
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', '@vuepress/blog']
}