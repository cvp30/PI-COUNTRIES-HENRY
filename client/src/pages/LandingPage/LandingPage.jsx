import { Link } from "react-router-dom";
import styles from './LandingPage.module.css'
import Planet from '../../assets/planeta.png'
const LandingPage = () => {

    return (
        <div className={styles.Landing}>
            {/* <h1>find all the information about any country and you can create new activities or review what each place offers us...</h1> */}

            <h1>HENRY COUNTRIES</h1>
            <Link to='/home'>
                <img src={Planet} alt="" />
            </Link>
        </div>
    )
}


export default LandingPage;