<template>
  <div id="quanzi-head">
    <div id="header">
      <img class="head" :src="this.currentQuanzi.topic_logo" alt="">
      <div class="message">
        <p>{{this.currentQuanzi.topic_name}}</p>
        <p>{{this.currentQuanzi.follow_count}}个成员</p>
      </div>
      <div class="btn-attention">+关注</div>
    </div>

    <div id="text">
      <p><span>圈子简介: </span>{{this.currentQuanzi.introduction}}</p>
    </div>
  </div>
</template>

<script>
import { getQuanziInfo } from '../../server/index.js'
export default {
  name: 'QuanziHead',
  data () {
    return {
      currentQuanzi: {
        topic_id: 1,
        topic_logo: 'http://cdn.redrock.team/magipoke-loop_WenTiYanJiuSuo.png',
        topic_name: 'QA',
        new_mes_count: 31,
        follow_count: 12,
        is_follow: 0,
        introduction: '小明友你是否有很多问号?欢迎在这里提出一切你想间的问题，万一有人知道答宋呢～'
      }
    }
  },
  mounted () {
    getQuanziInfo().then((response) => {
      this.currentQuanzi = response.data.data[0]
    })
  }
}
</script>

<style lang="scss" scoped>
  #quanzi-head {
    overflow: hidden;
  }
   #header {
    @include flex-row-center;
    margin-top: 30px;
    .head {
      width: 96px;
      height: 96px;
      margin-left: 20px;
      // margin: 16px 0 0 16px;
      // border: black solid 1px;
      border-radius: 50px;
    }
    .message {
      width: 350px;
      margin-right: 30px;
      p:nth-child(1) {
        font-size: 30px;
        font-weight: 800;
        color: #15315B;
      }
      p:nth-child(2) {
        line-height: 40px;
        font-size: 22px;
        font-weight: 500;
        color: #748BB0;

      }
    }
    .btn-attention {
      width: 118px;
      height: 56px;
      border-radius: 30px;
      line-height: 56px;
      text-align: center;
      font-size: 26px;
      margin-right: 20px;
      color: white;
      background-color: #5D5EF7;
    }
  }
  #text {
    p {
      span {
        font-weight: 600;
      }
      margin-top: 30px;
      margin-left: 39px;
      width: 671px;
      font-size: 26px;
      font-weight: 400;
      color: #112C57;
      line-height: 42px;
    }
  }
</style>
