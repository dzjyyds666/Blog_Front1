<template>
  <div class="body-sty">
    <div style="display: flex; flex-wrap: wrap">
      <img
        :src="user.avatarUrl"
        alt=""
        style="width: 10vw; margin: 10px 27.5vw; border-radius: 360px"
      />
      <a-input
        v-model:value="user.avatarUrl"
        addon-before="头像"
        style="width: 60vw; margin: 10px 0"
      />
      <a-input
        v-model:value="user.nickname"
        addon-before="昵称"
        style="width: 22vw; margin: 10px 0"
      />
      <a-input
        v-model:value="user.email"
        addon-before="邮箱"
        style="width: 25vw; margin: 10px"
      />
      <a-input
        v-model:value="user.account"
        addon-before="账号"
        style="width: 22vw; margin: 10px 0"
      />
      <a-input-password
        v-model:value="user.password"
        v-model:visible="visible"
        placeholder="input password"
        style="width: 25vw; margin: 10px"
        addon-before="密码"
      />
      <a-button @click="visible = !visible" style="margin: 10px">{{
        visible ? "Hide" : "Show"
      }}</a-button>
      <v-md-editor v-model="user.introduction"></v-md-editor>

      <div>
        <a-button class="button-sty" @click="showModal" type="text">保存修改</a-button>
        <a-modal v-model:open="open" @ok="changeInfo">
          是否提交对个人信息的修改？
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      open:false,
      user: {
        nickname: "Aaron",
        email: "2529619036@qq.com",
        account: "Aaroncool",
        password: "1433223",
        introduction: "Hello,Aaron! welcome",
        avatarUrl:
          "https://picx.zhimg.com/80/v2-c53bcf320c86d4eeb0ae59f82b926359_1440w.webp?source=1def8aca",
      },
    };
  },
  methods:{
    changeInfo(){
        console.log("提交成功")
        this.open = false
    },
    showModal(){
        this.open = true
    }
  }
};
</script>

<style scoped>
.body-sty {
  margin: 7vh auto;
  background-color: white;
  height: 80vh;
  width: 75vw;
  border-radius: 20px;
  padding: 5vh 5vw;
}

.button-sty {
  background-color: blue;
  color: white;
  margin: 5vh 27.5vw;
  width: 10vw;
}

.button-sty:hover{
    background-color: blueviolet;
    color: white;
}
</style>
