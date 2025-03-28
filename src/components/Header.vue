<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <div class="navbar">“微商城”后台管理系统</div>
    <el-sub-menu class="menu" index="1">
      <template #title>
        <el-avatar class="avatar" :src="admin.avatar"> {{ admin.username }} </el-avatar>
      </template>
      <router-link :to="{ name: 'setting' }">
        <el-menu-item index="5">个人中心</el-menu-item>
      </router-link>
      <el-menu-item index="6" @click="onLogout">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { onMounted } from 'vue'
import { getAdmin } from '../api'
import useAdmin from '../stores/admin'
import router from '../router'
import useToken from '../stores/token'
import notification from '../utils/notification'

const { removeToken } = useToken()

const { admin, updateAdmin, removeAdmin } = useAdmin()

onMounted(() => {
  loadAdmin()
})

const loadAdmin = async () => {
  let data = await getAdmin()
  updateAdmin({
    username: data.username,
    avatar: data.avatar
  })
}

const onLogout = async () => {
  removeToken()
  removeAdmin()
  router.push({ name: 'login' })
  notification({
    message: '退出成功',
    type: 'success'
  })
}
</script>

<style scoped lang="scss">
.el-menu-demo {
  background: linear-gradient(90deg, #1493fa, #01c6fa);
}
.navbar {
  color: white;
  font-size: 20px;
}
.menu {
  margin-left: auto;
}

</style>