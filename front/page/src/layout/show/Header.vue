<template>
  <div class="header">
    <el-row :gutter="0">
      <el-col :span="14">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="logo">
        </router-link>
      </el-col>
      <el-col :span="8">
        <div class="mt-1">
          <el-input size="large" v-model="input" style="max-width: 800px;" placeholder="输入要搜索的内容"
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
      </el-col>
      <el-col :span="1">
        <el-link :underline="false">
          &ensp;&ensp;&ensp;
          <el-icon size="25">
            <EditPen />
          </el-icon>
        </el-link>
      </el-col>
      <el-col :span="1">
        <el-dropdown placement="bottom" trigger="click">
          <el-avatar :size="50" :src="avatar" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的博客</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 头像（可以退出账号、编辑个人信息、管理博客） -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    const data = {
      avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      selectValue: "标题",
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
</style>