<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="点赞" name="first">
      <BlogCard></BlogCard>
    </el-tab-pane>
    <el-tab-pane label="评论" name="second">
      <BlogCard></BlogCard>
    </el-tab-pane>
    <el-tab-pane label="收藏" name="third">
      <BlogCard></BlogCard>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import BlogCard from './BlogCard.vue';
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    BlogCard,
  }
}
</script>
<style scoped></style>