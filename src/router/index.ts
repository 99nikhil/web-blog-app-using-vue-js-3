import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
      // meta: { requiresAuth: true },
      children: [
        {
          path: "/",
          component: () => import("../views/FirstLandingPage.vue"),
          meta: { requiresAuth: false },
        },
        {
          path: "explore",
          component: () => import("../views/HomeBlogCardsView.vue"),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("../views/UserAuthViewModel.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/signup/confirmSignUp",
      component: () => import("../views/ConfirmUserSignUpView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/user/sendConfirmationEmail",
      component: () => import("../views/UserConfirmationEmailView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/blog/user-registration",
      component: () => import("../views/BlogPostUserRegistration.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/blog-admin",
      component: () => import("../views/BlogEditorView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/blog",
      component: () => import("../views/BlogPostView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/:pageNotFound(.*)*",
      component: () => import("../views/PageNotFoundError.vue"),
      meta: { requiresAuth: false },
    },
  ],
});

export default router;
