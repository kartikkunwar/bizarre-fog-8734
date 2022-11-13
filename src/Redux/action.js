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

