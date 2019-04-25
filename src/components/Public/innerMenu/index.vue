<template>
  <div class="inner_menu">
    <div class="menu_title">
      <h2>{{list.title}}</h2>
      <div class="border_btn"></div>
      <span>{{list.title_en}}</span>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="item in list.sub_nav"
          :key="item.id"
          :class="{active:item.id==isShow}"
          @click="active(item.id,item.url)"
        >{{item.nav}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  props: ["list"],
  data() {
    return {
      isShow: 1,
      url: this.$route.query.key
    };
  },
  methods: {
    active(id,url) {
      this.isShow = id;
      this.$router.push(url)
     
    }
  },
  watch: {
    $route(to, from) {
      this.isShow=to.query.key
    }
  },
  created() {
      this.isShow=this.$route.query.key
  }
};
</script>

<style lang="scss" scoped>
.inner_menu {
  width: 210px;
  overflow: hidden;
  .menu_title {
    padding: 20px;
    height: 110px;
    background: #ad8757;
    opacity: 0.9;
    color: #ffffff;
    .border_btn {
      width: 90px;
      border-bottom: 1px solid #ffffff;
      margin-bottom: 5px;
    }
    h2 {
      color: #ffffff;
    }
  }
  .content {
    margin-top: 8px;
    ul {
      margin: 0;
      padding: 0;
      li {
        background: #fff;
        height: 45px;
        // border: 1px solid red;
        line-height: 45px;
        margin-top: 8px;
        padding: 0 20px;
        list-style: none;
      }
      .active {
        background: #ad8757;
        opacity: .5;
        color: #fff;
      }
    }
  }
}
</style>