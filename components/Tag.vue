<template>
  <div class="theme-main__inner theme-tag">
    <div class="theme-tag__list">
      <h2 class="theme-tag__title">{{$tag.list.length}} tags in total</h2>
      <router-link class="theme-tag__link" v-for="tag in $tag.list" :key="tag.name" :to="tag.path"># {{ tag.name }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tag'
}
</script>
<style lang="stylus">
.theme-tag
  background var(--theme-card-background)
  border-radius: 6px;
  padding: 2.15rem;
  &__title
    margin 0 0 1.5rem 0
    font-size: 1.78571rem;
    font-weight normal
  &__link
    display inline-block
    background var(--theme-accent-color-005)
    padding: 0 1em;
    border-radius: 3px;
    line-height: 2.4;
    transition: background-color .15s;
    margin: 0 1rem 1rem 0;
    &:hover
      background var(--theme-accent-color)
      color #ffffff
  
</style>