import {
  GET_DOGS,
  GET_DOG_DETAIL,
  SEARCH_RESULT,
  ORDER_BY_NAME,
} from "./actions";

const initialState = {
  dogs: [],
  temperaments: [],
  dogDetail: [],
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
        dogDetail: action.payload[0],
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
        showSearchResult: true,
      };

    case ORDER_BY_NAME:
      
        action.payload === "asc"
          ? state.dogs.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        dogs: state.dogs,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
