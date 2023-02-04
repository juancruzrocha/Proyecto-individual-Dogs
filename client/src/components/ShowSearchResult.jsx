import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import estilos from "./Cards.module.css";

const ShowSearchResult = (props) => {
  const state = useSelector((state) => state);
  console.log("soy el state searchResult", state);
  const dog = state.searchResult[0];
  console.log(dog);

  return state.showSearchResult === true ? (
    <>
      <h1>SearchResult:</h1>
      <div className={estilos.contenedorCards}>
        {state.searchResult?.map((dog) => {
          return (
            <div className={estilos.Card} key={dog.id}>
              <Card
                name={dog.name}
                image={dog.image.url}
                temperament={dog.temperament}
                weight={dog.weight.metric}
                id={dog.id}
              />
            </div>
          );
        })}
      </div>
    </>
  ) : null;
};

export default ShowSearchResult;
