import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// 浏览博客的主页
import ShowBlog from '../views/ShowBlog.vue'
// 首页视图
import BlogCard from '../components/show/BlogCard.vue'
// 分类视图
import Category from '../components/show/Category.vue'
// 精华博客视图
import GoodBlog from '../components/show/GoodBlog.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    component: ShowBlog,
    redirect: '/home',
    children:[
      {
        path: 'home',
        component: BlogCard
      },
      {
        path: 'category',
        component: Category
      },
      {
        path: 'good',
        component: GoodBlog
      }
    ]
  },
  { path: '/login', component: Login },
]

const router = createRouter({
  // createWebHistory()去除url中的#,可以直接在浏览器地址栏中访问
  history: createWebHistory(),
  routes,
})

export default router