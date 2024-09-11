<template>
  <div>
    <div style="margin: 250px 0">
      <h1
        style="color: white; text-align: center; font-weight: 900; height: 96px"
      >
        留言板
        <br />
        <span style="font-size: small">
          更新时间：{{ newTime[0] }}-{{ newTime[1] }}-{{ newTime[2] }}
          <a-divider type="vertical" />
          共{{ Comment.length }}条留言
        </span>
      </h1>
    </div>

    <!-- 主体 -->
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
      <div
        style="
          background-color: rgba(255, 255, 255, 0.8);
          margin: 20px auto;
          width: 80%;
          padding: 10px;
        "
        class="div-border-sty"
      >
        <!-- <v-md-preview :text="Messgae"></v-md-preview> -->
        <MdPreview v-model="Messgae"></MdPreview>
        <div style="width: 90%; margin: auto">
          <a-divider style="height: 2px" />
        </div>
        <!-- 留言板  -->
        <div style="width: 70%; margin: auto">
          <!-- 评论表单 -->
          <a-form
            :model="CommentForm"
            layout="inline"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <!-- :rules="[{ required: true, message: '请输入你的你的昵称!' }]" -->
            <a-form-item
              name="nickname"
              :rules="[{ required: true, message: '请输入你的你的昵称!' }]"
            >
              <a-input
                v-model:value="CommentForm.nickname"
                style="width: 25vw; margin-bottom: 1vh"
                placeholder="必填"
              >
                <template #addonBefore> 昵称 </template>
              </a-input>
            </a-form-item>

            <!-- :rules="[{ required: true, message: '请输入你的你的邮箱!' }]" -->
            <a-form-item
              name="email"
              :rules="[{ required: true, message: '请输入你的你的邮箱!' }]"
            >
              <a-input
                v-model:value="CommentForm.email"
                style="width: 25.5vw; margin-bottom: 1vh"
                placeholder="必填"
              >
                <template #addonBefore> 邮箱 </template>
              </a-input>
            </a-form-item>
            <a-form-item name="avatar">
              <a-input
                v-model:value="CommentForm.avatar"
                style="width: 45vw"
                placeholder="选填，默认为蜡笔小新"
              >
                <template #addonBefore> 自定义头像 </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">发送</a-button>
            </a-form-item>

            <!-- :rules="[{ required: true, message: '请输入你的你的邮箱!' }]" -->
            <a-form-item
              name="commentsContent"
              :rules="[{ required: true, message: '请输入你的你的邮箱!' }]"
            >
              <a-textarea
                placeholder="请输入留言内容"
                v-model:value="CommentForm.commentsContent"
                show-count
                :maxlength="300"
                :auto-size="{ minRows: 3, maxRows: 5 }"
                style="margin: 5px 0; width: 52vw"
              />
            </a-form-item>
          </a-form>
          <a-divider></a-divider>

          <a-comment v-for="item in Comment" :key="item.id">
            <template #author>
              {{ item.nickname }}
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" :alt="Comment.name" />
            </template>
            <template #content>
              <p>
                {{ item.commentsContent }}
              </p>
            </template>
            <template #datetime>
              {{ this.$moment(item.createTime).fromNow() }}
              <span v-if="item.isTop == true" style="margin-left: 10px">
                <a-tag color="cyan">置顶</a-tag>
              </span>
            </template>
          </a-comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import axios1 from "../../api/message";
import axios from "../../api/setting";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
export default {
  data() {
    return {
      CommentForm: {
        nickname: null,
        email: null,
        commentsContent: null,
        avatar: null,
      },
      Comment: [],
      Messgae: "",
      newTime: [],
      counter: 0,
    };
  },
  components: {
    MdPreview
  },
  methods: {
    onFinish() {
      axios1.postAddMessage(this.CommentForm).then((res) => {
        console.log(res.data);
        if (res.data.code == 201) {
          message.error(res.data.message);
        } else {
          message.success(res.data.message);
          this.CommentForm.nickname = null;
          this.CommentForm.email = null;
          this.CommentForm.commentsContent = null;
          this.CommentForm.avatar = null;

          axios1.getMessage().then((res) => {
            this.Comment = res.data.data;
          });
        }
      });
    },
    onFinishFailed() {},
  },
  mounted() {
    // this.relativeTime = this.$moment(this.Comment.createTime).format('YYYY-MM-DD HH:mm') 绝对时间
    axios.getContent("留言板").then((res) => {
      this.Messgae = res.data.data;
    });
    axios1.getMessage().then((res) => {
      this.Comment = res.data.data;
    });
    axios1.getNewTime().then((res) => {
      this.newTime = res.data.data;
    });
  },
};
</script>

<style scoped>
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}
</style>
