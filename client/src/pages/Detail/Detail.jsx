import { useLoaderData } from 'react-router-dom';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import styles from './Detail.module.css';

const europe = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/1200px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png'
const asia = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/1200px-Asia_%28orthographic_projection%29.svg.png';
const americas = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/640px-Americas_%28orthographic_projection%29.svg.png';
const africa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1200px-Africa_%28orthographic_projection%29.svg.png';
const australia = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/1200px-Australia-New_Guinea_%28orthographic_projection%29.svg.png';

const areaIcon = 'http://cdn.onlinewebfonts.com/svg/img_467095.png';
const populationIcon = 'https://static.thenounproject.com/png/2367056-200.png';
const capital = 'https://icon-library.com/images/capital-icon/capital-icon-4.jpg';

const Detail = () => {

    const { country } = useLoaderData();

    const continents = {
        'Europe': europe,
        'Asia': asia,
        'Americas': americas,
        'Africa': africa,
        'Australia': australia
    }

    return (
        <div className={styles.Detail}>

            <h1>{country.name}</h1>


            <div className={styles.CountryData}>
                <img src={country.flag} alt="flag" />

                <div className={styles.DataContainer}>
                    <div className={styles.Data}>
                        <img src={continents[`${country.continent}`]} alt="" />
                        <h3>{country.continent}</h3>
                    </div>

                    <div className={styles.Data}>
                        <img src={areaIcon} alt="" />
                        <h3>{country.area} Km<sup>2</sup></h3>
                    </div>

                    <div className={styles.Data}>
                        <img src={populationIcon} alt="" />
                        <h3>{country.population} Inh.</h3>
                    </div>
                    <div className={styles.Data}>
                        <img src={capital} alt="" />
                        <ul>
                            {
                                country.capital.map((capital, key) => {
                                    return (
                                        <li key={key}> <h3>- {capital}</h3> </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.Data}>
                        <h2>Subregion:</h2>
                        <h3>{country.subregion}</h3>
                    </div>
                </div>
            </div>

            <div className={styles.ActivitiesInfo}>
                <h2>Activities:</h2>

                <div className={styles.ActivitiesContainer}>
                    {
                        country.activities.length ?
                            country.activities.map(activity => {
                                return (
                                    <ActivityCard
                                        name={activity.name}
                                        difficulty={activity.difficulty}
                                        duration={activity.duration}
                                        season={activity.season}
                                    />
                                )
                            })
                            :
                            <p>no registered activities</p>
                    }
                </div>
            </div>
        </div>
    )
}


export default Detail;