module.exports = [
  '@vuepress/back-to-top',
  '@vuepress/medium-zoom',
  ['@vuepress/blog', {
    globalPagination: {
      prevText: '',
      nextText: ''
    },
    directories: [
      {
        id: 'post',
        dirname: '_post',
        path: '/post/',
        itemPermalink: '/post/:year/:month/:day/:slug.html',
        pagination: {
          perPagePosts: 10,
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
          lengthPerPage: 10
        }
      },
      {
        id: "category",
        keys: ['category', 'categories'],
        path: '/categories/',
        frontmatter: { title: 'Category' },
        pagination: {
          lengthPerPage: 10
        }
      }
    ],
    sitemap: {
      hostname: 'https://80shuo.com'
    },
    feed: {
      canonical_base: 'http://80shuo.com',
    },
    comment: {
      service: 'vssue',
      owner: '80maker',
      repo: '80maker.github.io',
      clientId: 'Iv1.57b5c522319529f6',
      clientSecret: '7ad0e3d1455a2d6425c813b37a0526e9bd820657',
    }
  }],
  require.resolve('../../../theme-maker/plugin')
]