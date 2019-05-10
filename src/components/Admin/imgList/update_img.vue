<template>
  <div style="padding:20px;">
    <!-- <a-button
      class="editable-add-btn"
      type="primary"
      @click="handleAdd"
      style="margin-bottom: 10px;"
    >增加</a-button> -->
    <p style="color:red">* 注意: 类型1-代表轮播图, 类型2-代表每页页眉图片, 类型3-代表logo图片, 图片路径不能为空 .</p>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template
        v-for="col in ['name', 'age', 'address']"
        :slot="col"
        slot-scope="text, record, index"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">保存</a>
            <a-popconfirm title="确定取消?" @confirm="() => cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="() => edit(record.key)">编辑</a>
            <a @click="() => onDelete(record.key)">删除</a>
            <!-- <a @click="() => handleAdd(record.key)">增加</a> -->
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import compare from "../.././../util/sort_ab.js";
import serviceApi from "../../../api/axios.js";
const columns = [
  {
    title: "图片类型",
    dataIndex: "name",
    width: "15%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "图片路径",
    dataIndex: "address",
    width: "65%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "20%",

    scopedSlots: { customRender: "operation" }
  }
];
const data = [];
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    //保存并上传服务器
    async save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (
        (target.name == 1 || target.name == 2 || target.name == 3) &&
        target.address.length > 0
      ) {
        let data = await serviceApi.post("/banner/updateImg", {
          imgurl: target.address,
          type: target.name,
          id: target.key
        });
        if (data.data.status == 200 && data.data.data == "修改成功") {
          this.getimg();
          this.$message.success("操作成功");
        }
      } else {
        this.$error({
          title: "操作失败",
          content: "格式错误!请按格式要求重新输入!"
        });
      }
    },
    // 增加添加行
    // handleAdd(key) {
    //   let key1 = key - 0 + 1;
    //   const newData = [...this.data];
    //   let count = newData.length;
    //   const addData = {
    //     key: count,
    //     name: ``,
    //     address: ``
    //   };
    //   newData.splice(key1, 0, addData);
    //   this.data = newData;
    // },
    //删除
    onDelete(key1) {
      let _this = this;
      let key = key1;
      _this.$confirm({
        title: "确定要删除吗?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          _this.onDelete1(key);
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    //执行删除
    async onDelete1(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      let id = target.key;
      let data = await serviceApi.post("/banner/removeImg", {
        id
      });
      if (data.data.status == 200 && data.data.data == "删除成功") {
        this.getimg();
        this.$message.success("删除成功");
      }
    },
    //取消
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
    //回显图片数据
    async getimg() {
      let data1 = await serviceApi.get("/banner/getImg");
      let data2 = JSON.stringify(data1);
      let data = JSON.parse(data2);
      let res = data.data.data;
      //   console.log(data.data.data);
      let data44 = res.map(item => {
        return {
          key: item._id,
          // address: item.IMGURL,
          address:
            item.IMGURL.length > 70
              ? item.IMGURL.substr(0, 70) + "..."
              : item.IMGURL,
          name: item.TYPE
        };
      });
      this.data = data44.sort(compare("name"));
    }
  },
  async mounted() {
    this.getimg();
  }
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
