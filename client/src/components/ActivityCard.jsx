
// {
//   "name": "act1",
//   "difficulty":3,
//   "duration":3,
//   "season":"Summer",
// }
// import Summer from "../assets/seasons/Summer.png"
// import Autumn from "../assets/seasons/Autumn.png"
// import Spring from "../assets/seasons/Spring.png"
// import Winter from "../assets/seasons/Winter.png"
import { Autumn, Clock, Summer, Spring, Winter } from "../icons"

export const ActivityCard = ({ name, difficulty, duration, season }) => {

  const seasons = {
    'Summer': <Summer />,
    'Autumn': <Autumn />,
    'Winter': <Winter />,
    'Spring': <Spring />,
  }

  return (
    <div className="w-80 h-36 p-2 shadow-sm shadow-sky">
      <p className="h-1/5 w-full uppercase tracking-wider">{name}</p>

      <div className="h-4/5 w-full flex">
        <div className="flex flex-col justify-center items-center h-full w-1/3">
          <Clock className="h-8 drop-shadow-icon" stroke="#00a8eb" />
          <p className="opacity-70">{duration} hrs.</p>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-1/3">
          <p className="h-8 w-8 text-sky text-center text-3xl drop-shadow-icon">lvl</p>
          <p className="opacity-70">{difficulty}</p>
        </div>

        <div className="flex flex-col justify-center items-center h-full w-1/3">
          {
            seasons[season]
          }
          <p className="opacity-70">{season}</p>
        </div>

      </div>



    </div >

    // <div className="h-32 w-32 hover:h-36 hover:w-36 transition-all duration-200 ease-in-out border-sky drop-shadow-icon border-r-2 border-l-2 border-b-2 rounded-full ">
    //   card
    // </div>
  )
}