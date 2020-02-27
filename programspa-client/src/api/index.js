import ajax from './ajax'
const BASE_URL = '/api'
// 1用户名密码登陆
export const reqPwdLogin = ({username, password}) => ajax(BASE_URL+'/login',{username, password}, 'POST')
//2编辑人员信息
export const requpdata = ({name,age, email, phone}) => ajax(BASE_URL+'/updata', {name,age, email, phone}, 'POST')

//3用户列表
export const reqUserList = () => ajax(BASE_URL+'/userList')
//4用户的信息
// export const reqUser = () => ajax(BASE_URL+'/user')