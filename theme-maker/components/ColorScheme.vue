<template>
    <div class="theme-colorScheme">
      <a class="item" href="javascript:;" @click="handleToLight">🌖</a> 
      <a href="javascript:;" @click="handleToDark">🌒</a> 
    </div>
</template>
<script>
export default {
  name: 'ColorScheme',
}
</script>
<style lang="stylus">
.theme-colorScheme
  background: var(--theme-card-background);
  display: flex;
  justify-content: space-around;
  margin: 0 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  text-align: center;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
</style>