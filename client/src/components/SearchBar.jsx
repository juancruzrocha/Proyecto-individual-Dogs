import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = (props) => {
  const [busqueda, setBusqueda] = useState("");
  const state = useSelector((state) => state.dogs);

  const filtrar = (terminoBusqueda) => {
    state.filter((dog) => {if(dog.name === terminoBusqueda) return dog});
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(busqueda);
  };

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
