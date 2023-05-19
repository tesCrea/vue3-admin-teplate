/*
 * @Author: 123 123.com
 * @Date: 2023-05-17 16:28:17
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-18 18:32:54
 * @FilePath: \vue-demo\vue-project\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {request} from '@/utils/request'
/**
 * @description: addUserLogin 
 * @param :  data
 * @return {*}
 */
export function addUserLogin(data){
   return request({
    url:'/user/login',
    method:'post',
    data
   })
}
/**
 * @description: getUserInfo 
 * @param: 
 * @return {*}
 */
export function getUserInfo(data){
    return request({
        url:'/user-info',
        method:'post',
        data
    })
}
