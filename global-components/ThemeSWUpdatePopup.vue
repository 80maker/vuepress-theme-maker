<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="theme-sw-update-popup">
      {{ message }}<br>
      <button class="theme-sw-update-popup__btn" @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style lang="stylus">
.theme-sw-update-popup
  text-align: right;
  position: fixed;
  bottom: 7rem;
  right: 1rem;
  background-color: var(--theme-card-background);
  font-size: 1.2rem;
  line-height: 2;
  border: 1px solid;
  padding: 1.5rem 2rem;
  border-color: var(--theme-border-color);
  border-radius: 6px;
  box-shadow: 3px 4px 11px var(--theme-border-color);
  text-align: center;
  z-index: 9;
  &__btn
    margin-top: .5rem;
    cursor: pointer;
    border: 1px solid;
    border-color: var(--theme-border-color);
    border-radius: .5rem;
    line-height: 2rem;
    width: 80%;
    background-color var(--theme-card-background)
    color var(--theme-foreground-color)
    &:hover
      color var(--theme-accent-color)
    &:active
      background-color var(--theme-accent-color-005)
    &:focus
      outline none
:root.dark
  .theme-sw-update-popup
    box-shadow none
</style>