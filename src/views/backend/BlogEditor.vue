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
          v-model:value="blog.firstImg"
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
          v-model:value="blog.typeNameList"
          class="input-sty"
          placeholder="请选择文章分类"
          mode="multiple"
          v-if="!this.$route.params.id"
        >
          <div v-for="item in types" :key="item.typeName">
            <a-select-option :value="item">{{ item.typeName }}</a-select-option>
          </div>
        </a-select>
      </div>
      <div class="right-sty" v-if="blog.firstImg != null">
        <img :src="blog.firstImg" alt="" />
      </div>
      <div class="right-sty" v-if="blog.firstImg == null">
        <img src="../../assets/img/loading.gif" alt="" style="" />
      </div>
    </div>

    <div style="width: 100%; height: 30vh; margin: 20px auto">
      <!-- <v-md-editor
        v-model="blog.content"
        left-toolbar="undo redo | emoji image"
        @upload-image="handleUploadImage"
        :disabled-menus="[]"
        height="30vh"
      ></v-md-editor> -->

      <MdEditor
        v-model="blog.content"
        :toolbars="toolbars"
        style="height: 30vh; width: 76vw"
      />
    </div>
    <div style="text-align: center">
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
          <a-button key="submit" type="primary" @click="submitBlog(0)"
            >保存草稿</a-button
          >
          <a-button key="submit" type="primary" @click="submitBlog(1)"
            >确认提交</a-button
          >
        </template>
        选择确认提交还是保存草稿。
      </a-modal>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import axios from "../../api/blog";
import axios1 from "../../api/type";

import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  data() {
    return {
      blog: {
        id: null,
        title: null,
        firstImg: null,
        tag: null,
        typeNameList: [],
        typeList: [],
        content: "",
        status: null,
      },
      tags: ["原创", "转载", "翻译"],
      types: [],
      open: false,

      toolbars: [
      "revoke",
        "next",
        "save",
        '-',
        "bold",
        "underline",
        "italic",
        "-",
        "strikeThrough",
        "title",
        "sub",
        "sup",
        "quote",
        "unorderedList",
        "orderedList",
        "task", // ^2.4.0
        "-",
        "codeRow",
        "code",
        "link",
        "image",
        "table",
        "mermaid",
        "katex",
        "=",
        "pageFullscreen",
        "fullscreen",
        "preview",
        "htmlPreview",
        "catalog",
        "github",
      ],
    };
  },
  methods: {
    showModel() {
      if (
        this.blog.title == null ||
        this.blog.firstImg == null ||
        this.blog.tag == null ||
        this.blog.typeList == null ||
        this.blog.content == null
      ) {
        message.warn("还有东西没有填写完毕，写完了再提交吧");
      } else {
        this.open = true;
      }
    },
    handleCancel() {
      this.open = false;
    },
    submitBlog(status) {
      const id = this.$route.params.id;
      this.blog.status = status;
      if (id) {
        axios.postEditBlog(this.blog).then((res) => {
          message.success(res.data.message);
        });
        setTimeout(() => {
          this.$router.push({ name: "编辑博客页面" });
          this.blog.title = null;
          this.blog.firstImg = null;
          this.blog.tag = null;
          this.blog.typeList = [];
          this.blog.content = "";
          this.blog.id = null;
          this.blog.status = null;
          this.blog.typeNameList = [];
        }, 2000);
      } else {
        // console.log(this.blog)
        axios.postAddBlog(this.blog).then((res) => {
          if (res.data.code == 201) {
            message.error(res.data.message);
          } else {
            message.success(res.data.message);
            this.blog.title = null;
            this.blog.firstImg = null;
            this.blog.tag = null;
            this.blog.typeList = [];
            this.blog.content = "";
            this.blog.id = null;
            this.blog.status = null;
            this.blog.typeNameList = [];
          }
        });
      }
      this.open = false;
    },
  },
  mounted() {
    axios1.getTypeInfo().then((res) => {
      console.log(res.data);
      this.types = res.data.data;
    });
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      axios.getBlogById(id).then((res) => {
        this.blog = res.data.data;
      });
    }
  },
  components: {
    MdEditor,
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
