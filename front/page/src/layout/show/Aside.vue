<template>
  <ul>
    <li>
      <RouterLink to="/">
        <el-icon>
          <School />
        </el-icon>首页
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/category">
        <el-icon>
          <Operation />
        </el-icon>博文分类
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/good">
        <el-icon>
          <DataLine />
        </el-icon>精华博文
      </RouterLink>
    </li>
    <li><a href="#"><el-icon>
          <Star />
        </el-icon>我的收藏</a></li>
    <li><a href="#"><el-icon>
          <ChatDotSquare />
        </el-icon>我的评论</a></li>
    <li><a href="#"><el-icon>
          <Pointer />
        </el-icon>我的点赞</a></li>
  </ul>
  <p style="position: relative;margin-top: 100px;">By.SML</p>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'Aside',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
/* ul链接列表样式 */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
  padding: 0;
  text-align: center;
}

li a {
  display: block;
  color: #000000;
  text-decoration: none;
  padding: 8px;
}

li a:hover {
  background-color: #d7d7d7;
}

/* 文字与图标垂直居中 */
.el-icon {
  vertical-align: middle;
  margin-right: 5px;
  bottom: 2px;
}
</style>