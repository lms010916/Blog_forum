<template>
  <div class="login-layout">
    <el-container>
      <el-header>博客登录</el-header>
      <el-main>
        <el-form :model="form" label-width="auto" style="max-width: 300px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item label="记住密码">
            <el-checkbox-group v-model="form.type">
              <el-checkbox value="Online activities" name="type" @click="form.type = !form.type">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <!-- 之后加上 -->
      <el-footer>
        <!-- <a href="">忘记密码？</a>
        <a href="">注册账号？</a> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        type: false,
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  font-size: 30px;
  line-height: 80px;
  border-radius: 5px 5px 0 0;
}
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  font-size: 30px;
  border-radius: 0 0 5px 5px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.login-layout {
  margin: 150px auto;
  height: 400px;
  width: 400px;
}

.el-container {
  height: 100%;
}

.el-form {
  margin: 0 auto;
  padding-top: 40px;
}

/* 按钮居中 */
.el-button {
  display: block;
  margin: 0 auto;
}
</style>