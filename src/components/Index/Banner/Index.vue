<template>
  <!-- 首页轮播 -->
  <a-carousel autoplay>
    <div v-for="item in res" :key="item._id">
      <img :src="item.IMGURL" alt>
    </div>
  </a-carousel>
</template>
<script>
import serviceApi from "../../../api/axios.js";
export default {
  data() {
    return {
      res: {}
    };
  },
  methods: {
    async getBanner() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/banner/getImg");
      if (status == 200 && data) {
        this.res = data.filter(item=>item.TYPE==1);
        this.isLoad();
      }
    },
    isLoad() {
      let arrs = [];
      let index = 0;
      let _this = this;
      _this.res.map(item => {
        arrs.push(item.IMGURL);
      });
      loadImage();
      function loadImage() {
        let imgObj = new Image();
        imgObj.src = arrs[index++];
        imgObj.onload = function() {
          if (index < arrs.length) {
            loadImage();
          } else {
            _this.$store.commit("setLoad", 0);
          }
        };
      }
    }
  },
  mounted() {
    this.getBanner();
  }
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
  min-height: 550px;
  margin: 0 auto;
}
</style>