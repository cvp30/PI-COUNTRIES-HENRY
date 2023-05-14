import { sortCountries } from '../utils';
import {
  GET_ALL_COUNTRIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_NAME,
  RESTORE_INITIAL_STATE,
  SORT_COUNTRIES,
  GET_ALL_ACTIVITIES,
  // GET_ALL_COUNTRIES,
  // FILTER_BY_ACTIVITY,

} from './actions';


const initialState = {
  allCountries: [],
  countriesFiltered: [],
  allActivities: [],
  // countriesByName: [],
  // activity: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countriesFiltered: action.payload,
      }

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload
      }

    case FILTER_BY_CONTINENT: {
      const result = state.allCountries.filter(country => country.continent === action.payload);

      return {
        ...state,
        countriesFiltered: result
      }
    }

    case FILTER_BY_NAME:
      return {
        ...state,
        countriesFiltered: action.payload
      }

    case RESTORE_INITIAL_STATE:
      return {
        ...state,
        countriesFiltered: state.allCountries
      }

    case SORT_COUNTRIES: {

      const { sort, order } = action.payload;

      let countries = order === 'asc' ?
        sortCountries(state.countriesFiltered, sort, (a, b) => a < b)
        :
        sortCountries(state.countriesFiltered, sort, (a, b) => a > b)
      return {
        ...state,
        countriesFiltered: countries
      }
    }
    // case GET_ALL_ACTIVITIES:
    //   return {
    //     ...state,
    //     allActivities: action.payload
    //   }

    // case GET_ALL_COUNTRIES:
    //   return {
    //     ...state,
    //     allCountries: action.payload,
    //     countries: action.payload
    //   };

    // case FILTER_BY_NAME:
    //   return {
    //     ...state,
    //     countries: action.payload
    //   }

    // case FILTER_BY_CONTINENT:
    //   const countriesFiltered =
    //     state.allCountries.filter(country =>
    //       country.continent === action.payload);

    //   return {
    //     ...state,
    //     countries: countriesFiltered
    //   }

    // case FILTER_BY_ACTIVITY:
    //   const activityFound = state.allActivities[action.payload];

    //   return {
    //     ...state,
    //     countries: activityFound.countries,
    //     activity: activityFound,
    //   }

    // case SORT_COUNTRIES:

    //   const { sort, order } = action.payload;

    //   let countries = order === 'asc' ?
    //     sortCountries(state.countries, sort, (a, b) => a < b)
    //     :
    //     sortCountries(state.countries, sort, (a, b) => a > b)
    //   return {
    //     ...state,
    //     countries: countries
    //   }

    // case RESTORE_INITIAL_STATE:
    //   return {
    //     ...state,
    //     countries: state.allCountries
    //   }

    default:
      return { ...state }
  }
}

export default reducer;
