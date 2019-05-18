<template>
  <div style="padding:20px;">
    <div class="news_title">
      <span style="color:black;margin-right:10px">新闻标题 :</span>
      <a-input placeholder="Basic usage" v-model="title"/>
    </div>
    <div class="news_type">
      <span style="color:black;margin-right:10px">新闻类型 :</span>
      <a-select
        :size="size"
        :defaultValue="this.$store.state.title"
        style="width: 200px"
        @change="handleChange"
      >
        <a-select-option v-for="i in arr" :key="i.type">{{i.name}}</a-select-option>
      </a-select>
      <span style="color:black;margin-right:10px;margin-left:40px">新闻作者 :</span>
      <a-input placeholder="Basic usage" v-model="auth"/>
      <span style="color:black;margin-right:10px;margin-left:40px">来源 :</span>
      <a-input placeholder="Basic usage" v-model="from"/>
    </div>
    <div class="news_img">
      <span style="color:black;margin-right:10px;">缩略小图 :</span>
      <a-input placeholder="Basic usage" v-model="img_min"/>
    </div>
    <div class="news_intro">
      <span style="color:black;margin-right:10px;">新闻简介 :</span>
      <a-input placeholder="Basic usage" v-model="intro"/>
    </div>
    <tinymce-my ref="tiny" @getContent="newsAll" :value="childValue"></tinymce-my>
    <a-button @click="go_a" style="margin-top:10px;margin-left:92%">修改</a-button>
  </div>
</template>
<script>
import TinymceMy from "../../Public/Tinymce/index";
import serviceApi from "../../../api/axios.js";
import compare from "../../../util/sort_ab.js";
export default {
  components: { TinymceMy },
  data() {
    return {
      size: "default",
      //   ce:'',//第二种方案
      childValue: "加载中...",
      lid: "",
      auth: "",
      type: 0,
      title: "",
      from: "中迪投资",
      img_min: "",
      intro: "",
      t_val: "1",
      arr: [
        { type: 1, name: "公司新闻" },
        { type: 2, name: "行业新闻" },
        { type: 3, name: "公司公告" }
      ]
    };
  },
  methods: {
    handleChange(value) {
      this.type = value;
    },
    async newsAll(res) {
      if (res.length > 0 && this.title.length > 0) {
        let data = await serviceApi.post("/news/updateNews", {
          title: this.title,
          content: res,
          id: this.lid,
          auth: this.auth,
          type: this.type
        });
        if (data.data.status == 200 && data.data.data == "修改成功") {
          this.$info({
            title: "修改成功!",
            onOk() {
              history.go(0);
            }
          });
        }
      } else {
        this.$message.error("内容不能不能为空!");
      }
    },
    async go_a() {
      this.$refs.tiny.go("1314");
    },
    // 第二种方案
    // async go_b() {
    //   this.$refs.tiny.gogo(this.ce);
    // },
    async getimg(id) {
      let data1 = await serviceApi.get("/news/getNews_one", {
        params: { key: id }
      });
      let data2 = JSON.stringify(data1);
      let data = JSON.parse(data2);
      let res = data.data.data;
      res.map(item => {
        this.lid = item._id;
        this.title = item.TITLE;
        this.type = item.TYPE;
        this.auth = item.AUTH;
        this.childValue = item.CONTENT;
        this.from=item.FROM;
        this.intro=item.INTRO;
        this.img_min=item.IMG_MIN;
      });
    }
  },
  mounted() {
    let id = this.$route.params.key;
    this.lid = id;
    if (id != null) this.getimg(id);
  }
};
</script>
<style lang="scss" scoped>
//
.news_type,
.news_title,
.news_img,
.news_intro {
  margin-bottom: 20px;
}
.news_type .ant-input {
  width: 200px;
}
.news_title .ant-input {
  width: 513px;
}
.news_img .ant-input {
  width: 300px;
}
.news_intro .ant-input {
  width: 800px;
}
</style>