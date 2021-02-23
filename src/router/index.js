import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Court from "@/views/Court.vue";
import Document from "@/views/Document.vue";
import Statistics from "@/views/Statistics.vue";
import Search from "@/views/Search.vue";

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
    path: "/search/:needle",
    name: "Search {{ needle }} ",
    component: Search,
    meta: {
      title: base_title + "Search"
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
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
    meta: {
      title: base_title + " Statistics"
    },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
