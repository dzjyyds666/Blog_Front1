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
            <div class="div-border-sty photo-center-sty" style="background-color: rgba(255, 255, 255, 0.7)">
              <!-- 头像 -->
              <div>
                <img src="../../assets/img/tx.jpg" alt="站长头像" class="avatar-sty" />
              </div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <!-- 简介 -->
              <div>
                <p style="margin: 15px; font-style: italic">不屈、创造、真相、想象、耐心、专注、自由、惊喜</p>
              </div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <!-- 联系方式 -->
              <div style="padding: 10px">
                <h4>交流讨论可以通过以下方式联系：</h4>
                <a-popover placement="bottom">
                  <template #content>
                    <img src="../../assets/img/qq(1).svg" alt="qq二维码" style="width: 100px" />
                  </template>
                  <img src="../../assets/img/qq(1).svg" alt="qq" style="width: 40px; margin: 0 10px" class="photo-transition-sty" />
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <img src="../../assets/img/wechat.svg" alt="微信二维码" style="width: 100px" />
                  </template>
                  <img src="../../assets/img/wechat.svg" alt="微信" style="width: 40px; margin: 0 10px" class="photo-transition-sty" />
                </a-popover>
              </div>
            </div>

            <!-- 公告 -->
            <div class="div-border-sty" style="margin-top: 20px; background-color: rgba(255, 255, 255, 0.7);">
              <div style="padding: 10px"><img src="../../assets/img/公告.svg" alt="" style="width: 30px" />公告</div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <div style="overflow: scroll;height: 500px;">
                
              </div>
            </div>

            <!-- 最热推荐 -->
            <div class="div-border-sty" style="margin-top: 20px; background-color: rgba(255, 255, 255, 0.7)">
              <div style="padding: 10px"><img src="../../assets/img/热度.svg" alt="" style="width: 30px" />最热推荐</div>
              <div style="width: 90%; margin: auto">
                <a-divider style="height: 2px; margin: 0" />
              </div>
              <div style="padding: 15px">
                <div v-for="item in 10" :key="item" style="height: 80px">
                  <router-link to="#">
                    <div style="display: flex">
                      <img src="../../assets/img/tx.jpg" alt="" style="width: 50px" />
                      <span>个人博客搭建指南,西格玛男人永远不会调入女z第三节阿的快速健康了</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </a-col>

          <a-col :span="17">
            <div v-for="item in 10" :key="item">
              <div class="div-border-sty blog-transition-sty" style="margin-bottom: 20px; display: flex; background-color: rgba(255, 255, 255, 0.7)">
                <img src="../../assets/img/主页-2.svg" alt="" />
                <div>
                  <div style="height: 160px; padding: 15px">
                    <h2 style="height: 34px">
                      title
                      <a-tag :bordered="false" color="success" size="large">
                        <template #icon>
                          <img src="../../assets/img/标签牌.svg" alt="" style="width: 14px" />
                        </template>
                        原创
                      </a-tag>
                    </h2>
                    <p style="text-indent: 2em">
                      一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。
                    </p>
                  </div>
                  <div>
                    <span>
                      <img src="../../assets/img/时间.svg" alt="" style="width: 30px" />
                      <span style="margin-left: 5px; color: #708090">2024-1-16</span>
                    </span>

                    <span style="float: right; padding: 5px 15px">
                      <span v-for="item in 2">
                        <a-tag :bordered="false" color="magenta">
                          <template #icon>
                            <img src="../../assets/img/文件夹.svg" alt="" style="width: 14px" />
                          </template>
                          magenta
                        </a-tag>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="center-sty">
              <el-pagination layout="prev, pager, next" :total="1000" v-model:current-page="current" background @current-change="handleCurrentChange" />
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

export default {
  data() {
    return {
      counter: 0,
      current: 1,
      pageSize: 10,
    };
  },
  components: {
    ElPagination,
  },
  methods: {
    handleCurrentChange() {
      console.log(this.current);
    },
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
</style>
