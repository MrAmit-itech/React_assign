import { useState } from "react"

export const Login=()=>{
    const [data,setData] = useState({})

    const Handlechange=(e)=>{
        const {name,value} = e.target

        setData({
            ...data,
            [name]:value
        })
    }
    const Handleclick=()=>{
        console.log(data)
    }


    return<>
        <div style={{display:"flex",flexDirection:"column",width:"300px",marginTop:"40px"}}>
            <input onChange={Handlechange} type="email" name="email" placeholder="enter id" />
            <input onChange={Handlechange} type="password" name="password" placeholder="enter password" />
            <button onClick={Handleclick}>Submit</button>
        </div>
    </>
}