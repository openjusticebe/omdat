import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Court from "@/views/Court.vue";
import Document from "@/views/Document.vue";
import Stats from "@/views/Stats.vue";

var base_title = "Omdat ::";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to Omdat"
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: base_title + " About"
    },
  },
  {
    path: "/BE/:court",
    name: "Court {{ court }}",
    component: Court,
    meta: {
      title: base_title + " Court"
    },
  },


  {
    path: "/BE/:court/:year/:document",
    name: "Document",
    component: Document,
    meta: {
      title: base_title + " Document"
    },
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
    meta: {
      title: base_title + " Stats"
    },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
