import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import NavbarMobile from "../components/NavbarMobile"

export const LayoutHome = () => {
  return (
    <div className="w-full flex">

      <div className="md:hidden">
        <NavbarMobile />
      </div>

      <aside className="hidden md:block w-64 h-screen shadow-xl shadow-[black] fixed">
        <Navbar />
      </aside>

      <div className="w-full h-fit p-8 pt-14 md:pt-8 md:ml-64">
        <Outlet />
      </div>

    </div>
  )
}