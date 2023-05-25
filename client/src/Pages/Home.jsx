import { useSelector } from "react-redux"
import { CountryCard } from "../components/CountryCard";
import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";


export const Home = () => {
  const countries = useSelector(state => state.countriesFiltered);

  const [page, setPage] = useState(1);

  const countriesPerPage = 9;
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const end = countriesPerPage * page;
  const start = end - countriesPerPage;


  const handlePrev = () => {
    page > 1 && setPage(currPage => --currPage);
  }

  const handleNext = () => {
    page < totalPages && totalPages && setPage(currPage => ++currPage);
  }

  const changePage = (numPage) => {
    setPage(numPage)
  }

  // RESTART PAGE TO INITIAL STATE => 1
  useEffect(() => {
    setPage(1);
  }, [countries.length])


  return (
    <section className="w-full h-full flex flex-col gap-5">
      <Pagination
        prev={handlePrev}
        next={handleNext}
        pages={totalPages}
        currPage={page}
        changePage={changePage}
      />

      <div className="w-full h-fit flex flex-wrap justify-between gap-y-16">
        {
          countries.slice(start, end).map(country => {
            return (
              <CountryCard
                key={country.id}
                id={country.id}
                name={country.name}
                continent={country.continent}
                flag={country.flag}
                population={country.population}
              />
            )
          })
        }
      </div>

    </section>
  )
} 