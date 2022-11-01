const routes = [
  {
    path: "/",
    component: () => import("layouts/Main/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/UserEntryLayout.vue")
  },
  {
    path: "/register",
    component: () => import("layouts/UserEntryLayout.vue")
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
