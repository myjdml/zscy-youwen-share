<template>
  <div id="dymamic-main">
    <div id="header">
      <img class="head" :src="this.avatar_src" alt="">
      <div class="message">
        <p>{{this.nickname}}</p>
        <p>{{this.pushDay.year}}.{{this.pushDay.month}}.{{this.pushDay.day}}</p>
      </div>
      <div class="other">
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>

    <div id="text">
      <p>{{this.content}}</p>
    </div>

    <show-picture :pics="this.pics"></show-picture>

    <div id="tab">
      <div># {{this.topic}}</div>
    </div>

    <san-lian 
      class="sanlian"
      :praise_count="this.praise_count"
      :comment_count="this.comment_count"></san-lian>

    <div class="hr"></div>
  </div>
</template>

<script>
import SanLian from './SanLian.vue'
import ShowPicture from './ShowPicture.vue'
import dayjs from 'dayjs';
export default {
  components: { ShowPicture, SanLian },
  name: 'DynamicMain',
  data () {
    return {
      pushDay: {}
    }
  },
  props: {
    avatar_src: String,
    nickname: String,
    publish_time: Number,
    content: String,
    pics: Array,
    topic: String,
    praise_count: Number,
    comment_count: Number
  },
  methods: {
  },
  mounted () {
    const Day = dayjs.unix(this.publish_time)
    // console.log(Day);
    this.pushDay = {
      year: Day.$y,
      month: Day.$M + 1,
      day: Day.$D
    }
    // console.log(this.pushDay);
  }
}
</script>

<style lang="scss" scoped>
  #dynamic-main {
  }
  #header {
    position: relative;
    @include flex-row-center;
    margin-top: 30px;
    .head {
      width: 80px;
      height: 80px;
      margin-left: 20px;
      // margin: 16px 0 0 16px;
      // border: black solid 1px;
      border-radius: 40px;
    }
    .message {
      width: 500px;
      p:nth-child(1) {
        font-size: 30px;
        font-weight: 800;
        color: #0B2551;
      }
      p:nth-child(2) {
        font-size: 22px;
        font-weight: 500;
        color: #556C89;
        line-height: 42px;

      }
    }
    .other {
      @include flex-row-center;
      width: 45px;
      margin-right: 20px;
      height: 2px;
      div {
        width: 8px;
        height: 8px;
        background: #94A6C4;
        border-radius: 50%;
      }
    }
  }
  #text {
    p {
      margin-top: 30px;
      margin-left: 39px;
      width: 671px;
      font-size: 30px;
      font-weight: 500;
      color: #112C57;
      line-height: 42px;
    }
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
    // position: relative;
    // top: 40px;
    // right: -410px;
    position: absolute;
    right: 40px;
  }
  .hr {
    width: 750px;
    height: 2px;
    margin-top: 110px;
    background: #F1F3F8;
  }
</style>
