<template>
  <div class="myblog">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <div class="content">
          <el-container>
            <el-header>
              <ul>
                <li>
                  <router-link to="/">首页</router-link>
                </li>
                <li>
                  <router-link to="#">管理</router-link>
                </li>
              </ul>
            </el-header>
            <el-container>
              <el-aside width="230px">
                <el-card style="max-width: 230px">
                  <template #header>
                    <div class="card-header">
                      <span>个人信息</span>
                    </div>
                  </template>
                  <p align="left" v-for="o in privateData" class="text item">{{ o.title }}: {{ o.data }}</p>
                  <template #footer>BY. SML</template>
                </el-card>
              </el-aside>
              <el-main>
                <BlogCard></BlogCard>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 引入头部
import Header from "../layout/show/Header.vue";
// 引入博客卡片
import BlogCard from "../components/show/BlogCard.vue";
export default {
  name: "MyBlog",
  components: {
    Header,
    BlogCard
  },
  data() {
    const data = {
      privateData: [
        {
          title: "昵称",
          data: "SML"
        },
        {
          title: "网龄",
          data: "xxx日"
        },
        {
          title: "粉丝",
          data: "xxx人"
        },
        {
          title: "关注",
          data: "xxx人"
        }
      ]
    };
    return data;
  }
};

</script>

<style scoped>
.myblog {
  height: 250%;
  width: 100%;
  /* 设置背景图片 */
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.el-header {
  padding: 0;
}

.el-main {
  padding: 0;
  margin: 100px 10%;
  margin-bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.el-container {
  height: 90%;
}

.content,
.content .el-container {
  height: 100%;
}

.content .el-header {
  background-color: rgb(11, 11, 11);
  color: white;
}

.content .el-header ul {
  list-style: none;
  display: flex;
  height: 100%;
}

.content .el-header ul li {
  margin-right: 20px;
}

.content .el-header ul li a {
  color: white;
  text-decoration: none;
}

.content .el-aside {
  background-color: rgb(175, 173, 173);
  color: white;
  text-align: center;
  height: 100%;
  border-right: 1px solid #8d8c8c;
}
.el-card{
  background-color: #f9f9f9;
  height: 100%;
  border: 0;
  border-radius: 0;
}

.el-card p{
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 45px;
}

.el-card .card-header {
  font-size: 18px;
  font-weight: bold;
}
.content .el-main {
  margin: 0;
  padding: 30px;
}
</style>