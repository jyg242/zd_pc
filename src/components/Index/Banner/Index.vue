<template>
  <a-carousel autoplay>
    <div v-for="item in banner" :key="item.id">
      <img :src="item.url" alt>
    </div>
    <!-- <div>{{this.$store.state.images}}</div> -->
  </a-carousel>
</template>
<script>
export default {
  data() {
    // let banner=this.$store.state.banner_images
    return {
      // banner:this.$store.state.banner_images,
      banner: [
        {
          id: 1,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557109227&di=f13b64f1c2db99266f816b75409a5a9c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0179465ab45a73a801218207e0987f.jpg%402o.jpg"
        },
         {
          id: 3,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557109227&di=f13b64f1c2db99266f816b75409a5a9c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0179465ab45a73a801218207e0987f.jpg%402o.jpg"
        },
        // {
        //   id: 2,
        //   url:
        //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556514458618&di=f1fd8168cf1f34ac3ca28e59c456efaa&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b61155cefcf86ac725baa0374039.jpg%401280w_1l_2o_100sh.jpg"
        // },
      ]
    };
  },
  mounted () {
    let res=this.$store.state.banner_images
    // console.log(JSON.parse(JSON.stringify(res)))
    console.log('111'+this.$store.state.banner_images)

    // console.log('内容为'+this.banner[0]);

  },
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
  /* width: 1200px;
   */
   width: 100%;
  /* height: 80%; */
  height: 550px;
  margin: 0 auto;
}
</style>