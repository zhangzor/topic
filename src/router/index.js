import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    }
  },
  // 成语积累
  {
    path: '/questionType/words',
    name: 'words',
    component: () => import('@/views/questionType/words.vue'),
    meta: {
      title: '成语积累'
    }
  },
  // 速算练习
  {
    path: '/questionType/quickCalculation',
    name: 'quickCalculation',
    component: () => import('@/views/questionType/quickCalculation.vue'),
    meta: {
      title: '速算练习'
    }
  },
  // 加法
  {
    path: '/algorithm/addition',
    name: 'addition',
    component: () => import('@/views/algorithm/addition.vue'),
    meta: {
      title: '加法'
    }
  },
  // 减法
  {
    path: '/algorithm/subtraction',
    name: 'subtraction',
    component: () => import('@/views/algorithm/subtraction.vue'),
    meta: {
      title: '减法'
    }
  },
  // 乘法
  {
    path: '/algorithm/multiplication',
    name: 'multiplication',
    component: () => import('@/views/algorithm/multiplication.vue'),
    meta: {
      title: '乘法'
    }
  },
  // 除法
  {
    path: '/algorithm/division',
    name: 'division',
    component: () => import('@/views/algorithm/division.vue'),
    meta: {
      title: '除法'
    }
  },
  // 百分比
  {
    path: '/algorithm/percentage',
    name: 'percentage',
    component: () => import('@/views/algorithm/percentage.vue'),
    meta: {
      title: '百分比'
    }
  },
  // 两位数加法
  {
    path: '/algorithm/twoDigitAddition',
    name: 'twoDigitAddition',
    component: () => import('@/views/algorithm/twoDigitAddition.vue'),
    meta: {
      title: '两位数加法'
    }
  },
  // 两位数减法
  {
    path: '/algorithm/twoDigitSubtraction',
    name: 'twoDigitSubtraction',
    component: () => import('@/views/algorithm/twoDigitSubtraction.vue'),
    meta: {
      title: '两位数减法'
    }
  },
  // 分数变百分比
  {
    path: '/algorithm/fraction',
    name: 'fraction',
    component: () => import('@/views/algorithm/fraction.vue'),
    meta: {
      title: '分数变百分比'
    }
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
