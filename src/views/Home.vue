<template>
  <div class="flex flex-col p-8">
    <div class="mt-2 flex justify-center gap-1">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const ingredient = ref([])

onMounted(async () => {
 const response = await axiosClient.get('/list.php?i=list')
 console.log(response.data)
ingredient.value = response.data
})
</script>
