import { createRouter, createWebHistory } from '@ionic/vue-router';
import DashBoard from '../views/dashboard/DashBoardView.vue';
import ProductList from '../views/product/ProductListView.vue';
import ProductInfo from '../views/product/ProductInfoView.vue';
import EndorseList from '../views/endorse/EndorseListView.vue';
import Login from '../views/LoginView.vue';
import FirstSetting from '../views/account/FirstSettingView.vue';

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
    path: '/product/info/:id?',
    component: ProductInfo,
  },
  {
    path: '/endorse',
    component: EndorseList,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/firstSetting',
    component: FirstSetting,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
