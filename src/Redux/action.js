import axios from "axios"
import * as types from "./actionType"

export const addProduct = (params) => (dispatch) => {
    dispatch({ type: types.POST_REQUEST_PRODUCT })
    return axios.post("http://localhost:8080/product", params).then((res) => {
        // console.log(res);
        return dispatch({type:types.POST_SUCCESS_PRODUCT,paylod:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_SUCCESS_PRODUCT})
    })
}
export const UserRegister = (params) => (dispatch) => {
    dispatch({ type: types.POST_REQUEST_SignUp })
    return axios.post("http://localhost:8080/sigin", params).then((res) => {
         console.log(res);
        return dispatch({type:types.POST_SUCCESS_SignUp,paylod:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_FAIL_SignUp})
    })
}

export const UserSignIn = (params) => (dispatch) => {
    dispatch({ type: types.POST_REQUEST_SignIn })
    return axios.post("http://localhost:8080/sigin", params).then((res) => {
         console.log(res);
        return dispatch({type:types.POST_SUCCESS_SignIn,paylod:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_FAIL_SignIn})
    })
}


// export const addproductcart=(data)=>(dispatch)=>{
    
//     dispatch({type:types.CART_SUCCESS,payload:data})
// }