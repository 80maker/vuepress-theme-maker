<template>
  <ul id="default-layout">
    <li v-for="category in $category.list">
      <router-link class="page-link" :to="category.path">{{ category.name }}</router-link>
    </li>
  </ul>
</template>