import { useState } from "react"

const Todoinput=({getData})=>{
    const [text,setText] = useState('')
    const handlechange=(e)=>{
        setText(e.target.value)
    }
    const handleclick=()=>{
        getData(text)
    }

    return<>
        <input placeholder="plzz enter the text" type="text" onInput={handlechange} />
        <button onClick={handleclick}>Add</button>
    </>
}

export default Todoinput