const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage/IndexPage.vue") }
    ]
  },
  {
    path: "/settings",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/SettingsPage.vue") }
    ]
  },
  {
    path: "/dashboard",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/DashboardPage.vue") }
    ]
  },
  {
    path: "/profile",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/ProfilePage.vue") }
    ]
  },
  {
    path: "/user-card/:id",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/UserCardPage.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/Auth.vue")
  },
  {
    path: "/register",
    component: () => import("layouts/Auth.vue")
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
