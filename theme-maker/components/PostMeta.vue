<template>
  <div class="post-meta">
    <div
      v-if="author"
      class="post-meta-author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
    >
      <i class="icon-author"></i> 
      <span itemprop="name">{{ author }}</span>
      <span v-if="location" itemprop="address"> &nbsp; in {{ location }}</span>
    </div>
    <div v-if="date" class="post-meta-date">
      <i class="icon-calendar"></i> 
      <time pubdate itemprop="datePublished" :datetime="date">
        {{ resolvedDate }}
      </time>
    </div>
    <div v-if="resolvedCates" class="post-meta-cates" v-for="item in resolvedCates">
      <i class="icon-cate"></i>
      <router-link :to="item.path">
        {{ item.name}}
      </router-link>
    </div>
    <div>
      {{readingTime}}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs/plugin/utc'

dayjs.extend(dayjsPluginUTC)

export default {
  name: 'PostMeta',
  props: {
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
    cates: {
      type: [Array, String]
    }
  },
  computed: {
    resolvedDate() {
      return dayjs
        .utc(this.date)
        .format(this.$themeConfig.dateFormat || 'ddd MMM DD YYYY')
    },
    resolvedCates() {
      let res = [];
      let cates;
      if (!Array.isArray(this.cates)) {
        cates = [this.cates]; 
      }
      res = this.$category.list.filter(item => {
        return this.cates.includes(item.name);
      })
      return res;
    },
    readingTime() {
      return this.$page.content;
    }
  },
}
</script>

<style lang="stylus">
.post-meta
  > div
    display inline-flex
    line-height 12px
    font-size 12px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px
</style>
