import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities } from "../redux/actions";
import { ActivityCard } from "../components/ActivityCard";
import { CountryCard } from "../components/CountryCard";
import { SwiperSlide } from "swiper/react";
import { Slider } from "../components/Slider";

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
    <section className="w-[65rem] h-full flex flex-col gap-3">
      <Slider>
        {
          activities.map(activity => {
            return (
              <SwiperSlide key={activity.id}>
                <button onClick={() => handleActivity(activity.countries)}>

                  <ActivityCard
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                  />
                </button>
              </SwiperSlide>
            )
          })
        }
      </Slider>

      <hr className="border-dashed border-sky drop-shadow-icon" />

      <Slider>
        {
          countriesList.map(country => {
            return (
              <SwiperSlide key={country.id}>
                <CountryCard
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  continent={country.continent}
                  flag={country.flag}
                  population={country.population}
                />
              </SwiperSlide>
            )
          })
        }
      </Slider>

      {/* <div className="w-full flex gap-3 overflow-x-scroll">
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
      </div> */}

    </section>
  )
}