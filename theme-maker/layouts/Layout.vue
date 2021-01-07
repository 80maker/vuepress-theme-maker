<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <SideBar/>
    <div class="theme-main">
      <Home v-if="$page.pageType === 'home'" />
      <Archive v-else-if="$page.pageType === 'archive'" />
      <Category v-else-if="$page.pageType === 'category'" />
      <CategoryItem v-else-if="$page.pageType === 'categoryItem'" />
      <Tag v-else-if="$page.pageType === 'tag'" />
      <TagItem v-else-if="$page.pageType === 'tagItem'" />
      <FriendLink v-else-if="$page.pageType === 'friendLink'" />
      <Post v-else></Post>
    </div>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Archive from '@theme/components/Archive.vue'
import Category from '@theme/components/Category.vue'
import Tag from '@theme/components/Tag.vue'
import CategoryItem from '@theme/components/CategoryItem.vue'
import TagItem from '@theme/components/TagItem.vue'
import Post from '@theme/components/Post.vue'
import FriendLink from '@theme/components/FriendLink.vue'
import SideBar from '@theme/components/SideBar.vue'
import { resolveSidebarItems } from '@parent-theme/util'
export default {
  name: 'Layout',
  components: {
    Home,
    Archive,
    Category,
    Tag,
    CategoryItem,
    TagItem,
    Post,
    SideBar,
    FriendLink
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$eventBus.$on('EV_TOGGLE_SIDE_BAR', () => {
      this.isSidebarOpen = !this.isSidebarOpen;
    })
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
      this.$eventBus.$emit('EV_TOGGLE_SEARCH', false)
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/mobile'
</style>