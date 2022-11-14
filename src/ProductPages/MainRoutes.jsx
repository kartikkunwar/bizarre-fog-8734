import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AllProducts from './AllProducts'
import {Landing} from "../components/landing"
import { SingleProduct } from '../components/singleproduct'
import {Cart} from '../components/cart'

const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<Landing/>} />
            <Route path="/product" element={<AllProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes