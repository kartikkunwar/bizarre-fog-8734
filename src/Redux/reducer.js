import * as types from "./actionType"

const initialState={
    product:[],
    allProduct:[],
    isLoading:false,
    isError:false,
    cartItem:[],
    cartQty:0,
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
        case types.GET_SUCCESS_ALLPRODUCT:
            return {
                ...state,
                isError:false,
                isLoading:false,
                allProduct:payload
            }  
        case types.CART_SUCCESS:
            const item=state.allProduct.find((el)=>el.id==payload.id)
            const incart=state.cartItem.find((item)=>item.id==payload.id?true:false)
            return{
                ...state,isError:false,isLoading:false,cartItem:incart?state.cartItem.map(item=>item.id==payload.id?{...item,qty:item.qty+1}:item):[...state.cartItem,{...item,qty:1}],cartQty:state.cartQty+1
            } 
        case types.CART_REMOVE_SUCCESS:
            return{
                ...state,cartItem:state.cartItem.filter((el)=>el.id!==payload.id),cartQty:state.cartQty-1
            } 
        case types.CART_ADJUST_SUCCESS:
            return{
                ...state,cartItem:state.cartItem.map((el)=>el.id==payload.item.id?{...el,qty:payload.qty}:el)
            }
        default:
            return state;
    }

}

export {reducer}