import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities } from "../redux/actions";
import { ActivityCard } from "../components/ActivityCard";
import { CountryCard } from "../components/CountryCard";


export const Activities = () => {

  let [countriesList, setCountriesList] = useState([]);
  const dispatch = useDispatch();
  const activities = useSelector(state => state.allActivities)


  const handleActivity = (countries) => {
    setCountriesList(countries);
  }

  useEffect(() => {
    dispatch(getAllActivities())
  }, [activities.length, dispatch])

  return (
    <section className="w-full h-full flex flex-col gap-8">
      <div className="w-full flex gap-3">
        {
          activities.map(activity => {
            return (
              <button key={activity.id} onClick={() => handleActivity(activity.countries)}>

                <ActivityCard
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                />
              </button>
            )
          })
        }
      </div>

      <div className="w-full flex gap-3">
        {
          countriesList.map(country => {
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
      </div>

    </section>
  )
}