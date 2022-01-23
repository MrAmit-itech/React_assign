import {Link} from "react-router-dom"

export const Navbar=()=>{
    return<>
        <Link  to={"/"}>Home</Link>
        <Link style={{margin:"20px"}} to={"/login"}>Login</Link>
        <Link style={{margin:"20px"}} to={"/dashboard"}>Dashboard</Link>
        <Link style={{margin:"20px"}} to={"/setting"}>Setting</Link>

        <Link to={"contact"}>Contact</Link>
    </>
}