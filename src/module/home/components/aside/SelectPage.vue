<template>
  <div>
    <el-input
      placeholder="请输入内容"
      clearable style="width: 200px;right: 20px;height: 10px" round="true" v-model="params.label">
    </el-input>
    <el-button style="background-color: #32aaff;color:#ffffff" round="true" size="small" v-on:click="query">搜索
    </el-button>
  </div>
</template>

<script>

  export default {
    data() {

      return {
        list: [],
        params: {
          label: '',
        }
      }
    },

    methods: {
      query: function () {
        console.log("this.params.label" + this.params.label)
        const selectName = this.params.label;
        this.$router.push('/select-' + selectName)

      }
    }
  }
</script>
<style>
  body{
    margin: 0px;
  }
</style>
