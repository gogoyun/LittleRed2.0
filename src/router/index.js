import { createRouter, createWebHistory } from '@ionic/vue-router';
import DashBoard from '../views/dashboard/DashBoardView.vue';
import ProductList from '../views/product/ProductListView.vue';
import Login from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    component: DashBoard,
  },
  {
    path: '/product',
    component: ProductList,
  },
  {
    path: '/login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
