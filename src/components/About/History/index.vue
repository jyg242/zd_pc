<template>
  <div class="intro_content">
    <div class="img">
      <img
        width="100%"
        height="100%"
        src="http://www.zhongzhiwealth.com/uploads/allimg/180427/1_180427085954_1.png"
        alt
      >
    </div>
    <div class="content">
      <!-- <p>中迪投资有限公司成立于2014年12月5日，注册资本人民币10亿元。中植财富是中植企业集团内的重要公司，旗下拥有四家卓越的财富管理公司和一家优秀的保险经纪公司，旨在为高净值客户群体提供专业化综合金融服务，帮助客户实现资产全球配置及财富世代传承。中植财富在中国第三方财富管理市场中有重要的地位，拥有稳定的客户群体，累计为超过17万名高净值客户提供综合金融服务。</p> -->
    </div>
  </div>
</template>

<script>
export default {
    created () {
        this.$store.commit('setBreadList',{first:'关于我们',second:'发展历程'})
    },
};
</script>

<style lang="scss" scoped>
.intro_content {
  min-height: 500px;
  width: 800px;
  // border: 1px solid red;
  padding: 20px;
  background: #fff;
  .content {
    margin-top: 20px;
    font-size: 14px;
    line-height: 2;
    color: #666;
    margin-bottom: 20px;
  }
}
</style>