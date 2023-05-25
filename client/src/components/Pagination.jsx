import { PrevPage, NextPage } from "../icons"


export const Pagination = ({ prev, next, pages, currPage, changePage }) => {

  const arraySize = 5;

  let start = currPage - (arraySize - 1) / 2 > 0 ? currPage - (arraySize - 1) / 2 : 1;
  let end = start + (arraySize - 1) <= pages ? start + (arraySize - 1) : pages;

  start = end === pages && end > arraySize ? pages - (arraySize - 1) : start;

  const arrayPages = Array.from({ length: (end - start) + 1 }, (_, i) => start + i);

  return (
    <div className="w-full h-20 flex justify-between items-center">
      <button onClick={prev} className="h-10 w-10 group">
        <PrevPage className="h-full w-full group-hover:drop-shadow-icon transition-all duration-200 ease-in-out" />
      </button>

      <div className="w-72 flex gap-2 ">
        <div className="w-[10%]">
          {
            start !== 1 ? '. . .' : ''
          }
        </div>

        <div className="w-[80%] flex justify-center gap-6">
          {
            arrayPages.map(page => {
              return (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`${currPage === page ? 'text-sky drop-shadow-icon' : 'hover:text-sky hover:drop-shadow-icon'} text-lg transition-all duration-300 ease-in-out`}
                >
                  {page}
                </button>
              )
            })
          }
        </div>

        <div className="w-[10%]">
          {
            end !== pages ? '. . .' : ''
          }
        </div>

      </div>

      <button onClick={next} className=" h-10 w-10 group">
        <NextPage className="h-full w-full hover:drop-shadow-icon transition-all duration-200 ease-in-out" />
      </button>

    </div>
  )
}