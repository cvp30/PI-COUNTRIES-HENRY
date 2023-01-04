// import styles from './LayoutHome.module.css';
import NavBar from '../../components/NavBar/NavBar'

import { Outlet } from "react-router-dom"



const LayoutHome = () => {
    return (
        <div>
            <NavBar />

            <Outlet />
        </div>
    )
}

export default LayoutHome;