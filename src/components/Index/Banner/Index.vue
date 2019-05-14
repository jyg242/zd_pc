<template>
  <a-carousel autoplay>
    <div v-for="item in res" :key="item._id">
      <img :src="item.IMGURL" alt>
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {  
      res:this.$store.state.banner_images,
    };
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  background: #ffffff;
  overflow: hidden;
}
img {
  /* width: 1200px;
   */
  width: 100%;
  /* height: 80%; */
  height: 550px;
  margin: 0 auto;
}
</style>