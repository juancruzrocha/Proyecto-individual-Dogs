import React from "react";
import Cards from "./Cards";
import Filtrado from "./Filtrado";
import NavBar from "./NavBar";
import Paginado from "./Paginado";
import ShowSearchResult from "./ShowSearchResult";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <h1>HOME</h1>
      <ShowSearchResult />
      <Filtrado />
      <Cards />
      <Paginado />
    </>
  );
};

export default Home;
