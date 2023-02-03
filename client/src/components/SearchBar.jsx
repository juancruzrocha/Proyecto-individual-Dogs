import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = (props) => {
  // estado local del input de busqueda
  const [busqueda, setBusqueda] = useState("");
  //estado global que tiene a todos los perros []
  const state = useSelector((state) => state.dogs);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };


  const searchResult = (terminoBusqueda) => {
    let result = state.filter((dog) => dog.name === terminoBusqueda);
    return result;
  };

  console.log("soy el global-state.dogs:", state);
  console.log("soy el local-state-busqueda:", busqueda);
  console.log(
    "soy el resultado de la ejecucion de filtrar(busqueda)",
    searchResult(busqueda)
  );

  return (
    <>
      <h2>searchBar component</h2>
      <form>
        <input
          value={busqueda}
          type="text"
          placeholder="Search by breed"
          onChange={handleChange}
          
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchBar;
