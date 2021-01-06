<template>
  <div class="theme-nav">
    <SearchBox class="mt-7" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <NavLinks/>
  </div>
</template>
<script>
import SearchBox from '@SearchBox'
import NavLinks from '@parent-theme/components/NavLinks.vue'
export default {
  name: 'NavBar',
  components: {
    SearchBox,
    NavLinks
  }
}
</script>
<style lang="stylus">
.theme-nav
  .nav-links
    display block
    margin: 2rem 0 3rem;
    .nav-item
      position: relative;
      display: block;
      padding-right: 2rem;
      border-color: inherit;
      text-align: right;
      text-transform: capitalize;
      white-space: pre;
      height 3rem;
      transition: all .15s;
      cursor pointer
      &:hover
        color $primaryColor
        font-size: 1.168rem;
        & > a:after
          background-color: var(--theme-accent-color);
          background-image: none;
      > a
        display block
        line-height 3rem
        height 100%
        white-space nowrap
        &:after
          position: absolute;
          top: 50%;
          right: 0;
          width: 7px;
          height: 7px;
          background: var(--theme-background);
          border-radius: 50%;
          content: "";
          box-shadow: 0 0 0 1px #e0e0e0;
          transform: translate(50%,-50%);
        &:not(.external)
          margin-bottom inherit
          border-bottom none
        &:not(.external).router-link-active
          margin-bottom inherit
          border-bottom none
          &:after
            background-color: var(--theme-accent-color);
            background-image: none;
  .search-box
    display block
    text-align right
    position relative
    z-index 1
    .suggestions
      text-align left
      left 1rem
      width auto
@media (min-width: $MQMobile)
  .nav-links a:hover, .nav-links a.router-link-active
    color $primaryColor
</style>