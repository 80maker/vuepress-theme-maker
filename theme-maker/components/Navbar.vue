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
      line-height: 3rem;
      transition: all .15s;
      cursor pointer
      &:hover
        font-size: 1.168rem;
      > a
        white-space nowrap
        &:not(.external)
          margin-bottom inherit
          border-bottom none
        &:not(.external).router-link-active
          margin-bottom inherit
          border-bottom none
  .search-box
    display block
    text-align right
    position relative
    z-index 1
    .suggestions
      text-align left
      left 1rem
      width auto
</style>