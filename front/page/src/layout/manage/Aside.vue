<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" active-text-color="#303133">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <FolderOpened />
        </el-icon>
        <span>博客管理</span>
      </template>

      <el-menu-item v-for="i in menuList" :index="i.index" @click="clickEve(i.query)">
        <el-icon>
          <component :is="i.icon"></component>
        </el-icon>
        {{ i.name }}
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="2" @click="clickEve('deleted')">
      <el-icon>
        <Delete />
      </el-icon>
      回收站
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <User />
      </el-icon>
      <router-link to="/settings/info">个人信息</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { Document, FolderOpened, Present, Star, Pointer, ChatDotRound, DataAnalysis, Delete, User } from '@element-plus/icons-vue'
import { shallowRef } from 'vue'
export default {
  name: 'Menu',
  data() {
    const data = {
      menuList: [
        {
          index: '1-1',
          name: '我的',
          query: 'my',
          icon: shallowRef(Document)
        },
        {
          index: '1-2',
          name: '关注',
          query: 'follow',
          icon: shallowRef(Present)
        },
        {
          index: '1-3',
          name: '收藏',
          query: 'collection',
          icon: shallowRef(Star)
        },
        {
          index: '1-4',
          name: '点赞',
          query: 'like',
          icon: shallowRef(Pointer)
        },
        {
          index: '1-5',
          name: '评论',
          query: 'comment',
          icon: shallowRef(ChatDotRound)
        },
        {
          index: '1-6',
          name: '数据(暂定)',
          query: 'data',
          icon: shallowRef(DataAnalysis)
        }
      ]
    };
    return data;
  },
  methods: {
    clickEve(data) {
      this.$router.push({ path: '/settings/blogtable', query: { type: data } })
    }
  }
}
</script>
<style scoped>
.el-menu {
  height: 100%;
  background-color: #f9f9f9;
}

a,
.router-link-active {
  text-decoration: none;
  color: #303133;
}
</style>