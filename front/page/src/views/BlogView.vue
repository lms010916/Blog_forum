<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-container>
        <el-aside width="200px">
          博主信息
        </el-aside>
        <el-main>
          <v-md-editor :model-value="blogContent" mode="preview"></v-md-editor>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import Header from '../layout/show/Header.vue';

export default {
  name: 'BlogView',
  components: {
    Header,
  },
  setup() {
    const data = {
      blogContent: '## 标题'
    };

    return data;
  }
}
</script>

<style scoped>
.el-header {
  padding: 0px;
}
</style>