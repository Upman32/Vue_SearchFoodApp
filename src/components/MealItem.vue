<template>
    <div 
    class="bg-white shadow rounded-xl">
    <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
      <img 
    :src="meal.strMealThumb"   
    :alt="meal.strMeal" 
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
<YoutubeButton :href="meal.strYoutube">
Youtube
</YoutubeButton>
</div>
    </div>
  </div>
</template>

<script setup>
const {meal} =defineProps({
  meal: {
  required:true,
  type:Object
}
})
</script>