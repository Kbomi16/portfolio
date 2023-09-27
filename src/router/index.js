import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Project1 from '../views/projects/Project1.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/project1',
    component: Project1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
