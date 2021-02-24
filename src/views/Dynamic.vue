<!--
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-24 13:18:14
 * @FilePath: /zscy-youwen-share/src/views/Dynamic.vue
 * @Description: nothing is everything
-->
<template>
  <div id="dynamic">
    <dynamic-main
      :avatar_src="this.mainInfo.avatar"
      :nickname="this.mainInfo.nickname"
      :publish_time="this.mainInfo.publish_time"
      :content="this.mainInfo.content"
      :pics="this.mainInfo.pics"
      :topic="this.mainInfo.topic"
      :praise_count="this.mainInfo.praise_count"
      :comment_count="this.mainInfo.comment_count"></dynamic-main>

    <repeat-item
      v-for="(item, index) in this.repeatInfo"
      :key="index"
      :avatar_src="item.avatar"
      :nick_name="item.nick_name"
      :publish_time="item.publish_time"
      :content="item.content"
      :pics="item.pics"
      :praise_count="item.praise_count"></repeat-item>

    <jump-to-app></jump-to-app>
  </div>
</template>

<script>
import DynamicMain from '../components/DynamicMain.vue'
import JumpToApp from '../components/JumpToApp.vue'
import RepeatItem from '../components/RepeatItem.vue'
import { getDynamicRepeatInfo, getDynamicMainInfo } from '../server/index.js'

export default {
  name: 'Dynamic',
  components: {
    DynamicMain,
    JumpToApp,
    RepeatItem
  },
  data () {
    return {
      mainInfo: {
        post_id: '82',
        avatar: 'http://cdn.redrock.team/magipoke_2018210092_1600962933.png',
        nickname: 'student',
        publish_time: 1607353495,
        content: 'test',
        pics: [
          'http://cdn.redrock.team/magipoke-loop_rVIqTbHsOJMEGj639ET7dT8SZVYBGtyY.vwlwAVwBk1JkPlJ4YHUnQokr3eAVlUV4',
          'http://cdn.redrock.team/magipoke-loop_mnWUCn7lYHirlfk4H4B0x7ypY8ES2GtT.CBjIKw7hBK8mFnvHkc8gqw9D4C36CWEE'
        ],
        topic: 'QA',
        uid: '43e1d27d70acacbe3cd4839e6cf68f6c8bd4c4b9',
        is_self: 0,
        praise_count: 0,
        comment_count: 0,
        is_follow_topic: 0,
        is_praised: 0
      },
      repeatInfo: [
        {
          post_id: '1',
          comment_id: '2',
          reply_id: '',
          avatar: 'a',
          nick_name: 'yan',
          publish_time: 1607992408,
          content: 'test photo',
          pics: [
            'http://cdn.redrock.team/magipoke-loop_PiJ27T7koe00Hqgo5b1v4Vf271c4I9bp.uxhSwYwGyuY4ujvutHoUzAASDQIfbT6G',
            'http://cdn.redrock.team/magipoke-loop_wtSsYEkvLAGxYGcocrEK3VRbYf2TyCly.nRFvHfLam9wtK00dVQ0RpQbC5dDFwPRf'
          ],
          uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
          is_self: false,
          praise_count: 1,
          is_praised: false,
          from_nickname: '',
          reply_list: null,
          has_more_reply: 0
        },
        {
          post_id: '1',
          comment_id: '24',
          reply_id: '',
          avatar: 'a',
          nick_name: 'yan',
          publish_time: 1608007208,
          content: 'test',
          pics: null,
          uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
          is_self: false,
          praise_count: 1,
          is_praised: false,
          from_nickname: '',
          reply_list: null,
          has_more_reply: 0
        },
        {
          post_id: '1',
          comment_id: '361',
          reply_id: '',
          avatar: 'a',
          nick_name: 'yan',
          publish_time: 1608696910,
          content: 'test photo',
          pics: null,
          uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
          is_self: false,
          praise_count: 0,
          is_praised: false,
          from_nickname: '',
          reply_list: [
            {
              post_id: '1',
              comment_id: '362',
              reply_id: '361',
              avatar: '',
              nick_name: 'yan',
              publish_time: 1608696929,
              content: 'test photo',
              pics: [
                'http://cdn.redrock.team/magipoke-loop_TkrmSLwlbqyyeNd0H2V6bZfRBUwDytWS.jpg'
              ],
              uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
              is_self: false,
              praise_count: 0,
              is_praised: false,
              from_nickname: '',
              reply_list: null,
              has_more_reply: 0
            }
          ],
          has_more_reply: 0
        },
        {
          post_id: '1',
          comment_id: '429',
          reply_id: '',
          avatar: '',
          nick_name: 'yan',
          publish_time: 1609241574,
          content: 'test photo',
          pics: null,
          uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
          is_self: false,
          praise_count: 0,
          is_praised: false,
          from_nickname: '',
          reply_list: [
            {
              post_id: '1',
              comment_id: '430',
              reply_id: '429',
              avatar: '',
              nick_name: 'yan',
              publish_time: 1609241582,
              content: 'test photo',
              pics: null,
              uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
              is_self: false,
              praise_count: 0,
              is_praised: false,
              from_nickname: '',
              reply_list: null,
              has_more_reply: 0
            },
            {
              post_id: '1',
              comment_id: '431',
              reply_id: '430',
              avatar: '',
              nick_name: 'yan',
              publish_time: 1609244180,
              content: 'test photo',
              pics: null,
              uid: '54e1713e492521726c3dd7e8839547172ae95e9a',
              is_self: false,
              praise_count: 0,
              is_praised: false,
              from_nickname: 'yan',
              reply_list: null,
              has_more_reply: 0
            }
          ],
          has_more_reply: 0
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    /* eslint-disable no-console */
    console.log(this.repeatInfo[0])
    // 请求帖子主体信息接口数据
    getDynamicMainInfo({ id: 82 })
      .then((response) => {
        console.log('帖子res: ', response)
        this.mainInfo = response.data.data
        console.log('帖子mainInfo: ', this.mainInfo)
      })
    // 请求帖子回复信息接口数据
    getDynamicRepeatInfo({ post_id: 1 })
      .then((response) => {
        console.log('回复res: ', response)
        this.repeatInfo = response.data.data
        console.log('回复mainInfo: ', this.mainInfo)
      })
  }
}
</script>

<style lang="scss" scoped>
  #dynamic {
    // overflow-x: hidden;
    // overflow-y: auto;
    // -webkit-overflow-scrolling: touch;
  }
</style>
