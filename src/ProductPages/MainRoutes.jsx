import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomeComponents/HomePage'
import AllProducts from './AllProducts'

const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<AllProducts />} />
            <Route path="/home" element={<HomePage />} />

            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes