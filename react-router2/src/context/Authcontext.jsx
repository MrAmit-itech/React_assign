import React, { createContext, useState } from "react";

export const Authcontext = createContext({token: "",HandleToken:()=>{}})

export  const AuthcontextProvider = ({children})=>{
    const [token,setToken] = useState("")

    const HandleToken=(token)=>{
        setToken(token)
    }

    return<>
        <Authcontext.Provider value={{token , HandleToken}}>{children}</Authcontext.Provider>
    </>
}