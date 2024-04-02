<template>
  <div>
    <div style="margin: 150px 0">
      <h1 style="color: white; text-align: center">
        {{ type.typeName }}
        <br />
        <span style="font-size: small">
          创建时间：{{ this.$moment(type.createTime).format("YYYY-MM-DD") }}
        </span>
        <span style="font-size: small; margin-left: 20px"
          >{{ type.blogNum }}篇文章</span
        >
      </h1>
    </div>

    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
      <div style="width: 80%; margin: 10px auto">
        <router-link
          :to="`/blog/detail/${item.id}`"
          v-for="item in blog"
          :key="item.id"
          style="padding: 0px"
        >
          <div>
            <div
              class="div-border-sty blog-transition-sty"
              style="
                margin-bottom: 20px;
                display: flex;
                background-color: rgba(255, 255, 255, 0.7);
              "
            >
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
              <div style="padding: 10px">
                <div style="height: 160px; padding: 15px">
                  <h2 style="height: 34px">
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
                  </h2>
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
                    <span style="margin-left: 5px; color: #708090"
                      >2024-1-16</span
                    >
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
          </div>
        </router-link>

        <div class="center-sty">
          <el-pagination
            layout="prev, pager, next"
            :total="type.blogNum"
            :page-size="5"
            v-model:current-page="current"
            background
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElPagination } from "element-plus";
import "element-plus/es/components/pagination/style/css";
import axios from "../../api/type";
import axios_b from "../../api/blog";
export default {
  data() {
    return {
      current: 1,
      type: {
        id: null,
        typeName: null,
        blogNum: null,
        createTime: null,
        updateTime: null,
      },
      blog: [],
    };
  },
  components: {
    ElPagination,
  },
  methods: {
    handleCurrentChange() {
      axios_b.getByTypeId(this.$route.params.id,this.current,5).then((res) => {
      this.blog = res.data.data;
    });
    },
  },
  mounted() {
    axios.getTypeById(this.$route.params.id).then((res) => {
      this.type = res.data.data;
    });
    axios_b.getByTypeId(this.$route.params.id,1,5).then((res) => {
      this.blog = res.data.data;
    });
  },
};
</script>

<style scoped>
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}
.blog-transition-sty {
  transition: transform 0.3s ease-in-out;
}
.blog-transition-sty:hover {
  transform: scale(1.01);
}
.center-sty {
  display: flex;
  text-align: center;
  justify-content: center;
}

p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

a {
  color: black;
}
a:hover {
  color: blueviolet;
}
</style>
