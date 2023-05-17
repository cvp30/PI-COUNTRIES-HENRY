import { useSelector } from "react-redux"
import { CountryCard } from "../components/CountryCard";


export const Home = () => {
  const countries = useSelector(state => state.countriesFiltered);


  return (
    <section className="w-full h-full flex flex-wrap justify-between gap-y-16 ">
      {
        countries.map(country => {
          return (
            <CountryCard
              key={country.id}
              id={country.id}
              name={country.name}
              continent={country.continent}
              flag={country.flag}
              population={country.population}
            />
          )
        })
      }

    </section>
  )
} 