import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomeComponents/HomePage'
import AllProducts from './AllProducts'
import Login from "../Admin/Login/Login"
import Dashboard from "../Admin/Dashboard/Dashboard"
import ContactAdmin from '../components/ContactAdmin'
import EditProduct from '../Admin/Products/EditProduct'
import UserProducts from '../ProductComponents/UserProducts'
import AddProduct from "../Admin/Products/AddProduct"
import {Landing} from "../components/landing"
import {SingleProduct} from "../components/singleproduct"
import {Cart} from "../components/cart"
import DeleteProduct from "../Admin/Products/DeleteProduct"
import { PrivateRouteAdmin } from '../components/PrivateRouteAdmin'

const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<Landing/>} />
            <Route path="/product" element={<AllProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/admin' element={<Login/>}/>
            <Route path='/dashboard' element={ <Dashboard/> }/>
            <Route path='/contactcard' element={<PrivateRouteAdmin> <ContactAdmin/> </PrivateRouteAdmin>}/>
            <Route path='/editproduct' element={<PrivateRouteAdmin> <EditProduct/> </PrivateRouteAdmin>}/>
            <Route path='/updateproduct' element={<PrivateRouteAdmin> <DeleteProduct/> </PrivateRouteAdmin>}/>
            <Route path='/addproduct' element={<PrivateRouteAdmin> <AddProduct/> </PrivateRouteAdmin>}/>
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes