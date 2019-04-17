<template>
  <a-carousel autoplay>
    <div v-for="item in banner" :key="item.id">
      <img :src="item.url" alt>
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        {
          id: 1,
          url:
            "http://www.zhongzhiwealth.com/uploads/170504/1-1F504122019519.jpg"
        },
        {
          id: 2,
          url:
            "http://www.zhongzhiwealth.com/uploads/allimg/170512/1-1F5121R9250-L.jpg"
        },
        {
          id: 3,
          url:
            "http://www.zhongzhiwealth.com/uploads/170504/1-1F504122114U7.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 500px; */
  /* line-height: 160px; */
  background: #ffffff;
  overflow: hidden;
}
img {
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
</style>