import { getAxios } from "../lib/axios";

export const RESTORE_INITIAL_STATE = 'RESTORE_INITIAL_STATE';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';

export const restoreInitialState = () => {
    return {
        type: RESTORE_INITIAL_STATE
    }
}

export const getAllActivities = () => {
    return async function( dispatch) {
        const data = await getAxios('http://localhost:3001/activities');

        return dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: data
        })
    }
}

export const getAllCountries = () => {
    return async function( dispatch ) {
        const data = await getAxios('http://localhost:3001/countries');

        return dispatch ({
            type    : GET_ALL_COUNTRIES,
            payload : data
        })
    }
}

export const filterByName = ( name ) => {
    return async function( dispatch ) {
        const data = await getAxios(`http://localhost:3001/countries?name=${name}`);

        return dispatch({
            type: FILTER_BY_NAME,
            payload: data
        })
    }
}

export const filterByContinent = ( continent ) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}

export const filterByActivity = ( activity ) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}

export const SortCountries = ( sortOptions ) => {
    return {
        type: SORT_COUNTRIES,
        payload: sortOptions
    }
}