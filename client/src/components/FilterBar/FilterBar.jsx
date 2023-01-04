import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restoreInitialState, filterByActivity, filterByContinent, getAllActivities, SortCountries } from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';

import styles from './FilterBar.module.css';

const FilterBar = () => {
    const dispatch = useDispatch();

    const sort = useRef();
    const order = useRef();

    const activities = useSelector(state => state.allActivities);

    useEffect(() => {
        dispatch(getAllActivities());
    }, [activities.length, dispatch]);


    const handleContinent = (event) => {

        const value = event.target.value;

        if (value === 'all') dispatch(restoreInitialState());
        else dispatch(filterByContinent(value));
    }

    const handleActivity = (event) => {
        const value = event.target.value;

        if (value === 'all') dispatch(restoreInitialState());
        else dispatch(filterByActivity(value));
    }

    const handleSort = () => {

        dispatch(
            SortCountries({
                sort: sort.current.value,
                order: order.current.value
            })
        )
    }

    return (
        <div className={styles.FilterBar}>
            <div>
                <label htmlFor="conntinent">Continents: </label>
                <select onChange={handleContinent} name="continent" className={styles.Select}>
                    <option value="all">all</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div>
                <label htmlFor="activity">Activities: </label>
                <select onChange={handleActivity} name="activity" className={styles.Select}>
                    <option value="all">All</option>
                    {
                        activities.map((activity, index) =>
                            <option key={index} value={index}>{activity.name}</option>
                        )
                    }
                </select>
            </div>

            <div onChange={handleSort} className={styles.OrderFilter}>
                <div>
                    <label htmlFor="sort">Order By: </label>
                    <select ref={sort} name="sort" className={styles.Select}>
                        <option value="name">Name</option>
                        <option value="population">Population</option>
                    </select>
                </div>

                <div>
                    <select ref={order} name="order" className={styles.Select}>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
            </div>

            <SearchBar />
        </div>
    )
}

export default FilterBar;