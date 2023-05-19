<!--
 * @Author: 123 123.com
 * @Date: 2023-05-18 09:46:19
 * @LastEditors: 123 123.com
 * @LastEditTime: 2023-05-19 18:18:33
 * @FilePath: \vue-demo\vue-project\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <div class="login-form">
      <el-form 
      :model="form" 
      label-width="120px" 
      :rules="loginRules" 
      ref="refLoginForm">
        <el-form-item prop="form.loginForm.username" >
          <span class="svg-container-user">
          <svg-icon name="user" />
        </span>
          <el-input 
          v-model="form.name" 
          ref="refUserName"
          placeholder="输入用户名" type="text" />
        </el-form-item>
        <el-form-item prop="form.loginForm.password">
          <span class="svg-container-pwd">
          <svg-icon name="password" />
          </span>
          <el-input 
          v-model="form.loginForm.password" 
          placeholder="请输入密码" 
          :type="passwordType" 
          ref="refPassword"
          />
          <span class="show-pwd" @click="showPwd()">
            <svg-icon :name="passwordType === 'password' ? 'eye' : 'eye-open'"  />
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script setup>
import { reactive, toRefs, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/stores/user'
const validateUsername = (rules, value, callback) => {
  if (!value) {
    callback(new Error('登录名不能为空'))
  } else {
    callback()
  }
}
const validatePassword = (rules, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  } else {
    callback()
  }
}
const form = reactive({
  refLoginForm:null,
  refUsername:null,
  refPassword:null,
  //input data
  loginForm: {
    username: 'tsx',
    password: 'tsx123',
  },
  otherQuery:null,
  
  // element-plus login-rules
  loginRules: {
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  },
  passwordType: 'password'
})
// toRefs():将响应式数据中的视图层实时更新修改为只在数据层面更新，视图层不更新
// validate function
const {
  refLoginForm,
  refUsername,
  refPassword,
  loginForm,
  loginRules,
  passwordType,
} = toRefs(form)
const router = useRouter()
const route = useRoute()
// login
const onSubmit = () => {
  form.refLoginForm.validate(async(valid)=>{
    if(valid){
      const userData = useStore()
      await userData.login(form.loginForm)
      router.push({path:'/index',query:form.otherQuery})
    }else{
      console.log('error submit')
      return false
    }
  })
}
// showPwd
const showPwd = () => {
  if (form.passwordType === 'password') {
    form.passwordType = ''
  }else{
    form.passwordType = 'password'
  }

  nextTick(() => {
    form.refPassword.focus()
  })
}
</script>
<style>
.login-container {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* svg图标css */
.svg-container{ 
  padding: 6px 5px 6px 15px;
  vertical-align: middle;
  display: inline-block;
}
.svg-container-user{
  position: absolute;
  left: -30px;
  top: 0;
}
.svg-container-pwd{
  position: absolute;
  left: -30px;
  top: 0;
}
/* showPwd */
.show-pwd{
  position: absolute;
  right: -20px;
  top: 0;
  cursor: pointer;
}
</style>