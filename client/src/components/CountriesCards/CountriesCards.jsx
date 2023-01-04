import CountryCard from '../CountryCard/CountryCard';

import styles from './CountriesCards.module.css';

const CountriesCards = ({ countries }) => {
    return (
        <div className={styles.CountriesCards}>
            {
                countries.map(country =>
                    <CountryCard
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        continent={country.continent}
                        flag={country.flag}
                        population={country.population}
                    />
                )
            }

        </div>
    )
}

export default CountriesCards;