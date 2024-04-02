<template>
  <div>
    <div style="margin: 250px 0">
      <h1 style="color: white; text-align: center">
        <!-- //TODO:添加分类图标 -->
        分类
        <br />
        <span style="font-size: small">
          在生活的分类中，我们找到了自己的位置，也理解了别人的不易。
        </span>
      </h1>
    </div>

    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
      <div class="div-border-sty">
        <img src="../../assets/img/文件夹 (1).svg" alt="" style="width: 40px" />
        <a-divider style="margin: 10px" />
        <router-link
          :to="`/blog/tydetail/${item.typeId}`"
          v-for="item in type"
          :key="item.id"
        >
          <a-button
            type="text"
            style="
              box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
                rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
              margin: 10px 20px;
            "
            class="tranition-sty"
          >
            <!-- //TODO:分类图标 -->
            <img
              src="../../assets/img/文件夹 (1).svg"
              alt=""
              style="width: 15px"
            />
            {{ item.typeName }}
          </a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../api/type";
export default {
  data() {
    return {
      type: [],
    };
  },
  mounted() {
    axios.getFrontType().then((res) => {
      this.type = res.data.data;
      console.log(res.data)
    });
  },
};
</script>

<style scoped>
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 20px auto;
  width: 80%;
  padding: 10px;
}
.tranition-sty {
  transition: transform 0.3s;
}
.tranition-sty:hover {
  transform: scale(1.04);
}
</style>
