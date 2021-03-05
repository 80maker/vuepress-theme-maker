<template>
  <div class="float-menu-wrap" :class="{'float-menu-wrap--open': isSHow}">
    <Toc/>
    <div class="float-menu__list">
      <span class="icon-up" @click="scrollToTop"></span>
      <DarkMode/>
      <span class="icon-sidebar" @click="handleToggleSideBar" v-if="width < narrowWidth"></span>
      <span class="icon-toc" v-if="$page.pid === 'post'" @click="toggleToc"></span>
      <span class="icon-search" @click.stop="toggleSearch"></span>
      
    </div>
    <div class="float-menu" @click="toggleMenu">
      <svg
        class="float-menu__progress"
        width="100%"
        height="100%">
        <circle
          ref="js_progressCircle"
          :stroke-dasharray="computedStrokeDasharray"
          stroke="currentcolor"
          stroke-width="2%"
          fill="none"
          r="48%"
          cx="50%"
          cy="50%"/>
      </svg>
      <div class="float-menu__dot"  v-if="count === 0"></div>
      <div class="float-menu__text" v-else>{{count}}<span>%</span></div>
    </div>
  </div>
</template>
<script>
import Toc from '@theme/components/Toc.vue'
import DarkMode from '@theme/components/DarkMode.vue'
import { getCssVar } from '../../util'
export default {
  name: 'FloatMenu',
  components: {
    Toc,
    DarkMode
  },
  data() {
    return {
      isSHow: false,
      scrollTop: 0,
      count: 0,
      narrowWidth: 0,
      width: 0
    }
  },
  computed: {
    computedStrokeDasharray() {
      const circumference = 48 * 2 * Math.PI;
      const offset = this.count / 100 * circumference;
      return `${offset}% ${circumference}%`
    }
  },
  mounted() {
    this.narrowWidth = parseInt(getCssVar('--theme-narrow-width'));
    this.width = window.innerWidth;
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    }, false)
    this.scrollTop = this.getScrollTop();
    window.addEventListener('scroll', () => {
      const nScrollHeight = document.documentElement.scrollHeight;
      const nClientHeight = document.documentElement.clientHeight;
      this.scrollTop = this.getScrollTop()
      this.count = Math.floor(this.scrollTop / (nScrollHeight - nClientHeight) * 100);
    });
  },
  methods: {
     getScrollTop () {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    toggleMenu() {
      this.isSHow = !this.isSHow;
    },
    toggleToc() {
      this.$eventBus.$emit('EV_TOGGLE_TOC')
    },
    toggleSearch() {
      this.$eventBus.$emit('EV_TOGGLE_SEARCH')
    },
    handleToggleSideBar() {
      this.$eventBus.$emit('EV_TOGGLE_SIDE_BAR')
    }
  }
}
</script>
<style lang="stylus">
:root
  --theme-narrow-width $MQNarrow
.float-menu-wrap
  position: fixed;
  right: 1rem;
  bottom: 1.3rem;
  z-index: 9;
  color: #fff;
  text-align: center;
  &--open
    .float-menu__dot
      transform rotate(-90deg)
    .float-menu__list > span
      opacity: 1;
      z-index 0
      &.icon-search
        z-index -1
      &:nth-child(3n-2)
        top: 0;
        right: 0;
      &:nth-child(3n)
        bottom: 0;
        left: 0;
      &:nth-child(3n-1)
        top: 0;
        left: 0;
      &:first-child
        transform: translate3d(0,-140%,0);
      &:nth-child(2)
        transform: translate3d(-98.99495%,-98.99495%,0);
      &:nth-child(3)
        transform: translate3d(-140%,0,0);
      &:nth-child(4)
        transform: translate3d(0,-280%,0);
      &:nth-child(5)
        transform: translate3d(-107.15136%,-258.68627%,0);
.float-menu
  position relative
  -webkit-tap-highlight-color rgba(0,0,0,0)
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;
  opacity .8
  display flex
  align-items center
  justify-content center
  &:before
    content ''
    position absolute
    width 88%
    height 88%
    border-radius 50%
    background-color var(--theme-accent-color)
    box-shadow 0 0 8px #ccc
  &__list
    width 4.4rem
    height 0
    -webkit-tap-highlight-color: transparent;
    > span
      position: absolute;
      right  0
      bottom 0
      z-index: -1;
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      background-color: rgba(0,0,0,.8);
      box-shadow: 0 2px 4px 1px rgba(0,0,0,.2);
      font-size: 1.5rem;
      line-height: 3.4rem;
      opacity: 0;
      cursor: pointer;
      transition: .4s cubic-bezier(0,0,.382,1.618);
      transition-property: transform,opacity;
  &__progress
    position absolute
    width 100%
    height 100%
    circle
      color var(--theme-accent-color)
      transition: 0.35s stroke-dashoffset;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
  &__text
    position relative
    font-family var(--theme-font-label)
    font-size 1.2rem
    span
      font-size .75rem
  &__dot
    position relative
    width 0.4rem
    height 0.4rem
    border-radius 50%
    background-color #ffffff
    transition all .15s cubic-bezier(0,0,.382,1.618)
    &:before
      content ''
      position absolute
      width 100%
      height 100%
      border-radius 50%
      background-color inherit
      top -200%
      left 0
    &:after
      content ''
      position absolute
      width 100%
      height 100%
      border-radius 50%
      background-color inherit
      top 200%
      left 0
@media (max-width: $MQNarrow)
  .float-menu-wrap .float-menu__list
    span.icon-sidebar
      display: block
</style>