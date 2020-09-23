<template>
  <el-container>
    <el-header width="100">
      <SelectPage/>
    </el-header>
    <el-main width="200px">
      <Header/>
    </el-main>
    <el-footer height="350px">
      <el-divider direction="horizontal"></el-divider>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" name="page"></router-view>
      </transition>
    </el-footer>
  </el-container>
</template>


<script>
  import ElHeader from "element-ui/packages/header/src/main";
  import SelectPage from "./SelectPage"
  import ElContainer from "element-ui/packages/container/src/main";
  import ElMain from "element-ui/packages/main/src/main";
  import Header from "../../components/aside/Header"


  export default {

    components: {
      ElMain,
      ElContainer,
      ElHeader,
      SelectPage,
      Header,

    },
    data() {
    },
    methods: {
      query: function () {

      },

      changePage: function (page) {
        this.params.page = page
      },

      selectClick: function (data) {
        //后端判断是不是最后一层文件的目录 如果是才显示  点击才有作用
      },

      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
    },
    /**
     * 在渲染的时候调用
     */
    mounted() {
      this.query()
    },
  }
</script>


<style scoped>
  .el-header {
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    line-height: 60px;

  }

  .el-footer {
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    line-height: 60px;
  }

  body{
    margin: 0px;
  }


  .el-divider--vertical{
    display:inline-block;
    width:3px;
    height:100%;		//更改竖向分割线长度
  margin:0 50px;
    vertical-align:middle;
    position:relative;
  }

</style>






