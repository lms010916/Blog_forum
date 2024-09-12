<template>
  <el-container>
    <el-main>
      <!-- 每一页只留15条记录 -->
      <el-table :data="tableData">
        <el-table-column v-for="i, j, k in tableRow" :prop="j" :key="k" :label="i"
          :min-width="k === 0 ? 300 : k === 1 ? 180 : 0" />

        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default>
            <el-button v-for="i in tableOption" link type="primary" size="default" @click="i.func">
              {{ i.text }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: "Table",
  data() {
    const data = {
      tableData: [
        {
          col1: "标题1",
          col2: "2022-01-01",
          col3: 100,
          col4: 20,
          col5: 10,
          col6: 1000
        },
      ],
      tableRow: {
        col1: "标题",
        col2: "发布时间",
        col3: "点赞",
        col4: "评论",
        col5: "收藏",
        col6: "浏览量",
      },
      tableOption: [
        {
          func: () => {
            console.log("edit");
          }, text: "编辑"
        },
        {
          func: () => {
            console.log("delete");
          }, text: "删除"
        },
      ],
    }
    return data;
  },
  methods: {
    editBlog() {
      console.log("editBlog");
    },
    deleteBlog() {
      console.log("deleteBlog");
    },
    // 根据参数获取后台数据并传入到表格中
    getTableDataByType(data) {
      if (data == "my") {
        this.tableRow = {
          col1: "标题",
          col2: "发布时间",
          col3: "点赞",
          col4: "评论",
          col5: "收藏",
          col6: "浏览量",
        }
        this.tableData = [
          {
            col1: "标题1",
            col2: "2022-01-01",
            col3: 100,
            col4: 20,
            col5: 10,
            col6: 1000
          },
        ]
        this.tableOption = [
          {
            func: () => {
              console.log("edit");
            }, text: "编辑"
          },
          {
            func: () => {
              console.log("delete");
            }, text: "删除"
          },
        ]
      }
      else if (data == "follow") {
        this.tableRow = {
          title: "用户昵称",
          character: "个性签名",
          post: "帖子数",
          fans: "粉丝数",
          option: "取消关注"
        }
        this.tableData = [
          {
            title: "标题1",
            date: "2022-01-01",
            like: 100,
            comment: 20,
            collect: 10,
            view: 1000
          },
        ]
      }
      else if (data == "collect") {

      }
      else if (data == "like") { }
      else if (data == "comment") { }
      else if (data == "data") { }
    }
  },
  watch: {
    // 监视路由变化
    '$route.query.type': {
      handler() {
        this.getTableDataByType(this.$route.query.type);
        console.log(this.$route.query.type);
      },
      immediate: true
    },
  },
}
</script>

<style scoped>
.el-main {
  padding: 0;
}

.el-footer {
  /* 元素居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>