/*
 * @Author: 123 123.com
 * @Date: 2023-05-17 15:41:19
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-18 18:25:55
 * @FilePath: \vue-demo\vue-project\src\stores\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {defineStore} from 'pinia'
import {setToken,getToken,removeToken} from '@/utils/getCookies.js'
import { addUserLogin,getUserInfo } from '@/api/user.js'
export const useStore = defineStore('useStore',{
    state:()=>{
        return {
            token:getToken(),
            userInfo:null,
            roles:[],
        }
    },
    getters:{

    },
    actions:{
        login(userInfo){
            const {username,password} = userInfo
            return new Promise((resolve,reject)=>{
                addUserLogin({username:username.trim(),password:password})
                .then(
                    (res)=>{
                        const {data} = res
                        this.token = data.token
                        setToken(data.token)
                        resolve()
                    }
                )
                .catch((err)=>{
                    reject(err)
                })
            })
        }
    }
})