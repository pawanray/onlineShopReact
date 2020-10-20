
import {fetchProducts, fetchUsers} from '../service/api'
export const usersAction = () =>{
    
    return (dispatch) =>{
        fetchUsers().then(res=>{
            dispatch({type:"USERS",payload:res.data})
        })
    }
}
export const usersLogedInAction = (userLogedIn) =>{

    debugger;
   console.log('user logged in action',userLogedIn) 
    return (dispatch) =>{
            dispatch({type:"USER_LOGED_IN",payload:userLogedIn})
    }
}

export const productsAction = () =>{
     return (dispatch) =>{
         fetchProducts().then(res=>{
             dispatch({type:"PRODUCTS",payload:res.data})
         })
     }
}