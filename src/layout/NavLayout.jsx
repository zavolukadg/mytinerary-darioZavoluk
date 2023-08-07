import NavBar from "../components/NavBar"

export default function NavLayout({children}) {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col px-20">
        <NavBar/>
        {children}
    </div>
  )
}
