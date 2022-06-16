import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClubFormView from "../views/ClubFormView.vue";
import ClubsView from "../views/ClubsView.vue";
import ProfileView from "../views/ProfileView.vue";
import MembersOverview from "../views/MembersOverview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clubs",
      name: "clubs",
      component: ClubsView,
    },
    {
      path: "/club/:id?",
      name: "clubForm",
      component: ClubFormView,
    },
    {
      path: "/profile/:id?",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/members",
      name: "members",
      component: MembersOverview,
    },
  ],
});

export default router;
