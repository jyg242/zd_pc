<template>
  <div class="index_about">
    <div class="content">
      <div class="about_txt">
        <h1>产业布局</h1>
        <span>DISTRIBUTION</span>
      </div>
      <div class="swiper-button-prev " @click="aPrev">
          <a-icon type="left" />
      </div>
        <div class="swiper-button-next iconfont"  @click="aNext">
            <a-icon type="right" />
        </div>
      <a-carousel autoplay ref="carousel">
        
        <div class="banner_item">
          <a-card
            hoverable
            style="width: 300px"
            v-for="item in IndustryList"
            :key="item.id"
            class="swiper-slide"
          >
            <img alt="example" :src="item.url" slot="cover">
            <a-card-meta :title="item.title">
              <template slot="description" class="banner_item_con">
                <p>{{item.detail}}</p>
                <a-button class>了解详细</a-button>
              </template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="banner_item">
          <a-card hoverable style="width: 300px" v-for="item in IndustryList" :key="item.id">
            <img alt="example" :src="item.url" slot="cover">
            <a-card-meta :title="item.title">
              <template slot="description">
                <p>{{item.detail}}</p>
                <a-button>了解详细</a-button>
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IndustryList: [
        {
          id: 1,
          url:
            "http://www.zhongzhiwealth.com/templets/zzcf/images/indexpro_11.jpg",
          title: "增值服务",
          detail:
            "创办中国第三方财富管理行业领先级的企业大学，对内致力于提升员工的专业水平、金融素养，从而为客户提供专业建议、稳健产品、优质..."
        },
        {
          id: 2,
          url:
            "http://www.zhongzhiwealth.com/templets/zzcf/images/indexpro_11.jpg",
          title: "增值服务",
          detail:
            "创办中国第三方财富管理行业领先级的企业大学，对内致力于提升员工的专业水平、金融素养，从而为客户提供专业建议、稳健产品、优质..."
        },
        {
          id: 3,
          url:
            "http://www.zhongzhiwealth.com/templets/zzcf/images/indexpro_11.jpg",
          title: "增值服务",
          detail:
            "创办中国第三方财富管理行业领先级的企业大学，对内致力于提升员工的专业水平、金融素养，从而为客户提供专业建议、稳健产品、优质..."
        }
      ]
    };
  },
  methods: {
    aNext() {
      this.$refs.carousel.next();
    },
    aPrev(){
        this.$refs.carousel.prev();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  color: #ad8757;
  position: relative;
  width: 1080px;
  margin: 0 auto;
    // border: 1px solid red;
  .about_txt {
    width: 112px;
    padding: 40px 0;
    color: #ad8757;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;
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
}
.ant-btn:hover,
.ant-btn:focus {
  color: #ad8757;
  border-color: #ad8757;
}
// 走马灯
/* For demo */
.slick-track {
  width: 500px;
}
.ant-carousel >>> .slick-slide {
  width: 800px;
  overflow: hidden;
}
.banner_item {
  padding: 30px;
  height: 500px;
  display: flex !important;
  justify-content: space-around;
}
.ant-card-meta-description {
  p {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #666;
    // color: #ad8757;
  }
  button {
    margin: 40px 0 0 81px;
  }
}
.swiper-button-prev, .swiper-button-next {
    width: 50px;
    height: 50px;
    background: none;
    text-align: center;
    line-height: 50px;
    font-size: 46px;
    color: #ad8757;
    position: absolute;
    z-index: 101;
    top: 340px;
    cursor:pointer;
}
.swiper-button-prev{
    left:-50px;
}
 .swiper-button-next{
     left: 1080px;
 }
</style>