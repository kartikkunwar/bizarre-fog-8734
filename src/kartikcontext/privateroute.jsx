import React from "react";
import { Navigate } from "react-router-dom";
import { getlocaldata } from "../utils/localstoragedata";
import { PassContext } from "./passcontext";

 export const PrivateRoute=({children})=>{
  const {log}=React.useContext(PassContext)
    
        if(!log){
            return <Navigate to='/signin'/>;
        }
      return children;
}