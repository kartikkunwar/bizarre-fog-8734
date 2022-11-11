import * as types from "./actionType"

const initialState={
    product:[],
    isLoading:false,
    isError:false,
    cartItem:[],
    cartQty:0,
    cartTotal:0
}

const reducer = (state=initialState,action) =>{
    const {type,payload}=action
    switch (type) {
        case types.POST_REQUEST_PRODUCT:
            return{
                ...state,
                isLoading:true
            }               
        case types.POST_SUCCESS_PRODUCT:
            return{
                ...state,
                product:[...payload],
                isLoading:false
            }
        case types.POST_FAIL_PRODUCT:
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        case types.CART_SUCCESS:
            return{
                ...state,isError:false,isLoading:false,cartItem:[...state.cartItem,payload],cartQty:state.cartQty+1,cartTotal:state.cartTotal+Math.floor(Number(payload.price-(payload.price*(payload.discount/100))))
            }    
        default:
            return state;
    }

}

export {reducer}