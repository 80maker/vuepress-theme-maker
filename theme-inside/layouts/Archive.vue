<template>
  <ul id="archive-layout">
    <li v-for="tag in $tag.list">
      <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
    </li>
  </ul>
</template>