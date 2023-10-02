import { createRouter, createWebHistory } from '@ionic/vue-router';
import DashBoard from '../views/dashboard/DashBoard.vue'

const routes = [
  {
    path: '/',
    component: DashBoard,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
