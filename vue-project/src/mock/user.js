import { adminRoutes, editorRoutes } from '@/mock/routes'
import { cloneDeep as _cloneDeep } from 'lodash'

const tokens = {
    admin:{
        token:'admin-token'
    },
    editor:{
        token:'editor-token'
    }
}
const users = {
    'admin-token':{
        roles:['admin'],
        description:'super administartor',
        name:'Super Admin',
        routes:_cloneDeep(),
    },
    'editor-token':{
        roles:['editor'],
        description:'an editor ',
        name:'editor',
        routes:_cloneDeep(),
    }

}
export default [
    {
        url:'/user-login',
        method:'post',
        response:(config)=>{
            const {username} = config.body
            const token = tokens[username]
            return {
                code:20000,
                data:token,
                msg:''
            }
        }
    },
    {
        url:'/getUserInfo',
        method:'post',
        response:(config)=>{
            const {token} = config.body
            const info = users[token]
            return {
                code:20000,
                data:info,
                msg:''
            }
        }
    }
]