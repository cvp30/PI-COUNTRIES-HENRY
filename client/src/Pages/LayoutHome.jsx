import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const LayoutHome = () => {
  return (
    <div className="w-full flex">
      <aside className="w-64 h-screen shadow-xl shadow-[black] fixed">
        <Navbar />
      </aside>

      <div className="w-full h-fit p-8 ml-64">
        <Outlet />
      </div>

    </div>
  )
}