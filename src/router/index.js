import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView.vue";
import TourView from "../views/TourView.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/tour",
    name: "tour",
    component: TourView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
