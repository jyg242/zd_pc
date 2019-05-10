<template>
  <div style="padding:20px;">
    <div class="img_type">
      <span style="color:red;margin-right:20px">图片类型 :</span>
      <a-select :size="size" :defaultValue="title" style="width: 200px" @change="handleChange">
        <a-select-option v-for="i in arr" :key="i.type">{{i.name}}</a-select-option>
      </a-select>
    </div>
    <div class="img_url">
      <span style="color:red">图片路径 :</span>
      <a-textarea placeholder="请输入图片地址" :autosize="{ minRows: 2, maxRows: 6 }" v-model="url"/>
    </div>
    <div>
      <a-button type="primary" @click="go">发布</a-button>
    </div>
  </div>
</template>

<script>
import serviceApi from "../../../api/axios.js";

export default {
  data() {
    return {
      size: "default",
      title:'请选择',
      arr: [
        { type: 1, name: "轮播图" },
        { type: 2, name: "页眉图" },
        { type: 3, name: "logo图" }
      ],
      url: "",
      type: 0
    };
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
      this.type = value;
    },
    async go() {
      if (this.type > 0 && this.url.length > 0) {
        console.log(`type:${this.type},url:${this.url}`);
        let data = await serviceApi.post("/banner/setImg", {
          imgurl: this.url,
          type: this.type,
          
        });
        if (data.data.status == 200 && data.data.data == "添加成功") {
          this.$message.success("操作成功");
          this.url=''
          
        }
      } else {
        this.$message.error("图片类型和图片路径不能为空!");
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.img_url {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>