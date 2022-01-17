import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import {useNavigate} from "react-router-dom"
import { Div } from "../styles/design"

export const Login=()=>{
    const [form,setForm] = useState({})
    const {token,handleToken} = useContext(AuthContext)
    const handleChange =({target:{name,value}})=>{
        setForm({
            ...form,
            [name]:value  
        })
    } 
    const navigate = useNavigate()
    return (
        <Div>
            <input type="text" onChange={handleChange} placeholder="enter email" name="email"></input>
            <input type="text" onChange={handleChange} placeholder="enter pass" name="password"></input>
            <button onClick={()=>{handleToken("amit") ; navigate("/jobs")}}>Login</button>
        </Div>
    )
}