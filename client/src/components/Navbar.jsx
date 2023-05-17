import { useDispatch, useSelector } from "react-redux"
import { getAllCountries, restoreInitialState } from "../redux/actions";
import { Link } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import { OrderFilter } from "./OrderFilter";
import { Next } from "../icons";
import { ContinentsFilter } from "./ContinentsFilter";
import { useEffect } from "react";


export const Navbar = () => {

  const dispatch = useDispatch();

  const countries = useSelector(state => state.countriesFiltered);

  useEffect(() => {
    if (!countries.length) dispatch(getAllCountries())
  }, [countries.length, dispatch])

  const handleRestore = () => {
    dispatch(restoreInitialState());
  }




  return (
    <nav className="w-full h-full p-4 flex flex-col gap-5">


      <Link to="/">
        <button onClick={handleRestore}>
          <h1 className="font-bold">Countries</h1>
        </button>
      </Link>

      <SearchBar />

      <OrderFilter />

      <ContinentsFilter />



      <Link to="/activities" className="flex items-center justify-between group">
        <h2 className="capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">all activities</h2>
        <Next className="h-6 w-6 group-hover:drop-shadow-icon transition-all duration-300 ease-in-out" />
      </Link>

      <Link to="/new-activity" className="w-fit h-fit hover:text-sky transition-all duration-300 ease-in-out px-4">
        Create Activity
      </Link>


    </nav>
  )
}