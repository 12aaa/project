<template>
<div class="login">
  <div class="header">登录</div>
   <div class="container">
     <div class="title"><h1>人员管理系统</h1> </div>
     <form action="">
       <input type="text" placeholder="用户名" v-model="username"><br/>
       <input type="password" placeholder="密码" v-model="password"><br/>
       
     </form>
     <div class="login-btn" @click="login">按钮</div>
   </div>
   <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
</div>
 
</template>

<script>
import {reqPwdLogin} from '../../api/index'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
export default {
  name: 'Login',
  data() {
    return {
     username:'', //用户名
     password:'', //密码
     alertText: '', // 提示文本
     alertShow: false, // 是否显示警告框
    }
  },
  components: {
      AlertTip,
    },
  
  methods: {
    showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
  
  //异步登录
  async login() {
   const {username, password} = this
    if(!this.username) {
      // 用户名必须指定
      this.showAlert('用户名必须指定')
      return
    } else if(!this.password) {
      // 密码必须指定
      this.showAlert('密码必须指定')
      return
    } 
    // 发送ajax请求密码登陆
    const result = await reqPwdLogin({username, password})
    
    // 根据结果数据处理
    if(result.code===0) {
      // 去个人中心界面
      this.$router.replace('/editor')
    } else {
      // 显示警告提示
      const msg = result.msg
      this.showAlert(msg)
    }
  },
    // 关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
      
  }
  },
}
</script>


<style scoped>
*{
  margin: 0;
  padding: 0
}
.login {
  width: 100%;
  position: relative;
}
.header{
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -2 #eee;
  padding-left: 10px;
  line-height: 50px;
}
.title{
  margin-top: 50px
}
.container {
  width: 400px;
  height: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  
}
input{
  outline: none;
  border:none;
  width: 300px;
  height: 40px;
  margin: 10px;
  padding-left: 10px
}
.login-btn{
  width: 300px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  background-color: blue;
  text-align: center;
  line-height: 40px;
  margin-top: 20px
}
</style>