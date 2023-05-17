
import { useDispatch } from "react-redux";
import { filterByContinent, restoreInitialState } from "../redux/actions";
import { Next } from "../icons";
import { Link, useNavigate } from "react-router-dom";

export const ContinentsFilter = () => {

  const continents = ["Americas", "Europe", "Asia", "Africa", "Oceania"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinent = (event) => {
    const continent = event.target.value;
    dispatch(filterByContinent(continent));
    navigate("/");
  }

  const handleAllContinents = () => {
    dispatch(restoreInitialState());
    navigate("/");
  }

  return (
    <div className="w-full h-fit flex flex-col gap-3">
      <button onClick={handleAllContinents} className="flex items-center justify-between group">
        <h2 className="capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">all continents</h2>
        <Next className="h-6 w-6 group-hover:drop-shadow-icon transition-all duration-300 ease-in-out" />
      </button>


      <div className="w-full px-4 capitalize flex flex-col items-start gap-2">
        {
          continents.map((continent, key) => {
            return (
              <button
                key={key}
                onClick={handleContinent}
                value={continent}
                className="w-fit h-fit hover:text-sky transition-all duration-300 ease-in-out"
              >
                {continent}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}