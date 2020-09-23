<template>
    <div style="height: 100%">
        <div id="contentDiv1" style="height: 100%">
        </div>
    </div>
</template>

<script>

    export default {
        name: "OpenSeadragon",
        data() {
          return {
            viewer: null,
            options: {
              id: "contentDiv1",
              prefixUrl: "static/img/",
              constrainDuringPan: true,
              showNavigator: true,
            },// openseadragon 参数配置

          }
        },
        methods: {
            pressHandler(event) {

            },
            dragHandler(event) {

            },
            dragEndHandler(event) {
            },
        },
        created() {
        },
        mounted() {
            this.viewer = OpenSeadragon(this.options);
            this.viewer.addTiledImage({
                tileSource: "http://183.62.37.146:14780/tile"+window.location.href.split("dragon-")[1]+".dzi",
            });
        },

    }
</script>

<style scoped>
  body{
    margin: 0px;
  }
</style>
