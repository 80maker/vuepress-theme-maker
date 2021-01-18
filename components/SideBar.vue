<template>
  <div class="theme-sidebar">
    <div class="theme-sidebar__inner">
      <div class="theme-header">
        <RouterLink class="theme-header__logo" to="/">
          <img
            draggable="false"
            class="theme-header__picture"
            :src="$themeConfig.logo"
            width="160"
            height="160"/>
        </RouterLink>
        <RouterLink class="theme-header__name" to="/">
          {{$site.title}}
        </RouterLink>
        <p class="theme-header__slogan">{{$site.description}}</p>
      </div>
      <SubNav/>
      <Navbar/>
      <FooterBar/>
    </div>
  </div>
</template>
<script>
import FooterBar from '@theme/components/FooterBar.vue'
import Navbar from '@theme/components/Navbar.vue'
import SubNav from '@theme/components/SubNav.vue'
export default {
  name: 'SideBar',
  components: {
    SubNav,
    Navbar,
    FooterBar
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
  border-color var(--theme-border-color)
  &__inner
    margin-right -1rem
    padding-right 1rem
    box-sizing content-box
    width $sidebarWidth
    height calc(100% - 70px)
    padding-bottom 70px
    overflow-y auto
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
}
.theme-header
  margin: 1rem 1rem 1em;
  border-radius: 6px;
  text-align: center;
  background var(--theme-card-background)
  display: inline-block;
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