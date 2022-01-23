import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../privateRoute/PrivateRoute"
import { Contact } from "./Contact"
import { Dashboard } from "./Dashboard"
import { Home } from "./Home"
import { Login } from "./Login"
import { Navbar } from "./Navbar"
import { Setting } from "./Setting"

export const MyRoutes=()=>{
    return<>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}></Route>
        <Route path="/setting" element={<PrivateRoute><Setting/></PrivateRoute>}></Route>
      </Routes>
    </>
}