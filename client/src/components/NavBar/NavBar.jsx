import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { restoreInitialState } from '../../redux/actions';

import styles from './NavBar.module.css';

const NavBar = () => {
    
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch( restoreInitialState() );
    }
    return (
        <div className={styles.NavBar}>
            <Link to='/home' className={styles.Logo}>
                HENRY<span>countries</span>
            </Link>

            <div className={styles.Menu}>
                <Link onClick={handleClick} to='/home'>Home</Link>
                
            </div>

            <Link to='/activity'>
                <button> Create Activity </button>
            </Link>

        </div>
    )
}

export default NavBar;