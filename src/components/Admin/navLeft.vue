<template>
  <div style="width: 200px">
    <a-menu
      
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @click="cs"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart"/>
        <span>后台首页</span>
      </a-menu-item>
      <a-sub-menu key="sub1" v-if="1==level||7==level">
        <span slot="title">
          <a-icon type="read"/>
          <span>图片管理</span>
        </span>
        <a-menu-item key="2">图片编辑</a-menu-item>
        <a-menu-item key="3">新增图片</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" v-if="2==level||7==level">
        <span slot="title">
          <a-icon type="read"/>
          <span>新闻管理</span>
        </span>
        <a-menu-item key="4">新闻编辑</a-menu-item>
        <a-menu-item key="5">发布新闻</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" v-if="3==level||7==level">
        <span slot="title">
          <a-icon type="trophy"/>
          <span>产业管理</span>
        </span>
        <a-menu-item key="6">产业编辑</a-menu-item>
        <a-menu-item key="7">新增产业</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4" v-if="4==level||7==level">
        <span slot="title">
          <a-icon type="trophy"/>
          <span>企业责任管理</span>
        </span>
        <a-menu-item key="8">列表编辑</a-menu-item>
        <a-menu-item key="9">新增责任</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5" v-if="5==level||7==level">
        <span slot="title">
          <a-icon type="usergroup-add"/>
          <span>招聘</span>
        </span>
        <a-menu-item key="0">招聘管理</a-menu-item>
        <a-menu-item key="11">新增招聘</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub6">
        <span slot="title">
          <a-icon type="usergroup-add"/>
          <span>个人中心</span>
        </span>
        <a-menu-item key="12">密码管理</a-menu-item>
        <a-menu-item key="13" v-if="7==level">权限审批</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      // level:this.$store.getters.needLevel
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    cs(e) {
      // console.log(e.key, this.$router.options.routes);
      let key = e.key;
      switch (key) {
        case "2":
          this.$router.push({ name: "update_img" });
          break;
        case "3":
          this.$router.push({ name: "add_img" });
          break;
        case "4":
          this.$router.push({ name: "update_news" });
          break;
        case "5":
          this.$router.push({ name: "add_news" });
          break;
        case "6":
          this.$router.push({ name: "control_industry" });
          break;
        case "7":
          this.$router.push({ name: "add_industry" });
          break;
        case "8":
          this.$router.push({ name: "update_duty" });
          break;
        case "9":
          this.$router.push({ name: "add_duty" });
          break;
        case "0":
          this.$router.push({ name: "reomove_recruit" });
          break;
        case "11":
          this.$router.push({ name: "add_recruit" });
          break;
          case "12":
          this.$router.push({ name: "password_center" });
          break;
          case "13":
          this.$router.push({ name: "admin_control" });
          break;

        default:
          break;
      }
    }
  },
  watch: {
    current() {
      console.log(this.current);
    }
  },
  computed:{
    level(){
      return this.$store.state.level
    }
  },
};
</script>
