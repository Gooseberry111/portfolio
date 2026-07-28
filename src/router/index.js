import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllProjectsView from "../views/AllProjectsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/projects", name: "all-projects", component: AllProjectsView },
  ],
});

export default router;
