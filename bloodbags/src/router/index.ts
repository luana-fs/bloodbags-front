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
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/addBag",
      name: "addBag",
      component: () => import("../views/AddBagView.vue"),
    },
    {
      path: "/solicitations",
      name: "solicitations",
      component: () => import("../views/SolicitationsView.vue"),
    },
    {
      path: "/addRequest",
      name: "addRequest",
      component: () => import("../views/AddRequestView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const id = localStorage.getItem("hospitalId");

  if (!id && to.name !== "home") {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
