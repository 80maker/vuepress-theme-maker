<template>
  <div class="theme-main__inner category">
    <div class="category__list">
      <h1 class="category__title">{{$category.list.length}} categories in total</h1>
      <router-link class="category__link" v-for="item in $category.list" :key="item.name" :to="item.path">▪ {{ item.name }} [{{item.pages.length}}]</router-link>
    </div>
  </div>
</template>
<style lang="stylus">
.category
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