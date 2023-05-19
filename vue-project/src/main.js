/*
 * @Author: 123 123.com
 * @Date: 2023-05-08 10:36:02
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-19 11:14:08
 * @FilePath: \vue-demo\vue-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'virtual:svg-icons-register'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// fix: 自动导入函数式组件样式没有自动导入
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-message.css'

import 'normalize.css' // a modern alternative to CSS resets
import SvgIcon from '@/components/SvgIcon/index.vue'

import '@/style/index.scss' // global css
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .component('svg-icon',SvgIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
