<template>
  <!-- 联系我们 -->
  <div class="join_content">
    <div class="content_top">
      <div class="join_tel">
        <i class="iconfont">&#xe603;</i>
        <div class>
          <span>联系电话 : 021-88888888</span>
          <span>电子邮箱 : 297138663@qq.com</span>
        </div>
      </div>
      <div class="join_mail">
        <i class="iconfont">&#xe610;</i>
        <span>公司地址 : 北京市东城区建国门内大街19号</span>
      </div>
    </div>
    <div class="content_fot">
      <aMap/>
    </div>
  </div>
</template>

<script>
import aMap from "../../Public/aMap";
export default {
  components: {
    aMap
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "加入我们",
      second: "联系我们"
    });
  }
};
</script>

<style lang="scss" scoped>
.join_content {
  min-height: 500px;
  width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  background: #fff;
  > div {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .join_tel,
    .join_mail {
      width: 350px;
      height: 70%;
      border: 2px solid #ad8757;
      padding: 30px 10px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .iconfont {
        font-size: 60px;
      }
      span {
        display: block;
        font-size: 15px;
      }
    }
  }
  .content_fot {
    overflow: hidden;
  }
}
</style>