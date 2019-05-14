<template>
  <div style="padding:20px;">
    <div class="news_title">
      <span style="color:black;margin-right:10px">新闻标题 :</span>
      <a-input placeholder="Basic usage" v-model="title"/>
    </div>
    <div class="news_type">
      <span style="color:black;margin-right:10px">新闻类型 :</span>
      <a-select :size="size" :defaultValue="title" style="width: 200px" @change="handleChange">
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
    <tinymce-my ref="tiny" @getContent="newsAll"></tinymce-my>
    <a-button @click="go_a" style="margin-top:10px;margin-left:92%">发布</a-button>
  </div>
</template>
<script>
import TinymceMy from "../../Public/Tinymce/index";
import serviceApi from "../../../api/axios.js";
export default {
  components: { TinymceMy },
  data() {
    const Id = Date.now();
    return {
      size: "default",
      title: "请选择",
      auth: "",
      from: "中迪投资",
      img_min: "",
      intro: "",
      type: 0,
      title: "",
      arr: [
        { type: 1, name: "公司新闻" },
        { type: 2, name: "行业新闻" },
        { type: 3, name: "公司公告" }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
      this.type = value;
    },
    async newsAll(res) {
      console.log(res);
      // console.log('haha'+res);
      if (
        this.type !== 0 &&
        res.length > 0 &&
        this.auth.length > 0 &&
        this.title.length > 0 &&
        this.img_min.length > 0 &&
        this.intro.length > 0
      ) {
        let data = await serviceApi.post("/news/setNews", {
          type: this.type,
          title: this.title,
          auth: this.auth,
          content: res,
          from:this.from,
          img_min:this.img_min,
          intro:this.intro
        });
        if (data.data.status == 200 && data.data.data == "添加成功") {
          this.$info({
            title: "发布成功!",
            onOk() {
              // history.go(0);
              // $router.push('/admin/update_news')
            }
          });
        }
      } else {
        this.$message.error("内容不能不能为空!");
      }
    },
    async go_a() {
      this.$refs.tiny.go();
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-layout {
  // height: 900px !important;
}
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