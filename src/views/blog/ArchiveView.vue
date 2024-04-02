<template>
  <div style="margin: 250px 0">
    <h1 style="color: white; text-align: center">
      <!-- //TODO:添加归档图标 -->
      归档
      <br />
      <span style="font-size: small">
        归档的过程就像人生的整理，重要的不是结果，而是我们如何对待和面对这个过程。
      </span>
    </h1>
  </div>

  <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
    <div class="div-border-sty" v-for="year in years">
      <h1 style="display: flex; align-items: center">
        {{ year.year }}
        <span style="font-size: small; margin-left: 15px">
          共{{ year.number }}篇</span
        >
      </h1>
      <div v-for="blog in blogs" :key="blog" style="line-height: 0.8">
        <div v-if="this.$moment(blog.createTime).format('YYYY') == year.year">
          <div style="margin: auto">
            <a-divider style="height: 2px; margin: 0" />
          </div>
          <router-link :to="`/blog/detail/${blog.id}`">
            <div style="display: flex; padding: 0 20px">
              <div style="font-weight: 900; font-size: larger">
                {{ blog.title
                }}<a-tag
                  color="#f50"
                  style="margin-left: 20px"
                  v-if="blog.tag == '原创'"
                  >{{ blog.tag }}</a-tag
                >
                <a-tag
                  color="#2db7f5"
                  style="margin-left: 20px"
                  v-if="blog.tag == '转载'"
                  >{{ blog.tag }}</a-tag
                >
                <a-tag
                  color="#87d068"
                  style="margin-left: 20px"
                  v-if="blog.tag == '翻译'"
                  >{{ blog.tag }}</a-tag
                >
              </div>
              <div
                style="margin-left: auto; font-weight: 900; font-size: larger"
              >
                {{ this.$moment(blog.createTime).format("YYYY-MM-DD") }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../api/blog";
export default {
  data() {
    return {
      blogs: [],
      years: [],
    };
  },
  methods: {},
  mounted() {
    axios.getArchive().then((res) => {
      console.log(res.data);
      this.years = res.data.data;
    });
    axios.getArchiveBlog().then((res) => {
      console.log(res.data);
      this.blogs = res.data.data;
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
a {
  color: black;
  transition: transform 0.3s ease-in-out;
}
a:hover {
  color: blueviolet;
  transform: scale(1.1);
}
</style>
