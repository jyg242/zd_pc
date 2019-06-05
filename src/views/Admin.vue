<template>
  <!-- 后台页面 -->
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <nav-left></nav-left>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <nav-header class="nav_header"></nav-header>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '14px', background: '#fff', minHeight: '280px' }"
      >
        <div style="font-size:20px;margin-bottom:10px;">
          欢迎管理员:
          <span style="color:red">{{this.$store.state.adminName}}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;权限等级:
          <span style="color:red">{{this.$store.state.level}}</span>
        </div>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import navLeft from "../components/Admin/navLeft";
import navHeader from "../components/Admin/naveHeader";
import serviceApi from "../api/axios";
export default {
  components: {
    navLeft,
    navHeader
  },
  data() {
    return {
      collapsed: false,
      level: ""
    };
  },
  // methods: {
  //   async getInfo() {
  //     let { status, data } = await serviceApi.post("/user/admin");
  //     if (status == 200 && data.length > 0) {
  //       this.admin = data[0].userName;
  //       this.level = data[0].level;
  //       this.$store.commit('setLevel',1)
  //     } else {
  //       localStorage.removeItem("jygToken");
  //       $router.go(-1);
  //     }
  //   }
  // },
  created() {
    // this.getInfo();
    // console.log(this.$store.state.level)
    this.$store.dispatch("setAllLevel");
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-has-sider {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.nav_header {
  display: inline-block;
}
</style>
