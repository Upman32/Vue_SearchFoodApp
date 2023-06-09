import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealsbyLetter from '../views/SearchByLetter.vue'
import MealsbyName from '../views/SearchByName.vue'
import MealsByIngredient from '../views/SearchByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'


const routes = [
  {path:'/',
component: DefaultLayout,
children: [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsbyLetter,
  },  
  {
    path: "/ingredients",
    name: "ingredients",
    component: Ingredients,
  },  
  {
    path: "/by-ingredient/:ingredient",
    name: "byIngredient",
    component: MealsByIngredient,
  },  
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsbyName,
  },
  {
    path:'meal/:id',
    name:'mealDetails',
    component:MealDetails
  }
]
},
{
  path:'/guest',
  component:GuestLayout
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
