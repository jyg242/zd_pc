<template>
  <div class="index_about">
    <div class="content">
      <div class="about_txt">
        <h1>关于我们</h1>
        <span>ABOUT US</span>
      </div>
      <div class="about_img">
        <img :src="img" alt>
      </div>
      <div class="about_us">
        <p>中迪投资成立于xx年xx月xx日，注册资本人民币xx亿元，旨在为高净值客户群体提供专业化综合金融服务，帮助客户实现资产全球配置及财富世代传承</p>
      </div>
      <div class="about-detail">
        <a-button type="default" size="large">了解详细</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "http://www.zhongzhiwealth.com/templets/zzcf/images/indexss_03.jpg"
    };
  }
};
</script>

<style lang="scss" scoped>
.index_about {
  width: 100%;
  background: #ffffff;
  position: relative;
}
.content {
  color: #ad8757;
  position: relative;
  width: 1080px;
  height: 518px;
  margin: 0 auto;
  //   overflow: hidden;
  display: flex;
  justify-content: space-between;
  .about-detail {
    width: 1200px;
    position: absolute;
    top: 430px;
    text-align: center;
  }
  .about_us {
    width: 1200px;
    position: absolute;
    text-align: center;
    top: 380px;
    p {
      font-size: 15px;
      line-height: 24px;
      height: 55px;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
      color: #666;
    }
  }
  .about_txt {
    padding: 40px 0;
    z-index: 100;
    color: #ad8757;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin: 0;
      color: #ad8757;
      &:after {
        content: "";
        display: block;
        width: 36px;
        height: 1px;
        background: #ad8757;
        position: absolute;
        top: 60px;
        left: -50px;
      }
    }
  }
}
.ant-btn:hover,
.ant-btn:focus {
  color: #ad8757;
  // background-color: #fff;
  border-color: #ad8757;
}
</style>