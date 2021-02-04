<template>
  <div class="post-operate">
    <router-link v-if="$mkPrevPageItem" class="post-operate__prev" :to="$mkPrevPageItem.path">{{$mkPrevPageItem.title}}</router-link>
    <router-link v-if="$mkNextPageItem" class="post-operate__next" :to="$mkNextPageItem.path">{{$mkNextPageItem.title}}</router-link>
  </div>
</template>
<script>
import mixins from '@theme/mixins';
export default {
  name: 'PostNav',
  mixins: [mixins]
}
</script>
<style lang="stylus">
.post-operate
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid;
  border-color: inherit;
  line-height: 1.5;
  &__next
    text-align right
    &:after
      right: -.5rem;
      content: "\E909";
  &__prev:after
    left: -.5rem;
    content: "\E90A";
  a
    position: relative;
    flex: 1;
    padding: 0 1rem;
    &:after
      position: absolute;
      top: 0;
      font-size: 1.4rem;
      font-family: Icon;
      line-height: 1;
</style>