<!--
 * @Author: myjdml
 * @Date: 2021-02-07 18:44:52
 * @LastEditors: myjdml
 * @LastEditTime: 2021-02-11 01:44:35
 * @FilePath: /zscy-youwen-share/src/components/ShowPicture.vue
 * @Description: nothing is everything
-->
<template>
  <div id="show-picture">
    <div class="main">
      <img class="main__item" v-for="(item, index) in this.pics" :key="index" :src="item">
      <div class="main__item" v-if="this.pics !== null && this.pics.length === 2"></div>
      <div class="main__item" v-if="this.pics !== null && this.pics.length === 1"></div>
      <div class="main__item" v-if="this.pics !== null && this.pics.length === 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPicture',
  data () {
    return {
    }
  },
  props: {
    pics: [Array, null]
  },
  methods: {},
  mounted () {
    // console.log(this.pics.length);
  }
}
</script>

<style lang="scss" scoped>
  #show-picture {
    @include flex-row-center;
    margin-top: 30px;
  }
  .main {
    @include flex-row-center;
    width: 90vw;
    .main__item {
      width: 200px;
      height: 200px;
      border-radius: 15px;
      // border: black solid 1px;
    }
  }
</style>
