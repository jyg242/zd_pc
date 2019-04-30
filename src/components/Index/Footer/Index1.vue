<template>
  <div class="footer">
    <div class="content">
      <div class="left">
        <span>A</span>股信息(601588)
        <span>101.00</span>
        <span>(5.00%)</span>
      </div>
      <div class="right">
        <div class="r_top">
          <ul>
            <li>中迪投资</li>
            <li>免责声明</li>
            <li>网站地图</li>
            <li>邮件订阅</li>
          </ul>
        </div>
        <div class="r_btn">
          <p>
            Copyright
            <span>@</span>北京中迪投资股份有限公司
            <span>京ICP备1705441</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 15px;
  background-color: black;
  color: #ad8757;
  padding:10px 0;
  .content {
    width: 1080px;
    height: 65px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 400px;
      height: 30px;
      line-height: 30px;
    }
    .right {
      width: 600px;
      height: 60px;
      .r_top {
        height: 30px;
        ul {
          margin-left: 345px;
          padding: 0;
          li {
            list-style: none;
            float: left;
            margin-left: 15px;
            font-size: 12px;
          }
        }
      }
      .r_btn {
        // height: 30px;
        p {
          margin: 0px;
          text-align: end;
          font-size: 12px;
          text-align: right;
        }
      }
    }
  }
}
</style>