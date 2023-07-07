import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/addBag",
      name: "addBag",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddBagView.vue"),
    },
    {
      path: "/solicitations",
      name: "solicitations",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SolicitationsView.vue"),
    },
    {
      path: "/addRequest",
      name: "addRequest",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddRequestView.vue"),
    },
  ],
});

export default router;
