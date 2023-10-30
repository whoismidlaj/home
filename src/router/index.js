import { createRouter, createWebHistory } from 'vue-router'
import DesktopView from '../views/Desktop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DesktopView
    }
  ]
})

export default router
