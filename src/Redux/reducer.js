import * as types from "./actionType"
import { getlocaldata, setlocaldata } from "../utils/localstoragedata"

const initialState = {
    product: [],
    allProduct: [],
    sigin: [],
    isLoading: false,
    isError: false,
    cartItem: getlocaldata("mcart") || [],
    cartQty: getlocaldata("mquantity") || 0,
    isadminAuth: true,
    isuserauth: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.POST_REQUEST_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case types.POST_SUCCESS_PRODUCT:
            return {
                ...state,
                product: [...payload],
                isLoading: false
            }
        case types.POST_FAIL_PRODUCT:
            return {
                ...state,
                isError: true,
                isLoading: false
            }

        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_SUCCESS_ALLPRODUCT:
            return {
                ...state,
                isError: false,
                isLoading: false,
                allProduct: payload
            }
        case types.CART_SUCCESS:
            const item = state.allProduct.find((el) => el.id == payload.id)
            const incart = state.cartItem.find((item) => item.id == payload.id ? true : false)
            const addcart = incart ? state.cartItem.map(item => item.id == payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cartItem, { ...item, qty: 1 }]
            setlocaldata("mcart",addcart)
            // const user=state.sigin.find((el)=>el.id==1)
            // console.log(user)
            const incqty = incart ? state.cartQty : state.cartQty + 1
            setlocaldata("mquantity", incqty)
            
            return {
                ...state, isError: false, isLoading: false, cartItem:addcart,cartQty:incqty
            }
        case types.CART_REMOVE_SUCCESS:
            const remite = state.cartItem.filter((el) => el.id !== payload.id)
            setlocaldata("mcart", remite)
            const decqty = state.cartQty - 1
            setlocaldata("mquantity", decqty)
            return {
                ...state, cartItem: remite, cartQty: decqty
            }
        case types.CART_ADJUST_SUCCESS:
            const qtychng = state.cartItem.map((el) => el.id == payload.item.id ? { ...el, qty: payload.qty } : el)
            setlocaldata("mcart", qtychng)
            return {
                ...state, cartItem: qtychng
            }
        case types.GET_REQUEST_PRODUCT:
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case types.GET_SUCCESS_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [...payload]
            }
        case types.GET_FAIL_PRODUCT:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.DELETE_REQUEST_PRODUCT:
            return {
                ...state,
                isLoading: true,
            }
        case type.GET_SUCCESS_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [...payload]
            }
        case types.DELETE_FAIL_PRODUCT:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.UPDATE_REQUEST_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case types.UPDATE_SUCCESS_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [...payload]
            }
        case types.UPDATE_FAIL_PRODUCT:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_REQUEST_ADMIN:
            return {
                ...state,
                isadminAuth: false
            }
        case types.GET_SUCCESS_ADMIN:
            return {
                ...state,
                isadminAuth: true
            }
        case types.GET_FAIL_ADMIN:
            return {
                ...state,
                isadminAuth: false
            }
        case types.POST_REQUEST_SignUp:
            return {
                ...state,
                isLoading: true
            }
        case types.POST_SUCCESS_SignUp:
            return {
                ...state,
                isLoading: false,
                sigin: payload

            }
        case types.POST_FAIL_SignUp:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.POST_REQUEST_SignIn:
            return {
                ...state,
                isLoading: true
            }
        case types.POST_SUCCESS_SignIn:
            return {
                ...state,
                isLoading: false,
                sigin: [...payload]

            }
        case types.POST_FAIL_SignIn:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }

}

export { reducer }