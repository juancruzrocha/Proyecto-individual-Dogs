import React from "react";
//estilos
import estilos from './Home.module.css'
//componentes
import Cards from "../Cards/Cards";
import Filtrado from "../Filtrado/Filtrado";
import NavBar from "../NavBar/NavBar";
import ShowSearchResult from "../ShowSearchResult/ShowSearchResult";
import Paginado from "../Paginado/Paginado";

const Home = (props) => {
  return (
    <>
    <div className={estilos.fondo}>
      <NavBar />
      <ShowSearchResult />
      <Filtrado />
      <Cards />
      <Paginado />

    </div>
    </>
  );
};

export default Home;
