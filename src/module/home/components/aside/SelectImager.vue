<script src="../../router/index.js"></script>
<template>
  <div>
    <el-table
      :data="data"
      height="260"
      stripe
      @row-click="handdle"
      @click.prevent="save()"
      :header-row-style="{height:'20px'}"
      :row-style="{height:'35px'}"
      v-bind="$Footer"
      style="width: 150% ;">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="label" label="名称" width="250">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import * as homeApi from "../../api/home"

  export default {
    data() {

      return {
        data: [],
        params: {
          label: this.$route.params.pathMatch,
        }
      }
    },

    methods: {

      handdle: function (data) {
        const fileGuid = data.fileGuid;
        console.log("this.$route.params" + this.$route.path)
        homeApi.page_list_path(fileGuid).then((res) => {
          console.log(res.path)
          const path = res.path;
          if (this.$route.path.split("dragon").length > 1) {
            this.$router.push(this.$route.path.split("dragon-").shift() + 'dragon-' + path)
          }
          else {
            this.$router.push(this.$route.path + '/dragon-' + path)

          }
        })

      },
    },
    created() {
      homeApi.page_list_select(this.params.label).then((res) => {
        //将res结果数据赋值给数据模型对象
        this.data = res;
      })
    },
  }
</script>


<style>
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
  }

  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
  }
  body{
    margin: 0px;
  }
</style>
