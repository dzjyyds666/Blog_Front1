<template>
  <div style="display: flex; height: 100%">
    <!-- 左侧导航栏 -->
    <div class="nav-sty">
      <!-- logo -->
      <div class="logo-sty color-change-sty">Aaron</div>

      <a-divider style="border-color: #e1e4ea"></a-divider>
      <!-- 导航栏 -->
      <div>
        <div class="navigation-bar-sty">
          <router-link to="/amsystem/info"> 个人信息 </router-link>
        </div>
        <div class="navigation-bar-sty">
          <router-link to="/amsystem/blog"> 博客信息 </router-link>
        </div>
        <div class="navigation-bar-sty">
          <router-link to="/amsystem/type"> 分类信息 </router-link>
        </div>
        <div class="navigation-bar-sty">
          <router-link to="#"> 杂项设置 </router-link>
        </div>
      </div>
    </div>

    <!-- 右侧 -->
    <div style="flex-grow: 1; background-color: #e1e4ea">
      <div class="info-bar-sty">
        <a-dropdown arrow placement="bottom">
          <span style="float: right; margin-right: 3vw">
            <img src="../assets/img/qq(1).svg" alt="" style="height: 4vh" />
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <router-link to="#">
                  <span style="font-size: small"> 退出登陆 </span>
                </router-link>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-sty {
  width: 15vw;
  height: 100%;
  background-color: #464879;
  padding: 1vw;
}
.logo-sty {
  font-family: "En-Hand-Title";
  text-align: center;
  font-size: 4vw;
  font-weight: 900;
}

.color-change-sty {
  background-image: linear-gradient(
    to right,
    #f22,
    #f2f,
    rgb(31, 115, 241),
    #2ff,
    #2f2,
    #ff2
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.navigation-bar-sty {
  text-align: center;
  margin-top: 4vh;
}

.navigation-bar-sty a {
  color: white;
  font-weight: 700;
  padding: 15px 40px;
  transition: 0.5s;
}

.navigation-bar-sty a:hover {
  color: rgb(34, 248, 255);
  background-color: rgb(181, 34, 255);
  border-radius: 10px;
}

.info-bar-sty {
  height: 6vh;
  background-color: white;
  line-height: 6vh;
}
</style>
