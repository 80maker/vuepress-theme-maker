<template>
  <transition name="collapse-transition">
    <Sticker v-if="isShow" class="theme-toc" v-bind="$attrs">
      <div
        v-for="(item, index) in $page.headers"
        ref="chairTocItem"
        :key="index"
        class="theme-toc-item"
        :class="[
          `theme-toc-h${item.level}`,
          { active: activeIndex === index },
        ]"
      >
        <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
      </div>
    </Sticker>
  </transition>
</template>

<script>
import Sticker from '@theme/components/Sticker.vue'
let initTop
// get offset top
function getAbsoluteTop(dom) {
  return dom && dom.getBoundingClientRect
    ? dom.getBoundingClientRect().top +
        document.body.scrollTop +
        document.documentElement.scrollTop
    : 0
}
export default {
  components: {
    Sticker,
  },
  data() {
    return {
      activeIndex: 0,
      isShow: false
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
  mounted() {
    this.$eventBus.$on('EV_TOGGLE_TOC', () => {
      this.isShow = !this.isShow;
    })
    // sync visible to parent component
    const syncVisible = () => {
      this.$emit('visible-change', this.visible)
    }
    syncVisible()
    this.$watch('visible', syncVisible)
    // binding event
    setTimeout(() => this.triggerEvt(), 1000)
    this._onScroll = () => this.onScroll()
    this._onHashChange = () => {
      const hash = decodeURIComponent(location.hash.substring(1))
      const index = (this.$page.headers || []).findIndex(h => h.slug === hash)
      if (index >= 0) this.activeIndex = index
      const dom = hash && document.getElementById(hash)
      if (dom) window.scrollTo(0, getAbsoluteTop(dom) - 20)
    }
    window.addEventListener('scroll', this._onScroll)
    // window.addEventListener('hashchange', this._onHashChange);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this._onScroll)
    window.removeEventListener('hashchange', this._onHashChange)
  },
  methods: {
    onScroll() {
      if (initTop === undefined) {
        initTop = getAbsoluteTop(this.$el)
      }
      // update position
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop
      const headings = this.$page.headers || []
      // change active toc with scrolling
      let i = 0
      const addLink = index => {
        this.activeIndex = index
      }
      for (; i < headings.length; i++) {
        const dom = document.getElementById(headings[i].slug)
        const top = getAbsoluteTop(dom)
        if (top - 50 < scrollTop) {
          addLink(i)
        } else {
          if (!i) addLink(i)
          break
        }
      }
    },
    triggerEvt() {
      this._onScroll()
      this._onHashChange()
    },
  },
}
</script>
<style lang="stylus">
.collapse-transition-enter-active {
  transition-duration: 378ms;
  transform: translateX(0);
  transition-property transform
}
.collapse-transition-leave-active {
  transition: all 378ms;
}
.collapse-transition-enter, .collapse-transition-leave-to
/* .collapse-transition-leave-active for below version 2.1.8 */ {
  transform translateX(100%)
  opacity: 0;
}
.table-of-contents
  display none !important
.theme-toc
  opacity .9
  text-align left
  box-shadow: -2px 0 3px rgba(0,0,0,.1);
  position fixed
  height 100vh
  max-width 252px
  overflow-y auto
  padding 1rem 0
  padding-left 1px
  width 252px
  top 0
  right 0
  box-sizing border-box
  background: var(--theme-card-background);
  z-index 0
  .theme-toc-item
    position relative
    line-height: 1.4;
    border-left 2px solid transparent
    overflow hidden
    &.theme-toc-h3 a
      padding-left 2.5em
    &.theme-toc-h4 a
      padding-left 3.5em
    a
      display block
      padding: .5em 1em;
      color var(--theme-foreground-color)
      width 100%
      box-sizing border-box
      font-size 14px
      font-weight 400
      text-decoration none
      transition color 0.3s
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    &.active
      border-left-color var(--theme-accent-color)
      a
        color var(--theme-accent-color)
    &:hover
      a
        color var(--theme-accent-color)
  for i in range(3, 6)
    .theme-toc-h{i} a
      padding-left 1rem * (i - 2)
</style>