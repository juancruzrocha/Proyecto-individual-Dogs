import { GET_DOGS, GET_DOG_DETAIL, SEARCH_RESULT, ORDER_BY_NAME  } from "./actions";
import { orderDogsByName } from './../controllers/orderDogsByName';

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
          dogs : action.payload
        }
      case GET_DOG_DETAIL:
        return {
          ...state,
          dogDetail: action.payload[0]
        }
      case SEARCH_RESULT :
        return {
          ...state,
          searchResult: [...state.searchResult,...action.payload],
          showSearchResult: true
        }  

        case ORDER_BY_NAME:
      
        return {
          ...state,
          dogs: orderDogsByName(state,action)
        }
        
      default:
        return { ...state };
    }
  };
  
  
  export default rootReducer;