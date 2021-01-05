  
import FloatMenu from './FloatMenu.vue'

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component('FloatMenu', FloatMenu)
  Vue.prototype.$eventBus = new Vue();
}