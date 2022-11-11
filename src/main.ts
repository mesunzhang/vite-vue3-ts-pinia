import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import store from '@/store'
import 'ant-design-vue/dist/antd.variable.min.css'
import './index.pcss'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

// import { Badge } from 'ant-design-vue';
import SvgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register'
import { ConfigProvider } from 'ant-design-vue'
import { createPinia } from 'pinia'

ConfigProvider.config({
  theme: {
    primaryColor: '#3691F2'
  }
})
const app = createApp(App)
// app.use(Badge)
app.component('svg-icon', SvgIcon)
app.use(router).use(createPinia()).mount('#app')

// app.config.errorHandler = (error:any, vm) => {
//   console.log(error)
//   if (!error || !error.message) {
//     return console.error(error)
//   }
//   throw error
// }
