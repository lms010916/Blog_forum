<template>
  <div class="homepage-layout">
    <el-container>
      <!-- 可以加功能 -->
      <el-header>博客系统</el-header>
      <el-container>
        <el-aside width="200px">
          
        </el-aside>
        <el-main>
          <RouterLink to="/login">登录</RouterLink>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.homepage-layout {
  height: 100%;
  width: 100%;
}

.el-header {
  color: aqua;
  text-align: center;
  line-height: 60px;
  width: 100%;
  height: 60px;
  background-color: #545c64;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 200px;
  height: 100%;
  background-color: #639cd5;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 999;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100%;
  height: 100%;
  background-color: #E9EEF3;
  position: fixed; 
  top: 60px;
  left: 200px;
  z-index: 999;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  height: 60px;
  background-color: #545c64;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>