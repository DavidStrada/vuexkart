import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Product',
    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
