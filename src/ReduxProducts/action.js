import * as types from "./actionType";
import axios from "axios"

const getProductRequest = ()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

const getProductList = (queryParams) => (dispatch)=>{
  
    console.log(queryParams);
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

export  {getProductList};