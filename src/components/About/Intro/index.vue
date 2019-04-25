<template>
  <div class="intro_content">
    <div class="img">
      <img
        width="100%"
        height="100%"
        src="http://www.zhongzhiwealth.com/templets/zzcf/images/company_03.jpg"
        alt
      >
    </div>
    <div class="content">
        <h1>{{test}}</h1>
      <p>中迪投资有限公司成立于2014年12月5日，注册资本人民币10亿元。中植财富是中植企业集团内的重要公司，旗下拥有四家卓越的财富管理公司和一家优秀的保险经纪公司，旨在为高净值客户群体提供专业化综合金融服务，帮助客户实现资产全球配置及财富世代传承。中植财富在中国第三方财富管理市场中有重要的地位，拥有稳定的客户群体，累计为超过17万名高净值客户提供综合金融服务。</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        test: {
            type: String,
            default: '失败'
        },
    },
    created () {
        this.$store.commit('setBreadList',{first:'关于我们',second:'集团简介'})
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