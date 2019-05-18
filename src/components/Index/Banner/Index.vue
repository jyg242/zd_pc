<template>
<!-- 首页轮播 -->
  <a-carousel autoplay>
    <div v-for="item in res" :key="item._id">
      <img :src="item.IMGURL" alt>
    </div>
  </a-carousel>
</template>
<script>
import serviceApi from '../../../api/axios.js'
export default {
  data() {
    return {  
      res:{}
    };
  },
  methods: {
    async getBanner() {
      let {status,data:{data}}=await serviceApi.get('/banner/getImg')
      if(status==200&&data){
        this.res=data
      }
    }
  },
  mounted () {
    this.getBanner();
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