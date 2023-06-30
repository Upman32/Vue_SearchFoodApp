<template>
<Meals :meals="meals"/> 
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const meals = computed(() => store.state.mealsByIngredients)
const route  = useRoute([])

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>
