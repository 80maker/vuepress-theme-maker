<template>
  <div class="float-menu-wrap">
    <Toc/>
    <div class="float-menu" @click="toggleMenu" :class="{'float-menu--open': isSHow}">
      <svg
        class="float-menu__progress"
        width="100%"
        height="100%">
        <circle
          stroke="currentcolor"
          stroke-width="2%"
          fill="transparent"
          r="48%"
          cx="50%"
          cy="50%"/>
      </svg>
      <div class="float-menu__dot"></div>
      <!-- <div class="float-menu__text">71<span>%</span></div> -->
    </div>
    <span class="icon-sidebar"></span>
  </div>
</template>
<script>
import Toc from '@theme/components/Toc.vue'
export default {
  name: 'FloatMenu',
  components: {
    Toc
  },
  data() {
    return {
      isSHow: false
    }
  },
  methods: {
    toggleMenu() {
      this.isSHow = !this.isSHow;
    }
  }
}
</script>
<style lang="stylus">
.float-menu-wrap
  position: fixed;
  right: 1.3rem;
  bottom: 1.3rem;
  z-index: 1;
  color: #fff;
  text-align: center;
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
  &--open &__dot
    transform rotate(-90deg)
  &:before
    content ''
    position absolute
    width 88%
    height 88%
    border-radius 50%
    background-color $primaryColor
    box-shadow 0 0 8px #ccc
  &__progress
    position absolute
    width 100%
    height 100%
    circle
      color $primaryColor
      transition: 0.35s stroke-dashoffset;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
  &__text
    position relative
    font-family var(--inside-font-label)
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
</style>