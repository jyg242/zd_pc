<template>
  <div class="footer">
    <div class="content">
      <div class="left">
        <dl>
          <dt>关于我们</dt>
          <dd>公司简介</dd>
          <dd>发展历程</dd>
        </dl>

        <dl>
          <dt>新闻中心</dt>
          <dd>公司新闻</dd>
          <dd>媒体关注</dd>
          <dd>公司公告</dd>
        </dl>

        <dl>
          <dt>产业布局</dt>
          <dd>测试项目</dd>
          <dd>测试项目</dd>
          <dd>测试项目</dd>
          <dd>测试项目</dd>
        </dl>

        <dl>
          <dt>企业责任</dt>
          <dd>测试</dd>
          <dd>测试</dd>
        </dl>
        <dl>
          <dt>加入我们</dt>
          <dd>联系我们</dd>
          <dd>诚聘英才</dd>
        </dl>
        <p>成员企业：中迪禾邦</p>
      </div>
      <div class="right">
        <h4>与我们合作</h4>
        <p>为高净值客户群体提供专业化综合金融服务，帮助客户实现资产全球配置及财富世代传承。</p>
        
        <h4><i class="iconfont">&#xe608;</i>010-88888888</h4>
        <h4><i class="iconfont">&#xe7ed;</i>297138336@qq.com</h4>
      </div>
      <div class="copyright">
        <p class="copy">版权所有© 2019北京中迪投资股份有限公司</p>
        <p class="record">
          粤ICP备17033976号 
          <img
            src="http://www.zhongzhiwealth.com/templets/zzcf/images/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png"
            alt
          > 京公网安备 11010502035585号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 380px;
  background-color: #ad8757;
  // background: #363636;
  // opacity: .7;
  color: #FFFFFF;
  .content {
    width: 1080px;
    height: 350px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    // overflow: hidden;
    .left {
      width: 450px;
      height: 300px;
      
      display: flex;
      //   height: 300px;
      justify-content: space-between;
      //   flex-wrap: nowrap;
      p {
        position: absolute;
        // left: 5px;
        top: 270px;
      }
      dl {
        dt {
          font-size: 16px;
          margin-bottom: 20px;
          &:hover {
            color: #363636;
          }
        }
        dd {
          text-align: center;
          color: #FFFFFF;
          font-size: 13px;
          line-height: 28px;
          &:hover {
            color: #363636;
          }
        }
      }
    }
    .right {
      width: 450px;
      height: 300px;
      overflow: hidden;
      
      h4 {
        font-size: 24px;
        color: #FFFFFF;
        line-height: 52px;
        .iconfont{
            margin-right: 10px;
            font-size: 24px;
        }
      }
    }
    .copyright {
      width: 1080px;
      height: 50px;
      position: absolute;
      top: 315px;
      border-top: 1px solid #FFFFFF;
      padding-top: 5px;
      p {
        margin: 0;
      }
      .copy {
        // padding-left: 50px;
      }
      .record {
        text-align: center;
      }
    }
  }
}
</style>