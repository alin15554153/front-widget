<template>
  <div id="bigScreen">
    <div class="top-meun"></div>
    <el-row :gutter="10">
      <el-col :lg="6" :xl="6"><div class="grid-content bg-purple hidden-lg-and-down"></div></el-col>
      <el-col :lg="4" :xl="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :lg="16" :xl="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :lg="4" :xl="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :lg="6" :xl="6"><div class="grid-content bg-purple hidden-lg-and-down"></div></el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'BigScreen'
  }
</script>

<style>
  #bigScreen{
    width: 100%;
    height: 540px;
    background-color: #2c3e50;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
