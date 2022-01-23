import { useContext } from "react"
import {useParams} from "react-router-dom"
import { Mydata } from "./product"


export const Single=()=>{
    var arr = JSON.parse(localStorage.getItem('singleproduct'))
    return<>
        <div>this is single page</div>
        <div className="displaybox2">
            <>{arr.map((el)=>
            <div>
                <div id="imgbox2"><img src={el.image} /></div>
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
}