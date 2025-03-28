<template>
  <el-card class="box-card">
    <el-card class="box-form">
      <template #header>
        <div class="card-header">
          <h3>“微商城”后台管理系统</h3>
        </div>
      </template>
      <el-form ref="ruleFormRef" status-icon :model="form" :rules="rules" label-width="120px">
        <el-form-item prop="username" label="用户名：">
          <el-input v-model="form.username" placeholder="请输入用户名"  />
        </el-form-item>
        <el-form-item prop="password" label="密　码：">
          <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button class="button" @click="submitForm(ruleFormRef)" type="primary" size="large">登录</el-button>
          <el-button class="button" @click="resetForm" type="info" size="large">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { login } from '../api'
import { useRouter } from 'vue-router'
import useToken from '../stores/token'
import notification from '../utils/notification'

const router = useRouter()
const { updateToken } = useToken()

const form = reactive({
  username: '',
  password: ''
})

const ruleFormRef = ref()

// 表单提交
const submitForm = formEl => {
  formEl.validate(async valid => {
    if (valid) {
      const data = await login(form)
      if (data) {
        updateToken(data.token)
        router.push({ name: 'index' })
      }
    } else {
      notification({
        message: '表单填写有误',
        type: 'error'
      })
    }
  })
}

// 表单重置
const resetForm = () => {
  ruleFormRef.value.resetFields()
}

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '用户名长度为3~12个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 24, message: '密码长度为6~24个字符', trigger: 'blur' },
  ]
})

</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  background: rgba(38, 72, 176) url('/images/loginBg.jpg') center / cover no-repeat;
  .box-form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    max-width: 750px;
    transform: translate(-50%, -50%);
    .card-header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .el-form-item {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        --el-form-label-font-size: 16px;
        margin-top: 15px;;
        margin-bottom: 15px;
        .button {
          width: 90px;
        }
        &.center {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
