<template>
  <span class="theme-mode-setting">
    <Icon icon="brightness-contrast" v-if="status === 0"/>
    <Icon icon="contrast" v-else-if="status === 1"/>
    <Icon icon="sun" v-else/>
  </span>
</template>
<script>
export default {
  data() {
    return {
      status: 0
    }
  },
  methods: {
    handleToggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    }
  }
}
</script>
<style lang="stylus">
.theme-mode-setting
  overflow hidden
  border-radius 50%
  display flex 
  align-items center
  justify-content center
  .theme-icon
    font-size 1.6rem
</style>