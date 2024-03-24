<template>
  <div class="body-sty">
    <a-button type="text" class="button1-sty" @click="changeComponent(1)"
      >编辑公告</a-button
    >
    <a-button type="text" class="button2-sty" @click="changeComponent(2)"
      >编辑留言板</a-button
    >
    <div style="margin: 20px auto">
      <div
        style="font-size: large; font-weight: 700; color: black"
        v-if="whichComponent == 1"
      >
        <div style="margin-bottom: 20px;font-size: x-large;">编辑公告</div>
        <v-md-editor v-model="notice" height="400px"></v-md-editor>
        <a-button type="text" class="button-sty" @click="showModel"
          >提交</a-button
        >
        <a-modal v-model:open="open">
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" @click="submit(1)"
              >确认提交</a-button
            >
          </template>
          是否提交公告内容。
        </a-modal>
      </div>
      <div
        style="font-size: large; font-weight: 700; color: black"
        v-if="whichComponent == 2"
      >
        <div style="margin-bottom: 20px;font-size: x-large">编辑留言板</div>
        <v-md-editor v-model="messageBoards" height="400px"></v-md-editor>
        <a-button type="text" class="button-sty" @click="showModel"
          >提交</a-button
        >
        <a-modal v-model:open="open">
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" @click="submit(2)"
              >确认提交</a-button
            >
          </template>
          是否提交留言板内容。
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      notice: "",
      messageBoards: "",
      whichComponent: 0,
      open: false,
    };
  },
  methods: {
    changeComponent(componentId) {
      this.whichComponent = componentId;
    },
    showModel() {
      this.open = true;
    },
    handleCancel(){
      this.open = false;
    },
    submit(componentId){
      if(componentId == 1){
        console.log("保存公告");
        this.open = false;
      }
      else if(componentId == 2){
        console.log("保存留言板");
        this.open = false;
      }
      message.success("保存成功");
    }
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
  text-align: center;
}

.button1-sty {
  background-color: #5d7db3;
  color: white;
  width: 15vw;
  height: 5vh;
  margin: 2vh 2vw;
}

.button1-sty:hover {
  background-color: #464879;
  color: white;
}

.button2-sty {
  background-color: #f47d85;
  color: white;
  width: 15vw;
  height: 5vh;
  margin: 2vh 2vw;
}

.button2-sty:hover {
  background-color: #df4c5b;
  color: white;
}

.button-sty {
  background-color: blue;
  color: white;
  margin: 20px auto;
  width: 5vw;
}

.button-sty:hover {
  background-color: blueviolet;
  color: white;
}
</style>
