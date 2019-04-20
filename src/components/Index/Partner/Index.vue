<template>
  <div class="index_partner">
    <div class="content">
      <div class="about_txt">
        <h1>合作伙伴</h1>
        <span>Cooperative partner</span>
      </div>
      <div class="partner_detail">
        <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <img
                  width="100%"
                  height="100%"
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555652452177&di=f3d267b4040dc69a083aee958e097dd6&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150929%2FImg422339892.jpg"
                  alt
                >
              </div>
              <div>
                <img
                  width="100%"
                  height="100%"
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555652452177&di=f3d267b4040dc69a083aee958e097dd6&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150929%2FImg422339892.jpg"
                  alt
                >
              </div>
              <div>
                <img
                  width="100%"
                  height="100%"
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555652452177&di=f3d267b4040dc69a083aee958e097dd6&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150929%2FImg422339892.jpg"
                  alt
                >
              </div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="swiper-slide">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 5"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 6"
            ></span>
            <span
              class="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 7"
            ></span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  components: {
    Swiper
  },
  data() {
    return {};
  },
  methods: {
    initSwiper() {
      var swiper = new Swiper(".swiper-container", {
        autoplay:true,
        slidesPerView: 4,
        spaceBetween: 30,
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
@import "../../../../node_modules/swiper/dist/css/swiper.css";

.index_partner {
  width: 100%;
  background: #ffffff;
  position: relative;
  .content {
    color: #ad8757;
    position: relative;
    width: 1080px;
    height: 518px;
    margin: 0 auto;
    //   overflow: hidden;
    // display: flex;
    justify-content: space-between;
    .about_txt {
      padding: 40px 0;
      z-index: 100;
      color: #ad8757;
      display: flex;
      flex-direction: column;
      // align-items: center;
      h1 {
        margin: 0;
        color: #ad8757;
        &:after {
          content: "";
          display: block;
          width: 36px;
          height: 1px;
          background: #ad8757;
          position: absolute;
          top: 60px;
          left: -50px;
        }
      }
    }
    .partner_detail {
      width: 1080px;
      height: 300px;
      // border: 1px solid red;
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  // border: 1px solid red;
  display: flex;
  // flex:1;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-around;
  div {
    height: 80px;
    border: 1px solid #ad8757;
  }
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -6px;
}
</style>