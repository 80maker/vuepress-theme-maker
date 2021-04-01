<template>
  <div class="theme-nav">
    <SearchBox class="mt-7" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <NavLinks/>
  </div>
</template>
<script>
import SearchBox from '@SearchBox'
import NavLinks from '@theme/components/NavLinks.vue'
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
      min-height 3rem;
      transition: all .15s;
      cursor pointer
      &:hover
        font-size: 1.168rem;
        & > a:after
          background-color: var(--theme-accent-color);
          background-image: none;
      > a, .dropdown-title
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
          box-shadow: 0 0 0 1px var(--theme-border-color);
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
    input
      background-color: var(--theme-card-background);
    .suggestions
      background-color: var(--theme-card-background);
      text-align left
      left 1rem
      right 0
      width auto
      .suggestion.focused a
        background-color var(--theme-accent-color-005)
        color var(--theme-accent-color)
@media (min-width: $MQMobile)
  .nav-links a:hover, .nav-links a.router-link-active
    color var(--theme-accent-color)
</style>