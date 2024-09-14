<template>
  <el-container>
    <el-header>
      <el-input v-model="input1" style="width: 100%" placeholder="输入标题">
        <template #prepend>标题</template>
      </el-input>
    </el-header>
    <el-main>
      <!-- 使用富文本编辑器 -->
      <Edit></Edit>
    </el-main>
    <el-footer>
      确认发布
    </el-footer>
  </el-container>
</template>
<script>
import Edit from '../manage/Edit.vue'
export default {
  name: 'Publish',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Edit
  }
}
</script>
<style scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-container {
  padding: 20px;
  margin-top: 3%;
}
</style>