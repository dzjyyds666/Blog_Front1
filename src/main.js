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

app.mount('#app')
