<template>
  <div class="theme-code">
    <div class="theme-code__preview">
      <slot name="preview"/>
    </div>
    <div class="theme-code__source" :class="{'opened': isShow}">
      <slot/>
    </div>
    <div class="theme-code__action" @click="handleToogle">
      <i class="icon-down" v-if="!isShow"/>
      <i class="icon-up" v-else/>
      <span v-if="isShow">隐藏代码</span>
      <span v-else>显示代码</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoCode',
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
  },
  methods: {
    handleToogle() {
      this.isShow = !this.isShow;
    }
  }
}
</script>
<style lang="stylus">
.theme-code
  border: 1px solid var(--theme-border-color);
  border-radius: 6px;
  transition: .2s;
  margin-bottom: 24px;
  margin-top 16px
  div[class*="language-"].line-numbers-mode:after
    border-radius 0
  pre[class*="language-"]
    margin 0
    border-radius 0
    border none
  &:hover
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  &__preview
    padding 24px
  &__source
    ackground-color: #fafafa;
    border-top: 1px solid var(--theme-border-color);
    overflow: hidden;
    height: 0;
    transition: height .2s;
    &.opened
      height auto
.theme-code__action
  border-top: 1px solid var(--theme-border-color);
  height: 44px;
  line-height 44px
  box-sizing: border-box;
  background-color: var(--theme-accent-color-005);
  opacity .9
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
  &:hover
    background-color var(--theme-accent-color-01)
    color var(--theme-accent-color)
:root.dark
  .theme-code
    &:hover
      box-shadow none
    &__preview
      background-color var(--theme-accent-color-005)
  .theme-code__action
    background-color var(--theme-highlight-01-048)
</style>