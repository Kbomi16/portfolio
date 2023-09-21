import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import portfolio1 from '@/views/portfolio1.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/portfolio1',
    component: portfolio1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
