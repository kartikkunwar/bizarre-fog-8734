import { createContext,useState } from "react";

export const PassContext=createContext();

const PassContextProvider=({children})=>{
    const [log,setLog]=useState(false)
    const changelog=()=>{
        setLog(!log)
    }
    return (
    <PassContext.Provider value={{log,changelog}}>
        {children}
    </PassContext.Provider>
    );
}

export default PassContextProvider