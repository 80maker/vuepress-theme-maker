<template>
  <Comment v-if="['disqus', 'vssue'].includes(commentService)"></Comment>
  <Valine :is="Valine" v-else-if="commentService === 'valine'"></Valine>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  data() {
    return {
      Valine: null
    }
  },
  components: {
    Comment
  },
  computed: {
    commentService() {
      if (!this.$themeConfig.blog.comment) {
        return false;
      }
      return this.$themeConfig.blog.comment.service;
    }
  },
  mounted() {
    import('./Valine.vue').then(module => {
      this.Valine = module.default
    })
  }
}
</script>