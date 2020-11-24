import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Court from "@/views/Court.vue";
import CourtYear from "@/views/CourtYear.vue";
import CourtYearDocument from "@/views/CourtYearDocument.vue";

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
    path: "/BE/:court/:year",
    name: "CourtYear",
    component: CourtYear,
  },


  {
    path: "/BE/:court/:year/:document",
    name: "CourtYearDocument",
    component: CourtYearDocument,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
