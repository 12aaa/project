<template>
  <div class="list">
    <div class="header">人员列表</div>
    <ul class="thead">
      <li>人员id</li>
      <li>姓名</li>
      <li>年龄</li>
      <li>操作</li>
    </ul>
    <div class="list-item" v-for="(user,index) in reverseUsersList" :key="index" @click="reverse">
      <ul>
        <li>{{user._id? user._id : '未填'}}</li>
        <li>{{user.name? user.name : '未填'}}</li>
        <li>{{user.age? user.age : '未填'}}</li>
        <li v-if="user" class="cursor" @click="handleDetail(user)">查看详细</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data() {
    return {
      user: {}
      // userid:'',// 人员id
      // name:'',// 姓名
      // age:'',// 年龄
      // email:'',// Email
      // phone:''// 手机号

    }
  },
  
  mounted (){
    this.getUserList
    
  },
  methods:{
    handleDetail(user) {
      this.$router.replace('/details')

      this.user.userid = user._id
      this.user.name = user.name
      this.user.age = user.age
      this.user.email = user.email
      this.user.phone = user.phone

      // console.log(this.user);

      this.$store.dispatch('goUserInfo', user)
      //  console.log(this.userid);
      // console.log(reserve(this.usersList));
    },
    
      reverse() {
        this.usersList.reverse()
        console.log(this.usersLists);
        
      }
    
  },
  computed: {
    ...mapActions(['getUserList']),
    ...mapState(['usersList']),
    reverseUsersList() {
      return this.usersList.reverse();
  }

    
  },
  created() {
    
  }
  
}
</script>

<style scoped>
.list{
  display: flex;
  flex-direction: column;
  width: 100%;
  
}
.header{
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -2 #eee;
  padding-left: 10px;
  line-height: 50px;
  margin-bottom: 10px

}
.thead{
  font-size: 20px;
  font-weight: 700;
}
ul{
  list-style: none;
  width: 100%;
  display: block;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: #fff;
}
li{
  display: block;
  width: 25%;
  padding: 10px;
  border-bottom: 1px solid #eee
}
.cursor{
  cursor: pointer;
}
</style>