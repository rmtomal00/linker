import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../css/routes/Layout.css'


const Layout = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Layout;