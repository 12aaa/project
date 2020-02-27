import {RECEIVE_USERS_LIST, CHANGE_USER} from './mutations-type'
import {reqUserList} from '../api/index'

export default {
  async getUserList({commit}) {
    const result = await reqUserList()
    const usersList = result.data
    if(result.code ===0) {
      commit(RECEIVE_USERS_LIST, {usersList} )
    }
    
  },
  // async getuser({commit}) {
  //   const result = await reqUser()
  //   const user = result.data
  //   if(result.code ===0) {
  //     commit(RECEIVE_USER, {user} )
  //   }
    
  // },
   
  goUserInfo({commit}, user) {
    commit(CHANGE_USER, {user})
  }

}