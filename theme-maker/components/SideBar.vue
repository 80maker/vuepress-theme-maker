<template>
  <div class="theme-sidebar">
    <div class="theme-sidebar__inner">
      <div class="theme-header">
        <div class="theme-header__logo">
          <img
            draggable="false"
            class="theme-header__picture"
            src="/logo.jpg"
            width="160"
            height="160"/>
            <RouterLink class="theme-header__name" to="/">
              1980's Maker
            </RouterLink>
            <p class="theme-header__slogan">一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人</p>
        </div>
      </div>
      <SubNav/>
    </div>
  </div>
</template>
<script>
import SubNav from '@theme/components/SubNav.vue'
export default {
  name: 'SideBar',
  components: {
    SubNav
  },
}
</script>
<style lang="stylus">
// sidebar
.theme-sidebar
  position fixed
  top 0
  bottom 0
  left 0
  border-right 1px solid
  border-color #e0e0e0
  &__inner
    margin-right -1rem
    padding-right 1rem
    box-sizing content-box
    width 280px
    height 100%
.theme-header
  margin: 1rem 1rem 1em;
  border-radius: 6px;
  text-align: center;
  background #ffffff
  &__logo
    display: inline-block;
    margin-top: 2.4rem;
  &__picture
    padding: 2px;
    width: 8rem;
    height: 8rem;
    border: 1px solid;
    border-radius: 50%;
    border-color rgba(96,125,139,.4)
    vertical-align: bottom;
    box-sizing content-box
  &__name
    font-family: Lobster,cursive,'Josefin Sans','PingFang SC','Microsoft YaHei';
    display block
    margin: 1.5rem;
    font-size: 1.714285rem;
    transition: color .15s;
  &__slogan
    padding: 0 1.6rem 1.5rem;
    line-height: 1.5;
    opacity: .63;
</style>