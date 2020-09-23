<script src="../router/index.js"></script>
<template>
  <el-container>
    <el-header height="60px">
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="350px" >
        <Aside/>
      </el-aside>
      <el-divider direction="vertical"></el-divider>
      <el-main>
        <router-view  :key="$route.path" name="dragon"/>
      </el-main>
    </el-container>
  </el-container>

</template>
<style  scoped>
  .el-container {
    height: 670px;
    text-align: center;
  }

  .el-header {
    background-color: #6cb1ff;
    color: #000000;
    text-align: center;
    line-height: 30px;
    font-size: 35px;
  }

  .el-aside {
    background-color: #ffffff;
    text-align: center;
  }


</style>

<script>
  import Aside from './aside/Aside'
  import Header from './Header'
  export default {
    components: {Aside,Header}
  }
</script>
<style>
  body{
    margin: 0px;
  }


  .el-divider--vertical{
    display:inline-block;
    width:3px;
    height:630px;		//更改竖向分割线长度
  margin:0 8px;
    vertical-align:middle;
    position:relative;
  }

</style>
