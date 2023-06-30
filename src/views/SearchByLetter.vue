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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
<meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
</div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

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
