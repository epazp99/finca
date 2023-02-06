
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./components/Welcome.vue";
import Table from './components/Table.vue'
import Cultivos from './components/Cultivos.vue'
import Animales from './components/Animales.vue'
import User from './components/User.vue'

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/tables",
    name: "Table",
    component: Table
  },
  {
    path: "/animales",
    name: "Animales",
    component: Animales
  },
  {
    path: "/cultivos",
    name: "Cultivos",
    component: Cultivos
  }, 
  {
    path: "/users",
    name: "User",
    component: User
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;