<template>
  <div class="news_company">
    <ul>
      <li>
        <img src="http://www.zhongzhiwealth.com/uploads/180702/2-1PF21T315494.jpg" alt>
        <span class="title">
           <h3 @click="go">双星报喜：“大唐元一”与“大唐元山”斩获母...</h3>
         
          <p>2018-07-02</p>
          <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业精英齐聚一堂，共话新形势下母基金行业的机遇与挑战，大唐...</p>
        </span>
      </li>
      <li>
        <img src="http://www.zhongzhiwealth.com/uploads/180702/2-1PF21T315494.jpg" alt>
        <span class="title">
          <h3>双星报喜：“大唐元一”与“大唐元山”斩获母...</h3>
          <p>2018-07-02</p>
          <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业精英齐聚一堂，共话新形势下母基金行业的机遇与挑战，大唐...</p>
        </span>
      </li>
      <li>
        <img src="http://www.zhongzhiwealth.com/uploads/180702/2-1PF21T315494.jpg" alt>
        <span class="title">
          <h3>双星报喜：“大唐元一”与“大唐元山”斩获母...</h3>
          <p>2018-07-02</p>
          <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业精英齐聚一堂，共话新形势下母基金行业的机遇与挑战，大唐...</p>
        </span>
      </li>
      <li>
        <img src="http://www.zhongzhiwealth.com/uploads/180702/2-1PF21T315494.jpg" alt>
        <span class="title">
          <h3>双星报喜：“大唐元一”与“大唐元山”斩获母...</h3>
          <p>2018-07-02</p>
          <p>2018年6月26日，由《母基金周刊》主办的LP之夜母基金周刊年中盛典在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业精英齐聚一堂，共话新形势下母基金行业的机遇与挑战，大唐...</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods: {
        go() {
            this.$router.push({path:'/new_detail',query:{uid:2}})
        }
    },
    created () {
        this.$store.commit('setBreadList',{first:'新闻中心',second:'公司新闻'})
    },
};
</script>

<style lang="scss" scoped>
.news_company {
  width: 800px;
  min-height: 500px;
  ul {
    padding: 0;
    margin: 0;
    li {
      overflow: hidden;
      background: #fff;
      width: 800px;
      height: 180px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      margin-bottom: 15px;
      img {
        width: 225px;
        height: 150px;
      }
      .title {
        width: 500px;
        h3{
        color: rgba(0, 0, 0, 0.85);
            &:hover{
                color: #ad8757;
            }
        }
      }
    }
  }
}
</style>