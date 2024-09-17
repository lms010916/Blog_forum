import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/ShowBlog.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../components/show/BlogCard.vue')
      },
      {
        path: 'good',
        component: () => import('../components/show/GoodBlog.vue')
      },
      {
        path: 'newblog',
        component: () => import('../components/show/NewBlog.vue')
      },
      {
        path: 'follow',
        component: () => import('../components/show/Follow.vue')
      }
    ]
  },
  { path: '/login', component: () => import('../views/Login.vue') },
  { path: '/myblog', component: () => import('../views/MyBlog.vue') },
  {
    path: '/settings',
    component: () => import('../views/ManageBlog.vue'),
    redirect: '/settings/blogtable',
    children: [
      {
        path: 'blogtable',
        component: () => import('../components/manage/Table.vue'),
      },
      {
        path: 'info',
        component: () => import('../components/manage/Info.vue'),
      },
    ]
  },
  {path: '/createBlog', component: () => import('../views/CreateBlog.vue') },
  {path: '/blogview', component: () => import('../views/BlogView.vue') },
]

const router = createRouter({
  // createWebHistory()去除url中的#,可以直接在浏览器地址栏中访问
  history: createWebHistory(),
  routes,
})

export default router