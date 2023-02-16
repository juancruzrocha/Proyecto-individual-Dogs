import React from "react";
import { useSelector } from "react-redux";
//componentes
import Card from "../components/Card";
//estilos
import estilos from "./Cards.module.css";
import style from './ShowSearchResult.module.css'

const ShowSearchResult = (props) => {
  const state = useSelector((state) => state);
 
  
  return state.showSearchResult === true ? (
    <>
      <h1 className={style.title}>SearchResult:</h1>
      <div className={estilos.contenedorCards}>
        {state.searchResult?.map((dog) => {
          return (
            <div className={estilos.Card} key={dog.id}>
              <Card
                name={dog.name}
                image={dog.image}
                temperament={dog.temperament}
                weight={dog.weight}
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

