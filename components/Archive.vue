<template>
  <div class="theme-main__inner archive">
    <ul class="archive__list">
      <li class="archive__item" v-for="item of archiveList" :key="item.year">
        <h2 class="archive__year">{{item.year}}</h2>
        <div class="archive__sub-item" v-for="(subItem, key) of item.list" :key="key">
          <div class="archive__month-wrap">
            <span class="archive__month"> {{key}} </span>
          </div>
          <div class="archive__leaf-list">
            <a class="archive__leaf-item" :href="leafItem.path" v-for="leafItem in subItem" :key="leafItem.date">
              <span class="archive__date">{{leafItem.date}}</span>
              <span class="archive__title">{{leafItem.title}}</span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
const DATE_MAP = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export default {
  name: 'Archive',
  computed: {
    archiveList() {
      let res = {};
      let tmp = [];
      let list = this.$site.pages.filter(item => {
        return item.pid === 'post';
      });
      list = list.sort((a,b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time2 - time1;
      })
      list.map(item => {
        const date = new Date(item.frontmatter.date)
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthKey = DATE_MAP[month]
        const day = `${date.getDate()}`;
        res[year] || (res[year] = {});
        res[year][monthKey] || (res[year][monthKey] = []);
        item.date = `${`${month + 1}`.padStart(2, 0)}-${day.padStart(2, 0)}`;
        res[year][monthKey].push(item);
      })
      for (let [key, item] of Object.entries(res)) {
        tmp.push({
          year: +key,
          list: item
        });
      }
      tmp.sort((a, b) => {
        return b.year - a.year;
      })
      return tmp;
    }
  }
}
</script>
<style lang="stylus">
.archive
  border-radius 6px
  padding 2.15rem
  border-color var(--theme-border-color)
  background var(--theme-card-background) 
  &__list
    margin 0
    padding-left 0
    list-style none
    border-color inherit
  &__item
    &:first-child
      margin-top -2.15rem
    &:last-child
      margin-bottom -2.15rem
      padding-bottom 6rem
    border-color inherit
    position relative
    padding 2.15rem 0
    &:before
      position absolute
      top 0
      left 1.5rem
      height 100%
      border-left 1px solid
      border-color inherit
      content ""
  &__year
    margin 0
    font-size 1.78571rem
    position relative
    line-height 2.4em
    background var(--theme-card-background)
  &__sub-item
    display flex
    align-items flex-start
    &:hover
      .archive__month:after
        opacity 1
  &__month-wrap
    display flex
    justify-content space-between
    align-items flex-start
    width 3rem
    transform scale3d(.75,.75,1)
    transform-origin center top
  &__month
    position relative
    z-index 0
    background var(--theme-card-background)
    padding 0 .6em
    margin-top 1rem
    color #fff
    text-transform uppercase
    font-weight 600
    line-height 2
    font-family Sarpanch,'Josefin Sans','PingFang SC','Microsoft YaHei'
    &:after
      position absolute
      z-index -1
      border-radius 2em
      left 0
      top 0
      right 0
      bottom 0
      content ' '
      opacity .63
      transition opacity .4s
      background-color var(--theme-accent-color)
  &__leaf-item
    position relative
    display flex
    padding .5rem 0
    padding-left 1.5rem
    line-height 2rem
    align-items flex-start 
    &:after
      position absolute
      content '-'
      left 0
      width 1.5rem
      text-align center
  &__date
    white-space nowrap
    letter-spacing 1px
    font-size .85rem
    opacity .63
    padding-right .5rem
    font-family Sarpanch,'Josefin Sans','PingFang SC','Microsoft YaHei'
  &__title
    font-size 1.15rem
</style>