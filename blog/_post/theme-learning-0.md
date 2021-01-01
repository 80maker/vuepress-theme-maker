---
date: 2020-12-26
title: 从零开始制作VuePress主题
category: theme
cover: /images/screenshot.webp
tags:
  - VuePress
---
## 缘起

朋友早前注册的域名快到期了,有一定的纪念意义，丢弃了怪可惜的，所幸我用了份午饭钱给续了期。.com域名的年费似乎要贵上不少,也许是一份蛮丰盛的午餐，当然这是后话了。因为这一份午餐,有了这个博客站点,也就有了这一份主题开发的记录整理。

## VuePress介绍

你现在看到的博客站点是一个现在比较流行的静态博客,用的github pages部署,这是github提供的一项免费服务，我们可以在上边放些静态HTML页面组成一个站点。VuePress就是方便我们维护和生成这个静态站点的工具,类似的还有`Hugo`、`hexo`、`jekyll`等等 闻如其名,VuePress是由Vue.js驱动的,而且出自Vue官方团队之手。它的诞生初衷便是为了支持 Vue 及其子项目的文档需求，拥有完善的Markdown支持,并自带了一个专门为技术文档而优化的`默认主题`.

## VuePress背后的工作机制
事实上,一个开发阶段的VuePress站点是一个由Vue、Vue Router、Webpack共同驱动的单页应用,如果你熟悉用Vue-cli脚手架开发web前端应用,你会觉得这并无二样,甚至你仍然可以用Vue DevTools去调试你的自定义VuePress主题.在主题开发过程中这会给我们带来极大的方便--比如`计算属性`和`routes`。当构建发布站点时,VuePress会创建一个服务端渲染(ssr)版本,类似Nuxt,生成所有对应的HTML页面。

## 创建VuePress主题所需的工具和准备工作

> * [Node.js](https://nodejs.org/en/)>= 8.6
> * [Github Pages](https://pages.github.com/) 其它部署平台可参考 [官方部署文档](https://vuepress.vuejs.org/zh/guide/deploy.html)
> * 顺手的文本编辑器. e.g [VSCode](https://code.visualstudio.com/)

## 主题源码下载
- 完整的主题源码都放在GitHub上了,可以随时Clone下来做为参照.

- [`VuePress-theme-maker`](https://github.com/80maker)

---

## 开启VuePress主题开发之旅

---

* :bear: [**常用术语**](/post/2021/01/01/theme-learning-concept.html)
* :sheep: **主题目录结构**
* :elephant: **模板文件和布局**
* :koala: **主题继承和插件**
* :hamster: **Header模板**
* :eagle: **内置搜索**
* :frog: **NavBar导航模板**
* :whale: **SideBar模板**
* :shark: **Archive文章归档页**
* :cow2: **Category分类页**
* :dragon_face: **Tag标签页**
* :unicorn: **Post文章详情页**
* :turtle: **Toc文章目录组件**
* :snail: **FriendLink友情链接页**
* :snail: **主题插件开发--悬浮球菜单**
* :snail: **主题优化篇**


