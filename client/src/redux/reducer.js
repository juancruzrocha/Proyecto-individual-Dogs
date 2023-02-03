import { GET_DOGS, GET_DOG_DETAIL } from "./actions";

const initialState = {
    dogs: [],
    temperaments: [],
    dogDetail: []
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
        
      default:
        return { ...state };
    }
  };
  
  
  export default rootReducer;