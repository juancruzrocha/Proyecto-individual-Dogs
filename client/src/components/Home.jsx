import React from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import ShowSearchResult from "./ShowSearchResult";


const Home = (props) => {

    

    return (
        <>
        <NavBar />
        <h1>HOME</h1>
        <ShowSearchResult/>
        <Cards/>
        </>
    )
}

export default Home;