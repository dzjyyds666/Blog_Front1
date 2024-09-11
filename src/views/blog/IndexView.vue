<template>
  <div>
    <div style="margin: 250px 0">
      <h1 style="color: white; text-align: center">
        <!-- //TODO:添加一个小图标 -->
        DuZJ的小站
        <br />
        软件工程学生，乐于探索新技术，喜欢游戏，摄影。
      </h1>
    </div>
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
      <div style="width: 80%; margin: 20px auto">
        <a-row>
          <a-col :span="6" style="margin-right: 20px">
            <div
              class="div-border-sty photo-center-sty"
              style="background-color: rgba(255, 255, 255, 0.7)"
            >
              <!-- 头像 -->
              <div>
                <img
                  :src="this.user.avatar"
                  alt="站长头像"
                  class="avatar-sty"
                />
              </div>
              <div style="font-size: larger; font-weight: 900; margin: 20px">
                {{ this.user.nickname }}
              </div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <!-- 简介 -->
              <div>
                <p style="margin: 15px; font-style: italic">
                  {{ this.user.introduction }}
                </p>
              </div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <!-- 联系方式 -->
              <div style="padding: 10px">
                <h4>交流讨论可以通过以下方式联系：</h4>
                <a-popover placement="bottom">
                  <template #content>
                    <img
                      src="../../assets/img/qq(1).svg"
                      alt="qq二维码"
                      style="width: 100px"
                      class="photo-transition-sty"
                    />
                  </template>
                  <img
                    src="../../assets/img/qq(1).svg"
                    alt="qq"
                    style="width: 40px; margin: 0 10px"
                    class="photo-transition-sty"
                  />
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <img
                      src="../../assets/img/wechat.svg"
                      alt="微信二维码"
                      style="width: 100px"
                    />
                  </template>
                  <img
                    src="../../assets/img/wechat.svg"
                    alt="微信"
                    style="width: 40px; margin: 0 10px"
                    class="photo-transition-sty"
                  />
                </a-popover>
              </div>
            </div>

            <!-- 公告 -->
            <div
              class="div-border-sty"
              style="
                margin-top: 20px;
                background-color: rgba(255, 255, 255, 0.7);
              "
            >
              <div style="padding: 10px">
                <img
                  src="../../assets/img/公告.svg"
                  alt=""
                  style="width: 30px"
                />公告
              </div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <div
                style="
                  overflow-y: scroll;
                  height: 500px;
                  background-color: rgb(255, 255, 255);
                "
              >
                <MdPreview v-model="notice"></MdPreview>
              </div>
            </div>
          </a-col>

          <a-col :span="17">
            <div v-for="(item, index) in blog" :key="item.id">
              <router-link
                :to="`/blog/detail/${item.id}`"
                class="route-to-blog-sty"
              >
                <div
                  class="div-border-sty blog-transition-sty"
                  style="
                    margin-bottom: 20px;
                    background-color: rgba(255, 255, 255, 0.7);
                  "
                >
                  <div v-if="index % 2 === 0" style="display: flex">
                    <img
                      :src="item.firstImg"
                      alt=""
                      style="
                        max-width: 20vw;
                        width: auto;
                        height: auto;
                        border-radius: 10px;
                      "
                    />
                    <div style="margin-left: 5px">
                      <div style="height: 160px; padding: 15px">
                        <h3 style="height: 34px">
                          {{ item.title }}
                          <a-tag :bordered="false" color="success" size="large">
                            <template #icon>
                              <img
                                src="../../assets/img/标签牌.svg"
                                alt=""
                                style="width: 14px"
                              />
                            </template>
                            {{ item.tag }}
                          </a-tag>
                        </h3>
                        <p style="text-indent: 2em;max-width: 32vw">
                          {{ item.content }}
                        </p>

                      </div>
                      <div>
                        <span>
                          <img
                            src="../../assets/img/时间.svg"
                            alt=""
                            style="width: 30px"
                          />
                          <span style="margin-left: 5px; color: #708090">{{
                            this.$moment(item.createTime).format("YYYY-MM-DD")
                          }}</span>
                        </span>

                        <span style="float: right; padding: 5px 15px">
                          <span v-for="it in item.typeList">
                            <a-tag :bordered="false" color="magenta">
                              <template #icon>
                                <img
                                  src="../../assets/img/文件夹.svg"
                                  alt=""
                                  style="width: 14px"
                                />
                              </template>
                              {{ it.typeName }}
                            </a-tag>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div v-if="index % 2 === 1" style="display: flex">
                    <div style="margin-left: 5px">
                      <div style="height: 160px; padding: 15px">
                        <h3 style="height: 34px">
                          {{ item.title }}
                          <a-tag :bordered="false" color="success" size="large">
                            <template #icon>
                              <img
                                src="../../assets/img/标签牌.svg"
                                alt=""
                                style="width: 14px"
                              />
                            </template>
                            {{ item.tag }}
                          </a-tag>
                        </h3>
                        <p style="text-indent: 2em">
                          {{ item.content }}
                        </p>
                      </div>
                      <div>
                        <span>
                          <img
                            src="../../assets/img/时间.svg"
                            alt=""
                            style="width: 30px"
                          />
                          <span style="margin-left: 5px; color: #708090">{{
                            this.$moment(item.createTime).format("YYYY-MM-DD")
                          }}</span>
                        </span>

                        <span style="float: right; padding: 5px 15px">
                          <span v-for="it in item.typeList">
                            <a-tag :bordered="false" color="magenta">
                              <template #icon>
                                <img
                                  src="../../assets/img/文件夹.svg"
                                  alt=""
                                  style="width: 14px"
                                />
                              </template>
                              {{ it.typeName }}
                            </a-tag>
                          </span>
                        </span>
                      </div>
                    </div>
                    <img
                      :src="item.firstImg"
                      alt=""
                      style="
                        max-width: 20vw;
                        width: auto;
                        height: auto;
                        border-radius: 10px;
                      "
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="center-sty">
              <el-pagination
                layout="prev, pager, next,sizes"
                :total="blogNum"
                :page-sizes="[5, 10, 15, 20]"
                v-model:page-size="pageSize"
                v-model:current-page="current"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { ElPagination } from "element-plus";
import "element-plus/es/components/pagination/style/css";
import axios from "../../api/blog";
import axios1 from "../../api/setting";
import axios2 from "../../api/user";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
export default {
  data() {
    return {
      current: 1,
      pageSize: 5,
      blogNum: null,
      blog: [],
      user: [],
      notice: "",
      name: "公告",
    };
  },
  components: {
    ElPagination,
    MdPreview,
  },
  methods: {
    handleCurrentChange() {
      axios.getBlogInfoPage(this.current, this.pageSize).then((res) => {
        this.blog = res.data.data;
      });
    },
    handleSizeChange() {
      axios.getBlogInfoPage(this.current, this.pageSize).then((res) => {
        this.blog = res.data.data;
      });
    },
  },
  mounted() {
    axios.getBlogInfoPage(this.current, this.pageSize).then((res) => {
      this.blog = res.data.data;
    });
    axios.getBlogNumber().then((res) => {
      this.blogNum = res.data.data;
    });
    axios1.getContent("公告").then((res) => {
      this.notice = res.data.data;
    });
    axios2.getUser().then((res) => {
      this.user = res.data.data;
    });
  },
};
</script>

<style scoped>
.avatar-sty {
  border-radius: 90px;
  width: 100px;
  margin: 20px auto;
}

.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}

.photo-center-sty {
  text-align: center;
}

p {
  word-wrap: break-word;
}

.photo-transition-sty {
  transition: transform 0.3s ease-in-out;
}

.photo-transition-sty:hover {
  transform: scale(1.1);
}

a {
  color: black;
}
a:hover {
  color: blueviolet;
}

/* 元素居中 */
.center-sty {
  display: flex;
  text-align: center;
  justify-content: center;
}
.blog-transition-sty {
  transition: transform 0.3s ease-in-out;
}
.blog-transition-sty:hover {
  transform: scale(1.01);
}
p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.route-to-blog-sty {
  padding: 0;
}
</style>
