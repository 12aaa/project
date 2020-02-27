<template>
  <div class="nav-bar">
    <ul >
      <li>
        <router-link to="/login"><span>登录</span> </router-link>
      </li>
      <li>
        <router-link to="/editor"><span>人员编辑界面</span> </router-link>

      </li>
      <li>
        <router-link to="/list"><span>人员列表</span> </router-link>

      </li>
      <li>
        <router-link to="/details"><span>人员详情</span> </router-link>

      </li>
      
      
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
  text-decoration: none
}
.nav-bar {
  width: 100px;
  background-color: #031329;
  padding-top:20px ;
  height: 600px;
  
}
.nav-bar ul {
  list-style: none;
}
.nav-bar ul li {
  width: 100px;
  height: 40px
  
  
}
.nav-bar ul li span{
  color:#fff;
  text-align: center;
  width: 100px;
  display: block;
}
.nav-bar ul li span:hover{
  background-color: #fff;
  color: #333;
  
}
</style>