<template>
  <div class="post-operate">
    <router-link v-if="prevPageItem" class="post-operate__prev" :to="prevPageItem.path">{{prevPageItem.title}}</router-link>
    <router-link v-if="nextPageItem" class="post-operate__next" :to="nextPageItem.path">{{nextPageItem.title}}</router-link>
  </div>
</template>
<script>
export default {
  name: 'PostNav',
  computed: {
    nextPageItem() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index + 1];
    },
    prevPageItem() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index - 1];
    },
  },
  methods: {
    getArticleList() {
      let list = this.$site.pages.filter(item => {
        return item.pid === 'post';
      });
      list = list.sort((a,b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time2 - time1;
      })
      return list;
    }
  }
}
</script>
<style lang="stylus">
.post-operate
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid;
  border-color: inherit;
  line-height: 1.5;
  &__next
    text-align right
    &:after
      right: -.5rem;
      content: "\E909";
  &__prev:after
    left: -.5rem;
    content: "\E90A";
  a
    position: relative;
    flex: 1;
    padding: 0 1rem;
    &:after
      position: absolute;
      top: 0;
      font-size: 1.4rem;
      font-family: Icon;
      line-height: 1;
</style>