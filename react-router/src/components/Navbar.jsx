import { Link } from "react-router-dom"

export const Navbar=()=>{
    return<>
        <Link to={"/"} style={{margin:"20px"}}>Home</Link>
        <Link to={"/product"}>Products</Link>
    </>
}