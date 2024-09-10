<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    active-text-color="#303133">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <FolderOpened />
        </el-icon>
        <span>博客管理</span>
      </template>
      <el-menu-item index="1-1">
        <el-icon>
          <Document />
        </el-icon>
        我的
      </el-menu-item>
      <el-menu-item index="1-2">
        <el-icon>
          <Present />
        </el-icon>
        关注
      </el-menu-item>
      <el-menu-item index="1-3">
        <el-icon>
          <Star />
        </el-icon>
        收藏
      </el-menu-item>
      <el-menu-item index="1-4">
        <el-icon>
          <Pointer />
        </el-icon>
        点赞
      </el-menu-item>
      <el-menu-item index="1-5">
        <el-icon>
          <ChatDotRound />
        </el-icon>
        评论
      </el-menu-item>
      <el-menu-item index="1-5">
        <el-icon>
          <DataAnalysis />
        </el-icon>
        数据(暂定)
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Delete />
      </el-icon>
      <span>回收站</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <User />
      </el-icon>
      <span>个人信息</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Menu',
  data() { },
}
</script>
<style scoped>
.el-menu {
  height: 100%;
  background-color: #f9f9f9;
}
</style>