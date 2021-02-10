<template>
  <div id="jump-to-app">
    <div class="cover"></div>

    <div class="btn">App内打开</div>
  </div>
</template>

<script>
export default {
  name: 'JnmpToApp',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  #jump-to-app {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50vh;
  }
  .cover {
    width: 100vw;
    height: 50vh;
    background: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    background: -moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    background: -o-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    background: linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
  }
  .btn {
    position: absolute;
    bottom: 120px;
    left: 50%;
    width: 550px;
    height: 80px;
    border-radius: 50px;
    transform: translateX(-275px);
    background-color: #4a43e4;
    color: white;
    line-height: 80px;
    font-size: 36px;
    text-align: center;
  }
</style>
