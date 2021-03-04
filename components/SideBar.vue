<template>
  <div class="theme-sidebar">
    <div class="theme-sidebar__inner">
      <div class="theme-header">
        <RouterLink class="theme-header__logo" to="/">
          <img
            draggable="false"
            class="theme-header__picture"
            :src="$themeConfig.logo"
            alt="logo"
            width="160"
            height="160"/>
            <ThemePalette v-if="$themeConfig.palette"/>
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
import ThemePalette from '@theme/plugin/theme-palette/ThemePalette.vue'
export default {
  name: 'SideBar',
  components: {
    SubNav,
    Navbar,
    FooterBar,
    ThemePalette
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
    display: flex;
    flex-direction column
    align-content: flex-start
    margin-right -1rem
    padding-right 1rem
    box-sizing content-box
    width $sidebarWidth
    height: 100%;
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
    position relative
    display: inline-block;
    margin-top: 2.4rem;
    .theme-palette
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 20px;
      bottom: 20px;
      left : 100px;
      text-align: center;
      background-color: var(--theme-card-background);
      box-shadow: 0px 1px 5px var(--theme-border-color);
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
    font-family: var(--theme-font-logo);
    display block
    margin: 1.5rem;
    font-size: 1.714285rem;
    transition: color .15s;
  &__slogan
    padding: 0 1.6rem 1rem;
    line-height: 1.5;
    opacity: .63;
</style>