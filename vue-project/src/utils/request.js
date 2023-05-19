import axios from 'axios'
import { useStore } from '@/stores/user'
import  { getCookies } from './getCookies'
// 普通请求封装
const request = axios.create({
    baseUrl:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
})
// 配置interceptor,在请求发送前进行函数处理
request.interceptors.request.use((config)=>{
    const store = useStore()
    if(store.token){
        config.headers['X-Token'] = getCookies('tsx123')
    }
    return config
},
(err)=>{
    return Promise.reject(err)
}
)
// 在响应前进行拦截
request.interceptors.response.use(()=>{

})
export {request}