import { useDispatch } from "react-redux"
import { filterByContinent, restoreInitialState } from "../redux/actions";
import { Link } from "react-router-dom"
import { SearchBar } from "./SearchBar";
import { OrderFilter } from "./OrderFilter";
import { Next } from "../icons";


export const Navbar = () => {

  const dispatch = useDispatch();

  const handleRestore = () => {
    dispatch(restoreInitialState());
  }

  const handleContinent = (event) => {
    const continent = event.target.value;
    dispatch(filterByContinent(continent));
  }

  return (
    <nav className="w-full h-full p-4 flex flex-col gap-5 text-dark ">


      <Link to="/">
        <button onClick={handleRestore}>
          <h1 className="font-bold">Countries</h1>
        </button>
      </Link>

      <SearchBar />

      <OrderFilter />

      <div className="flex flex-col gap-3">
        <h2 className="capitalize">continents</h2>
        <div onClick={handleContinent} className="w-fit px-4 capitalize flex flex-col items-start gap-2">
          <button value="Americas" className="hover:text-sky transition-all duration-300 ease-in-out">americas</button>
          <button value="Europe" className="hover:text-sky transition-all duration-300 ease-in-out">europe</button>
          <button value="Asia" className="hover:text-sky transition-all duration-300 ease-in-out">asia</button>
          <button value="Africa" className="hover:text-sky transition-all duration-300 ease-in-out">africa</button>
          <button value="Oceania" className="hover:text-sky transition-all duration-300 ease-in-out">oceania</button>
        </div>
      </div>

      <Link to="activities" className="flex items-center justify-between group">
        <h2 className="capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">activities</h2>
        <Next className="h-6 w-6 group-hover:drop-shadow-icon transition-all duration-300 ease-in-out" />
      </Link>
    </nav>
  )
}