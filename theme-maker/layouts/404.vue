<template>
  <div class="theme-container">
    <div class="theme-main">
      <div class="theme-main__inner theme-main__404">
        <h1 class="theme-404__message">{{ getMsg() }}</h1>

        <div class="tac">
          <RouterLink class="btn-back" to="/" title="Take me Home.">
            Nothing here. &gt;
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const msgs = [
  `(;-;)`,
  `(^_^)b`,
  `(≥o≤)`,
  `(^Д^)/`,
  `(˚Δ˚)b`,
  `(^-^*)`,
  `(o^^)o`,
  `(='X'=)`,
  `(·_·)`,
  `(>_<)`
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="stylus">
.theme-main__404
  opacity .5
.theme-404__message
  margin 10rem 0 3rem
  border 0
  font-weight normal
  font-size 10rem
  font-family monospace
.btn-back
  font-size 1.25rem
</style>