<template>
  <div style="padding: 250px 0" class="center-sty">
    <div style="height: 96px">
      <a-input
        v-model:value="value"
        placeholder="请输入要搜索的内容"
        class="search-input-sty"
        size="large"
        :bordered="false"
      ></a-input>
      <a-button type="text" class="button-sty" size="large" @click="onSearch"
        >搜索</a-button
      >
    </div>
  </div>

  <div
    style="background-color: rgba(255, 255, 255, 0.7); padding: 20px"
    ref="targetElement"
  >
    <div
      style="
        width: 90vw;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 20px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
      "
    >
      <div
        style="
          width: 90vw;
          font-size: x-large;
          font-weight: 700;
          text-align: center;
        "
      >
        博客
      </div>
      <a-divider style="height: 2px" />

      <div
        style="
          width: 20vw;
          max-height: 40vh;
          margin: 2vh 1vw;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 20px;
          padding: 1vw;
        "
        v-for="item in searchBlogResult"
        :key="item"
        class="transition-sty-big"
      >
        <router-link
          :to="`/blog/detail/${item.id}`"
          style="padding: 0px; color: black"
        >
          <img
            :src="item.firstImg"
            style="
              max-width: 18vw;
              max-height: 15vw;
              width: auto;
              height: auto;
              border-radius: 20px;
            "
            alt=""
          />
          <div style="text-align: center; margin: 10px; font-weight: 700">
            {{ item.title }}
          </div>
          <div style="text-align: center; margin-bottom: 10px; color: #949494">
            发布时间：{{ this.$moment(item.createTime).format("YYYY-MM-DD") }}
          </div>
        </router-link>
      </div>
    </div>

    <div
      style="
        width: 90vw;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 20px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
      "
    >
      <div
        style="
          width: 90vw;
          font-size: x-large;
          font-weight: 700;
          text-align: center;
        "
      >
        分类
      </div>
      <a-divider style="height: 2px" />
      <div
        style="
          width: 20vw;
          max-height: 40vh;
          margin: 2vh 1vw;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 20px;
          padding: 10px;
        "
        v-for="item in searchTypeResult"
        :key="item.id"
        class="transition-sty-big"
      >
        <router-link
          :to="`/blog/tydetail/${item.id}`"
          style="padding: 0px; color: black"
        >
          <div>
            <span style="font-weight: 700">
              <img
                src="../../assets/img/文件夹 (1).svg"
                alt=""
                style="width: 15px"
              />
              {{ item.typeName }}
            </span>
            <span style="float: right; color: #949494; font-size: small"
              >共{{ item.blogNum }}篇</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import axios1 from "../../api/blog";
import axios2 from "../../api/type";
export default {
  data() {
    return {
      value: null,
      searchBlogResult: [],
      searchTypeResult: [],
    };
  },
  methods: {
    onSearch() {
      if (this.value === null) {
        message.warn("请输入要查询的信息");
      } else {
        this.searchBlogResult = [];
        this.searchTypeResult = [];
        axios1
          .getSearch(this.value)
          .then((res) => {
            if (res.data.code === 201) {
              message.error(res.data.message);
            } else {
              message.success(res.data.message);
              this.searchBlogResult = res.data.data;
            }
            return axios2.getSearch(this.value);
          })
          .then((res) => {
            if (res.data.code === 201) {
              message.error(res.data.message);
            } else {
              message.success(res.data.message);
              this.searchTypeResult = res.data.data;
              console.log(this.searchTypeResult);
            }
          });
        // 获取目标元素的引用
        const targetElement = this.$refs.targetElement;
        // 使用 scrollIntoView 方法滚动到目标元素
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

<style scoped>
.center-sty {
  text-align: center;
  justify-content: center;
}
.search-input-sty {
  width: 700px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}

.transition-sty {
  transition: transform 0.3s ease-in-out;
}

.transition-sty:hover {
  transform: scale(1.01);
}

.transition-sty-big {
  transition: transform 0.3s ease-in-out;
}

.transition-sty-big:hover {
  transform: scale(1.03);
}

p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.button-sty {
  margin-left: 20px;
  color: white;
  background: blue;
  border-radius: 30px;
  transition: transform 0.3s;
}

.button-sty:hover {
  background-color: blue;
  color: white;
  transform: scale(1.1);
}
</style>
