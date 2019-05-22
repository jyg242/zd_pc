<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="原始密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'oldpwd',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item label="新密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'newpwd',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item label="确认新密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'newpwd_a',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import serviceApi from "../../../api/axios";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          let {
            status,
            data: { data }
          } = await serviceApi.post("/user/change_password", {
            values
          });
          if (status == 200 && data) {
            this.$message.info(data);
          }
        }
      });
    }
  }
};
</script>