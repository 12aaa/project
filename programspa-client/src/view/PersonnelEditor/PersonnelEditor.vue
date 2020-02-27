<template>
<div class="container">
  <div class="header">人员详细</div>
  <div class="list">
    <h1>人员信息的完善</h1>
    <div class="info-item">
     <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
     <input type="text" v-model="name" placeholder="请输入姓名">
    </div>
    <div class="info-item">
     <span>年&nbsp;&nbsp;&nbsp;龄：</span>
     <input type="number" v-model="age" placeholder="请输入年龄" >
    </div>
    <div class="info-item">
     <span>Email：</span>
     <input type="text" v-model="email" placeholder="请输入邮箱">
    </div>
    <div class="info-item">
     <span>手机号：</span>
     <input type="number" v-model="phone" placeholder="请输入手机号">
    </div>
    
    <div class="btn" @click="updata">提交</div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
    <div style="height:100px"></div>
  </div>
</div>
  
</template>

<script>
import {requpdata} from '../../api/index'
import AlertTip from '../../components/AlertTip/AlertTip.vue'
export default {
 name:'PersonnelEditor',
 data() {
   return{
     name:'', //姓名
     age:'',  //年龄
     email:'', //邮箱
     phone:'', //手机号
     alertText:'' ,//提示信息，
     alertShow:false, 
   }
 },
 components: {
   AlertTip
 },
 computed: {
    rightEmail() {
      return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.email)
    },
    rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
  },
  methods: {
    showAlert(alertText) {
      this.alertShow = true
      this.alertText = alertText
    },

    //  编辑更新人员信息
    async updata() {
    const {name, age, email, phone} = this
      if(!this.name) {
        // 用户名必须指定
        this.showAlert('姓名必须指定')
        return
      } else if(!this.age) {
        // 密码必须指定
        this.showAlert('年龄必须指定')
        return
      } else if(!this.rightEmail) {
        // 密码必须指定
        this.showAlert('请正确输入邮箱')
        return
      }else if(!this.rightPhone) {
        // 密码必须指定
        this.showAlert('请正确输入手机号')
        return
      }
      // 发送ajax请求密码登陆
      const result = await requpdata({name, age, email, phone})
      
      // 根据结果数据处理
      if(result.code===0) {
        // 去个人中心界面
        this.$router.replace('/list')
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
input{
  outline: none;
  border: none;
  border:1px solid #eee;
  width: 300px;
  height:40px;
  padding-left:10px 
  
}
.container{
  width: 100%;
  margin:0;
  padding:0
}
.list{
  width: 600px;
  height: 600px;
  padding: 10px 100px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
}
.header{
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -2 #eee;
  padding-left: 10px;
  line-height: 50px;
  margin-bottom: 10px

}
.info-item{
  display: flex;
  justify-content: space-between;
  align-items: center
}
.btn{
  width: 300px;
  line-height: 40px;
  background-color: rgb(64, 145, 199);
  margin-top: 40px;
  text-align: center;
  color:#fff;
  margin-left: 60px
}
</style>