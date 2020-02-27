<template>
  <div class="list">
    <div class="header">人员详细</div>
      <ul class="thead">
          <li>人员id</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>Email</li>
          <li>手机号</li>
          <li>操作</li>
      </ul>
      <div class="list-item">
      <ul>
          <li>{{user._id}}</li>
          <li>{{user.username}}</li>
          <li>{{user.age}}</li>
          <li>{{user.email}}</li>
          <li>{{user.phone}}</li>
          <li class="cursor"  @click="handleDetail">编辑</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

// import Vue from 'vue'
export default {
  
  name: 'PersonnelList',
 
  mounted (){
    // this.$store.dispatch('getuser')
  } ,
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleDetail() {
    this.$router.replace('/editor')
  }
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
  font-weight: 700px;
}
ul{
  list-style: none;
  width: 100%;
  display: block;
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  text-align: center
}
li{
  display: block;
  width: 15%;
  padding: 10px;
  border-bottom: 1px solid #eee
}
.cursor{
  cursor: pointer;
}
</style>