import * as types from "./actionType"

const initialState={
    product:[],
    sigin:[],
    isLoading:false,
    isError:false
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
                product:payload,
                isLoading:false
            }
        case types.POST_FAIL_PRODUCT:
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        case types.POST_REQUEST_SignUp:
            return{
                ...state,
                isLoading:true
            }
            case types.POST_SUCCESS_SignUp:
            return{
                ...state,
                isLoading:false,
                sigin:[...payload]
                
            }
            case types.POST_FAIL_SignUp:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
            case types.POST_REQUEST_SignIn:
                return{
                    ...state,
                    isLoading:true
                }
                case types.POST_SUCCESS_SignIn:
                return{
                    ...state,
                    isLoading:false,
                    sigin:[...payload]
                    
                }
                case types.POST_FAIL_SignIn:
                return{
                    ...state,
                    isLoading:false,
                    isError:true
                }




        default:
            return state;
    }


}

export {reducer}