<template>
  <div class="body-sty">
    <!-- 搜索栏 -->
    <div style="display: flex">
      <!-- 标题 -->
      <a-input
        v-model:value="searchInfo.title"
        addon-before="标题"
        style="width: 15vw; margin: 10px 0;width:20vw"

      />
      <!-- 标签选择 -->
      <div style="margin: 10px 0 10px 20px"   >标签:</div>
      <a-select
        v-model:value="searchInfo.tag"
        style="width: 12vw; margin: 10px 10px 10px 5px"
        allowClear
      >
        <div v-for="item in tags" :key="item">
          <a-select-option :value="item">{{ item }}</a-select-option>
        </div>
      </a-select>
      <!-- 状态选择 -->
      <div style="margin: 10px 0 10px 20px">状态:</div>
      <a-select
        v-model:value="searchInfo.status"
        style="width: 15.5vw; margin: 10px 10px 10px 5px"
        allowClear
      >
        <a-select-option :value="1">正文</a-select-option>
        <a-select-option :value="0">草稿</a-select-option>
      </a-select>
      <!-- 分类 -->
      <a-button
        type="text"
        @click="submitSearchInfo"
        style="margin: 10px 0 10px 20px"
        class="button-sty"
      >
        搜索
      </a-button>
      <router-link to="#" style="padding: 0">
        <a-button
          type="text"
          style="margin: 10px 0 10px 20px"
          class="button-sty"
          @click="editBlog"
        >
          修改
        </a-button>
      </router-link>
      <div>
        <a-button
          type="text"
          @click="showModel"
          style="margin: 10px 0 10px 10px"
          class="button-sty"
        >
          删除
        </a-button>
        <a-modal v-model:open="open" @ok="deleteBlog">
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" @click="deleteBlog"
              >确认</a-button
            >
          </template>
          是否删除所选博客？
        </a-modal>
      </div>
    </div>
    <vxe-table
      ref="table"
      :data="blogData"
      max-height="80%"
      align="center"
      header-align="center"
      :key="vxeTableKey"
    >
      <vxe-column type="checkbox" width="40"></vxe-column>
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="title" title="标题" width="250"></vxe-column>
      <vxe-column field="tag" title="标签"></vxe-column>
      <vxe-column title="状态">
        <template #default="{ row }">
          <span v-if="row.status == 1">正文</span>
          <span v-if="row.status == 0">草稿</span>
        </template>
      </vxe-column>
      <vxe-column title="分类" width="200">
        <template #default="{ row }">
          <span v-for="(item, index) in row.typeList" :key="item">
            {{ item.typeName }}
            <span v-if="index < row.typeList">、</span>
          </span>
        </template>
      </vxe-column>
      <vxe-column title="编辑时间">
        <template #default="{row}">
          {{ this.$moment(row.createTime).format("YYYY-MM-DD") }}
        </template>
      </vxe-column>
      <vxe-column title="更新时间">
        <template #default="{row}">
          {{ this.$moment(row.updateTime).format("YYYY-MM-DD") }}
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import axios from "../../api/blog";
export default {
  data() {
    return {
      open: false,
      blogData: [],
      searchInfo: {
        title: null,
        tag: null,
        typeList: [],
        status: null,
      },
      vxeTableKey: 1,
      tags: ["原创", "转载", "翻译"],
    };
  },
  methods: {
    submitSearchInfo() {
      axios.postSearchBlog(this.searchInfo).then((res) => {
        this.blogData = res.data.data;
      });
    },
    deleteBlog() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      axios
        .postDeleteBlog(selectedRows)
        .then((res) => {
          message.success(res.data.message);
          return axios.getBlogInfo();
        })
        .then((res) => {
          this.blogData = res.data.data;
        });
      this.vxeTableKey++;
      this.open = false;
    },
    showModel() {
      this.open = true;
    },
    handleCancel() {
      this.open = false;
    },
    editBlog() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      if (selectedRows.length > 1) {
        message.error("一次只能修改篇文章哦");
      } else if (selectedRows.length < 1) {
        message.info("请选择要编辑的博客");
      } else
        this.$router.push({
          name: "编辑博客页面",
          params: { id: selectedRows[0].id },
        });
    },
  },
  mounted() {
    axios.getBlogInfo().then((res) => {
      this.blogData = res.data.data;
      console.log(res)
      
    });
  },
};
</script>

<style scoped>
.body-sty {
  width: 80vw;
  height: 84vh;
  background-color: white;
  margin: 5vh 2.5vw;
  border-radius: 20px;
  padding: 4vh 2vw;
}

.button-sty {
  background-color: blue;
  color: white;
  margin: 10px auto;
  width: 5vw;
}

.button-sty:hover {
  background-color: blueviolet;
  color: white;
}
</style>
