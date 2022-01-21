import {useParams} from "react-router-dom"

export const Products=()=>{
    const id = useParams()
    console.log(id)
    return<>
        <h3>product details of :</h3>
    </>
}