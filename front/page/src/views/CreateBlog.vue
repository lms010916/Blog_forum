<template>
  <!-- 容器 -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 内容 -->
    <el-main>
      <v-md-editor v-model="text"></v-md-editor>
    </el-main>
  </el-container>
</template>

<script>
import Header from '../layout/show/Header.vue'

export default {
  name: 'CreateBlog',
  components: {
    Header
  },
  setup() {
    // 文本内容
    const data = {
      text: '123456'
    };

    return data;
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0px;
}
.v-md-editor {
  height: 100%;
}
</style>