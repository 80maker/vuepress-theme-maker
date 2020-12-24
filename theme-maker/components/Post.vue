<template>
  <article
    class="vuepress-blog-theme-content"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <header>
      <h1 class="post-title" itemprop="name headline">
        {{ $frontmatter.title }}
      </h1>
    </header>
    <Content itemprop="articleBody" />
    <footer>
      <hr />
      <Comment />
    </footer>
  </article>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  components: {
    Comment
  },
}
</script>