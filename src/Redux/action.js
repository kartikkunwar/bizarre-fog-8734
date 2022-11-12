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

export const addproductcart=(data)=>(dispatch)=>{
    dispatch({type:types.CART_SUCCESS,payload:data})
}

