import { useDispatch } from "react-redux"
import { SortCountries } from "../redux/actions";

export const OrderFilter = () => {

  const options = {
    1: {
      sort: "name",
      order: "asc",
    },
    2: {
      sort: "name",
      order: "desc",
    },
    3: {
      sort: "population",
      order: "asc",
    },
    4: {
      sort: "population",
      order: "desc",
    },
  }

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const option = event.target.value;
    dispatch(SortCountries(options[option]));
  }

  return (
    <select defaultValue={"1"} onChange={handleOrder} className="drop-shadow-icon tracking-wider px-2 outline-none bg-dark text-[white] rounded-md ">
      <option value="1">by Name(asc)</option>
      <option value="2">by Name(desc)</option>
      <option value="3">by population(asc)</option>
      <option value="4">by population(desc)</option>
    </select>
  )
}
