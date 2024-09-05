<!-- vue路由模板 -->
<template>
  <div id="app"> 
    <!-- 根据路由加载视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/Login.vue'
import HomePage from './views/HomePage.vue';
export default {
  name: 'App',
  components: {
    Login,
    HomePage
  }
}
</script>