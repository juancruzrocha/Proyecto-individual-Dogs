import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchResult } from "../redux/actions";
import { firstToUpperCase } from "../helpers/firstToUpperCase";

const SearchBar = (props) => {
  // estado local del input de busqueda
  const [busqueda, setBusqueda] = useState("");
  //estado global que tiene a todos los perros []
  const state = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBusqueda(firstToUpperCase(e.target.value));
  };

  // guardamos en un array el resultado de la busqueda
  const searchBarResult = (terminoBusqueda) => {
    let result = state.filter((dog) => dog.name === terminoBusqueda);
    return result;
  };

  //para que cuando se enviua el form no se recargue la pagina
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchResult(searchBarResult(busqueda)))
  };

  return (
    <>
      <h2>searchBar component</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={busqueda}
          type="text"
          placeholder="Search by breed"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          // onClick={dispatch(searchResult(searchBarResult(busqueda)))}
        />
      </form>
    </>
  );
};

export default SearchBar;

// console.log("soy el global-state.dogs:", state);
// console.log("soy el local-state-busqueda:", busqueda);
// console.log(
//   "soy el resultado de la ejecucion de searchBarResult(busqueda)",
//   searchBarResult(busqueda)
// );
