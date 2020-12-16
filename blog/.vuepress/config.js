module.exports = {
  title: '1980\'s Maker',
  description: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人',
  port: 8088,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '程序员', link: '/frontend/' },
      { text: '创(客)', link: '/maker/' },
      { text: '美(食)', link: '/foods/' },
      { text: '动(画)', link: '/animation/' },
      { text: '旧时光', link: '/oldtime/' },
    ],
    logo: '/logo.svg'
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/blog', {
      directories: [
        {
          id: 'frontend',
          dirname: '_frontend',
          path: '/frontend/',
          itemPermalink: '/frontend/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 2,
          },
        },
        {
          id: 'foods',
          dirname: '_foods',
          path: '/foods/',
          itemPermalink: '/foods/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 2,
          },
        },
        {
          id: 'maker',
          dirname: '_maker',
          path: '/maker/',
          itemPermalink: '/maker/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 2,
          },
        },
        {
          id: 'animation',
          dirname: '_animation',
          path: '/animation/',
          itemPermalink: '/animation/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 2,
          },
        },
        {
          id: 'oldtime',
          dirname: '_oldtime',
          path: '/oldtime/',
          itemPermalink: '/oldtime/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 2,
          },
        }
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tag',
          frontmatter: { title: 'Tag' },
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },
      ]
    }]
  ]
}