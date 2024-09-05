import { createMemoryHistory, createRouter } from 'vue-router'

// 引入视图
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', redirect: '/home'},
  {path: '/home', component: HomePage},
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router