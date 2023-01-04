import { Link } from 'react-router-dom';
import PopulationIcon from '../../assets/populationn.jpg'
import styles from './CountryCard.module.css';

const CountryCard = ({ id, name, continent, flag, population }) => {
    
    return (
        <Link to={`${id}`} className={styles.CountryCard}>
            <h1>{name.toUpperCase()}</h1>
            <div style={{backgroundImage: `url(${flag})`}} className={styles.Flag}>
                <div className={styles.CountryInfo}>
                    <div className={styles.InfoContainer}>
                        <img src={PopulationIcon} alt="population" />
                        <h4>{population} inh. </h4>
                    </div>
                    <h4>Continent: {continent} </h4>

                </div>
            </div>
        </Link>
    )
}

export default CountryCard;