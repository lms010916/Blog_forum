<template>
  <div class="aside">
    <ul>
      <li>
        <RouterLink to="/">
          <el-icon>
            <School />
          </el-icon>首页
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/good">
          <el-icon>
            <DataLine />
          </el-icon>精华
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/newblog">
          <el-icon>
            <Document />
          </el-icon>最新
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/follow">
          <el-icon>
            <User />
          </el-icon>我的
        </RouterLink>
      </li>
    </ul>
    <p style="position: relative;margin-top: 100px;">By.SML</p>
  </div>
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