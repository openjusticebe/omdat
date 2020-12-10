import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Court from "@/views/Court.vue";
import Document from "@/views/Document.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/BE/:court",
    name: "Court",
    component: Court,
  },


  {
    path: "/BE/:court/:year/:document",
    name: "Document",
    component: Document,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
