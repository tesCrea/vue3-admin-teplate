/**
 * @description: path
 * @return {Boolean}
 */
export function isExternal(path){
    return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * @description: str
 * @return {Boolean}
 */
export function isString(str){
    if(typeof str === 'string' || str instanceof String){
        return true
    }
    return false
}
/**
 * @description: 
 * @return {*}
 */
export function isArray(arg){
    if(typeof Array.isArray(arg) === 'undefined'){
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}