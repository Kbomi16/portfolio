import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Project1 from '../views/projects/Project1.vue'
import Project2 from '../views/projects/Project2.vue'
import Project3 from '../views/projects/Project3.vue'
import Project4 from '../views/projects/Project4.vue'
import Project5 from '../views/projects/Project5.vue'
import Project6 from '../views/projects/Project6.vue'
import Project7 from '../views/projects/Project7.vue'
import Project8 from '../views/projects/Project8.vue'
import Project9 from '../views/projects/Project9.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/project1',
    component: Project1
  },
  {
    path: '/project2',
    component: Project2
  },
  {
    path: '/project3',
    component: Project3
  },
  {
    path: '/project4',
    component: Project4
  },
  {
    path: '/project5',
    component: Project5
  },
  {
    path: '/project6',
    component: Project6
  },
  {
    path: '/project7',
    component: Project7
  },
  {
    path: '/project8',
    component: Project8
  },
  {
    path: '/project9',
    component: Project9
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
