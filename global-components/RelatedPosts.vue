<template>
  <ul>
    <li v-for="item in list"><router-link :to="item.path">{{item.title}}</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'RelatedPosts',
    computed: {
      list() {
        let posts = this.$site.pages.filter(item => {
          if (item.pid !== 'post') {
            return false;
          }
          if (item.frontmatter.excludeRelatedPost) {
            return false;
          }
          if (Array.isArray(item.frontmatter.category)) {
            return item.frontmatter.category.includes(this.$frontmatter.category);
          }
          if(typeof item.frontmatter.category === 'string') {
            return item.frontmatter.category === this.$frontmatter.category;
          }
        });
        return posts;
      }
    }
  }
</script>