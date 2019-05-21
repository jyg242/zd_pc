<template>
  <div>
    <h5>{{key}}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "2"
    };
  },
  activated() {
    setTimeout(() => (this.key = 5), 3000);
  }
};
</script>

<style lang="scss" scoped>
</style>