module.exports = {
  siteName: '1980\'s Maker',
  logo: '/logo.jpg',
  siteDesc: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人',
  nav: [
    { text: '🏠 Home', link: '/' },
    { text: '📖 Theme', link: '/categories/theme/' },
    { text: '🐉 Maker', link: '/categories/maker/' },
    { text: '🔥 Animation', link: '/categories/animation/' },
    { text: '📽 Old Time', link: '/categories/oldtime/' },
    { text: '🔗 friend-links', link: '/friend-links/' },
  ],
  searchPlaceholder: 'Search',
  searchMaxSuggestions: 10,
  social: [
    {
      type: 'email',
      link: 'cmgddd@163.com'
    },
    {
      type: 'github',
      link: '80maker/vuepress-theme-maker'
    },
    {
      type: 'qq',
      link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
    },
    {
      type: 'feed',
      link: '/rss.xml'
    }
  ],
  copyright: '© 2020 ❤️ <a target="_blank" href="https://17ria.com/">Neil Chen</a>',
  blog: {
    directories: [
      {
        id: 'post',
        dirname: '_post',
        path: '/',
        itemPermalink: '/post/:year/:month/:day/:slug.html',
        frontmatter: { title: '' },
        pagination: {
          perPagePosts: 10,
          prevText: '',
          nextText: ''
        },
      }
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tags/',
        frontmatter: { title: 'Tag' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      },
      {
        id: "category",
        keys: ['category', 'categories'],
        path: '/categories/',
        frontmatter: { title: 'Category' },
        pagination: {
          lengthPerPage: 10,
          prevText: '',
          nextText: ''
        }
      }
    ],
    sitemap: {
      hostname: 'https://80shuo.com',
      exclude: ['/404.html']
    },
    feed: {
      canonical_base: 'http://80shuo.com',
    },
    palette: {},
    comment: {}
  }
}