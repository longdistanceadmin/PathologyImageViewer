<template>
  <el-container>
    <el-aside>
      <div class="demo-image__placeholder">
        <div class="block">
          <el-image :src="src" style="width: 190px " >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-main>
        病 理 切 片 查 看 系 统
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";
  export default {
    components: {ElContainer},
    data() {
      return {
        src: "static/img/asset-logoIco-white.png"
      }
    }
  }
</script>
<style>
  body{
    margin: 0px;
  }

</style>
