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
    component: () => import('@/views/questionType/words.vue')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: {
      path: '/404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
