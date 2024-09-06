<template>
  <div class="commont-layout">
    <el-container>
      <!-- 可以加功能 -->
      <el-header>博客系统</el-header>
      <el-container>
        <el-aside>
          <ul>
            <li><a href="#"><el-icon>
                  <Operation />
                </el-icon>分类</a></li>
            <li><a href="#"><el-icon>
                  <DataLine />
                </el-icon>精华</a></li>
            <li><a href="#"><el-icon>
                  <Star />
                </el-icon>收藏</a></li>
            <li><a href="#"><el-icon>
                  <ChatDotSquare />
                </el-icon>评论</a></li>
            <li><a href="#"><el-icon>
                  <Pointer />
                </el-icon>点赞</a></li>
          </ul>
          <p style="position: relative;margin-top: 100px;">By.SML</p>
        </el-aside>
        <el-main>
          <el-row :gutter="0">
            <el-col :span="18">
              <!-- <el-scrollbar height="670px" always="false"> -->
                <!-- <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> -->
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                 <p> <a href="#">博客标题</a></p>
                <!-- </p> -->
              <!-- </el-scrollbar> -->

            </el-col>
            <el-col :span="6">
              排行榜
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>

export default {
  name: 'HomePage',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
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

.el-header {
  text-align: center;
  line-height: 60px;
  height: 60px;
  background-color: #f9f9f9;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
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
}

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

.el-main {
  padding: 10px 0 0 20px;
}

/* 分页居中 */
.el-pagination {
  text-align: center;
}

*::-webkit-scrollbar {
	display: none;
}

</style>