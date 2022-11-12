import { Route, Routes } from "react-router-dom"
import {Landing} from '../components/landing'
import {SingleProduct} from "../components/singleproduct"
import { Cart } from "../components/cart"

export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/product/:id' element={<SingleProduct/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<h1>page not found</h1>}/>
            </Routes>
        </div>
    )
}