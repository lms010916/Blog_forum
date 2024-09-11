<template>
  <el-container>
    <el-main>
      <!-- 每一页只留15条记录 -->
      <el-table :data="tableData">
        <el-table-column v-for="i, j, k in tableRow" :prop="j" :key="k" :label="i"
          :min-width="k === 0 ? 300 : k === 1 ? 180 : 0" />
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default>
            <el-button link type="primary" size="default" @click="editBlog">
              {{ tableRow.edit }}
            </el-button>
            <el-button link type="primary" size="default" @click="deleteBlog">
              {{ tableRow.delete }}
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
          title: "标题1",
          date: "2022-01-01",
          like: 100,
          comment: 20,
          collect: 10,
          view: 1000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        },
        {
          title: "标题2",
          date: "2022-01-02",
          like: 200,
          comment: 30,
          collect: 20,
          view: 2000
        }
      ],
      // 控制表格显示的列
      tableRow: {
        title: "标题",
        date: "发布时间",
        like: "点赞",
        comment: "评论",
        collect: "收藏",
        view: "浏览量",
        edit: "编辑",
        delete: "删除"
      }

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
    // 获取后台数据
    getTableData() {
      console.log("getTableData");
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