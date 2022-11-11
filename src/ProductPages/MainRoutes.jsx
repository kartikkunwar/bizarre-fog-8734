import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './AllProducts'

const MainRoutes = () => {
    return (
        <Routes>    
            <Route path="/" element={<AllProducts />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export default MainRoutes