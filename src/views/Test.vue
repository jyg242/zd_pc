<template>
  <div>
    <h2>测试页面</h2>
    <keep-alive>
      <!-- <router-view></router-view> -->
      <cs></cs>
    </keep-alive>
  </div>
</template>

<script>
import cs from "../components/Test/index1";
export default {
  components: { cs }
};
</script>

<style lang="scss" scoped>
</style>