  
import FloatMenu from './FloatMenu.vue'
import Search from './Search.vue'

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component('FloatMenu', FloatMenu)
  Vue.component('Search', Search)
  Vue.prototype.$eventBus = new Vue();
}