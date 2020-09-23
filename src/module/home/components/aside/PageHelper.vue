<script src="../../router/index.js"></script>

<template>
  <div style="border-radius: 30px;">
    <el-table
      :data="data"
      height="270"
      stripe
      @row-click="handdle"
      @click.prevent="save()"
      :header-row-style="{height:'10px'}"
      :row-style="{height:'35px'}"
      v-bind="$Footer"
      style="width: 295px ;"
      :cell-style="{padding:'3px'}">
      <el-table-column type="index" width="40">
      </el-table-column>
      <el-table-column prop="label" width="245">
      </el-table-column>
    </el-table>
    <el-pagination
      layout=" total,prev, pager, next"
      @current-change="changePage"
      :page-size="params.pageSize"
      :current-page="params.pageId"
      :total="total"
      :hide-on-single-page="true">
    </el-pagination>
  </div>
</template>


<script>
  import * as homeApi from "../../api/home"

  export default {
    data() {
      console.log("pid" + this.$route.params.pathMatch)
      return {
        path: '',
        pid: this.$route.params.pathMatch,
        data: [],
        params: {
          pageSize: 5,
          pageId: 1
        }
      }

    },
    methods: {
      query: function () {
        homeApi.page_list_page(this.pid, this.params.pageId, this.params.pageSize).then((res) => {
          this.data = res.data;
          this.total = res.count;
        })
      },

      handleSizeChange: function (page) {
        this.params.page = page;

      },
      handdle: function (data) {
        console.log("点击haddle")
        const label = data.label;
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

      changePage(page) {
        this.params.pageId = page;
        this.query()
      }
    },

    created() {
      console.log("this.parentId" + this.parentId)
      if (this.$route.params.pathMatch.length < 5) {
        this.query()
      }


    },
  }


</script>
<style> /*css样式*/
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

/deep/ .el-table {

  background: #ffffff;
  font-size: larger;
  color: #000000;
  /*border: 2px solid #000000;*/

}

/deep/ .el-table-node:focus > .el-table-node__content {

  background-color: #ffffff;

}

.el-table {
  margin: 20px 1px;
}
body{
  margin: 0px;
}
</style>
