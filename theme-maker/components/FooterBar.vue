<template>
  <div class="theme-footer">
    <div class="social-links">
      <a target="_blank" rel="external nofollow noopener" class="icon-email"
        title="email" href="mailto:cmgddd@163.com">email</a>
       <a target="_blank" rel="external nofollow noopener"
        class="icon-github" title="github" href="https://github.com/80maker">github</a>
        <a target="_blank" rel="external nofollow noopener"
        class="icon-qq"
        title="qq"
        href="//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi">qq</a>
        <a target="_blank" rel="external nofollow noopener"
        class="icon-feed" title="feed" href="/rss.xml">feed</a>
    </div>
    <p class="copyright">© 2020 ❤️ <a target="_blank" href="https://17ria.com">Neil Chen</a></p>
    <p class="powered">
      <span class="">Powered by <a href="https://vuepress.vuejs.org" target="_blank"
          rel="external nofollow noopener">VuePress</a></span>
      <span class="φde"> Inspired - <a href="https://github.com/ikeq/hexo-theme-inside" target="_blank"
          rel="external nofollow noopener">Inside</a></span>
    </p>
  </div>
</template>
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
        border-color: $primaryColor;
</style>