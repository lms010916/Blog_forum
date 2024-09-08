<template>
  <div class="commont-layout">
    <el-container>
      <!-- 可以加功能 -->
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-main>
          <el-row :gutter="0">
            <el-col :span="18">
              <!-- 插入博客组件 -->
              <!-- <BlogCard></BlogCard> -->
              <router-view></router-view>
            </el-col>
            <el-col :span="6">
              <!-- 插入推荐组件 -->
              <Recommand></Recommand>
            </el-col>
          </el-row>
          <br/>
          <el-pagination background layout="prev, pager, next" :total="1000" />
          <br v-for="i in 10" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
// 引入Recommand组件
import Recommand from '../layout/show/Recommand.vue'
// 引入aside组件
import Aside from '../layout/show/Aside.vue'
// 引入header组件
import Header from '../layout/show/Header.vue'
export default {
  name: 'HomePage',
  components: {
    Recommand,
    Aside,
    Header
  },
  data() {
    const data = {};
    return data;
  },
}
</script>

<style scoped>
/* container占满屏幕 */
.commont-layout {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #ffffff;
}

.el-container {
  height: 100%;
  width: 100%;
}

.el-aside {
  background-color: #f9f9f9;
  text-align: center;
  line-height: 20px;
  padding-top: 20px;
  width: 200px;
  left: 20px;
  height: 400px;
  margin-right: 20px;
  position: relative;
  /* 圆角 */
  border-radius: 0 0 5px 5px;
  /* 阴影 */
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.el-main {
  padding: 20px 0 0 20px;
}

/* 隐藏滚动条 */
*::-webkit-scrollbar {
  display: none;
}
.el-header{
  padding: 0;
}
</style>