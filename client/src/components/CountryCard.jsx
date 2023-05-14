import { Link } from "react-router-dom"
import { Arrow } from "../icons"

export const CountryCard = ({ id, name, continent, flag, population }) => {

  return (
    <Link to={`/${id}`} className="h-80 w-72 flex flex-col p-3 rounded-xl group shadow-sm shadow-[black] hover:shadow-sky hover:shadow-xl transition-all duration-300 ease-in-out">
      <figure className="w-full h-1/2">
        <img src={flag} className="w-full h-full rounded-md" alt="" />
      </figure>

      <div className="w-full h-1/2 flex flex-col items-center justify-around">
        <header className="uppercase tracking-wider text-xl group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">
          {name}
        </header>

        <div className="w-full flex flex-col items-center gap-2">
          <p className="flex gap-2 items-center capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">
            continent
            <Arrow className="h-6" />
            {continent}
          </p>
          <p className="flex gap-2 items-center capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">
            population
            <Arrow className="h-6" />
            {population}
          </p>

        </div>


      </div>

    </Link>
  )
}