<template>
  <div id="quanzi-head">
    <div id="header">
      <img class="head" src="../../assets/logo.png" alt="">
      <div class="message">
        <p>校园周边</p>
        <p>478个成员</p>
      </div>
      <div class="btn-attention">+关注</div>
    </div>

    <div id="text">
      <p><span>圈子简介: </span>祝重邮70周年快乐，祝红岩网校20周年快乐~祝
重邮70周年快乐，祝红岩网校20周年快乐~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuanziHead',
  data () {
    return {}
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
      border: black solid 1px;
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
