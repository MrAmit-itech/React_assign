import { useContext } from "react"
import { Navigate, Route } from "react-router-dom"
import { Authcontext } from "../context/Authcontext"

export const PrivateRoute=({children})=>{
    const {token} = useContext(Authcontext)

    if(!token){    
        return <>
        <Navigate to={"/login"}></Navigate>
        </>
    }
    return<>
        {children}
    </>
}