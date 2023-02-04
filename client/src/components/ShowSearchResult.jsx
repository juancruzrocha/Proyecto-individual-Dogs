import React from "react";
import { useSelector } from "react-redux";

const ShowSearchResult = (props) => {

    const state = useSelector((state) => state.dogs);
    
     return (
        <>
        <h1>Soy el ShowSearchResult</h1>
        </>
    )
}

export default ShowSearchResult;