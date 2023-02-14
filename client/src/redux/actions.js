export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const SEARCH_RESULT = "SEARCH_RESULT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const PAGINATE_CHANGER = "PAGINATE_CHANGER";
export const CREATE_DOG = "CREATE_DOG"
export const FILTER_DOGS_BY_TEMPERAMENTS = "FILTER_DOGS_BY_TEMPERAMENTS"

export const getDogs = () => {
  return function (dispatch) {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DOGS, payload: data }));
  };
};

export const getDogDetail = (name) => {
  return function (dispatch) {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DOG_DETAIL, payload: data }));
  };
};

export const getTemperaments = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/temperaments")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_TEMPERAMENTS, payload: data }));
  };
};

export const searchResult = (searchBarResult) => {
  return function (dispatch) {
    if (searchBarResult.length) {
      return dispatch({ type: SEARCH_RESULT, payload: searchBarResult });
    }
  };
};

export const orderByName = (payload) => {
  return { type: ORDER_BY_NAME, payload  };
};

export const orderByWeight = (payload) => {
  return { type: ORDER_BY_WEIGHT, payload  };
};

export const filterDogsByTemperament = (payload) => {
  return { type: FILTER_DOGS_BY_TEMPERAMENTS, payload  };
};



export const paginateChanger = (payload) => {
  return { type: PAGINATE_CHANGER, payload }
}

export const createDog = (dog) => {
  return function(dispatch){
    return dispatch({ type: CREATE_DOG, payload: dog})
  }
}

