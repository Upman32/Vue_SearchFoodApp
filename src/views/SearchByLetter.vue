<template>
    <div class="mt-2 flex justify-center gap-1">
      <router-link
      :to="{name: 'byLetter', params: {letter}}" 
      v-for="letter of letters" 
      :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div>
      <pre>{{ meals }}</pre>
    </div>
</template>
<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter)
</script>  
