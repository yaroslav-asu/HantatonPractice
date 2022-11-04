const routes = [
  {
    path: "/",
    component: () => import("layouts/Main/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") }
    ]
  },
  {
    path: "/settings",
    component: () => import("layouts/App/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/SettingsPage.vue") }
    ]
  },
  {
    path: "/dashboard",
    component: () => import("layouts/App/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/DashboardPage.vue") }
    ]
  },
  {
    path: "/profile",
    component: () => import("layouts/App/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/App/ProfilePage.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/UserEntry/UserEntryLayout.vue")
  },
  {
    path: "/register",
    component: () => import("layouts/UserEntry/UserEntryLayout.vue")
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
