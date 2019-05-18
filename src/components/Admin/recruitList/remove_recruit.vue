<template>
  <div style="padding:10px;">
    <a-table :columns="columns" :dataSource="data" bordered>
      <template
        v-for="col in ['name', 'age', 'address','auth','data']"
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
            <a @click="() => onDelete(record.key)">删除</a>
            <!-- <a>内容修改</a> -->
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
    title: "招聘标题",
    dataIndex: "address",
    width: "40%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "15%",
    scopedSlots: { customRender: "operation" }
  }
];
const data = [];
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      size: "default",
      type: "",
      data,
      columns
    };
  },
  methods: {
    //选择类型变化
    handleChange_type(value) {
      //   console.log(`Selected: ${value}`);
      this.type = value;
      this.getimg();
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      this.$router.push({ name: "duty_edit", params: { key } });
    },
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
          //   console.log("Cancel");
        }
      });
    },
    //执行数据库删除
    async onDelete1(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      let id = target.key;
      let data = await serviceApi.post("/recruit/removeRecruit", {
        id
      });
      if (data.data.status == 200 && data.data.data == "删除成功") {
        this.getimg();
        this.$message.success("删除成功");
      }
    },
    //删除列表删除
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
    //回显公益列表
    async getimg() {
      let data1 = await serviceApi.get("/recruit/getRecruit");
      let data2 = JSON.stringify(data1);
      let data = JSON.parse(data2);
      let res = data.data.data;
      //   console.log(data.data.data);
      let data44 = res.map(item => {
        return {
          key: item._id,
          address:
            item.title.length > 70
              ? item.title.substr(0, 70) + "..."
              : item.title
        };
      });
      this.data = data44.reverse().sort(compare("name"));
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
