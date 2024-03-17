<template>
  <div>
    <div style="margin: 250px 0">
      <h1 style="color: white; text-align: center; font-weight: 900; height: 96px">
        留言板
        <br />
        <span style="font-size: small"> 
          更新时间：2024-1-27
          <a-divider type="vertical"/>
          100条留言
        </span>
      </h1>
    </div>

    <!-- 主体 -->
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
      <div style="background-color: rgba(255, 255, 255, 0.8); margin: 20px auto; width: 80%; padding: 10px" class="div-border-sty">
        marksown编辑器
        <div style="width: 90%; margin: auto">
          <a-divider style="height: 2px; margin: 20px" />
        </div>
        <!-- 留言板  -->
        <div style="width: 70%; margin: auto">
          <!-- 评论表单 -->
          <a-form :model="CommentForm" layout="inline" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item name="name" :rules="[{ required: true, message: '请输入你的你的昵称!' }]">
              <a-input v-model:value="CommentForm.name" style="width: 25vw;margin-bottom: 1vh;" placeholder="必填">
                <template #addonBefore> 昵称 </template>
              </a-input>
            </a-form-item>

            <a-form-item name="email" :rules="[{ required: true, message: '请输入你的你的邮箱!' }]" >
              <a-input v-model:value="CommentForm.email" style="width: 26vw;margin-bottom: 1vh;" placeholder="必填">
                <template #addonBefore> 邮箱 </template>
              </a-input>
            </a-form-item>
            <a-form-item name="avatar">
              <a-input v-model:value="CommentForm.avatar" style="width: 45vw" placeholder="选填，默认为蜡笔小新">
                <template #addonBefore> 自定义头像 </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">发送</a-button>
            </a-form-item>

            <a-form-item name="comment" :rules="[{ required: true, message: '请输入你的你的邮箱!' }]">
              <a-textarea placeholder="请输入留言内容" v-model:value="CommentForm.comment" show-count :maxlength="300" :auto-size="{ minRows: 3, maxRows: 5 }" style="margin: 5px 0; width: 52vw" />
            </a-form-item>
          </a-form>
          <a-divider></a-divider>

          <a-comment>
            <template #author>
              {{ Comment.name }}
            </template>
            <template #avatar>
              <a-avatar :src="Comment.avatar" :alt="Comment.name" />
            </template>
            <template #content>
              <p>
                {{ Comment.content }}
              </p>
            </template>
            <template #datetime>
              {{ relativeTime }}
              <span v-if="Comment.isTop == true" style="margin-left: 10px;">
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
export default {
  data() {
    return {
      CommentForm: {
        name: "",
        email: "",
        comment: "",
        avatar: "",
      },
      Comment: {
        name: "junber",
        avatar: "https://q0.itc.cn/q_70/images03/20240126/900a2d3d3ffa4e5d8726d254f47664ab.jpeg",
        content:
          "那个曾住在心里，视若珍宝的人，弄丢了就再也回不来了。分开的那一刻 可能你还不会觉得有多悲伤，真正让你难过的，是有一天你又去到那家餐厅，吃到那道菜，但对面的位置却已经空了的时候。你会突然惊醒，再问自己一句，当初那么爱的人，怎么舍得让他走呢？情绪低落时能有人安慰鼓励 难过时能有人逗自己开心真的好好呀，当我给你发了一大堆肺腑之言，你却只回我一个表情包的时候， 我就知道我的热情给错了人。",
        createTime: "2024-01-27T13:42:32+08:00",
        
        isTop: true,
      },
      relativeTime: "",
    };
  },
  components: {},
  methods: {
    onFinish() {
      console.log(this.CommentForm);
    },
    onFinishFailed() {},
  },
  mounted() {
    // this.relativeTime = this.$moment(this.Comment.createTime).format('YYYY-MM-DD HH:mm') 绝对时间
    this.relativeTime = this.$moment(this.Comment.createTime).fromNow();
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
