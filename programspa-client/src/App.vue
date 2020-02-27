<template>
  <div id="app">
    <div class="header"></div>
    <div class="navAndContent">
      <nav-bar/>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar'
export default {
  name: 'App',
  components:{ 
    NavBar,
    
  }

}
</script>

<style>
body{
  background-color: #ccc;
}
*{
  margin: 0;
  padding: 0
}
.header {
  width: 100%;
  height: 50px;
  background-color: #031329;
}
.navAndContent{
  display: flex;

}
</style>