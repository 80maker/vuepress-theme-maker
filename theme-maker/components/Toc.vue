<template>
  <div class="theme-toc">
    <div
      v-for="(item, index) in $page.headers"
      ref="chairTocItem"
      :key="index"
      class="vuepress-toc-item"
      :class="[
        `vuepress-toc-h${item.level}`,
        { active: activeIndex === index },
      ]"
    >
      <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toc',
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    visible() {
      return (
        this.$frontmatter &&
        this.$frontmatter.toc !== false &&
        !!(this.$page && this.$page.headers && this.$page.headers.length)
      )
    },
  },
  watch: {
    activeIndex() {
      const items = this.$refs.chairTocItem || []
      const dom = items[this.activeIndex]
      if (!dom) return
      const rect = dom.getBoundingClientRect()
      const wrapperRect = this.$el.getBoundingClientRect()
      const top = rect.top - wrapperRect.top
      if (top < 20) {
        this.$el.scrollTop = this.$el.scrollTop + top - 20
      } else if (top + rect.height > wrapperRect.height) {
        this.$el.scrollTop += rect.top - (wrapperRect.height - rect.height)
      }
    },
    $route() {},
  },
}
</script>

<style lang="stylus">
.table-of-contents
  display none !important
.vuepress-toc
  position fixed
  display none
  max-height 100vh
  max-width 220px
  overflow-y auto
  padding-top 5rem
  top 0
  right 10px
  box-sizing border-box
  /* background: #fff; */
  z-index 0
  .vuepress-toc-item
    position relative
    padding 0.1rem 0.6rem 0.1rem 1.5rem
    line-height 1.5rem
    border-left 1px solid rgba(0, 0, 0, 0.08)
    overflow hidden
    a
      display block
      color $textColor
      width 100%
      box-sizing border-box
      font-size 12px
      font-weight 400
      text-decoration none
      transition color 0.3s
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    &.active
      border-left-color $accentColor
      a
        color $accentColor
    &:hover
      a
        color $accentColor
  for i in range(3, 6)
    .vuepress-toc-h{i} a
      padding-left 1rem * (i - 2)
// for vuepress-toc
@media (min-width: 1300px)
  .vuepress-toc
    display block
</style>