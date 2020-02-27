import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../view/Login/Login')
const PersonnelDetails = () => import('../view/PersonnelDetails/PersonnelDetails')
const PersonnelEditor = () => import('../view/PersonnelEditor/PersonnelEditor')
const PersonnelList = () => import('../view/PersonnelList/PersonnelList')

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/details',
      component:PersonnelDetails
    },
    {
      path:'/editor',
      component:PersonnelEditor
    },
    {
      path:'/list',
      component:PersonnelList
    },
  ],
  mode:'history'
})

export default router