<template>
  <div class="theme-code">
    <div class="theme-code__preview">
      <slot name="preview"/>
    </div>
    <div class="theme-code__source">
      <slot/>
    </div>
    <div class="theme-code__action">
      <i class="icon-down"/>
      <i class="icon-up"/>
      <span>显示代码</span>
      <a href="javascript:;">在线运行</a>
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
  }
}
</script>
<style lang="stylus">
</style>