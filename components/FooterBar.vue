<template>
  <div class="theme-footer">
    <div class="social-links">
      <template v-for="item in $themeConfig.social">
        <a v-if="item.type === 'email'" :key="item.type" target="_blank" rel="external nofollow noopener" :class="`icon-${item.type}`"
        :title="`${item.type}`" :href="`mailto:${item.link}`">{{item.type}}</a>
        <a v-else-if="item.type === 'github'" :key="item.type" target="_blank" rel="external nofollow noopener" :class="`icon-${item.type}`"
        :title="`${item.type}`" :href="`https://github.com/${item.link}`">{{item.type}}</a>
        <a v-else :key="item.type" target="_blank" rel="external nofollow noopener" :class="`icon-${item.type}`"
        :title="`${item.type}`" :href="`${item.link}`">{{item.type}}</a>
      </template>
    </div>
    <p class="copyright" v-html="$themeConfig.copyright"></p>
    <p class="powered">
      <span class="">Powered by <a href="https://vuepress.vuejs.org" target="_blank"
          rel="external nofollow noopener">VuePress</a></span>
      <span class="φde"> Theme - <a href="https://github.com/80maker/vuepress-theme" target="_blank"
          rel="external nofollow noopener">Maker</a></span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>
<style lang="stylus">
  .theme-footer
    position absolute
    bottom 0
    right 2rem
    text-align right
    font-size .85rem
    .social-links > a
      font-size 0
      &:before
        color: inherit;
        text-transform: none;
        font-style: normal;
        font-family: Icon;
        vertical-align: -1px;
        margin: 0 .4rem;
        font-size: 1.428rem;
        line-height: 1.5;
    .copyright a
      border-bottom 1px transparent
    .powered a
      border-bottom: 1px dotted;
    .copyright, .powered
      & a
        transition: color .15s, border-color .15s, opacity .15s;
      & a:hover
        border-bottom-style: solid;
        border-color: var(--theme-accent-color);
</style>