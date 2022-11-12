// import axios from "axios"
// import * as types from "./actionType"

// export const addProduct = (queryParams) => (dispatch) => {
//     dispatch({ type: types.POST_REQUEST_PRODUCT })
//     return axios.post("http://localhost:8080/product",queryParams).then((res) => {
//         // console.log(res);
//         return dispatch({type:types.POST_SUCCESS_PRODUCT,paylod:res.data})
//     }).catch((err) => {
//         return dispatch({type:types.POST_SUCCESS_PRODUCT})
//     })
// }