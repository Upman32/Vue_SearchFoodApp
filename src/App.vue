<template>
<div class="bg-gray-500 h-full">
  <header class="bg-white shadow flex justify-between h-16 items-stretch">
<router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5">
  Home
</router-link>
<div class="flex items-center gap-1">
  <router-link to="/" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100">
    Search Meals
  </router-link>
  <router-link to="/" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100">
     Meals by letter
  </router-link>
  <router-link to="/" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100">
     Meals by ingredients
  </router-link>
</div>
  </header>
  <main>
<router-view />
  </main>
</div>
</template>
<script setup>

</script>
<style scoped>
</style>
