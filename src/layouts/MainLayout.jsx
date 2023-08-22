import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col ">
        <NavBar/>
          <Outlet/>
        <Footer/>
    </div>
  )
}
