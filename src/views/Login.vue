<template>
  <div class="login_con">
    <img
      class="log"
      src="http://119.3.17.107/seeyon/fileUpload.do?method=showRTE&type=image&fileId=-7585268485041271763"
      alt
    >
    <div class="login_in">
      <div class="pic_box">Admin</div>
      <div class="components-input-demo-presuffix input_pos">
        <a-input placeholder="请输入用户名" v-model="userName" ref="userNameInput" @pressEnter="css">
          <a-icon slot="prefix" type="user"/>
          <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty_user"/>
        </a-input>
        <a-input
          placeholder="请输入密码"
          v-model="userPwd"
          ref="userPwdInput"
          type="password"
          @pressEnter="css"
        >
          <a-icon slot="prefix" type="lock"/>
          <a-icon v-if="userPwd" slot="suffix" type="close-circle" @click="emitEmpty_pwd"/>
        </a-input>
        <div class="captcha">
          <a-input
            type="text"
            placeholder="图形验证码"
            autocomplete="off"
            style="height:40px;width:50%"
            @pressEnter="css"
            v-model="capchea"
          ></a-input>
          <img :src="capsrc" alt @click="getcapsrc">
        </div>
      </div>
      <div class="login_btn">
        <a-button type="primary" size="large" @click="submit">登录</a-button>
      </div>
      <div class="forget">
        <a href="javascrpit:void(0)">
          <span style="color:white" @click="warning">找回密码?</span>
        </a>
      </div>
    </div>
    <img
      class="bg_img"
      width="100%"
      src="http://119.3.17.107/seeyon/fileUpload.do?method=showRTE&type=image&fileId=-3221302711525227059"
      alt
    >
  </div>
</template>

<script>
import serviceApi from "../api/axios";
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      capsrc: "http://localhost:3000/user/captcha",
      capchea: ""
    };
  },
  mounted() {
    this.get_info();
  },
  methods: {
    getcapsrc() {
      this.capsrc = "http://localhost:3000/user/captcha?r=" + Date.now();
    },
    async get_info() {},
    emitEmpty_user() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    emitEmpty_pwd() {
      this.$refs.userPwdInput.focus();
      this.userPwd = "";
    },
    css() {
      this.submit();
    },
    warning() {
      this.$warning({
        title: "自助找回功能暂未开放!",
        content: "请联系管理员找回密码!"
      });
    },
    async submit() {
      let userName = this.userName;
      let passWord = this.userPwd;
      let capchea = this.capchea;
      let {
        status,
        data: { data, msg }
      } = await serviceApi.post(`/user/login`, {
        userName,
        passWord,
        capchea
      });
      console.log(status);
      if (status == 200 && data && msg == "登陆成功") {
        localStorage.setItem("jygToken", data);
        this.$router.push({
          path: this.$route.query.redirect || "/admin"
        });
      } else {
        this.$message.error("账号或密码错误或验证码错误");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login_con {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .bg_img {
    height: 100%;
  }
  .log {
    position: absolute;
    top: 7%;
    left: 4%;
    z-index: 100;
  }
  .login_in {
    width: 380px;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    .pic_box {
      width: 96px;
      height: 96px;
      background: rgb(200, 118, 116);
      border-radius: 50%;
      position: absolute;
      z-index: 2;
      left: 142px;
      top: 147px;
      overflow: hidden;
      font-size: 28px;
      color: white;
      line-height: 96px;
      text-align: center;
      font-weight: 900;
    }
    .login_btn {
      text-align: center;
      margin-top: 480px;
    }
    .forget {
      margin-top: 30px;
      margin-left: 56px;
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
}
.components-input-demo-presuffix .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.components-input-demo-presuffix .anticon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .anticon-close-circle:active {
  color: #666;
}
.input_pos {
  position: absolute;
  width: 268px;
  top: 300px;
  left: 55px;
  .captcha {
    img {
      position: absolute;
      width: 125px;
      height: 40px;
      border-radius: 5px;
      left: 141px;
    }
  }
}
.ant-input-affix-wrapper {
  height: 48px;
  margin-bottom: 12px;
}
.ant-btn-lg {
  width: 268px;
  height: 48px;
  border-radius: 30px;
}
</style>