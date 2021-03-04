<template>
  <div class="theme-palette">
    <span class="theme-palette__emoji"><Icon icon="palette"/></span>
    <div class="theme-palette__list">
      <a :style="{color: `${item.btnColor}`}" v-for="item in colors" href="javascript:;" :title="item.btnColor" @click.stop="setThemeColors(item)"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemePalette',
  computed: {
    colors() {
      const colors = this.$themeConfig.palette.colors;
      if (!Array.isArray(colors)) {
        return [];
      }
      return colors;
    }
  },
  data() {
    return {
      themePaletteBox: null
    }
  },
  mounted() {
    const ele = document.createElement('style');
    ele.setAttribute('id', 'js_themePalette');
    this.themePaletteBox = ele;
    ele.innerHTML = window.localStorage.getItem('__palette__');
    document.getElementsByTagName('head')[0].appendChild(ele);
  },
  methods: {
    setThemeColors(item){
      this.themePaletteBox.innerHTML = `@media (prefers-color-scheme: dark) { html {${item.paletteVars.dark || ''}} } html.light {${item.paletteVars.light || ''}} html.dark {${item.paletteVars.dark || ''}}`;
      window.localStorage.setItem('__palette__', this.themePaletteBox.innerHTML);
    }
  }
}
</script>

<style lang="stylus">
.theme-palette
  display flex
  align-items center
  border-radius: 20px;
  &:hover
    min-width 110px
    padding-right 8px
  a
    background currentColor
    width 100%
    height 8px
    box-sizing border-box
    &:hover
      opacity .9
      transform scale(1.2)
  &__emoji
    display flex
    align-items center
    justify-content center
    flex-shrink 0
    width 20px
    height 20px
    color var(--theme-accent-color)
  &__list
    display flex
    width 100px
</style>