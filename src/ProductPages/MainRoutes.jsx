import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './AllProducts'
import Login from "../Admin/Login/Login"
import Dashboard from "../Admin/Dashboard/Dashboard"
import ContactAdmin from '../components/ContactAdmin'
import EditProduct from '../Admin/Products/EditProduct'
import AddProduct from "../Admin/Products/AddProduct"
import {Landing} from "../components/landing"
import {SingleProduct} from "../components/singleproduct"
import {Cart} from "../components/cart"
import DeleteProduct from "../Admin/Products/DeleteProduct"
import { PrivateRouteAdmin } from '../components/PrivateRouteAdmin'
import { NotFound } from '../components/PageNotFound'
import SignIn from  "../components/SignIn"
import SignUp from  "../components/SignUp"
import { PrivateRoute } from '../kartikcontext/privateroute'
import Updateuser from '../Admin/User/Updateuser'
import EditUser from '../Admin/User/EditUser'
import { Checkout } from '../components/checkout'
import { Payment } from '../components/cartpayment'

const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<Landing/>}/>
            <Route path="/product" element={<AllProducts />}/>
            <Route path="/product/:id" element={<SingleProduct />}/>
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}/>
            <Route path='/admin' element={<Login/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/contactcard' element={<PrivateRouteAdmin> <ContactAdmin/> </PrivateRouteAdmin>}/>
            <Route path='/editproduct' element={<PrivateRouteAdmin> <EditProduct/> </PrivateRouteAdmin>}/>
            <Route path='/updateproduct' element={<PrivateRouteAdmin> <DeleteProduct/> </PrivateRouteAdmin>}/>
            <Route path='/addproduct' element={<PrivateRouteAdmin> <AddProduct/> </PrivateRouteAdmin>}/>
            <Route path='/updateuser' element={<PrivateRouteAdmin> <Updateuser/> </PrivateRouteAdmin>}/>
            <Route path='/edituser' element={<PrivateRouteAdmin> <EditUser/> </PrivateRouteAdmin>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default MainRoutes