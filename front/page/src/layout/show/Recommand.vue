<template>
  <div class="recommand">
    <div v-for="i, j in recommand_list">
      <p>
        {{ j }}
        <hr>
        <a href="#" v-for="item in i">{{ item }}<br /></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommand",
  data() {
    const data = {
      // 存放三个榜单的标题与数据
      recommand_list: {
        "热门推荐": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13"],
        "用户Top10": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        "博客Top10": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
      },
    };
    return data;
  }
};
</script>

<style scoped>
.recommand {
  width: 75%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
}
/* a标签去除下划线，鼠标划过显示下划线 */
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  text-decoration: underline;
}
</style>
