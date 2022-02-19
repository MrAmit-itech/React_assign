import axios from "axios"
import { useState ,useEffect} from "react"
import {Link} from "react-router-dom"



const Homepage=()=>{
    var [data,setData] = useState([])
    
    
    console.log('i m called very begiining')
    useEffect(()=>{
        axios.get("/Teacherdata").then((res)=>setData(res.data))
    },[])

    
    const SortAgeDec=()=>{
        axios.get("/sortbyageDec").then((res)=>setData(res.data))
    }
    const SortAgeInc=()=>{
        axios.get("/sortbyageInc").then((res)=>setData(res.data))
    }
    const Filtermale=()=>{
        axios.get("/filtermale").then((res)=>setData(res.data))
    }
    const Filterfemale=()=>{
        axios.get("/filterfemale").then((res)=>setData(res.data))
    }
   

    return<>
        This is homepage
        {console.log('im called 1st',data)}
        <div className="sort">
            <div><button onClick={SortAgeDec}>sort by age decreasing</button></div>
            <div><button onClick={SortAgeInc}>sort by age Increasing</button></div>
            <div><button onClick={Filtermale}>filter male</button></div>
            <div><button onClick={Filterfemale}>filter female</button></div>

        </div>
        <div>Filter by Gender</div>

        <div className="cont" >
            {data.map((el)=>(<div className="blockcont"> 
                <h5>Teacher name: {el.first_name}</h5>
                <p>Total classes:{el.classes}</p>
                <p>Age: {el.age}</p>
                <p>gender: {el.gender}</p>
                <Link to={`/individual`} onClick={()=>{localStorage.setItem('singleteacher',JSON.stringify([el]))}}>Moredetail</Link>
            </div>))}
        </div>
    </>
}
export default Homepage