# 项目介绍
- 本项目是前台用户使用的界面，用于发布、查看、编辑、删除、搜索、点赞、评论等操作。
# 使用组件
- vue3
- element-plus
# 文件说明
```
myapp/
├── public/                             # 公共资源目录
│   ├── index.html                      # 项目的入口 HTML 文件
│   └── favicon.ico                     # 网站的图标
│
├── src/                                # 项目源代码目录
│   ├── api/                            # 定义和管理向后端服务器发送请求的模块或服务的目录
│   ├── assets/                         # 静态资源目录
│   ├── components/                     # 存放组件目录
│   ├── router/                         # 路由配置目录
│   ├── services/                       # 同api/一样功能
│   ├── store/                          # 全局状态管理目录
│   ├── styles/                         # 同assets/一样功能
│   ├── views/                          # 页面组件目录
│   ├── App.vue                         # 根组件
│   └── main.js                         # 项目入口文件
│
├── babel.config.js                     # Babel 配置文件
├── package.json                        # 项目配置文件
└── README.md                           # 项目说明文件
```
# page

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
