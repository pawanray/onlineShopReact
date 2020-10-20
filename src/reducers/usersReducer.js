

const userReducer = (state = "",usersAction) =>{
    if(usersAction.type ==="USERS"){
      return {...state, users:usersAction.payload}
    }
    return {
        ...state
    }
} 

export default userReducer