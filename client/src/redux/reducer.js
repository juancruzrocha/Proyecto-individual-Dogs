//ACTIONS
import {
  GET_DOGS,
  GET_DOG_DETAIL,
  GET_DOGS_FROM_DB,
  GET_TEMPERAMENTS,
  SEARCH_RESULT,
  EMPTY_SEARCH_RESULT,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_DOGS_BY_TEMPERAMENTS,
  PAGINATE_CHANGER,
  CREATE_DOG,
} from "./actions";

//CONTROLLERS
import { orderDogsByName } from "./../controllers/orderDogsByName";
import { orderDogsByWeight } from "./../controllers/orderDogsByWeight";
import { filterDogsByTemperament } from "../controllers/filterDogsByTemperament";

const initialState = {
  dogs: [],
  dogDetail: [],
  createdDogs: [],
  renderDogs: [],
  temperaments: [],
  searchResult: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_DOGS_FROM_DB:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: [...action.payload],
        showSearchResult: true,
      };

    case EMPTY_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [],
        showSearchResult: false,
      };

    case ORDER_BY_NAME:
      return {
        ...state,
        dogs: [...orderDogsByName(state, action)],
      };

    case ORDER_BY_WEIGHT:
      return {
        ...state,
        dogs: [...orderDogsByWeight(state, action)],
      };

    case FILTER_DOGS_BY_TEMPERAMENTS:
      return {
        ...state,
        dogs: [...filterDogsByTemperament(state, action)],
      };

    case PAGINATE_CHANGER:
      return {
        ...state,
        renderDogs: [...action.payload],
      };

    case CREATE_DOG:
      return {
        ...state,
        createdDogs: [...state.createdDogs, action.payload],
      };

    default:
      return state ;
  }
};

export default rootReducer;
