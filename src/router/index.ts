import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页', noLogin: true },
      component: () => import('@/views/Home.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (to.meta.noLogin) return true
})
export default router
