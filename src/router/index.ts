import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/order-list',
      name: 'order-list',
      component: () => import('../views/OrderList.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
  ]
})

export default router

/*
routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/product-detail',
                    name: 'product-detail',
                    component: ProductDetail,
                },
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/list',
                    name: 'order-list',
                    component: OrderList,
                },
            ]
        },
    ]
*/