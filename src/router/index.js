import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '../views/AboutView.vue'
import LandingViewVue from '../views/LandingView.vue'

const routes = [

  {
    path: '/',
    name: 'landing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LandingViewVue
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
