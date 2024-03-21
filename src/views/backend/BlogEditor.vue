<template>
  <div class="body-sty">
    <div style="display: flex">
      <div class="left-sty">
        <a-input
          addon-before="标题"
          v-model:value="blog.title"
          placeholder="请输入文章标题"
          class="input-sty"
        />
        <a-input
          addon-before="图片"
          v-model:value="blog.imgUrl"
          placeholder="请输入图片Url"
          class="input-sty"
        />
        <a-select
          v-model:value="blog.tag"
          class="input-sty"
          placeholder="请选择文章标签"
          allowClear
        >
          <div v-for="item in tags" :key="item">
            <a-select-option value="{{item}}">{{ item }}</a-select-option>
          </div>
        </a-select>
        <a-select
          v-model:value="blog.type"
          class="input-sty"
          placeholder="请选择文章分类"
          mode="multiple"
        >
          <div v-for="item in types" :key="item">
            <a-select-option value="{{item}}">{{ item }}</a-select-option>
          </div>
        </a-select>
      </div>
      <div class="right-sty" v-if="blog.imgUrl != null">
        <img :src="blog.imgUrl" alt="" />
      </div>
      <div class="right-sty" v-if="blog.imgUrl == null">
        <img src="../../assets/img/loading.gif" alt="" style=""/>
      </div>
    </div>

    <div style="width: 100%; height: 30vh; margin: 20px auto">
      <v-md-editor v-model="blog.content" height="30vh"></v-md-editor>
    </div>
    <div style="text-align: center;">
      <a-button
        type="text"
        @click="showModel"
        style="margin: 10px 0 10px 20px"
        class="button-sty"
      >
        提交
      </a-button>
      <a-modal v-model:open="open">
        <template #footer>
          <a-button key="back" @click="handleCancel">取消</a-button>
          <a-button key="submit" type="primary" @click="saveBlog"
            >保存草稿</a-button
          >
          <a-button key="submit" type="primary" @click="submitBlog"
            >确认提交</a-button
          >
        </template>
        选择确认提交还是保存草稿。
      </a-modal>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      blog: {
        title: null,
        imgUrl: null,
        tag: null,
        type: [],
        content: "",
        status:null,
      },
      tags: ["原创", "转载", "翻译"],
      types: ["java", "python", "vue", "js"],
      open:false,

    };
  },
  methods:{
    showModel(){
        this.open = true;
    },
    handleCancel(){
        this.open = false;
    },
    saveBlog(){
        this.blog.status = 0;
        this.open = false;
        message.warn("保存成功");
    },
    submitBlog(){
        this.blog.status = 1;
        this.open = false;
        message.success("提交成功");
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

.left-sty {
  width: 40vw;
  height: 36vh;
}

.right-sty {
  width: fit-content;
  flex: 1;
}

.input-sty {
  width: 36vw;
  margin: 20px 0;
}

img {
  width: 36vw;
  height: 36vh;
  object-fit: cover;
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
