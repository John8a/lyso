import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/ProductPage.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: function () {
      return import('../views/ProductPage.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  },
  {
    path: '/sale',
    name: 'sale',
    component: function () {
      return import('../views/SaleView.vue')
    }
  },
  // make error page
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: function () {
      return import('../views/ErrorView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
