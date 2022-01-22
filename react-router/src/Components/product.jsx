import { useState } from "react"
import { createContext } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Single } from "./singleproduct"
       

export const Mydata = createContext()
export const Mydataprovider=({children})=>{

    return<>
        <Mydata.Provider value={"hello"}>{children}</Mydata.Provider>
    </>
}


export const Product=()=>{
    const[productdata,setProductdata] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((p)=>p.json())
        .then((data)=>setProductdata(data))
    },[]) 

    return<>
        <h3>This is products page</h3>
        <div className="displaybox">
            <>{productdata.map((el)=>
            <div >

                <div id="imgbox"><img src={el.image} /></div>
                <div className="textbox">
                    <div><h5>{el.title}</h5></div>
                    <div>{el.category}</div>
                    <div style={{color:"darkred"}}>${el.price}</div>
                    <Link to={`/product/${el.id}`}>Moredetail</Link>
                    <>{()=>{localStorage.setItem('cartvalue',JSON.stringify([]))}}</>               
                </div>
            </div>
            )}</>
        </div>
    </>
}