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
      path: "/events",
      name: "events",
      component: () => import("../views/OutOfScope.vue"),
      meta: {
        title: "EVENTS",
      },
    },

    {
      path: "/haveblog",
      name: "haveblog",
      component: () => import("../views/OutOfScope.vue"),
      meta: {
        title: "HAVEBLOG",
      },
    },

    {
      path: "/priser-åbningstider",
      name: "priser-åbningstider",
      component: () => import("../views/OutOfScope.vue"),
      meta: {
        title: "PRISER / ÅBNINGSTIDER",
      },
    },

    {
      path: "/newsletter",
      name: "newsletter",
      component: () => import("../views/NewsLetter.vue"),
      meta: {
        title: "KUNDEKLUB",
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
