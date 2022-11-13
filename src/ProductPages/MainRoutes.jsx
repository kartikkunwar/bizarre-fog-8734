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
import { NotFound } from '../components/PageNotFound'


const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<Landing/>} />
            <Route path="/product" element={<AllProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/admin' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/contactcard' element={<ContactAdmin/>}/>
            <Route path='/editproduct' element={<EditProduct/>}/>
            <Route path='/updateproduct' element={<DeleteProduct/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default MainRoutes