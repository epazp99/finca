import { createApp } from 'vue'
import App from './App.vue'


import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

import VueRouter from 'vue-router'
import router from "./router";



// createApp(App).mount('#app')

const app = createApp(App);
app.use(router);
app.mount("#app");


