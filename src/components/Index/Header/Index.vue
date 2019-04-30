<template>
  <div class="content">
    <div class="log">
      <img :src="logo" alt>
    </div>
    <div class="header-nav">
      <a-menu v-model="current" mode="horizontal">
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper" @click="index">首页</span>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">关于我们</span>
          <a-menu-item key="/about/intro?key=1">集团简介</a-menu-item>
          <a-menu-item key="/about/history?key=2">发展历程</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">新闻中心</span>
          <a-menu-item key="/news/company?key=1">公司新闻</a-menu-item>
          <a-menu-item key="/news/media?key=2">媒体关注</a-menu-item>
          <a-menu-item key="/news/notice?key=3">公司公告</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper" @click="$router.push(`/distribution/list_1?key=1`)">产业布局</span>
          <!-- <a-menu-item key="setting:6">测试项目</a-menu-item> -->
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">企业责任</span>
          <a-menu-item key="/duty/public?key=1">公益事业</a-menu-item>
          <a-menu-item key="/duty/charity?key=2">慈善事业</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">加入我们</span>
          <a-menu-item key="/join/contact?key=1">联系我们</a-menu-item>
          <a-menu-item key="/join/recruit?key=2">诚聘英才</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      logo:
        "http://119.3.17.107/seeyon/fileUpload.do?method=showRTE&type=image&fileId=-7585268485041271763",
      current: []
    };
  },
  watch: {
    current() {
      this.$router.push(`${this.current}`);
    }
  },
  methods: {
    index(){
      this.$router.push(`/`);
    },
    cs(){
alert(111)
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  // background-color: antiquewhite;
  margin: 0 auto;
  width: 1080px;
  height: 110px;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  // position: fixed;
  // left: 0;
  // z-index: 1000;
  right: 0;
  .log > img {
    height: 101px;
  }
}
.submenu-title-wrapper {
  color: rgb(173, 135, 87);
}
.ant-menu-horizontal {
  border-bottom: 1px solid #ad8757;
}
li.ant-menu-item {
  color: rgba(0, 0, 0, 0.65);
}
.ant-menu-item-active {
  color: #ad8757 !important;
}
ul {
  background: #f5f5f5 !important;
}
</style>