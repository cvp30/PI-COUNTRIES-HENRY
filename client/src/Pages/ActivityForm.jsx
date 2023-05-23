import { useEffect, useState } from "react"
import { CircularBar } from "../components/CircularBar"
import { Left, Right } from "../icons";
import { useSelector } from "react-redux";
import { validate } from "../utils";
import { postAxios } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export const ActivityForm = () => {
  const navigate = useNavigate();
  const countries = useSelector(state => state.countriesFiltered);

  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    season: "Summer",
    duration: 1,
    idCountries: []
  })

  const [error, setError] = useState({})

  const Decrease = (event) => {
    event.preventDefault();
    if (input.duration > 1) setInput({
      ...input,
      "duration": input.duration - 1,
    })
  }

  const Increase = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      "duration": input.duration + 1,
    })
  }

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "duration" && (value === '' || value < 1)) value = 1;
    if (name === "difficulty" || name === "duration") value = parseInt(value);

    if (name === "idCountries") {
      setInput({
        ...input,
        [name]: event.target.checked ? [...input[name], value] : input[name].filter(val => val !== value),
      })
    }
    else {
      setInput({
        ...input,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      await postAxios('/activities', input)
        .then(() => {
          confetti({
            particleCount: 100,
            spread: 100,
            origin: {
              x: 0.6,
              y: 0.8
            }
          });
          setTimeout(() => {
            navigate('/activities');
          }, 3000)
        })

    }
    else {
      alert("error")
    }
  }

  useEffect(() => {
    setError(validate(input));
  }, [input])


  return (
    <section className="w-full h-fit flex flex-col items-center justify-center gap-10">
      <h2 className="capitalize tracking-wider">create activity</h2>

      <form onChange={handleChange} onSubmit={handleSubmit} method="post" className="w-[60rem] flex flex-col items-center gap-3">

        <div className="w-full h-20 flex flex-col items-center gap-2">
          <div className="w-full h-fit flex justify-center items-center gap-10">
            <label className=" opacity-70 capitalize whitespace-nowrap">name of activity:</label>
            <input
              type="text"
              name="name"
              defaultValue={input.name}
              className="w-72 p-2 outline-none bg-dark border-b-[1px] border-sky"
              autoComplete="off"
            />
          </div>

          {error.name && <p className="text-xs text-[#ff5454]">{error.name}</p>}

        </div>



        <div className="w-full md:h-32 h-fit flex md:flex-row md:flex-wrap flex-col items-center justify-center gap-10">
          <div className=" w-1/3 h-full flex">

            <div className="w-1/2 flex flex-col items-center justify-center gap-4">
              <label className="capitalize tracking-wider opacity-70">difficulty:</label>
              <input
                type="range"
                name="difficulty"
                min={1}
                max={5}
                value={input.difficulty}
                className="appearance-none w-fit h-2 outline-none rounded-full bg-sky"
              />
              {error.difficulty && <p className="text-xs text-[#ff5454]">{error.difficulty}</p>}
            </div>
            <div className="w-1/2">
              <CircularBar level={input.difficulty} />
            </div>

          </div>

          <div className="w-1/3 h-full flex justify-center items-center gap-10 md:border-l-2 md:border-dashed border-[#6b6b6b]">
            <label className="capitalize opacity-70">season:</label>
            <select
              name="season"
              defaultValue={"Summer"}
              className="w-1/2 outline-none bg-dark drop-shadow-icon rounded-xl"
            >
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
            </select>
          </div>

          <div className="w-1/3 relative flex justify-center items-center gap-3 md:border-l-2 md:border-dashed border-[#6b6b6b] ">
            <label className="w-fit tracking-wider opacity-70">duration (hrs):</label>

            <div className="w-fit h-10 flex justify-center items-center gap-4">

              <button onClick={Decrease}>
                <Left className="h-6 w-6 hover:drop-shadow-icon" />
              </button>

              <input
                type="number"
                value={input.duration}
                className="number outline-none bg-dark appearance-none shadow-md shadow-sky rounded-xl py-1 w-14 text-center"
                min={1}
                name="duration"
              />

              <button onClick={Increase}>
                <Right className="h-6 w-6 hover:drop-shadow-icon" />
              </button>
            </div>

            {error.duration && <p className="absolute w-fit bottom-5 left-10 text-xs text-[#ff5454]">{error.duration}</p>}
          </div>


        </div>

        <div className="w-full h-32 flex">

          <div className="w-full h-44 flex flex-col items-center">
            <p className="capitalize opacity-70">list of countries:</p>

            <div className="w-96 h-28 flex flex-col gap-2 overflow-y-scroll">
              {
                countries.map(country => {
                  return (
                    <label key={country.id} className="flex gap-2">
                      <input
                        type="checkbox"
                        name="idCountries"
                        value={country.id}
                        className="hover:drop-shadow-icon checked:drop-shadow-icon"
                      />
                      <div className="h-6 w-full flex items-center gap-3">
                        <img src={country.flag} className="h-full w-10" alt="" />
                        <p className="text-xs tracking-widest">{country.name}</p>
                      </div>
                    </label>
                  )
                })
              }
            </div>

            {error.idCountries && <p className=" w-fit mt-3 text-xs text-[#ff5454]">{error.idCountries}</p>}
          </div>
        </div>

        <input
          type="submit"
          value="CREATE"
          className="w-fit mt-10 px-5 py-2 rounded-xl font-bold tracking-wider hover:drop-shadow-icon hover:bg-sky hover:text-dark transition-all duration-200 ease-in-out cursor-pointer"
        />



      </form>
    </section >
  )
}