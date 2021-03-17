<template>
  <div ref="valineBox" class="valine-box">
    <div id="vcomments"></div>
  </div>
</template>

<script>
// Use import
import Valine from 'valine'
export default {
  mounted() {
    setTimeout(() => {
      this.loadComment();
    }, 500)
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        // 切换页面时重新载入评论
        setTimeout(() => {
          this.loadComment()
        }, 500)
      }
    }
  },
  methods: {
    clearComment() {
      const oDiv = document.querySelector('#vcomments');
      oDiv && oDiv.remove();
    },
    loadComment() {
      this.clearComment();
      const oCommentContent = document.createElement('div');
      oCommentContent.setAttribute('id', 'vcomments');
      this.$refs.valineBox.appendChild(oCommentContent);
      new Valine({
        el:'#vcomments',
        path: window.location.pathname,
        ...this.$themeConfig.blog.comment
      })
    }
  }
}
</script>
<style lang="stylus">
.valine-box
  .v[data-class=v]
    a
      color var(--theme-foreground-color)
      &:hover
        color var(--theme-accent-color)
    .vwrap .vheader .vinput:focus
      border-bottom-color var(--theme-accent-color)
    .vcards .vcard
      .vh .vmeta .vat
        color var(--theme-foreground-color)
        &:hover
          color var(--theme-accent-color)
      .vhead .vnick:hover
        color var(--theme-accent-color)
</style>