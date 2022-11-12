// import * as types from "./actionType"

// const initialState={
//     product:[],
//     isLoading:false,
//     isError:false
// }

// const reducer = (state=initialState,action) =>{
//     const {type,payload}=action
//     switch (type) {
//         case types.POST_REQUEST_PRODUCT:
//             return{
//                 ...state,
//                 isLoading:true
//             }               
//         case types.POST_SUCCESS_PRODUCT:
//             return{
//                 ...state,
//                 product:payload,
//                 isLoading:false
//             }
//         case types.POST_FAIL_PRODUCT:
//             return{
//                 ...state,
//                 isError:true,
//                 isLoading:false
//             }
//         default:
//             return state;
//     }

// }

// export {reducer}