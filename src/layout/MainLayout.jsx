import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout({children}) {
  return (
    <div className="min-h-screen bg-red-200 flex flex-col">
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
