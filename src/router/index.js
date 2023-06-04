import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealsbyLetter from '../views/SearchByLetter.vue'
import MealsbyName from '../views/SearchByName.vue'
import MealsbyIngredient from '../views/SearchByIngredient.vue'


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
    path: "/by-ingridient/:ingridient?",
    name: "byIngredient",
    component: MealsbyIngredient,
  },  
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsbyName,
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
