<!--
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-11 01:10:07
 * @FilePath: /zscy-youwen-share/src/components/SanLian.vue
 * @Description: nothing is everything
-->
<template>
  <div id="sanlian">
    <div class="sanlian__item">
      <img src="../assets/image/components/san-lian/mark.png" alt="">
      <p>{{this.comment_count}}</p>
    </div>

    <div class="sanlian__item">
      <img src="../assets/image/components/san-lian/point.png" alt="">
      <p>{{this.praise_count}}</p>
    </div>

    <div class="sanlian__item">
      <img src="../assets/image/components/san-lian/share.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SanLian',
  props: {
    praise_count: Number,
    comment_count: Number
  }
}
</script>

<style lang="scss" scoped>
  #sanlian {
    height: 70px;
    width: 300px;
  }
  #sanlian {
    @include flex-row-center;
    .sanlian__item {
      @include flex-row-center;
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
</style>
