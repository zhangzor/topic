import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/words',
    name: 'words',
    component: () => import('@/views/words.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
