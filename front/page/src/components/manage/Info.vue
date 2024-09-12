<template>
  <div class="info">
    <el-card class="base">
      <template #header>
        <span>基本信息</span>
      </template>
      <el-row>
        <el-col :span="12">
          ID&ensp;:&ensp;000001
        </el-col>
        <el-col :span="12">
          <!-- 昵称&ensp;:&ensp;xxx -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          粉丝数&ensp;:&ensp;1000
        </el-col>
        <el-col :span="12">
          创建时间&ensp;:&ensp;2021-01-01
        </el-col>
      </el-row>
    </el-card>
    <el-card class="account">
      <template #header>
        <span>账号与安全</span>
      </template>
      <el-row>
        <el-col :span="24">
          <span>头像&ensp;:&ensp;</span>
          <el-avatar :size="50" :src="accountData.avatar" shape="square" />
        </el-col>
      </el-row>
      <el-row v-for="i, j, k in accountData.data">
        <el-col :span="24">
          <span>{{ j }}&ensp;:&ensp;</span>
          <el-input @blur="forb" :id="k + ''" v-model="accountData.data[j]" disabled style="width: 240px" :value="i" />
          &ensp;
          <el-button @click="editInput(k + '')">
            <el-icon>
              <EditPen />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  data() {
    const data = {
      accountData: {
        id: '000001',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        fans: 1000,
        createTime: '2021-01-01',
        data: {
          '昵称': '鸟',
          '密码': '123456',
        }
      }
    }
    return data;
  },
  methods: {
    editInput(id) {
      // 根据id获取input元素
      const input = document.getElementById(id + '');
      // 更改为启用样式
      input.parentNode.parentNode.className = 'el-input';
      // 修改input为启用状态
      input.disabled = false;
      // 修改input为焦点状态
      input.focus();
    },
    forb(focusEvent) {
      const input = focusEvent.target;
      // 判断input是否为input标签
      if (input.tagName === 'INPUT') {
        // 修改input为禁用样式
        input.parentNode.parentNode.className = 'el-input is-disabled';
        input.disabled = true;
        // 将数据比对,如果不同则发送到后台修改
        //** 待补全 */
        // 如果修改成功则发送保存成功的提示
        ElMessage({
          message: '修改成功.',
          type: 'success',
        })
      }
    }
  },
}
</script>

<style scoped>
.info {
  margin-top: 20px;
  margin-left: 20px;
}

.base,
.account {
  box-shadow: 0 0 0 0;
  border: 0;
  width: 80%;
}

.el-row {
  margin-bottom: 20px;
}

.account .el-row {
  width: 350px;
}

.account .el-row .el-col {
  display: flex;
  align-items: center;
}

.el-button {
  border: 0;
}
</style>