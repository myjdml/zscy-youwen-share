<!--
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-03-07 14:26:53
 * @FilePath: /zscy-youwen-share/src/components/JumpToApp.vue
 * @Description: nothing is everything
-->
<template>
  <div id="jump-to-app">
    <div class="cover"></div>

    <div class="btn" @click="jump" >App内打开</div>
  </div>
</template>

<script>
import parseQueryString from '../utils/parseQueryString'
import CallApp from 'callapp-lib'

export default {
  name: 'JnmpToApp',
  data () {
    return {
      zyOptions: parseQueryString(window.location.href)
    }
  },
  methods: {
    jump () {
      const options = {
        scheme: {
          protocol: 'cyxbs',
          host: 'redrock.team'
        },
        intent: {
          package: 'com.mredrock.cyxbs',
          scheme: 'cyxbs',
          host: 'redrock.team'
        },
        // universal: {
        //   host: 'oia.zhihu.com/question/270839820/answer/477722658',
        //   pathKey: 'action',
        // },
        appstore: 'https://itunes.apple.com/cn/app/id974026615',
        // yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
        fallback: 'https://wx.redrock.team/app/#/',
        timeout: 2000
      }
      const callLib = new CallApp(options)

      callLib.open({
        param: {
          id: this.zyOptions.id
        },
        path: 'dynamic_detail/qa/entry'
      })
    },
    judgeMobileType () {
      var u = navigator.userAgent
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        return 'Android'
      } else if (u.indexOf('iPhone') > -1) {
        return 'IOS'
      } else if (u.indexOf('Windows Phone') > -1) {
        return 'WinPhone'
      }
    }
  },
  mounted () {
    // const zyOptions = parseQueryString(window.location.href)
    // console.log(zyOptions)
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
