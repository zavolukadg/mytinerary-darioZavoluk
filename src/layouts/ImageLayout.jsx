import FooterImage from "../components/FooterImage"
import NavBarImage from "../components/NavBarImage"
import { Outlet } from "react-router-dom"

export default function ImageLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[url(../img/america/cancun.jpg)] bg-cover">
        <NavBarImage/>
          <Outlet/>
        <FooterImage/>
    </div>
  )
}
