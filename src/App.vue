<template>
  <div id="app">
    <!-- <router-view/>
    -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  background-color: #f5f5f5;
  font-family: Arial, "微软雅黑";
}
</style>
