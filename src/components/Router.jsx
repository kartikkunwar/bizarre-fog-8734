import React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from '../Admin/Dashboard/Dashboard';
import DeleteProduct from '../Admin/Products/DeleteProduct';
import EditProduct from '../Admin/Products/EditProduct';
import AddProduct from "../Admin/Products/AddProduct"
import ContactAdmin from "../components/ContactAdmin"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/contactcard' element={<ContactAdmin/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/updateproduct' element={<DeleteProduct/>}/>
            <Route path='/editproduct' element={<EditProduct/>}/>
        </Routes>
    );
};

export default Router;