<!--
 * @Author: myjdml
 * @Date: 2021-03-07 17:33:02
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-08 20:31:26
 * @FilePath: /zscy-youwen-share/src/views/Quanzi.vue
 * @Description: nothing is everything
-->
<template>
  <div id="quanzi">
    <quanzi-head></quanzi-head>

    <div id="main">
      <div class="header">
        <div class="div-first focous" ref="newest" @click="newestClick">最新</div>
        <div class="div-second unfocous" ref="lastest" @click="lastestClick">热门</div>
        <img src="../assets/image/components/quanzi/line.png" ref="line" alt="">
      </div>

      <dynamic-main
        v-for="(item, index) in this.quanziPosts"
        :key="index"
        :avatar_src="item.avatar"
        :nickname="item.nickname"
        :publish_time="item.publish_time"
        :content="item.content"
        :pics="item.pics"
        :topic="item.topic"
        :praise_count="item.praise_count"
        :comment_count="item.comment_count"></dynamic-main>
      <!-- <dynamic-main></dynamic-main>
      <dynamic-main></dynamic-main> -->

      <jump-to-app></jump-to-app>
    </div>
  </div>
</template>

<script>
import DynamicMain from '../components/DynamicMain.vue'
import JumpToApp from '../components/JumpToApp.vue'
import QuanziHead from '../components/Quanzi/QuanziHead.vue'
import { getQuanziLatestPosts, getQuanziHotPosts } from '../server/index.js'
import parseQueryString from '../utils/parseQueryString'
export default {
  components: { QuanziHead, DynamicMain, JumpToApp },
  name: 'Quanzi',
  data () {
    return {
      quanziPosts: [
        {
          post_id: '2967',
          avatar: '',
          nickname: 'wwdx',
          publish_time: 1615120625,
          content: '教务在线的排名是根据什么排的',
          pics: [],
          topic: 'QA',
          uid: '6133fd5e8394a0fdbe7803210a23528e3db142f5',
          is_self: 0,
          praise_count: 0,
          comment_count: 0,
          is_follow_topic: 0,
          is_praised: 0
        },
        {
          post_id: '2966',
          avatar: 'http://cdn.redrock.team/magipoke_2020214778_1600916143.png',
          nickname: 'OSHwife',
          publish_time: 1615117055,
          content: '求重邮普通话考级报名时间',
          pics: [],
          topic: 'QA',
          uid: '4508591313e387c363ef0a239c1bbeebd50cde21',
          is_self: 0,
          praise_count: 0,
          comment_count: 0,
          is_follow_topic: 0,
          is_praised: 0
        },
        {
          post_id: '2966',
          avatar: 'http://cdn.redrock.team/magipoke_2020214778_1600916143.png',
          nickname: 'OSHwife',
          publish_time: 1615117055,
          content: '求重邮普通话考级报名时间',
          pics: [],
          topic: 'QA',
          uid: '4508591313e387c363ef0a239c1bbeebd50cde21',
          is_self: 0,
          praise_count: 0,
          comment_count: 0,
          is_follow_topic: 0,
          is_praised: 0
        },
        {
          post_id: '2966',
          avatar: 'http://cdn.redrock.team/magipoke_2020214778_1600916143.png',
          nickname: 'OSHwife',
          publish_time: 1615117055,
          content: '求重邮普通话考级报名时间',
          pics: [],
          topic: 'QA',
          uid: '4508591313e387c363ef0a239c1bbeebd50cde21',
          is_self: 0,
          praise_count: 0,
          comment_count: 0,
          is_follow_topic: 0,
          is_praised: 0
        }
      ]
    }
  },
  beforeCreate () {
    const quanziOptions = parseQueryString(window.location.href)
    if (quanziOptions.id !== undefined) {
      localStorage.setItem('quanzi_id', quanziOptions.id)
    }
    if (quanziOptions.id_token !== undefined) {
      localStorage.setItem('id_token', quanziOptions.id_token.replace(/%20/g, '+').replace(/%2F/g, '/').replace(/%3D/g, '='))
    }
  },
  methods: {
    newestClick (event) {
      this.$refs.line.style.left = '3.7vw'
      this.$refs.lastest.className = 'div-second unfocous'
      event.target.className = 'div-first focous'
      // 加载最新帖子
      getQuanziLatestPosts({
        loop: localStorage.getItem('quanzi_id'),
        page: 1,
        size: 6,
        type: 'latest'
      }).then((response) => {
        this.quanziPosts = response.data.data
      })
    },
    lastestClick (event) {
      this.$refs.line.style.left = '19.7vw'
      this.$refs.newest.className = 'div-first unfocous'
      event.target.className = 'div-second focous'
      // 加载最热帖子
      getQuanziHotPosts({
        loop: localStorage.getItem('quanzi_id'),
        page: 1,
        size: 6,
        type: 'hot'
      }).then((response) => {
        this.quanziPosts = response.data.data
      })
    }
  },
  mounted () {
    console.log(this.$refs.lastest, this.$refs.newest, this.$refs.line)
    console.log(this.quanziPosts)
    // 加载最新帖子
    getQuanziLatestPosts({
      loop: localStorage.getItem('quanzi_id'),
      page: 1,
      size: 6,
      type: 'latest'
    }).then((response) => {
      this.quanziPosts = response.data.data
    })
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
    // height: 1500px;
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
