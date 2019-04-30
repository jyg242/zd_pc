<template>
  <vue-seamless-scroll :data="listData" :class-option="classOption" class="seamless-warp">
    <ul class="item">
      <li v-for="(item,index) in listData" :key="index">
        <span class="title" v-text="item.title"></span>
        <!-- <span class="date" v-text="item.date"></span> -->
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
.seamless-warp {
  height: 100px;
  overflow: hidden;
  line-height: 25px;
  li{
    //   list-style: none;
      margin-bottom: 4px;
  }
}

</style>
<script>
export default {
  data() {
    return {
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: ""
        },
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: ""
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        }
      ]
    };
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
        direction: 1 ,//0向下 1向上 2向左 3向右
        


      };
    }
  }
};
</script>