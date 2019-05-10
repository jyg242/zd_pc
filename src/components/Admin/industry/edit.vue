<template>
  <div style="padding:20px;">
    <div class="news_title">
      <span style="color:black;margin-right:10px">产业名称 :</span>
      <a-input placeholder="Basic usage" v-model="title"/>
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
      title: "",
      //   ce:'',//第二种方案
      childValue: "加载中...",
      lid:'',
    };
  },
  methods: {
    handleChange(value) {
      this.type = value;
    },
    async newsAll(res) {
      if (res.length > 0 && this.title.length > 0) {
        let data = await serviceApi.post("/industry/updateIndustry", {
          title: this.title,
          content: res,
          id:this.lid
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
      let data1 = await serviceApi.get("/industry/getIndustry", {
        params: {
          key: id
        }
      });
      let data2 = JSON.stringify(data1);
      let data = JSON.parse(data2);
      let res = data.data.data;
      //   console.log(res)
      res.map(item => {
        this.title = item.title;
        this.ce = item.content;
        this.childValue = item.content;
      });
      //   this.go_b() //第二种方案
    }
  },
  mounted() {
    let id = this.$route.params.key;
    this.lid=id
    if (id != null) this.getimg(id);
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