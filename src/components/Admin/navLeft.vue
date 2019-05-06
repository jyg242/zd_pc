<template>
  <div style="width: 200px">
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @click="cs"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart"/>
        <span>后台首页</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="picture"/>
        <span>图片管理</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="read"/>
          <span>新闻管理</span>
        </span>
        <a-menu-item key="3">公司新闻</a-menu-item>
        <a-menu-item key="4">行业动态</a-menu-item>
        <a-menu-item key="5">公司公告</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="6">
        <a-icon type="appstore"/>
        <span>产业布局管理</span>
      </a-menu-item>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="trophy"/>
          <span>企业责任管理</span>
        </span>
        <a-menu-item key="7">公益事业</a-menu-item>
        <a-menu-item key="8">慈善事业</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title">
          <a-icon type="usergroup-add"/>
          <span>关于我们管理</span>
        </span>
        <a-menu-item key="9">联系方式</a-menu-item>
        <a-menu-item key="0">招聘信息</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    cs(e) {
      console.log(e.key, this.$router.options.routes);
    }
  },
  watch: {
    current() {
      console.log(this.current);
    }
  }
};
</script>
