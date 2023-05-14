import { useDispatch } from "react-redux";
import { filterByName } from "../redux/actions";
import { useNavigate } from "react-router-dom";


export const SearchBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    dispatch(filterByName(name));
    navigate("/");
  }

  return (

    <form onSubmit={handleSubmit} className="drop-shadow-icon" >
      <input type="text" name="name" placeholder="search country..." autoComplete="off" className="text-dark outline-0 p-1 px-2 rounded-md w-full" />
    </form>
  )
}