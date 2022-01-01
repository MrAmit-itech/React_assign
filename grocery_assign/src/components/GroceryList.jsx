import { useState } from "react"
import Groceryinput from "./GroceryInput"
import Final from "./Grocery"
import { nanoid } from "nanoid"


const Grocerylist=()=>{
    const [list,setList] = useState([])
    const Todo=(data)=>{
       console.log('received in parent',data)
       const payload={
           title:data,
           status:false,
           id:nanoid(6)
       }

       setList([...list,payload])
    }
    console.log('list',list)

    const handletoggle=(id)=>{
        var arr = list.filter((el)=>el.id != id)
        setList(arr)
    }
   return<>
        <Groceryinput getdata={Todo}  />
        {list.map((e)=> <Final key={e.id} {...e} handletoggle={handletoggle}/>)}
   </>
}
export default Grocerylist