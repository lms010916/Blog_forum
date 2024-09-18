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
          <el-container>
            <el-main>
              <v-md-editor :model-value="blogContent" mode="preview"></v-md-editor>
            </el-main>
            <el-footer>
              评论区
            </el-footer>
          </el-container>
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
      blogContent: '# 标题\n'
        + '## 二级标题\n'
        + '### 三级标题\n'
        + '\n'
        + '#### 四级标题\n'
        + '##### 五级标题\n'
        + '###### 六级标题\n'
        + '\n'
        + '**加粗**\n'
        + '\n'
        + '*斜体*\n'
        + '\n'
        + '~~删除线~~\n'
        + '\n'
        + '> 引用\n'
        + '\n'
        + '`代码`\n',

    };

    return data;
  }
}
</script>

<style scoped>
.el-header {
  padding: 0px;
}

/**加上背景,方便观察 */
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>