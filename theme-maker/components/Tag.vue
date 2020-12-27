<template>
  <div class="theme-main__inner tag">
    <div class="tag__list">
      <h1 class="tag__title">{{$tag.list.length}} tags in total</h1>
      <router-link class="tag__link" v-for="tag in $tag.list" :key="tag.name" :to="tag.path"># {{ tag.name }}</router-link>
    </div>
  </div>
</template>
<style lang="stylus">
.tag
  background #ffffff
  border-radius: 6px;
  padding: 2.15rem;
  &__title
    font-family: impact,'Josefin Sans','PingFang SC','Microsoft YaHei';
    margin 0 0 1.5rem 0
    font-size: 1.78571rem;
    font-weight normal
  &__link
    display inline-block
    background rgba(96,125,139,.05);
    padding: 0 1em;
    border-radius: 3px;
    line-height: 2.4;
    transition: background-color .15s;
    margin: 0 1rem 1rem 0;
    &:hover
      background $primaryColor
      color #ffffff
  
</style>