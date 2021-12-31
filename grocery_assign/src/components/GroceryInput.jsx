import { useState } from "react"

const Groceryinput =({getdata,listinarr})=>{
    const[data,setData] = useState('')

    const Handlechange=(e)=>{
        setData(e.target.value)
    }
    const Handleclick=()=>{
        console.log('received after click',data) 
        const func = getdata   //getdata value is actually === todo() //
        func(data)
    }
    const Handlearr=()=>{
        listinarr()
    }
    
    return<>
        <input onChange={Handlechange} placeholder="plz enter the grocery name" type="text" />
        <button onClick={Handleclick}>Add Me</button>
        <button onClick={Handlearr}>click Me</button>
    </>
}

export default Groceryinput