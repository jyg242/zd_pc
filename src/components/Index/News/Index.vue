<template>
  <div class="indexCompany">
    <div class="content">
      <div class="about_txt">
        <h1>公司动态</h1>
        <span>News</span>
      </div>
      <div class="index_news">
        <div class="news_list">
          <ul>
            <li>
              <div class="news_time">
                <b>02</b>
                <span>2018-07</span>
              </div>
              <div class="news_con">
                <a href>
                  <h5>双星报喜：中迪投资斩获母基金周刊两项大</h5>
                </a>
                <a href>
                  <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业200余位母基金行业200余位母基金行业200余位母基金行业200余位母基金行业...</p>
                </a>
              </div>
            </li>
            <li>
              <div class="news_time">
                <b>02</b>
                <span>2018-07</span>
              </div>
              <div class="news_con">
                <a href>
                  <h5>双星报喜：中迪投资斩获母基金周刊两项大</h5>
                </a>
                <a href>
                  <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业...</p>
                </a>
              </div>
            </li>
            <li>
              <div class="news_time">
                <b>02</b>
                <span>2018-07</span>
              </div>
              <div class="news_con">
                <a href>
                  <h5>双星报喜：中迪投资斩获母基金周刊两项大</h5>
                </a>
                <a href>
                  <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业...</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="news_img">
          <a href>
            <img
              src="http://www.zhongzhiwealth.com/uploads/180604/2-1P6041H23C07-lp.png"
              alt
              width="100%"
              height="100%"
            >
          </a>
        </div>
        <div class="news_btn Animate AnimateOn" @click="$router.push('/news/company?key=1')">
          <span>了解详细</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.indexCompany {
  width: 100%;
  height: 715px;
  // border: 1px solid red;
  background-image: url("http://www.zhongzhiwealth.com/templets/zzcf/images/indexb_04.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
      //   flex-wrap: wrap;
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
    .index_news {
      height: 550px;
    //   border: 1px solid red;
      display: flex;
      justify-content: space-between;
      .news_list {
        ul {
          margin: 0px;
          padding: 0px;
          li {
            list-style: none;
            // width: 680px;
            height: 123px;
            // border: 1px solid red;
            display: flex;
            background: #fff;
            margin-bottom: 10px;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
            overflow: hidden;
            .news_time {
              width: 122px;
              height: 123px;
              // border: 1px solid red;
              color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              background: #1a9fca;
              b {
                text-align: center;
                height: 61px;
                line-height: 61px;
                font-size: 43px;
                font-family: "Futura Std", arial;
              }
              span {
                text-align: center;
              }
            }
            .news_con {
              width: 603px;
              padding: 25px 34px 0;
              h5 {
                margin: 0;
                font-size: 16px;
                color: #444;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:hover {
                  color: #ad8757;
                }
              }
              p {
                margin: 0;
                padding-top: 10px;
                font-size: 14px;
                line-height: 24px;
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
      .news_img {
        margin-top: 60px;
        // margin-right: 25px;
        width: 320px;
        height: 250px;
        
        // border: 1px solid red;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow: hidden;
      }
      .news_btn {
        width: 1080px;
        height: 50px;
        // border: 1px solid red;
        position: absolute;
        top: 600px;
        background: #fff;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        text-align: center;
        line-height: 50px;
        // color: #fff;
        &:hover{
          background: #1a9fca;
          // transition: ;
          color: #fff;
        }
      }
    }
  }
}
// .AnimateOn.Animate {
//     transform: translateY(0);
//     -moz-transform: translateY(0);
//     -webkit-transform: translateY(0);
//     visibility: visible;
//     opacity: 1;
//     transition: 1s cubic-bezier(.65,0,.31,.99) .1s;
//     -moz-transition: 1s cubic-bezier(.65,0,.31,.99) .1s;
//     -webkit-transition: 1s cubic-bezier(.65,0,.31,.99) .1s;
// }
</style>