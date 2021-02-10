<template>
  <div id="quanzi">
    <quanzi-head></quanzi-head>

    <div id="main">
      <div class="header">
        <div class="div-first focous">最新</div>
        <div class="div-second unfacous">热门</div>
        <img src="../assets/image/components/quanzi/line.png" alt="">
      </div>

      <dynamic-main></dynamic-main>
      <dynamic-main></dynamic-main>

      <jump-to-app></jump-to-app>
    </div>
  </div>
</template>

<script>
import DynamicMain from '../components/DynamicMain.vue'
import JumpToApp from '../components/JumpToApp.vue'
import QuanziHead from '../components/Quanzi/QuanziHead.vue'
export default {
  components: { QuanziHead, DynamicMain, JumpToApp },
  name: 'Quanzi',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  #quanzi {
    width: 100vw;
    background-color: #f1f3f8;
  }
  #main {
    width: 100vw;
    height: 1500px;
    margin-top: 40px;
    background-color: white;
    border-radius: 30px;
    .header {
      position: relative;
      height: 130px;
      border-bottom: solid 1px #e2e8ee;
      .div-first {
        width: 80px;
        height: 50px;
        font-size: 36px;
        font-weight: bold;
        color: #ABBCD8;
        position: absolute;
        top: 35px;
        left: 32px;
      }
      .div-second {
        width: 80px;
        height: 50px;
        font-size: 36px;
        font-weight: bold;
        color: #ABBCD8;
        position: absolute;
        top: 35px;
        left: 152px;
      }
      .focous {
        color: #15315B;
      }
      .unfocous {
        color: #ABBCD8;
      }
      img {
        width: 79px;
        position: absolute;
        top: 95px;
        left: 28px;
      }
    }
  }
</style>
