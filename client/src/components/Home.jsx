import React from "react";
import Cards from "./Cards";
import Filtrado from "./Filtrado";
import NavBar from "./NavBar";
import ShowSearchResult from "./ShowSearchResult";
import Paginado from "./Paginado";

const Home = (props) => {
  return (
    <>
      <NavBar />
      <ShowSearchResult />
      <Filtrado />
      <Cards />
      <Paginado />
    </>
  );
};

export default Home;
