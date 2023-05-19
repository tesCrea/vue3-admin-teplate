/*
 * @Author: 123 123.com
 * @Date: 2023-05-08 10:36:02
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-18 13:49:23
 * @FilePath: \vue-demo\vue-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'login',
      component:()=>import(/*webpackChunkName:"index"*/'../views/login/index.vue')
    },
    {
      path:'/echarts-two',
      name:'echarts-two',
      component:()=>import(/*webpackChunkName:"index"*/'../components/echarts-two.vue')
    }
  ]
})

export default router
