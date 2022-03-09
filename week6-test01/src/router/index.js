import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'prods',
        component: () => import('../views/ProdsView.vue')
      },
      {
        path: 'prod/:id', // 帶入參數，若要動態傳入，就需要加「:」
        component: () => import('../views/ProdView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },

  // 後台
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'prods', // 不用斜線，實際上的路徑呈現：admin/prods
        component: () => import('../views/AdminProds.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
