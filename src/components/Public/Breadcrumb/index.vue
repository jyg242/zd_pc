<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <a href="/">首页</a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{this.$store.state.breadeList.first}}</a-breadcrumb-item>
      <a-breadcrumb-item>{{this.$store.state.breadeList.second}}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: "一级菜单",
      second: "二级菜单"
    };
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 15px;
  .ant-breadcrumb {
    line-height: 44px;
    border-bottom: 2px solid #ad8757;  
  }
}
</style>
