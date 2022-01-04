import Todoinput from "./todoinput";
import { useState } from "react";
import Todoitem from "./Todoitem";

const Todo=()=>{
    const[list,setList] = useState([])

    const handleclick =(data)=>{
       setList([...list,data])
    } 
    return<>
        <Todoinput getData={handleclick}/>
        {list.map(e=><Todoitem title={e}/>)}
    </>
}



export default Todo