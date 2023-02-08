import React from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import ShowSearchResult from "./ShowSearchResult";
import Filtros from "./Filtros"

const Home = (props) => {
  return (
    <>
      <NavBar />
      <ShowSearchResult />
      <Filtros/>
      <Cards />
    </>
  );
};

export default Home;
