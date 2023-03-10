export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_DOGS_FROM_DB = "GET_DOGS_FROM_DB";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const SEARCH_RESULT = "SEARCH_RESULT";
export const EMPTY_SEARCH_RESULT = "EMPTY_SEARCH_RESULT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const PAGINATE_CHANGER = "PAGINATE_CHANGER";
export const FILTER_DOGS_BY_TEMPERAMENTS = "FILTER_DOGS_BY_TEMPERAMENTS";
export const CREATE_DOG = "CREATE_DOG";

export const getDogs = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/dogs")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DOGS, payload: data }));
  };
};

export const getDogsFromDb = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/dogs/dogsDb")
      .then((response) => response.json())
      .then((payload) => dispatch({ type: GET_DOGS_FROM_DB, payload }));
  };
};

export const getDogDetail = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs/${id}`)
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

export const searchResult = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: SEARCH_RESULT, payload: data }));
  };
};
export const emptySearchResult = (payload) => {
  return function (dispatch) {
    dispatch({ type: EMPTY_SEARCH_RESULT, payload });
  };
};

export const orderByName = (payload) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_NAME, payload });
  };
};

export const orderByWeight = (payload) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY_WEIGHT, payload });
  };
};

export const filterDogsByTemperament = (payload) => {
  return function (dispatch) {
    dispatch({ type: FILTER_DOGS_BY_TEMPERAMENTS, payload });
  };
};

export const paginateChanger = (payload) => {
  return function (dispatch) {
    dispatch({ type: PAGINATE_CHANGER, payload });
  };
};

export const createDog = (dog) => {
  return function (dispatch) {
    dispatch({ type: CREATE_DOG, payload: dog });
  };
};

