import {Link} from "react-router-dom"

export const Navbar=()=>{
    return<>
        <Link to="/">Home</Link>
        <Link to="/about" style={{margin:"20px"}}>About</Link>
        <Link to="/contact">Contact</Link>
    </>
}