export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const SEARCH_RESULT = "SEARCH_RESULT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

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
