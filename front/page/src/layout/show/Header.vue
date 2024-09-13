<template>
  <div class="header">
    <div class="header-1">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="header-2">
      <el-input size="large" v-model="searchValue" style="max-width: 800px;width:100%" placeholder="输入要搜索的内容"
        class="input-with-select" type="text">
        <template #prepend>
          <el-select size="large" v-model="selectValue" style="width: 80px">
            <el-option label="标题" value="标题" />
            <el-option label="内容" value="内容" />
            <el-option label="作者" value="作者" />
          </el-select>
        </template>
        <template #append>
          <el-button>
            <el-icon>
              <Search />
            </el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="header-4">
      <el-dropdown placement="bottom" trigger="click">
        <el-avatar :size="50" :src="avatar" />
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/IssueBlog" style="text-decoration: none;">
            <el-dropdown-item>发布博客</el-dropdown-item>
          </router-link>
            <router-link to="/myblog" style="text-decoration: none;">
              <el-dropdown-item>我的博客</el-dropdown-item>
            </router-link>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="header-3">
      <el-link href="#" :underline="false">
        <el-icon :size="24">
          <Position />
        </el-icon>
      </el-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    const data = {
      avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      selectValue: "标题",
      searchValue: "",
    }
    return data;
  },
}
</script>
<style scoped>
.header {
  text-align: center;
  /* line-height: 60px; */
  height: 60px;
  background-color: #f9f9f9;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-bottom: 0;
}

img {
  height: 60px;
  width: auto;
  border-radius: 5%;
}

/* 设置el-dropdown垂直居中显示 */
.el-col {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

/* 设置div标签并排显示 */
.header-1,
.header-2,
.header-3,
.header-4 {
  float: left;
  height: 100%;
  /* 垂直居中 */
  display: flex;
  align-items: center;
}

.header-1 {
  width: 180px;
  margin-right: 50px;
}

.header-2 {
  width: 50%;
  /* margin-right: 50px; */
}

.header-3 {
  width: 24px;
  float: right;
  margin-right: 15px;
}

.header-4 {
  width: 50px;
  float: right;
  margin-right: 10px;
}
</style>