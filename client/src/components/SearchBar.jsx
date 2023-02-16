import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import estilos from './SearchBar.module.css'

//Actions
import { searchResult } from "../redux/actions";

//Funciones auxiliares
import { firstToUpperCase } from "../controllers/firstToUpperCase";

const SearchBar = (props) => {
  // estado local del input de busqueda
  const [busqueda, setBusqueda] = useState("");
  //estado global que tiene a todos los perros []
  const state = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBusqueda(firstToUpperCase(e.target.value));
  };

  //para que cuando se envia el form no se recargue la pagina
  const handleSubmit = () => {
    const data = document.getElementById("data");
  
    dispatch(searchResult(data.value));
  };

  return (
    <>
      <h1 className={estilos.title}>Henry Project Dog App</h1>
      <div className={estilos.input_button}>
        <input
          value={busqueda}
          type="text"
          placeholder="Search by breed"
          onChange={handleChange}
          id="data"
        />
        <button className={estilos.button} onClick={() => handleSubmit()} value="Search">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
