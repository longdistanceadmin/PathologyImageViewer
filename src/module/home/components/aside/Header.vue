<template>
  <div>

    <el-tree :data="data"
             :props="defaultProps"
             @node-click="handleNodeClick"
             style="height: 600px;"
             accordion
             highlight-current
    ></el-tree>
  </div>

</template>
<script>
  import * as homeApi from "../../api/home"

  export default {
    data() {
      return {
        data: []
      };
    },

    /**
     * homeApi.page_list_tree查询树形结构
     */
    methods: {
      query: function () {
        homeApi.page_list_tree().then((res) => {
          this.data = res;
        })
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

      /**
       *
       * @param data  树形结构查询后的数据给data
       */
      handleNodeClick(data) {
        const pid = data.id;
        this.$router.push('/label-' + pid)
      }
    },


    mounted() {
      this.query()
    },
  };


</script>


<style scoped>
  /deep/ .el-tree-node__content:hover {
    background: #73ccff;
  }

  /deep/ .el-tree--highlight-current
  .el-tree-node.is-current
  > .el-tree-node__content {
    background-color: #6ea3ff;
  }

  /deep/ .el-tree {
    background: #ffffff;
    font-size: larger;
    color: #000000;

  }

  /deep/ .el-tree-node:focus > .el-tree-node__content {
    background-color: #73ccff;
  }
  body{
    margin: 0px;
  }
</style>






