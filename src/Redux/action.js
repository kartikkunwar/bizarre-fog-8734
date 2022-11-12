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

