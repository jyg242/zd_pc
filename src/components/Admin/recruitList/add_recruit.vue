<template>
  <div style="padding:20px;">
    <div class="news_title">
      <span style="color:black;margin-right:10px">招聘主题 :</span>
      <a-input placeholder="Basic usage" v-model="title"/>
    </div>
    <div class="news_post">
      <span style="color:black;margin-right:10px">招聘职位 :</span>
      <a-input placeholder="Basic usage" v-model="post"/>
      <span style="color:black;margin-right:10px;margin-left:30px">工作地点 :</span>
      <a-input placeholder="Basic usage" v-model="place"/>
      <span style="color:black;margin-right:10px;margin-left:30px">薪资待遇 :</span>
      <a-input placeholder="Basic usage" v-model="money"/>
    </div>
    <div class="news_require">
      <span style="color:black;margin-right:10px">招聘要求 :</span>
      <br>
      <a-button style="margin-left:668px;margin-bottom:15px;" @click="add_input">增加</a-button>
      <div v-for="(item,index) in items" :key="index" style="margin-left:73px;margin-bottom:10px;">
        <span style="color:red">{{index+1}}.</span>
        <a-input placeholder="Basic usage" v-model="items[index]"/>
        <a-button
          shape="circle"
          style="margin-left:5px;"
          type="danger"
          @click="remove_input(index)"
        >✖️</a-button>
      </div>
    </div>

    <div class="news_site">
      <span style="color:black;margin-right:10px">联系电话 :</span>
      <a-input placeholder="Basic usage" v-model="phone"/>
      <span style="color:black;margin-right:10px;margin-left:30px">投递邮箱 :</span>
      <a-input placeholder="Basic usage" v-model="email"/>
    </div>
    <!-- <tinymce-my ref="tiny" @getContent="newsAll"></tinymce-my> -->
    <a-button @click="go_a" size="large" type="primary" style="margin-top:10px;margin-left:54%">发布</a-button>
  </div>
</template>
<script>
// import TinymceMy from "../../Public/Tinymce/index";
import serviceApi from "../../../api/axios.js";
export default {
  // components: { TinymceMy },
  data() {
    const Id = Date.now();
    return {
      size: "default",
      title: "", //主题
      post: "", //职位
      place: "", //地点
      money:'面议',//待遇
      items: [""], //要求
      phone: "", //电话
      email: "" //邮箱
    };
  },
  watch: {
    items: {
      handler(news1) {
        console.log(news1);
      }
    }
  },
  methods: {
    add_input() {
      this.items.push("");
    },
    remove_input(item) {
      console.log(item);
      this.items.splice(item, 1);
    },
    async go_a() {
      console.log(111);
      if (
        this.title.length > 0 &&
        this.post.length > 0 &&
        this.place.length > 0 &&
        this.items.length > 0 &&
        this.phone.length > 0 &&
        this.email.length > 0
      ) {
        let {status,data:{data}} = await serviceApi.post("/recruit/setRecruit", {
          title: this.title,
          post: this.post,
          place: this.place,
          money:this.money,
          items: this.items,
          phone: this.phone,
          email: this.email
        });
        console.log(data);
        if (status == 200 && data=='添加成功') {
          this.$info({
            title: "发布成功!",
            onOk() {
              // history.go(0);
            }
          });
        }
      } else {
        this.$message.error("内容不能不能为空!");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.news_title,
.news_post,
.news_require {
  margin-bottom: 20px;
}
.ant-input {
  width: 278px;
}
.news_title .ant-input {
  width: 658px;
}
.news_post .ant-input {
  width: 150px;
}
.news_require .ant-input {
  width: 648px;
}
</style>