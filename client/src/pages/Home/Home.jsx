import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from "../../components/FilterBar/FilterBar";
import CountriesCards from "../../components/CountriesCards/CountriesCards";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
// import ActivityInfo from "../../components/ActivityInfo/ActivityInfo";

import { getAllCountries } from "../../redux/actions";
import styles from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);
    // const activity = useSelector(state => state.activity);

    const [page, setPage] = useState(1);

    let maxPerPage = page === 1 ? 9 : 10;

    const totalPages = Math.ceil(countries.length / maxPerPage);



    // const[page, setPage] = useState(1);
    // const[initial, setInitial] = useState(0);
    // const maxPage = countries.length/10;
    
    // let group = page === 1 ? 9 : 10;
    

    // const handlePrev = () => {
    //     if(page > 1) {
    //         setPage(page-1);
    //         page === 2 ?
    //             setInitial(initial - 9)
    //             :
    //             setInitial(initial - 10)
    //     }
        
    // }

    // const handleNext = () => {
    //     if(maxPage > page ) {
    //         setPage(page+1);
    //         setInitial(initial + group);
    //     } 
    // }

    useEffect(() => {
        if (!countries.length) dispatch(getAllCountries())

    }, [countries.length, dispatch])


    return (
        <div className={styles.Home}>
            
            < FilterBar />
            

            {/* {
                Object.keys(activity).length > 0 &&
                <div className={styles.ActivityInfo}>
                    <ActivityInfo
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        season={activity.season}
                    />
                </div>

            } */}



            {/* <CountriesCards countries={countries.slice(initial, initial+group)} /> */}
            <CountriesCards 
                countries={
                    countries.slice( (page - 1)* maxPerPage, (page - 1)* maxPerPage + maxPerPage) 
                } 
            />
            {/* <div className={styles.Pagination}>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div> */}
            <PaginationBar currentPage={page} setPage={setPage} totalPages={totalPages}/>

            {/* <div className={styles.CardsContainer}> */}
            {/* <CountriesCards countries={countries.slice(0, 11) } /> */}
            {/* </div> */}
        </div>
    )
}


export default Home;