import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function NavLayout() {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col px-10">
        <NavBar/>
        <Outlet/>
    </div>
  )
}
