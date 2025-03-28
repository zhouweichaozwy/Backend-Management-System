<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-header {
    background: -webkit-gradient(linear, left top, right top, from(#1493fa), to(#01c6fa));
    text-align: center;
    line-height: 60px;
    color: #333;
  }
  .el-aside {
    width: 200px;
    height: 100%;
    color: #333;
    background: white
  }
  .el-main {
    height: 100vh;
    background-color: #e9eef3;
    color: #333;
  }
}
</style>
