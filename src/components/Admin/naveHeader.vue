<template>
  <div class="nav_header_con">
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" href="#">
        管理员中心
        <a-icon type="down"/>
      </a>
      <a-menu slot="overlay" @click="handleMenu">
        <a-menu-item key="0">
          <a href="/login">退出登录</a>
        </a-menu-item>
        
      </a-menu>
    </a-dropdown>
  
  </div>
</template>

<script>
export default {
    methods: {
        handleMenu(e) {
          let key=e.key
          if(key==0){
              localStorage.removeItem('isLogin')
          }
        }
    },
};
</script>

<style lang="scss" scoped>
.nav_header_con {
  margin-left: 75%;
  // line-height: 64px;
  // height: 64px;
  // width: 150px;
  // border: 1px solid red;
  // display: flex;
  // z-index: 1001;
  position: relative;
  .iconfont {
    border: 1px solid red;
    width: 150px;
    // height: 100px;
  }
  .myAdmin {
    width: 150px;
    height: 100px;
    border: 1px solid red;
    position: absolute;
    top: 64px;
    left: 0;
  }
}
a{
    text-decoration:none; 

}
.ant-dropdown-menu-item{
    width: 150px;
}
</style>