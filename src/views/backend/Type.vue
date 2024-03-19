<template>
  <div class="body-sty">
    <!-- 搜索栏 -->
    <div style="display: flex">
      <a-input
        v-model:value="typeName"
        addon-before="分类名"
        style="width: 20vw; margin: 10px 0"
      />
      <a-button
        type="text"
        @click="submitSearchInfo"
        style="margin: 10px 0 10px 20px"
        class="button-sty"
      >
        搜索
      </a-button>
      <a-button
        type="text"
        @click="submitSearchInfo"
        style="margin: 10px 0 10px 20px;width: 8vw;"
        class="button-sty"
      >
        修改分类名
      </a-button>
      <div>
        <a-button
          type="text"
          @click="showModel"
          style="margin: 10px 0 10px 20px"
          class="button-sty"
        >
          删除
        </a-button>
        <a-modal v-model:open="open" @ok="deleteType">
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" @click="deleteType"
              >确认</a-button
            >
          </template>
          删除分类后，分类所属的博客也会被删除，是否删除所选分类？
        </a-modal>
      </div>
    </div>

    <vxe-table ref="table" :data="typeData" max-height="80%" align="center" header-align="center">
      <vxe-column type="checkbox" width="40"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="typeName" title="分类名"></vxe-column>
      <vxe-column field="blogNumber" title="博客数量"></vxe-column>
      <vxe-column field="createTime" title="创建时间"></vxe-column>
      <vxe-column field="updateTime" title="更新时间"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      typeName: null,
      open:false,
      typeData:[
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        },
        {
          id:1,
          typeName:"java",
          blogNumber:10,
          createTime:"2021-1-1",
          updateTime:"2024-1-1",
        }
      ]
    };
  },
  methods:{
    submitSearchInfo(){
        console.log(this.typeName)
    },
    showModel(){
      this.open = true
    },
    deleteType(){
      this.open = false;
      message.success("success")
      const selectedRows = this.$refs.table.getCheckboxRecords();
      console.log(selectedRows)
    },
    handleCancel(){
      this.open = false;
    }
  }
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
