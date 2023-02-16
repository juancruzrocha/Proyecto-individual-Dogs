import React from "react";
//estilos
import estilos from './Home.module.css'
//componentes
import Cards from "./Cards";
import Filtrado from "./Filtrado";
import NavBar from "./NavBar";
import ShowSearchResult from "./ShowSearchResult";
import Paginado from "./Paginado";

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
