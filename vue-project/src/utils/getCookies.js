import Cookies from 'js-cookie'

const tokenKey = 'tsx123'

export const getCookies = (key,defaultValue)=>{
    Cookies.get(key) ? JSON.parse(Cookies.get(key)) : defaultValue
}

export const setCookies = (key,value)=>{
    Cookies.set(key,JSON.parse(value))
}

export const removeCookies = (key)=>Cookies.remove(key)

export const getToken = ()=>getCookies(tokenKey)

export const setToken = ()=>setCookies(tokenKey,token)

export const removeToken = ()=>removeCookies(tokenKey)
