import { Route,Routes } from "react-router-dom"
import { SingleProduct } from "../components/singleproduct"
import { Landing } from "../components/landing"


export const Allroute=()=>{
   return(
        <Routes>
           <Route path='/' element={<Landing/>}/>
           <Route path="/product/:id" element={<SingleProduct/>}/>
           <Route path="*" element={<h1>page not found</h1>}/>
        </Routes>
        )
}