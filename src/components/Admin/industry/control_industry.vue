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
            <a @click="() => edit(record.key)">编辑</a>
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
    title: "产业名称",
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
      title: "请选择",
      type: "",
      arr: [
        { type: 0, name: "全部" },
        { type: 1, name: "公司新闻" },
        { type: 2, name: "行业新闻" },
        { type: 3, name: "公司公告" }
      ],
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
    this.$router.push({name:'industry_edit',params:{key}})
    },
    //修改新闻
    async save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (
        (target.name == 1 || target.name == 2 || target.name == 3) &&
        target.address.length > 0
      ) {
        let data = await serviceApi.post("/news/updateNews", {
          title: target.address,
          type: target.name,
          id: target.key,
          auth: target.auth
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
    //执行删除数据库删除
    async onDelete1(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      let id = target.key;
      let data = await serviceApi.post("/industry/removeIndustry", {
        id
      });
      if (data.data.status == 200 && data.data.data == "删除成功") {
        this.getimg();
        this.$message.success("删除成功");
      }
    },
    //删除新闻列表删除
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
    //回显新闻数据
    async getimg() {
      let data1 = await serviceApi.get("/industry/getIndustry");
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
