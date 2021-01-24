<template>
  <div class="theme-reward">
    <p class="theme-reward__text">{{$themeConfig.reward.text}}</p>
    <div class="theme-reward__con">
      <div class="theme-reward__list">
        <span class="item" v-for="(item, index) in $themeConfig.reward.ways" :style="activeStyle(item, index)" @click="handleActive(item, index)" :key="item.name">
          <i v-if="'icon' in item" :class="`icon-${item.icon}`" />
          <Icon v-else-if="'symbol' in item" :icon="item.symbol" />
        </span>
      </div>
      <div class="theme-reward__box" v-if="activeIndex !== ''">
        <div class="theme-reward__pic" :style="{'backgroundColor': qrData.color}">
          <img :src="qrData.qrcode" :key="activeIndex">
        </div>
        <div class="theme-reward__ft">
          <template v-if="qrData.url">
            <a target="_blank" rel="external nofollow noopener" :href="qrData.url">{{qrData.text}}
              <span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span>
            </a>
          </template>
          <template v-else>{{qrData.text}}</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  data() {
    return {
      size: '150',
      activeIndex: '',
      qrData: {
        name: '',
        icon: '',
        symbol: '',
        qrcode: '',
        url: '',
        text: '',
        color: ''
      }
    }
  },
  methods: {
    activeStyle(item, index) {
      if (index === this.activeIndex) {
        return {
          color: item.color
        }
      }
    },
    handleActive(item, index) {
      if (this.activeIndex === index) {
        return this.activeIndex = '';
      }
      this.activeIndex = index;
      this.qrData = item;
    }
  }
}
</script>

<style lang="stylus">
.theme-reward
  margin: 4rem 0 1.5rem;
  &__text
    text-align: center;
  &__con
    text-align: center;
  &__list
    display: inline-block;
    border: 1px solid;
    border-color: var(--theme-border-color);
    border-radius: 2.6rem;
    white-space: nowrap;
    font-size: .85rem;
    line-height: 2.6rem;
    .theme-icon, [class^="icon-"]
      font-size: 1.4rem;
      cursor: pointer;
      vertical-align: middle;
    .item
      position: relative;
      padding: 0 1rem;
      font-size: 1.1rem;
      transition: color .15s;
      &:after
        position: absolute;
        top: 50%;
        right: 0;
        height: 1.4rem;
        border-left: 1px solid;
        border-color: var(--theme-border-color);
        content: "";
        transform: translateY(-50%);
      &:first-child
        padding-left: 1.25rem;
      &:last-child
        padding-right: 1.25rem;
        &:after
          content none
  &__box
    overflow: hidden;
    border: 1px solid;
    border-color: var(--theme-border-color);
    border-radius: 6px;
    box-shadow: 3px 4px 11px var(--theme-border-color);
    margin-top: 1rem;
    width: 24rem;
    margin-left: auto;
    margin-right: auto;
  &__pic
    height: 16rem;
    position: relative;
    > img, > div
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      width 10rem;
      height: 10rem;
      border-radius: 6px;
    > div canvas
      border-radius: 6px;
      width: 100%!important;
      height: 100%!important;
  &__ft
    padding: 1rem 1.5rem;
    text-align: left;
    line-height: 1.5;
</style>
