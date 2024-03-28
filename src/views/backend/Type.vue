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

      <div>
        <a-button
          type="text"
          @click="showModel1"
          style="margin: 10px 0 10px 20px; width: 8vw"
          class="button-sty"
        >
          修改分类名
        </a-button>
        <a-modal v-model:open="open1" @ok="changeTypeName">
          <template #footer>
            <a-button key="back" @click="handleCancel1">取消</a-button>
            <a-button key="submit" type="primary" @click="changeTypeName"
              >确认</a-button
            >
          </template>
          <a-input
            v-model:value="changedName"
            addon-before="分类名"
            style="width: 20vw; margin: 10px 23%"
          />
        </a-modal>
      </div>
      <div>
        <a-button
          type="text"
          @click="showModel2"
          style="margin: 10px 0 10px 20px; width: 8vw"
          class="button-sty"
        >
          添加分类
        </a-button>
        <a-modal v-model:open="open2" @ok="addType">
          <template #footer>
            <a-button key="back" @click="handleCancel2">取消</a-button>
            <a-button key="submit" type="primary" @click="addType"
              >确认</a-button
            >
          </template>
          <a-input
            v-model:value="addTypeName"
            addon-before="分类名"
            style="width: 20vw; margin: 10px 23%"
          />
        </a-modal>
      </div>
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

    <vxe-table
      ref="table"
      :data="typeData"
      max-height="80%"
      align="center"
      header-align="center"
    >
      <vxe-column type="checkbox" width="40"></vxe-column>
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="typeName" title="分类名"></vxe-column>
      <vxe-column field="blogNum" title="博客数量"></vxe-column>
      <vxe-column title="创建时间">
        {{ createTime }}
      </vxe-column>
      <vxe-column title="更新时间">
        {{ updateTime }}
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import axios from "../../api/type";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      typeName: null,
      open: false,
      open1: false,
      open2: false,
      changedName: null,
      addTypeName: null,
      typeData: [],
      creatTime: null,
      updateTime: null,
    };
  },
  methods: {
    submitSearchInfo() {
      console.log(this.typeName);
      axios.getSearchType(this.typeName).then((res) => {
        this.typeData = res.data.data;
      });
    },
    showModel() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      if (selectedRows.length < 1) {
        message.warn("至少选择一项哦");
      } else {
        this.open = true;
      }
    },
    showModel1() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      if (selectedRows.length > 1) {
        message.error("一次只能修改一条数据哦");
      } else if (selectedRows.length < 1) {
        message.warn("请选择要修改的分类");
      } else {
        this.changedName = selectedRows[0].typeName;
        this.open1 = true;
      }
    },
    showModel2() {
      this.open2 = true;
    },
    deleteType() {
      this.open = false;
      const selectedRows = this.$refs.table.getCheckboxRecords();
      axios
        .postDeleteType(selectedRows)
        .then((res) => {
          if (res.data.code == 200) {
            message.success(res.data.message);
            return axios.getTypeInfo();
          } else {
            message.error(res.data.message);
          }
        })
        .then((res) => {
          this.typeData = res.data.data;
        });
      console.log(selectedRows);
    },
    handleCancel() {
      this.open = false;
    },
    handleCancel1() {
      this.open1 = false;
    },
    handleCancel2() {
      this.open2 = false;
    },
    changeTypeName() {
      const selectedRows = this.$refs.table.getCheckboxRecords();
      axios
        .getChangeTypeName(selectedRows[0].id, this.changedName)
        .then((res) => {
          this.typeData = res.data.data;
          console.log(res);
        });
      this.open1 = false;
    },
    addType() {
      axios
        .getAddType(this.addTypeName)
        .then((res) => {
          if (res.data.code == 200) {
            message.success(res.data.message);
            return axios.getTypeInfo();
          } else if (res.data.code == 201) {
            message.error(res.data.message);
          }
        })
        .then((res) => {
          this.typeData = res.data.data;
        });
      this.open2 = false;
    },
  },
  mounted() {
    axios.getTypeInfo().then((res) => {
      this.typeData = res.data.data;
      this.createTime = this.$moment(this.typeData.createTime).format(
        "YYYY-MM-DD"
      );
      this.updateTime = this.$moment(this.typeData.updateTime).format(
        "YYYY-MM-DD"
      );
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
