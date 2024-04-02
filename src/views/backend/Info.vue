<template>
  <div class="body-sty">
    <div style="display: flex; flex-wrap: wrap">
      <img
        :src="user.avatar"
        alt=""
        style="width: 10vw; margin: 10px 27.5vw; border-radius: 360px"
      />
      <a-input
        v-model:value="user.avatar"
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
        <a-button class="button-sty" @click="showModal" type="text"
          >保存修改</a-button
        >
        <a-modal v-model:open="open" @ok="changeInfo">
          是否提交对个人信息的修改？
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" @click="changeInfo"
              >确认</a-button
            >
          </template>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/api/user";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      visible: false,
      open: false,
      user: {
        nickname: null,
        email: null,
        account: null,
        password: null,
        introduction: " ",
        avatar: null,
      },
    };
  },
  methods: {
    changeInfo() {
      axios.postEditInfo(this.user).then((res) => {
        if (res.status == 201) {
          message.error("jwt无效，请重新登录");
          setTimeout(function () {
            window.location.href = "/login";
          }, 3000);
        } else {
          message.success(res.data.message);
        }
      });
      this.open = false;
      
    },
    handleCancel() {
      this.open = false;
    },
    showModal() {
      this.open = true;
    },
  },
  mounted() {
    axios.getUserInfo().then((res) => {
      if (res.status == 201) {
        message.error("jwt无效，请重新登录");
        setTimeout(function () {
          window.location.href = "/login";
        }, 2000);
      } else {
        this.user = res.data.data;
        const newToken = res.headers.get("new-token");
        if (newToken != null) {
          // 将 new-token 存储在本地，用于后续的请求
          localStorage.setItem("token", newToken);
        }
      }
    });
  },
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

.button-sty:hover {
  background-color: blueviolet;
  color: white;
}
</style>
