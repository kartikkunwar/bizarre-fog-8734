import axios from "axios"
import * as types from "./actionType"

export const addProduct = (queryParams) => (dispatch) => {
    dispatch({ type: types.POST_REQUEST_PRODUCT })
    return axios.post("http://localhost:8080/product",queryParams).then((res) => {
        // console.log(res);
        return dispatch({type:types.POST_SUCCESS_PRODUCT,paylod:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_SUCCESS_PRODUCT})
    })
}

export const getProduct = () => (dispatch) => {
    dispatch({type:types.GET_REQUEST_PRODUCT})
    return axios.get(`http://localhost:8080/product`)
    .then((res)=>{
        return dispatch({type:types.GET_SUCCESS_PRODUCT,payload:res.data})
    }).catch((err)=>{
        return dispatch({type:types.GET_FAIL_PRODUCT})
    })
} 

export const deleteProduct= (id) => (dispatch)=>{
    dispatch({type:types.DELETE_REQUEST_PRODUCT})
    return axios.delete(`http://localhost:8080/product/${id}`)
    .then((res)=>{
        dispatch({type:types.DELETE_SUCCESS_PRODUCT,payload:res.data})
        // console.log(res.data);
    })
    .catch((err)=>{
        dispatch({type:types.DELETE_FAIL_PRODUCT})
        // console.log(err);
    })
}

export const updateProduct = (data) => (dispatch) =>{
    dispatch({type:types.UPDATE_REQUEST_PRODUCT})
    return axios.patch(`http://localhost:8080/product/${data.id}`,data)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const getProductRequest = ()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

 export  const getProductList = (queryParams) => (dispatch)=>{
  
    // console.log(queryParams);
    dispatch(getProductRequest)

    return axios.get("http://localhost:8080/product",queryParams).then((res)=>{
        dispatch({
            type:types.GET_PRODUCTS_SUCCESS,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })

}



export const addproductcart=(data)=>(dispatch)=>{
    dispatch({type:types.CART_SUCCESS,payload:data})
}
export const removeProductCart=(item)=>(dispatch)=>{
    dispatch({type:types.CART_REMOVE_SUCCESS,payload:item})
}

export const adjustItemqty=(item,qty)=>(dispatch)=>{
    dispatch({type:types.CART_ADJUST_SUCCESS,payload:{item,qty}})
}

export const getAllProduct=(dispatch)=>{
   return axios.get("http://localhost:8080/product")
   .then((res)=>dispatch({type:types.GET_SUCCESS_ALLPRODUCT,payload:res.data}))
   .catch((err)=>console.log(err))

}

export const adminLoginRequest = (dispatch) =>{
    return dispatch({type:types.GET_REQUEST_ADMIN})
}

export const adminLoginSuccess = (dispatch) =>{
    return dispatch({type:types.GET_SUCCESS_ADMIN})
}

export const adminLoginFail = (dispatch) =>{
    return dispatch({type:types.GET_FAIL_ADMIN})
}

export const UserRegister = (params) => (dispatch) => {
    dispatch({ type: types.POST_REQUEST_SignUp })
    return axios.post("http://localhost:8080/sigin", params).then((res) => {
        //  console.log(res.data);
        return dispatch({type:types.POST_SUCCESS_SignUp,paylod:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_FAIL_SignUp})
    })
}

export const UserSignIn = () => (dispatch) => {
    // dispatch({ type: types.POST_REQUEST_SignIn })
    return axios.get("http://localhost:8080/sigin").then((res) => {
        //  console.log(res);
        return dispatch({type:types.POST_SUCCESS_SignIn,payload:res.data})
    }).catch((err) => {
        return dispatch({type:types.POST_FAIL_SignIn})
    })
} 
