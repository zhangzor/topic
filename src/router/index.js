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
  // 多位数加法
  {
    path: '/algorithm/addition',
    name: 'addition',
    component: () => import('@/views/algorithm/addition.vue'),
    meta: {
      title: '多位数加法'
    }
  },
  // 多位数减法
  {
    path: '/algorithm/subtraction',
    name: 'subtraction',
    component: () => import('@/views/algorithm/subtraction.vue'),
    meta: {
      title: '多位数减法'
    }
  },
  // 多位数乘法
  {
    path: '/algorithm/multiplication',
    name: 'multiplication',
    component: () => import('@/views/algorithm/multiplication.vue'),
    meta: {
      title: '多位数乘法'
    }
  },
  // 多位数除法
  {
    path: '/algorithm/division',
    name: 'division',
    component: () => import('@/views/algorithm/division.vue'),
    meta: {
      title: '多位数除法'
    }
  },
  // 百分比乘法
  {
    path: '/algorithm/percentage',
    name: 'percentage',
    component: () => import('@/views/algorithm/percentage.vue'),
    meta: {
      title: '百分比乘法'
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

/**
 * @description 路由拦截
 * */
router.beforeEach(async (to, from, next) => {
  // 更改title名称
  to.meta.title && (document.title = to.meta.title)
  next()
})

export default router
