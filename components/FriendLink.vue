<template>
  <div class="theme-main__inner friend-link">
    <header v-if="$frontmatter.cover" :style="headerStyle" class="article__header--hasCover">
      <div class="article__header-con">
        <hr class="article-hr"/>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
      </div>
    </header>
    <div class="friend-link__list">
      <a class="friend-link__item" :key="item.url" v-for="item in $frontmatter.links" :href="item.url" target="_blank" rel="external noopener">
        <div class="friend-link__details">
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
        </div>
        <div class="friend-link__image">
          <img :class="{'roundness': item.roundness}" :src="item.logo" alt="">
        </div>
      </a>
    </div>
    <div class="friend-link__content" :class="{'copy-code-enabled': $themeConfig.copy}">
      <Content itemprop="articleBody" />
      <Comments class="mt-4"/>
    </div>
  </div>
</template>
<script>
import Comments from '@theme/components/Comments.vue'
export default {
  name: 'FriendLink',
  components: {
    Comments
  },
  computed: {
    headerStyle() {
      if (!this.$frontmatter.cover) return;
      return {
        'background-image': `url(${this.$frontmatter.cover})`, 
        'background-color': this.$frontmatter.coverBgColor
      }
    }
  }
}
</script>
<style lang="stylus">
.friend-link
  header
    background var(--theme-card-background)
    border-radius: 6px;
  .post-title
    margin 0
  &__list
    margin-top 2rem
  &__item
    padding 1rem 2rem
    background var(--theme-card-background)
    display flex
    align-items center
    &:first-child
      border-top-left-radius 6px
      border-top-right-radius 6px
    &:not(:last-child)
      border-bottom dotted 1px var(--theme-border-color)
    &:last-child
      border-bottom-left-radius 6px
      border-bottom-right-radius 6px
  &__details
    flex auto
    h2
      margin 0
      font-size 1.6rem
    p
      font-size 1rem
      opacity 0.63
  &__image
    min-width 60px
    height 60px
    width 60px
    img
      width 100%
      height 100%
      &.roundness
        border-radius 50%
  &__content
    margin-top 2rem
    background var(--theme-card-background)
    border-radius: 6px;
    padding: 0.80625rem 2.15rem 2.15rem;
</style>