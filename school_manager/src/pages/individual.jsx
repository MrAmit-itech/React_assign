import { useState } from "react"

const Individual=()=>{
    var [data,setData] = useState(null)
    var singleteacher = JSON.parse(localStorage.getItem("singleteacher"))
    

    return<>
        <h1>This is individual teacher page</h1>
        <div>
            {singleteacher.map((el)=>(
                <div className="individualBlock">
                    <h5>name:  {el.first_name}</h5>
                    <p>email:  {el.email}</p>
                    <p>gender:  {el.gender}</p>
                    <p>classes:  {el.classes}</p>
                </div>
                
            ))}
        </div>
    </>
}
export default Individual