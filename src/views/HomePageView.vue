<template>
  <div class="background-img">
    <!-- 头部 -->
    <div style="display: flex; height: 50px; position: sticky; top: 0; background-color: rgba(0, 0, 0, 0.1); z-index: 9999" >
      <!--  导航条固定在顶部 -->
      <div style="width: 55vw;line-height: 1;display: flex;align-items: center;">
        <router-link to="/blog">
          <h2 style="margin: 6px 0 6px 20px; color: white;font-weight: 900;">DuZJ的小站</h2>
        </router-link>
      </div>

      <div style="height: 5vh; line-height: 5vh">
        <span class="header-sty">
          <router-link to="/blog" class="a-sty">
            <img src="../assets/img/主页-2.svg" alt="" style="width: 20px" />
            首页
          </router-link>
        </span>
        <span class="header-sty">
          <router-link to="/blog/search" class="a-sty">
            <img src="../assets/img/搜索.svg" alt="" style="width: 20px" />
            搜索
          </router-link>
        </span>
        <span class="header-sty">
          <router-link to="/blog/message" class="a-sty">
            <img src="../assets/img/留言板.svg" alt="" style="width: 20px" />
            留言板
          </router-link>
        </span>
        <span class="header-sty">
          <a-dropdown arrow placement="bottom">
            <router-link to="#" class="a-sty">
              <img src="../assets/img/整理.svg" alt="" style="width: 20px" />
              往期整理
              <span class="sp" style="margin-left: 3px">
                <img
                  src="../assets/img/右箭头.svg"
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
                        src="../assets/img/车辆归档.svg"
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
                        src="../assets/img/分类.svg"
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
          <router-link to="/amsystem" class="a-sty">
            <img src="../assets/img/实验室.svg" alt="" style="width: 20px" />
            实验室
          </router-link>
        </span>
      </div>
    </div>

    <!-- body -->
    <div>
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div class="footer-center-sty">
      <h5>
        <img src="../assets/img/运营中心.svg" alt="" style="width: 20px" />
        2023-2024
        <a-divider type="vertical" style="margin: 2px; width: 2px" />
        <a href="/blog" class="footer-a-sty">
          <img src="../assets/img/喜爱.svg" alt="" style="width: 14px" />
          DuZJStu
        </a>
      </h5>
      <div>
        <h5><img src="../assets/img/浏览量.svg" alt="" style="width: 20px" />1143</h5>
      </div>
      <div style="width: 400px; margin: 0 auto">
        <a-divider style="margin: 10px auto; height: 2px" />
      </div>
      <h5>
        DuZJ的小站
        <a-divider type="vertical" style="margin: 2px; width: 2px" />
        软件工程学生，乐于探索新技术，喜欢游戏，摄影。
      </h5>
      <h5>Power By Vue3 And SpringBoot</h5>
    </div>
  </div>
</template>

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
  background: url(../assets/img/bg.png) no-repeat;
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
  font-weight: 900;
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
</style>
