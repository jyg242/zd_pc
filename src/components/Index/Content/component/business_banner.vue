<template>
  <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgUrl" :key="item.id">
        <div class="swiper_item">
            <router-link to="/distribution/list_1?key=1">
          <img :src="item.url" alt width="100%" height="100px">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      imgUrl: [
        {
          id: 1,
          url: "http://www.beijingns.com.cn/images/in_images/in_con1.jpg"
        },
        {
          id: 2,
          url: "http://www.beijingns.com.cn/images/in_images/in_con2.jpg"
        },
        {
          id: 3,
          url: "http://www.beijingns.com.cn/images/in_images/in_con1.jpg"
        }
      ]
    };
  },
  methods: {
    initSwiper() {
      var swiper = new Swiper(".swiper-container", {
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  },
  mounted() {
    this.initSwiper();
  }
};
</script>

<style lang="scss" scoped>
swiper-container {
  height: 100px;
}
</style>