<template>
  <div style="padding:20px;">
    <div class="add_admin">
      <h3>新增管理员</h3>
      <span style="margin-right:20px;">管理账号:</span>
      <a-input style="margin-right:40px;" v-model="userName"/>
      <span style="margin-right:20px;">初始密码:</span>
      <a-input style="margin-right:40px;" v-model="passWord"/>
      <span style="margin-right:20px;">权限级别:</span>
      <a-select defaultValue="请选择" style="width: 120px" @change="handleLevel">
        <a-select-option value="1">一级权限</a-select-option>
        <a-select-option value="2">二级权限</a-select-option>
        <a-select-option value="3">三级权限</a-select-option>
        <a-select-option value="4">四级权限</a-select-option>
      </a-select>

      <a-button style="margin-left:30px;" @click="register">增加</a-button>
    </div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template
        v-for="col in ['name', 'age', 'time','address']"
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
    title: "管理员账号",
    dataIndex: "name",
    width: "30%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "权限级别",
    dataIndex: "address",
    width: "10%",
    scopedSlots: { customRender: "address" }
  },
  {
    title: "最近登录时间",
    dataIndex: "time",
    width: "40%",
    scopedSlots: { customRender: "time" }
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
      columns,
      userName:'',//账号
      passWord:'',//密码
      level:''//权限等级
    };
  },
  methods: {
    //新增管理员
    async register() {
        let {status,data:{data}}=await serviceApi.post('/user/register',{
            userName:this.userName,
            passWord:this.passWord,
            level:this.level
        })
        console.log(data)
    },
    handleLevel(value){
        this.level=value
    },
    handleChange(value, key, column) {
    //   console.log(value, key, column);
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
      //   this.data = data44.sort(compare("name"));
    }
  },
  async mounted() {
    this.getimg();
  }
};
</script>
<style lang='scss' scoped>
.add_admin {
  margin-bottom: 20px;
  input {
    width: 20%;
  }
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>
