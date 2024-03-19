import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


// 引入字体css
import '@/assets/font/font.css';


//引入表格组件
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
app.use(VXETable)

//引入 ant design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
app.use(Antd)

//引入路由
import router from './router'
app.use(router)

//引入axios
import axios from "axios"
app.config.globalProperties.$axios = axios

//时间格式化插件
import moment from 'moment'
app.config.globalProperties.$moment = moment
//导入中文包
import momentCN from './plugins/momentCN'
moment.locale('zh-cn',momentCN);

//v-md-editor编辑模块
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

//预览模块
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";


//表情插件
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'

//代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

//快捷代码复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

//内容定位
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';

//提示
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

//任务列表
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';

import hljs from "highlight.js";
//语言包
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript"
import http from "highlight.js/lib/languages/http";
import css from "highlight.js/lib/languages/css";
 
hljs.registerLanguage('java',java);
hljs.registerLanguage('js',javascript);
hljs.registerLanguage('http',http);
hljs.registerLanguage('css',css);

//编辑
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdEditor.use(createEmojiPlugin());
VMdEditor.use(createLineNumbertPlugin());
VMdEditor.use(createAlignPlugin());
VMdEditor.use(createTipPlugin());
VMdEditor.use(createTodoListPlugin());

//预览
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createAlignPlugin());
VMdPreview.use(createTipPlugin());
VMdPreview.use(createTodoListPlugin());
app.use(VMdEditor);
app.use(VMdPreview);



app.mount('#app')
