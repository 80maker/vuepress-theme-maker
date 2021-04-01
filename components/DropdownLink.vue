<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <a
      href="javascript:;"
      class="dropdown-title"
      :aria-label="dropdownAriaLabel"
      @click="setOpen(!open)"
    >
      <span class="title">{{ item.text }}</span>
      <i class="icon-plus-circle" v-if="!open"/>
      <i class="icon-minus-circle" v-else/>
    </a>

    <DropdownTransition>
      <ul
        v-show="open"
        class="nav-dropdown"
      >
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
        >
          <h4 v-if="subItem.type === 'links'">
            {{ subItem.text }}
          </h4>

          <ul
            v-if="subItem.type === 'links'"
            class="dropdown-subitem-wrapper"
          >
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
            >
              <NavLink
                :item="childSubItem"
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                    isLastItemOfArray(subItem, item.items) &&
                    setOpen(false)
                "
              />
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
            @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
import last from 'lodash/last'
export default {
  name: 'DropdownLink',
  components: {
    NavLink,
    DropdownTransition
  },
  props: {
    item: {
      required: true
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    dropdownAriaLabel () {
      return this.item.ariaLabel || this.item.text
    }
  },
  watch: {
    $route () {
      this.open = false
    }
  },
  methods: {
    setOpen (value) {
      this.open = value
    },
    isLastItemOfArray (item, array) {
      return last(array) === item
    },
    /**
     * Open the dropdown when user tab and click from keyboard.
     *
     * Use event.detail to detect tab and click from keyboard. Ref: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
     * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
     */
    handleDropdown () {
      const isTriggerByTab = event.detail === 0
      if (isTriggerByTab) this.setOpen(!this.open)
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  cursor pointer
  display flex
  flex-direction column
  .dropdown-title
    &:after
      display none
  i
    color var(--theme-accent-color-08)
    position absolute
    font-size .5rem
    right 0
    transform: translate(50%, 0);
  &.open .nav-dropdown
    // override the inline style.
    display block !important
  &.open .dropdown-title
    font-size 1.168rem
    color var(--theme-accent-color)
  &.open:blur
    display none
  .nav-dropdown
      font-size 1rem
      transition height .1s ease-out
      overflow hidden
      list-style none
      margin 0
      margin-top .5rem
      .dropdown-item
        line-height 3rem
        h4
          padding-left 1rem
          border-top 0
          margin-top 0
          padding-top 0
          margin-bottom .5rem
        h4, & > a
        .dropdown-subitem
          list-style none
          line-height 2.5rem
          font-size 12px
          padding-left 1rem
@media (max-width: $MQNarrow)
  .dropdown-wrapper
    i
      color #fff
      opacity .5
      right 1rem
    .dropdown-item
      color #fff
</style>