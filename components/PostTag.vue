<template>
  <ul class="post-tag">
    <li class="post-tag__item" v-for="item in tags">
      <router-link :to="'/tags/' + item">
        <span># {{ item }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tags: {
      type: Array,
      default() {
        return []
      }
    },
  },
}
</script>

<style lang="stylus">
.post-tag
  list-style none
  padding-bottom: 1rem;
  padding-left 0
  &__item 
    border-radius 3px 0 0 3px
    padding: 0 1em;
    border-radius: 3px;
    line-height: 2.4;
    transition: background-color .15s;
    display inline-block
    background-color var(--theme-accent-color-01)
    &:hover
      background-color var(--theme-accent-color)
      span
        color #ffffff
  li
    margin 0 1rem 1rem 0
</style>