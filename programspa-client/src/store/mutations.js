import {RECEIVE_USER,
        RECEIVE_USERS_LIST,
        CHANGE_USER
      } from './mutations-type'
        


export default {
  [RECEIVE_USERS_LIST] (state,{usersList}) {
    state.usersList = usersList
  },

  // [RECEIVE_USER] (state, {user}) {
  //   state.user = user
  // },
  
  [CHANGE_USER] (state, {user}) {
    state.user = user
  }
}