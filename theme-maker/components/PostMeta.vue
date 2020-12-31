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
    <div v-if="date" class="post-meta__date">
      <i class="icon-calendar"></i> 
      <time pubdate itemprop="datePublished" :datetime="date">
        {{ resolvedDate }}
      </time>
    </div>
    <div class="post-meta__reading">
      <i class="icon-time"></i>
      {{$page.wordCount}} words in {{$page.readingTime}} min
    </div>
    <div class="post-meta__cates" v-for="item in resolvedCates" :key="item.name">
      <i class="icon-cate"></i>
      <router-link :to="item.path">
        {{ item.name}}
      </router-link>
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
      type: [Array, String],
      default: () => {
        return []
      }
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
    }
  },
}
</script>

<style lang="stylus">
.post-meta
  display flex
  align-items center
  line-height 2
  > div
    display inline-flex
    align-items center
    font-size 14px
    margin-right 1rem
  i
    margin-right 0.4rem
    &:before
      vertical-align 3px
  svg
    margin-right 5px
    width 14px
    height 14px
.post-meta--hasCover
  a
    line-height 1.2
    &:link, &:visited
      color #ffffff
      border-top dotted 1px transparent
      border-bottom dotted 1px transparent
    &:hover
      border-bottom-color #ffffff
</style>
