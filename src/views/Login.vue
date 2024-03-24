<template>
  <div class="background-sty">
    <div class="login-sty">

        <div style="font-size: 50px;font-weight: 700;font-family: 'alimamafangyuanti'">请登录</div>
      <a-form
        :model="User"
        name="basic"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="account"
          :rules="[{ required: true, message: '请输入你的帐号!' }]"
          style="margin-top: 5vh"
        >
          <a-input
            v-model:value="User.account"
            style="width: 25vw"
            addon-before="账号"
          />
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入你的密码!' }]"
        >
          <a-input-password
            v-model:value="User.password"
            style="width: 25vw"
            addon-before="密码"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="text" html-type="submit" class="button-sty">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: {
        account: null,
        password: null,
      },
    };
  },
  methods: {
    onFinish() {
      console.log(this.User);
    },
    onFinishFailed() {},
  },
};
</script>

<style scoped>
.background-sty {
  background: url(../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: relative;
}

.login-sty {
  position: absolute;
  top: 25vh;
  left: 30vw;
  width: 40vw;
  height: 50vh;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 2vh 2vw;
  text-align: center;
}

.button-sty {
  background-color: blue;
  color: white;
  margin: 20px auto;
  width: 5vw;
}

.button-sty:hover {
  background-color: blueviolet;
  color: white;
}
</style>
