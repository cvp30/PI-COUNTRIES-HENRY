import { useLoaderData } from "react-router-dom"
import { ActivityCard } from "../components/ActivityCard";


export const CountryDetail = () => {

  const { country } = useLoaderData();

  console.log({ country })

  return (
    <section className="w-full h-full flex flex-col items-center">

      <p className="w-full h-12 text-4xl text-center text-sky drop-shadow-icon uppercase">{country.name}</p>

      <div className="w-full h-96 flex">
        <figure className="w-1/2 h-full flex items-center justify-center">
          <img src={country.flag} className="w-2/3 aspect-[3/2] drop-shadow-icon" alt="" />
        </figure>

        <div className="w-1/2 h-full flex">
          <div className="w-1/2 h-full flex flex-col justify-center gap-8">
            <h3 className="font-bold capitalize tracking-wide text-sky">code: <span className="font-normal text-base">{country.id}</span> </h3>
            <h3 className="font-bold capitalize tracking-wide text-sky">continent: <span className="font-normal text-base">{country.continent}</span> </h3>
            <h3 className="font-bold capitalize tracking-wide text-sky">capital: <span className="font-normal text-base">{country.capital}</span> </h3>
          </div>

          <div className="w-1/2 h-full flex flex-col  justify-center gap-8">
            <h3 className="font-bold capitalize tracking-wide text-sky">subregion: <span className="font-normal text-base">{country.subregion}</span> </h3>
            <h3 className="font-bold capitalize tracking-wide text-sky">area: <span className="font-normal text-base">{country.area} Km<sup>2</sup> </span> </h3>
            <h3 className="font-bold capitalize tracking-wide text-sky">population: <span className="font-normal text-base">{country.population}</span> </h3>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col">
        <h2 className="text-sky capitalize">activities:</h2>

        <div className="w-full flex gap-4 overflow-x-scroll">
          {
            !country.activities.length ?
              <p>No Activities</p>
              :
              country.activities.map(activity => {
                return (
                  <ActivityCard
                    key={activity.id}
                    id={activity.id}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                  />
                )
              })
          }
        </div>

      </div>

    </section >

  )
}