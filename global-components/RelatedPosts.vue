<template>
  <ul>
    <li v-for="item in list" :key="item.key"><router-link :to="item.path">{{item.title}}</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: 'RelatedPosts',
    props: {
      relatedType: {
        type: String,
        default: 'category'
      }
    },
    computed: {
      list() {
        let posts = this.$site.pages.filter(item => {
          if (item.pid !== 'post') {
            return false;
          }
          if (item.frontmatter.excludeRelatedPost) {
            return false;
          }
          return this.isRelatedPost(item);
        });
        return posts;
      }
    },
    methods: {
      isRelatedPost(item) {
        let arrFn = [];
        let keys;
        const self = this;
        if (self.relatedType === 'category') {
          keys = ['category', 'categories'];
        }
        if (self.relatedType === 'tag') {
          keys = ['tag', 'tags'];
        }
        arrFn = Array.of(() => {
          if(typeof self.$frontmatter[keys[0]] === 'string' && typeof item.frontmatter[keys[0]] === 'string')
          return self.$frontmatter[keys[0]] === item.frontmatter[keys[0]];
        }, () => {
          if (Array.isArray(item.frontmatter[keys[1]])) {
            return item.frontmatter[keys[1]].includes(self.$frontmatter[keys[0]]);
          }
        }, () => {
          if (Array.isArray(self.$frontmatter[keys[1]])) {
            return self.$frontmatter[keys[1]].includes(item.frontmatter[keys[0]]);
          }
        }, () => {
          if (Array.isArray(item.frontmatter[keys[1]]) && Array.isArray(self.$frontmatter[keys[1]])) {
             return self.$frontmatter[keys[1]].some(subItem => {
              return item.frontmatter[keys[1]].includes(subItem);
            });
          }
        });
        return arrFn.some(fnItem => {
          return fnItem();
        })
      }
    }
  }
</script>