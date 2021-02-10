<template>
  <div id="repeat-item">
    <div id="header">
      <img class="head" src="../assets/logo.png" alt="">
      <div class="message">
        <p>张三丰</p>
        <p>2020.10.11</p>
      </div>
      <div class="point">
        <img src="../assets/image/components/san-lian/point.png" alt="">
        <p>233</p>
      </div>
    </div>

    <div id="text">
      <p>有一起打游戏的吗？顺风不浪，逆风不投，有很抢电竞精神，他们都夸我：人菜瘾大</p>
    </div>

    <show-picture id="pictures" :pics="this.pics"/>

    <!-- <div class="hr"></div> -->
  </div>
</template>

<script>
import ShowPicture from './ShowPicture.vue'
export default {
  name: 'RepeatItem',
  components: {
    ShowPicture
  },
  props: {
    avatar_src: String,
    nickname: String,
    publish_time: Number,
    content: String,
    pics: Array
  }
}
</script>

<style lang="scss" scoped>
  #repeat-item {
  }
  #header {
    @include flex-row-center;
    margin-top: 30px;
    .head {
      width: 61px;
      height: 61px;
      margin-left: 32px;
      // margin: 16px 0 0 16px;
      border-radius: 40px;
    }
    .message {
      width: 420px;
      p:nth-child(1) {
        font-size: 26px;
        font-weight: 500;
        color: #15315B;
      }
      p:nth-child(2) {
        font-size: 22px;
        font-weight: 500;
        color: #556C89;
        line-height: 42px;
      }
    }
    .point {
      @include flex-row-center;
      margin-right: 50px;
      img {
        width: 41px;
      }
      p {
        width: 60px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        color: #ABBCD9;
      }
    }
  }
  #text {
    p {
      margin-top: 30px;
      margin-left: 140px;
      width: 571px;
      font-size: 30px;
      font-weight: 500;
      color: #112C57;
      line-height: 42px;
    }
  }
  #pictures {
    margin-left: 70px;
    transform: scale(0.8);
  }
  #tab {
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left: 40px;
    div {
      width: 177px;
      height: 50px;
      font-size: 24px;
      font-weight: 500;
      line-height: 50px;
      text-align: center;
      color: #556C89;
      border-radius: 30px;
      background-color: #f1f3f8;
    }
  }
  .sanlian {
    position: absolute;
    right: 40px;
  }
  .hr {
    width: 750px;
    height: 2px;
    margin-top: 10px;
    background: #F1F3F8;
  }
</style>
