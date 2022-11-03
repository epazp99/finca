
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./components/Welcome.vue";
import Table from './components/Table.vue'

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
      }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;