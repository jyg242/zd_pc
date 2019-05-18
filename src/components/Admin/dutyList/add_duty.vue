<template>
  <div style="padding:20px;">
    <div class="news_title">
      <span style="color:black;margin-right:10px">公益主题 :</span>
      <a-input placeholder="Basic usage" v-model="title"/>
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
      title: ""
    };
  },
  methods: {
  
    async newsAll(res) {
      if (
        res.length > 0 &&
        this.title.length > 0
      ) {
        let data = await serviceApi.post("/duty/setDuty", {
          title: this.title,
          content: res
        });
        if (data.data.status == 200 && data.data.data == "添加成功") {
          this.$info({
            title: "发布成功!",
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
      this.$refs.tiny.go();
    }
  }
};
</script>
<style lang="scss" scoped>
.news_title {
  margin-bottom: 20px;
}
.ant-input {
  width: 200px;
}
.news_title .ant-input {
  width: 513px;
}
</style>