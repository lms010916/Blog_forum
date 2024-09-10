<template>
  <!-- 利用循环显示每个博客 -->
  <div class="blog-card" v-for="i in blogs">
    <div class="title"><a href="#">{{ i.title }}</a></div>
    <p>
      <a href="#" class="image"><img src="../../assets/test.jpg" alt="头像"></a>
      {{ i.content }}
    </p>
    <div class="floor">
      <a href="#" class="username">{{ i.username }}</a>
      <a href="#" class="create_time">{{ i.create_time }}</a>
      <a href="#" class="like">点赞
        <span>{{ i.like }}</span>
      </a>
      <a href="#" class="comment">评论
        <span>{{ i.comment }}</span>
      </a>
      <a href="#" class="collect">收藏
        <span>{{ i.collect }}</span>
      </a>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  data() {
    const data = {
      // 多个博客的数据，使用列表存储
      blogs: [
        {
          title: '博客标题1',
          content: '博客内容1',
          username: '用户名1',
          create_time: '2024-10-201',
          like: 131,
          comment: 141,
          collect: 151
        },
        {
          title: '博客标题2',
          content: '博客内容2',
          username: '用户名2',
          create_time: '2024-10-19',
          like: 15,
          comment: 0,
          collect: 13
        },
        {
          title: '博客标题3',
          content: '博客内容3',
          username: '用户名3',
          create_time: '2024-10-21',
          like: 131,
          comment: 200,
          collect: 151
        },
        {
          title: '博客标题3',
          content: '博客内容3',
          username: '用户名3',
          create_time: '2024-10-21',
          like: 131,
          comment: 200,
          collect: 151
        }
      ]
    };
    return data;
  },
  methods: {
  }
}
</script>

<style scoped>
.blog-card {
  margin-bottom: 20px;
}

/* 头像缩小成50*50 */
img {
  width: 60px;
  height: 60px;
  border-radius: 5%;
}

/* 分割线 */
hr {
  border: none;
  border-top: 1px solid #ccc;
}

/* 博客标题字体变大 */
.title {
  font-size: 20px;
  font-weight: bold;
}

/* 内容与图片顶部对齐 */
p {
  display: flex;
  align-items: top;
  margin-bottom: 5px;
}

.image {
  margin-right: 10px;
}

.floor {
  font-size: 12px;
}

.floor a {
  margin-right: 50px;
  text-decoration: none;
}

/* username样式 */
.username {
  /* 去除下划线 */
  color: #429ae2;
}

/* create_time样式 */
.create_time {
  color: #999;
  /* 不允许点击 */
  cursor: default;
}

/* like样式 */
.like {
  color: #999;
}

/* comment样式 */
.comment {
  color: #999;
}

/* collect样式 */
.collect {
  color: #999;
}

/* username鼠标划过显示下划线 */
.username:hover {
  text-decoration: underline;
}

/* 博客标题鼠标划过显示下划线 */
.title a {
  text-decoration: none;
  color: black;
}

.title a:hover {
  text-decoration: underline;
}
</style>
