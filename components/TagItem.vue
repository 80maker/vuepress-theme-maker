<template>
  <div class="theme-main__inner tag-item">
    <h1 class="tag__title"># {{$currentTag.key}}</h1>
    <div class="post-list">
      <a class="post-list__item" :href="item.path" v-for="item in postList" :key="item.date">
        <span class="post-list__date">{{item.date}}</span>
        <span class="post-list__title">{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagItem',
  computed: {
    postList() {
      let list = [];
      this.$currentTag.pages.map(item => {
        const date = new Date(item.frontmatter.date);
        list.push({
          ...item,
          date: `${date.toLocaleDateString()}`
        })
      });
      list.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      return list;
    }
  }
}
</script>
<style lang="stylus">
.tag-item
  background var(--theme-card-background)
  border-radius: 6px;
  padding: 2.15rem;
</style>