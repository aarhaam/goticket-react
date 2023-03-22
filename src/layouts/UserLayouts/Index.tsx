import Navbar from "@/components/Navbar/Index"
import { Outlet } from "react-router-dom"

const UserLayouts = () => {
    return (
        <div>
            <Navbar/> 
            <Outlet />
        </div>
    )
}

export default UserLayouts