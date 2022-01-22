import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const Product=()=>{
    const[productdata,setProductdata] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((p)=>p.json())
        .then((data)=>setProductdata(data))
    },[]) 
    
    let {identifier} = useParams()
    if(identifier){
        var arr = productdata.filter((el)=>el.id == identifier)
        return<>
            <div className="displaybox">
            <>{arr.map((el)=>
            <div >
                <div id="imgbox"><img src={el.image} /></div>
                <div className="textbox">
                    <div><h5>{el.title}</h5></div>
                    <div>{el.category}</div>
                    <div><p>{el.description}</p></div>
                    <div style={{color:"darkred"}}>${el.price}</div>
                </div>
            </div>
            )}</>
        </div>
        </>
    }else{
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
                </div>
            </div>
            )}</>
        </div>
    </>
    }
}