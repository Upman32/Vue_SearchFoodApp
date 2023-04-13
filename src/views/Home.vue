<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-red-200 w-full"
      placeholder="Search for meals"
    />

    <div class="mt-2 flex justify-center gap-1">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
 const response = await axiosClient.get('/list.php?i=list')
 console.log(response.data)
})
</script>
