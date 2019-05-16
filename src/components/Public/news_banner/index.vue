<template>
<!--  首页新闻标题轮播列表 -->
  <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
    <ul class="item">
      <li v-for="item in listData" :key="item.id" @click="$router.push({path:'/new_detail',query:{content:`${item._id}`}})">
        <span class="title">{{spliceTitle(item.TITLE,17)}}</span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
.seamless-warp {
  height: 100px;
  overflow: hidden;
  line-height: 25px;
  ul {
    margin-left: -15px;
    margin-right: 5px;
    li {
      margin-bottom: 6px;
      .title {
        font-size: 13px;
      }
    }
  }
}
</style>
<script>
import spliceTitle from "../../../util/splice_title.js";
import serviceApi from '../../../api/axios.js'
export default {
  data() {
    this.spliceTitle = spliceTitle;
    return {
      listData: []
    };
  },
  methods: {
    async getNews_title() {
      let {status,data:{data}}=await serviceApi.get('/news/getNews')
      console.log(data)
      if(status==200&&data){
        this.listData=data
      }
    }
  },
  mounted () {
    this.getNews_title();
  },
  computed: {
    // 公告滚动自定义
    // defaultOption() {
    //   return {
    //     step: 0.9, // 数值越大速度滚动越快
    //     limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
    //     hoverStop: true, // 是否开启鼠标悬停stop
    //     direction: 3, // 0向下 1向上 2向左 3向右
    //     openWatch: true, // 开启数据实时监控刷新dom
    //     singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
    //     singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
    //     waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
    //   };
    // },
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        direction: 1 //0向下 1向上 2向左 3向右
      };
    }
  }
};
</script>