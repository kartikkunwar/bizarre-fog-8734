import * as types from "./actionType";

const initialState = {
    productList: [],
    isLoading:false,
    isError:false
}

const reducer = (oldState = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return{
                ...oldState, 
                isLoading:true,
            }

            case types.GET_PRODUCTS_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                productList:payload
            }

            case types.GET_PRODUCTS_FAILURE:
            return{
                ...oldState,
                isLoading:false,
               isError:true
            }

            default:
                return oldState
    }
}

export {reducer}