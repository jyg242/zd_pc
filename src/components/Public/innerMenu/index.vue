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
        >
          {{item.nav}}
          <i class="iconfont">&#xe6f6;</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      isShow: 1,
      url: this.$route.query.key
    };
  },
  methods: {
    active(id, url) {
      this.isShow = id;
      this.$router.push({ path: url, query: { key: id } });
    }
  },
  watch: {
    $route(to, from) {
      this.isShow = to.query.key;
    }
  },
  created() {
    this.isShow = this.$route.query.key;
  }
};
</script>

<style lang="scss" scoped>
.inner_menu {
  margin-top: 46px;
  width: 250px;
  overflow: hidden;
  .menu_title {
    padding: 20px;
    height: 110px;
    background: #1d1626;
    color: #ad8757;
    .border_btn {
      width: 210px;
      border-bottom: 1px solid #ad8757;
      margin-bottom: 5px;
    }
    h2 {
      color: #ad8757;
    }
  }
  .content {
    margin-top: 25px;
    ul {
      margin: 0;
      padding: 0;
      li {
        background: #fff;
        height: 45px;
        line-height: 45px;
        margin-top: 8px;
        padding: 0 20px;
        list-style: none;
        .iconfont {
          font-size: 14px;
          float: right;
        }
      }
      .active {
        background: #1d1626;
        color: #ad8757;
        font-weight: 700;
      }
    }
  }
}
</style>