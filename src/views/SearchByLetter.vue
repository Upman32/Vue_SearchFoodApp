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
 <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute();

watch(route, () => {
store.dispatch('searchMealsByLetter', route.params.letter)
})
onMounted(() => {
store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>  
