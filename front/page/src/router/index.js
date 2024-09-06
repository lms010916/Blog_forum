import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// 引入视图
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/login', component: Login },
]

const router = createRouter({
  // createWebHistory()去除url中的#,可以直接在浏览器地址栏中访问
  history: createWebHistory(),
  routes,
})

export default router