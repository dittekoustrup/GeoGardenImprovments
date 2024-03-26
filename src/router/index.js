import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/newsletter",
      name: "newsletter",
      component: () => import("../views/NewsLetter.vue"),
      meta: {
        title: "Newsletter",
      },
    },
    {
      path: "/gdpr",
      name: "gdpr",
      component: () => import("../views/GdprPage.vue"),
      meta: {
        title: "GDPR",
      },
    },
  ],
});

export default router;
