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
    <div class="friend-link__content">
      <Content itemprop="articleBody" />
      <Comment/>
    </div>
  </div>
</template>
<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  name: 'FriendLink',
  components: {
    Comment
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
    background #ffffff
    border-radius: 6px;
  .post-title
    margin 0
  &__list
    margin-top 2rem
  &__item
    margin-top 1rem
    margin-bottom 1rem
    padding 1rem 2rem
    background #ffffff
    border-radius: 6px 6px 0 0;
    border-bottom dotted 1px var(--inside-border-color)
    display flex
    align-items center
    &:last-child
      border-bottom none
      border-radius 6px
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
    background #ffffff
    border-radius: 6px;
    padding: 0.80625rem 2.15rem 2.15rem;
</style>