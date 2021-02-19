export default {
  computed: {
    /**
     * @description 【页面实例属性】下一篇文章
     * @returns { Post }
     */
    $mkNextPageItem() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index + 1];
    },
    /**
     * @description 【页面实例属性】上一篇文章
     * @returns { Post }
     */
    $mkPrevPageItem() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index - 1];
    }
  },
  methods: {
    /**
     * @description 【页面实例方法】根据pid获取文章列表
     * @param { string } pid
     * @returns { article list }
     */
    getArticleList() {
      const pid = this.$page.pid;
      let list = this.$site.pages.filter(item => {
        return item.pid === pid;
      });
      list = list.sort((a,b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time1 - time2;
      })
      return list;
    }
  }
}