const path = require('path')
module.exports = themeConfig => {
  /**
   * Default theme configuration
   */
  themeConfig = Object.assign(themeConfig, {
    searchPlaceholder: themeConfig.searchPlaceholder || 'Search',
    nav: themeConfig.nav || [
      { text: '🏠 Home', link: '/' }
    ],
    wordPerminute: themeConfig.wordPerminute || {cn: 300, en: 160},
    social: themeConfig.social || [],
    reward: themeConfig.reward || {},
    dateFormat: themeConfig.dateFormat || 'MMM DD, YYYY'
  })

  const plugins = [
    ['@vuepress/nprogress'],
    ['@vuepress/search'],
    ['flowchart'],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提示'
      }
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '注意'
      }
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '警告'
      }
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
    ['@vuepress/medium-zoom', {
      selector: '.article-content img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16,
        background: "#FF0000",
      }
    }],
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
    require('./plugin/theme-utils'),
    require('./plugin/float-menu')
  ];
  const config = {
    plugins,
    alias: {
      assets: path.resolve(__dirname, 'assets'),
    }
  }

  return config
}