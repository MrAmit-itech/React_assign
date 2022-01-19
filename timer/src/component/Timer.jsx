import { useEffect } from "react"
import { useState } from "react"

const Timer=()=>{
    const [data,setData] = useState([])
    var {start,end} = data
    const [timer,setTimer] = useState(0)

    
    useEffect(()=>{
        setTimer(0)
        console.log('inside useffect')
    },[])

    const Handlechange=(e)=>{
        
        const{name,value}=e.target
        

        setData({ 
            ...data,
            [name] : +(value)
        })
        
    }
    const Handleclick=()=>{
        
        let id = setInterval(()=>{
            start = start + 1
            setTimer(start)
            console.log(start,end)

            if(start === end){
                clearInterval(id)
            }else if(start === 10){
                clearInterval(id)
            }
        },1000)
      
    }

    return<>
        <div>
            <input name="start"  onChange={Handlechange} type="number" placeholder="enter Start time" />
            <input name="end"  onChange={Handlechange} type="number" placeholder="enter End time" />
            <button onClick={Handleclick}>Start Timer</button>
        </div>
        <div>
            <h2>Timer:{timer}</h2>
        </div>
    </>
}

export default Timer