<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div 
    v-for="meal of meals" 
    :key="meal.idMeal" 
    class="bg-white shadow rounded-xl">
    <router-link to="/">
      <img 
    :src="meal.strMealThumb"   
    :alt="strMeal" 
    class="rounded-t w-full h-48 object-cover">
    </router-link>
<div class="p-3">
  <h3 class="font-bold">{{ meal.strMeal }}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Vitae consequatur nemo officia alias,
       sit ipsum unde quos aliquid autem, iusto beatae quaerat quam!
        Odio obcaecati, eos esse quidem libero deleniti.
      </p>
    <div class="flex items-center justify-between">
<a :href="meal.strYoutube" target ="_blank" 
class="px-3 py-2 rounded border-2 hover:bg-red-500 hover:text-white border-red-600 transition-colors">Youtube</a>
<router-link  
class="px-3 py-2 rounded border-2 hover:bg-orange-500 hover:text-white border-orange-600 transition-colors" to="/">View</router-link>
</div>
</div>
    </div>
  </div>
</template>
<script setup>
import {computed} from "vue"
import {ref} from 'vue'
import axiosClient from "../axiosClient";
import store from "../store";
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

</script>  
