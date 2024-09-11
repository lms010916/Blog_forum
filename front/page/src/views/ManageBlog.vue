<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '../layout/show/Header.vue';
import Menu from '../components/manage/Menu.vue';
export default {
  name: "ManageBlog",
  components: {
    Header,
    Menu
  },
  data() {
    const data = {
    };
    return data;
  },
};
</script>
<style scoped>
.el-container,
.el-aside {
  height: 100%;
}

.el-header {
  padding: 0;
  z-index: 7;
}
.el-aside{
  z-index: 8;
}
.el-main {
  padding: 0;
}
.el-container .el-container {
  height: calc(100% - 20px);
}
</style>