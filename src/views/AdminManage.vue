<template>
  <div>
    <a-row>
      <a-col :span="4" style="border-right: solid 1px #e9e9e9" class="panel">
        <!-- logo -->
        <div class="center-sty inner1" style="margin-bottom: 20px; padding: 10px">
          <h1>logo</h1>
        </div>
        <!-- <router-link to="/amsystem">
                <a-button type="text" class="button-sty">
                  <span>首页</span>
                </a-button>
              </router-link> -->
        <div class="inner2" style="text-align: center">
          <a-menu v-model:selectedKeys="current" mode="inline" style="height: 100%; padding: 10px">
            <a-menu-item key="1">
              <router-link to="/amsystem">
                <span class="nav-text">首页</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/amsystem/bloginfo">
                <span class="nav-text">博客</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/amsystem/typeinfo">
                <span class="nav-text">分类</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <span class="nav-text">杂项</span>
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col :span="20" class="panel">
        <div class="inner1" style="border-bottom: solid 1px #e9e9e9">
          <span style="float: right; margin: 10px 40px 10px 0">
            <router-link to="/blog" class="a-sty">
              <span style="font-size: larger; margin-right: 5px"> 超级无敌大帅逼 </span>
            </router-link>
            <a-dropdown placement="bottom">
              <a class="ant-dropdown-link" @click.prevent>
                <img src="../assets/img/tx.jpg" alt="" style="height: 2rem" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <router-link to="#" class="drop"> 个人信息 </router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="#"> 注销账号 </router-link>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </span>
        </div>
        <div class="inner2" style="background-color: #f4f7fc; overflow: scroll">
          <router-view></router-view>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current:['1'],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.center-sty {
  display: flex;
  text-align: center;
  justify-content: center;
}
.menu-item-sty {
  color: #949494;
}
.menu-item-sty:hover {
  color: white;
  background-color: blueviolet;
}
.panel {
  overflow: auto;
  height: 100vh;
  display: -webkit-flex;
  -webkit-flex-direction: column;
}
.inner1 {
  width: 100%;
  height: auto;
  position: relative;
}
.inner2 {
  width: 100%;
  height: inherit;
  position: relative;
}

.a-sty {
  color: black;
}
.a-sty:hover {
  color: blueviolet;
}
/deep/ .ant-menu-item {
  font-size: larger;
  color: #808080;
  font-family: "maokenwangxingyuan";
}
/deep/ .ant-menu-item-active {
  background-color: blueviolet;
  color: white;
}
/deep/ .ant-menu-item-selected {
  background-color: blueviolet;
  color: white;
}
</style>
