<template>
  <div class="body-sty">
    <!-- 搜索栏 -->
    <div style="display: flex">
      <!-- 标题 -->
      <a-input
        v-model:value="searchInfo.title"
        addon-before="标题"
        style="width: 15vw; margin: 10px 0"
      />
      <!-- 标签选择 -->
      <div style="margin: 10px 0 10px 20px">标签:</div>
      <a-select
        v-model:value="searchInfo.tag"
        style="width: 90px; margin: 10px 10px 10px 5px"
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
        style="width: 60px; margin: 10px 10px 10px 5px"
        allowClear
      >
        <a-select-option :value="1">1</a-select-option>
        <a-select-option :value="0">0</a-select-option>
      </a-select>
      <!-- 分类 -->
      <div style="margin: 10px 0 10px 10px">分类:</div>
      <a-select
        v-model:value="searchInfo.type"
        style="width: 250px; margin: 10px 20px 10px 5px"
        mode="multiple"
      >
        <div v-for="item in types" :key="item">
          <a-select-option :value="item">{{ item }}</a-select-option>
        </div>
      </a-select>
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
    >
      <vxe-column type="checkbox" width="40"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="title" title="标题"></vxe-column>
      <vxe-column field="tag" title="标签"></vxe-column>
      <vxe-column field="status" title="状态"></vxe-column>
      <vxe-column field="types" title="分类" width="300"></vxe-column>
      <vxe-column field="createTime" title="编辑时间"></vxe-column>
      <vxe-column field="updateTime" title="更新时间"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import { message } from "ant-design-vue";

export default {
  data() {
    return {
      open: false,
      blogData: [
        {
          id: 1,
          title: "速成java",
          tag: "原创",
          types: ["java", "python"],
          status: 1,
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
          status: 0,
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
        {
          id: 1,
          title: "速成java",
          tag: "原创",
        },
      ],
      searchInfo: {
        title: null,
        tag: null,
        beginTime: null,
        endTime: null,
        type: [],
        status:null,
      },
      tags: ["原创", "转载", "翻译", "抄袭", "原创", "转载", "翻译", "抄袭"],
      types: ["原创", "转载", "翻译", "抄袭", "原创", "转载", "翻译", "抄袭"],
    };
  },
  methods: {
    submitSearchInfo() {
      console.log(this.searchInfo);
    },
    deleteBlog() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      console.log(selectedRows[0].tag);
      this.open = false;
      message.success("success");
    },
    showModel() {
      this.open = true;
    },
    handleCancel() {
      this.open = false;
    },
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
