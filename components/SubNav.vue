<template>
    <div class="theme-SubNav">
      <RouterLink class="theme-SubNav__item" :class="{'theme-SubNav__item--active': $page.pageType === 'archive'}" to="/archives/">
        <span class="theme-SubNav__count">{{archivesCount}}</span>
        <span class="theme-SubNav__name">Archives</span>
      </RouterLink>
      <RouterLink class="theme-SubNav__item" :class="{'theme-SubNav__item--active': ['category', 'categoryItem'].includes($page.pageType)}" to="/categories/">
        <span class="theme-SubNav__count">{{$category.length}}</span>
        <span class="theme-SubNav__name">Categories</span>
      </RouterLink>
      <RouterLink class="theme-SubNav__item" :class="{'theme-SubNav__item--active': ['tag', 'tagItem'].includes($page.pageType)}" to="/tags/">
        <span class="theme-SubNav__count">{{$tag.length}}</span>
        <span class="theme-SubNav__name">Tags</span>
      </RouterLink>
    </div>
</template>
<script>
export default {
  name: 'SubNav',
  computed: {
    archivesCount() {
      let list = this.$site.pages.filter(item => {
        return item.pid === 'post';
      });
      return list.length;
    }
  }
}
</script>
<style lang="stylus">
.theme-SubNav
  background: var(--theme-card-background);
  display: flex;
  justify-content: space-around;
  margin: 0 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  text-align: center;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  &__item
    position: relative;
    padding: 1.25rem 0;
    min-width: 24%;
    border-radius: 6px;
    &:after
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 62%;
      height: .3rem;
      content: "";
      transition: transform .4s;
      transform: scaleY(0);
      transform-origin: bottom center;
      border-radius: 3px 3px 0 0;
      background-color: currentColor;
    &--active
      &:link,&:visited,&:active,&:hover
        color var(--theme-accent-color)
      &:after
        transform: scaleX(1);
    &:hover:after
      transform: scaleX(1);
  &__count
    display: block;
    margin: 0 .5rem;
    line-height: 1;
    margin-bottom: .75rem;
    font-size: 1.4rem;
  &__name
    margin: 0 .5rem;
    font-size: .95rem;
    opacity: .63;
@media (max-width: $MQMobile)
  .theme-SubNav__item
    position relative
    &:after
      left: -.2rem;
      right: -.2rem;
      top: .5rem;
      bottom: .5rem;
      width: auto;
      height: auto;
      border-radius: 6px;
      background-color: hsla(0,0%,100%,.1)!important;
    &:hover :after
      position: absolute;
      content: "";
      transition: transform .4s;
      transform-origin: bottom center;
    &:link,&:visited,&:active,&:hover
      color #fff
    
</style>