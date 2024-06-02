import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/NewsView.vue";
import NewsFullView from "@/views/NewsFullView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/news/:code',
      component: NewsFullView
    }
  ]
})

export default router
