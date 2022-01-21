import React from "react"
import { useState } from "react"



export const Form=()=>{

    const [data,setData] = useState({})
    const [tokendata,setTokendata] = useState("")

    const Handlechange=(e)=>{
        const{name,value} = e.target
        setData({
            ...data,
            [name] : value
        })
    }

    const Handlesubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        async function Check(){
            var res = await fetch('https://reqres.in/api/register',{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
               
            })
            var response = await res.json()
            console.log(await response)
            const Token = response.token
            setTokendata(response.token)

            
        }
        Check()
    }



    
    return<>
        <form onSubmit={Handlesubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>email:</td>
                        <td><input name="email" onChange={Handlechange} placeholder="enter email" type="email" /></td>
                    </tr>
                    <tr>
                        <td>password:</td>
                        <td><input name="password" onChange={Handlechange} placeholder="enter password" type="password" /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
        <h3>{tokendata}</h3>
    </>
}