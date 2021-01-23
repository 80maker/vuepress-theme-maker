# vuepress-theme-maker

A flat and clean Blog Theme for VuePress site. inspired by [Hexo-theme-inside](https://github.com/ikeq/hexo-theme-inside)

## Preview

![预览](https://raw.githubusercontent.com/80maker/vuepress-theme-maker/main/blog/.vuepress/public/images/screenshot.webp)

## Features

- Build with Vue.js
- 在VuePress默认主题基础之上修改,保留了内置搜索,tag分类等绝大多数特性
- 基于官方博客插件`@vuepress/plugin-blog`制作
- 扩展了Markdown语法,支持`footnote` `mark` `abbr` `task-lists`
- 支持文章评论
- 内置友情链接页
- 文章阅读时长估算
- rss订阅及sitemap
- 暗黑模式
- 响应式主题

## Install

```
npm i vuepress-theme-maker -D
# OR yarn add vuepress-theme-maker -D
```

## Usage

```
// .vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-maker',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```

## Demo

[80shuo.com](https://github.com/80maker/80shuo)

## Deploy to Github Pages

```
npm run deploy
```
## Thanks to

- [VuePress](https://vuepress.vuejs.org/)
- [@vuepress/plugin-blog](https://github.com/vuepress/vuepress-plugin-blog)
- [@vuepress/theme-blog](https://github.com/vuepress/vuepress-theme-blog)

### license
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)
