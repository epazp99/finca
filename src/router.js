
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./components/Welcome.vue";
import Table from './components/Table.vue'
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