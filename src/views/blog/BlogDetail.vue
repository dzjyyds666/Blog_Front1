<template>
  <!-- class="background-img" -->
  <div
    class="background-img"
    :style="{ 'background-image': 'url(' + blog.firstImg + ')' }"
    style="position: relative"
  >
    <div
      style="
        display: flex;
        height: 40px;
        position: sticky;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
      "
    >
      <!--  导航条固定在顶部 -->
      <div
        style="width: 55vw; line-height: 1; display: flex; align-items: center"
      >
        <router-link to="/blog">
          <h2 style="margin: 6px 0 6px 20px; color: white; font-weight: 900">
            DuZJ的小站
          </h2>
        </router-link>
      </div>

      <div style="height: 5vh; line-height: 5vh">
        <span class="header-sty">
          <router-link to="/blog" class="a-sty">
            <img src="../../assets/img/主页-2.svg" alt="" style="width: 20px" />
            首页
          </router-link>
        </span>
        <span class="header-sty">
          <router-link to="/blog/search" class="a-sty">
            <img src="../../assets/img/搜索.svg" alt="" style="width: 20px" />
            搜索
          </router-link>
        </span>
        <span class="header-sty">
          <router-link to="/blog/message" class="a-sty">
            <img src="../../assets/img/留言板.svg" alt="" style="width: 20px" />
            留言板
          </router-link>
        </span>
        <span class="header-sty">
          <a-dropdown arrow placement="bottom">
            <router-link to="#" class="a-sty">
              <img src="../../assets/img/整理.svg" alt="" style="width: 20px" />
              往期整理
              <span class="sp" style="margin-left: 3px">
                <img
                  src="../../assets/img/右箭头.svg"
                  alt=""
                  style="width: 20px"
                />
              </span>
            </router-link>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/blog/archive">
                    <span style="font-size: larger">
                      <img
                        src="../../assets/img/车辆归档.svg"
                        alt=""
                        style="width: 20px"
                      />
                      历史归档
                    </span>
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/blog/type">
                    <span style="font-size: larger">
                      <img
                        src="../../assets/img/分类.svg"
                        alt=""
                        style="width: 20px"
                      />
                      文章分类
                    </span>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
        <span class="header-sty">
          <router-link to="/amsystem/info" class="a-sty">
            <img src="../../assets/img/实验室.svg" alt="" style="width: 20px" />
            实验室
          </router-link>
        </span>
      </div>
    </div>

    <!-- body -->
    <div>
      <!-- 标题 -->
      <div style="background-color: rgba(0, 0, 0, 0.5)">
        <div
          style="
            height: 400px;
            display: flex;
            align-items: center;
            text-align: center;
          "
        >
          <h1 style="color: white; margin: 0 auto">
            {{ blog.title }}
            <br />
            <a-tag color="purple" size="large">
              <template #icon>
                <img
                  src="../../assets/img/标签牌.svg"
                  alt=""
                  style="width: 14px"
                />
              </template>
              {{ blog.tag }}
            </a-tag>
            <br />
            <span style="font-size: small">
              发布于：{{ this.$moment(blog.createTime).format("YYYY-MM-DD") }}
            </span>
            <span style="font-size: small; margin-left: 10px">
              最后更新时间：{{
                this.$moment(blog.updateTime).format("YYYY-MM-DD")
              }}
            </span>
            <br />
            <span v-for="type in blog.typeList" :key="type.id">
              <router-link
                :to="`/blog/tydetail/${type.typeId}`"
                class="type-a-sty"
              >
                <img
                  src="../../assets/img/1社区管理.svg"
                  alt=""
                  style="width: 18px"
                />
                {{ type.typeName }}
              </router-link>
            </span>
          </h1>
        </div>
      </div>

      <div style="background-color: white; padding: 20px">
        <div style="margin: 20px auto; width: 90%">
          <a-row>
            <a-col :span="16" style="padding: 10px">
              <div class="div-border-sty" style="padding: 10px">
                <!-- //TODO:markdown编辑器 -->
                <!-- <v-md-preview :text="blog.content"></v-md-preview> -->
                <!-- <v-md-preview-html :html="htmlcontent" preview-class="vuepress-markdown-body"></v-md-preview-html> -->
                <MdPreview :editorId="id" :modelValue="blog.content" />
              </div>
            </a-col>
            <a-col :span="8" style="padding: 10px">
              <div
                class="div-border-sty"
                style="margin-bottom: 20px; padding: 10px"
              >
                <a-form
                  :model="CommentForm"
                  layout="inline"
                  autocomplete="off"
                  @finish="onFinish"
                  @finishFailed="onFinishFailed"
                >
                  <a-form-item
                    name="nickname"
                    :rules="[
                      { required: true, message: '请输入你的你的昵称!' },
                    ]"
                  >
                    <a-input
                      v-model:value="CommentForm.nickname"
                      style="width: 26vw; margin-bottom: 1vh"
                      placeholder="必填"
                    >
                      <template #addonBefore> 昵称 </template>
                    </a-input>
                  </a-form-item>

                  <a-form-item
                    name="email"
                    :rules="[
                      { required: true, message: '请输入你的你的邮箱!' },
                    ]"
                  >
                    <a-input
                      v-model:value="CommentForm.email"
                      style="width: 26vw"
                      placeholder="必填"
                    >
                      <template #addonBefore> 邮箱 </template>
                    </a-input>
                  </a-form-item>
                  <a-form-item name="avatar">
                    <a-input
                      v-model:value="CommentForm.avatar"
                      style="width: 19vw; margin-top: 1vh"
                      placeholder="选填，默认为蜡笔小新"
                    >
                      <template #addonBefore> 自定义头像 </template>
                    </a-input>
                  </a-form-item>
                  <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button
                      type="primary"
                      html-type="submit"
                      style="margin-top: 10px"
                      >发送</a-button
                    >
                  </a-form-item>

                  <a-form-item
                    name="commentsContent"
                    :rules="[
                      { required: true, message: '请输入你的你的邮箱!' },
                    ]"
                  >
                    <a-textarea
                      placeholder="请输入评论内容"
                      v-model:value="CommentForm.commentsContent"
                      show-count
                      :maxlength="300"
                      :auto-size="{ minRows: 3, maxRows: 5 }"
                      style="margin: 5px 0; width: 26vw"
                    />
                  </a-form-item>
                </a-form>
              </div>

              <div class="div-border-sty" style="padding: 10px">
                <div style="font-size: larger">{{ blog.commentNum }}条评论</div>
                <div
                  style="overflow-y: scroll; max-height: 1080px; padding: 10px"
                >
                  <div v-for="Comment in Comments">
                    <a-comment>
                      <template #author>
                        {{ Comment.nickname }}
                      </template>
                      <template #avatar>
                        <a-avatar :src="Comment.avatar" :alt="Comment.name" />
                      </template>
                      <template #content>
                        <p>
                          {{ Comment.commentsContent }}
                        </p>
                      </template>
                      <template #datetime>
                        {{ this.$moment(Comment.createTime).fromNow() }}
                        <span
                          v-if="Comment.isTop == 1"
                          style="margin-left: 10px"
                        >
                          <a-tag color="cyan">置顶</a-tag>
                        </span>
                      </template>
                    </a-comment>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer-center-sty">
      <h5>
        <img src="../../assets/img/运营中心.svg" alt="" style="width: 20px" />
        2023-2024
        <a-divider type="vertical" style="margin: 2px; width: 2px" />
        <a href="/blog" class="footer-a-sty">
          <img src="../../assets/img/喜爱.svg" alt="" style="width: 14px" />
          DuZJStu
        </a>
      </h5>
      <div>
        <h5>
          <img
            src="../../assets/img/浏览量.svg"
            alt=""
            style="width: 20px"
          />1143
        </h5>
      </div>
      <div style="width: 400px; margin: 0 auto">
        <a-divider style="margin: 10px; height: 2px" />
      </div>
      <h5>
        DuZJ的小站
        <a-divider type="vertical" style="margin: 2px; width: 2px" />
        软件工程学生，乐于探索新技术，喜欢游戏，摄影。
      </h5>
      <h5>Power By Vue3 And SpringBoot</h5>
    </div>
    <!-- 悬浮按钮 -->
    <!-- <a-popover placement="left">
      <template #content>
        <MdCatalog :editorId="id" :scrollElement="scrollElement" />
      </template>
      <a-float-button />
    </a-popover> -->

    <a-float-button-group shape="square" style="bottom: 20vh;">
      <a-popover placement="left" >
        <template #content>
          <MdCatalog :editorId="id" :scrollElement="scrollElement" style="max-height:30vh;overflow-y: scroll;"/>
        </template>
        <a-float-button />
      </a-popover>

      <a-back-top :visibility-height="0" />
    </a-float-button-group>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import axios from "../../api/blog";
import axios_c from "../../api/comment";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
export default {
  data() {
    return {
      Comments: [],
      CommentForm: {
        nickname: null,
        email: null,
        commentsContent: null,
        avatar: null,
        blogId: null,
      },
      blog: {
        id: null,
        title: null,
        tag: null,
        commentNum: null,
        content: "",
        typeList: [],
        firstImg: null,
        createTime: null,
        updateTime: null,
      },
      htmlcontent: "",
      titles: [],
      id: "preview-only",
      scrollElement: document.documentElement,
    };
  },
  components: {
    MdPreview,
    MdCatalog,
  },
  methods: {
    onFinish() {
      this.CommentForm.blogId = this.$route.params.id;
      axios_c.postAddComment(this.CommentForm).then((res) => {
        if (res.data.code == 200) {
          message.success(res.data.message);
          return axios_c.getComment(this.$route.params.id).then((res) => {
            this.Comments = res.data.data;
            this.blog.commentNum++;
          });
        } else {
          message.warn(res.data.message);
        }
      });
      this.CommentForm.nickname = null;
      this.CommentForm.email = null;
      this.CommentForm.avatar = null;
      this.CommentForm.commentsContent = null;
    },
    onFinishFailed() {},
  },
  mounted() {
    // 修改评论时间 该为相对时间
    this.Comments.forEach((element) => {
      element.createTime = this.$moment(element.createTime).fromNow();
    });
    axios.getBlogDetail(this.$route.params.id).then((res) => {
      this.blog = res.data.data;
      // this.htmlcontent = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(this.blog.content));
      // console.log(this.htmlcontent)
      console.log(res.data);
    });
    axios_c.getComment(this.$route.params.id).then((res) => {
      this.Comments = res.data.data;
    });
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped>
.nav-sty {
  display: flex;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}
.background-img {
  background-size: 100% 100%;
  background-attachment: fixed;
}

.header-sty {
  margin: 6px 20px;
}

.h3:hover {
  border-bottom: solid;
}

/* 标题箭头旋转 */
.sp {
  display: inline-block;
  transition: transform 0.2s;
  -moz-transition: -moz-transform 0.2s; /* Firefox 4 */
  -webkit-transition: -webkit-transform 0.2s; /* Safari 和 Chrome */
  -o-transition: -o-transform 0.2s;
}
.h3:hover .sp {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

.a-sty {
  color: white;
  /* background-color: white; */
  text-decoration: none;
}

.a-sty:hover {
  color: #00bfff;
}

.a-sty:active {
  color: #00bfff;
}

h3 img {
  margin-right: 3px;
}

.footer-center-sty {
  /* display: flex; */
  text-align: center;
  justify-content: center;
  background-color: #e5e5e5;
  padding: 50px;
}

.footer-a-sty {
  color: black;
  font-weight: 700;
}
.footer-a-sty:hover {
  color: blueviolet;
}
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}
.type-a-sty {
  color: white;
  font-size: medium;
  text-decoration: none;
  margin: 5px;
}
.type-a-sty:hover {
  color: #00bfff;
  text-decoration: underline;
}
</style>
