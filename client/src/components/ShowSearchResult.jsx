import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import estilos from "./Cards.module.css";

const ShowSearchResult = (props) => {
  const state = useSelector((state) => state);
 
  
  return state.showSearchResult === true ? (
    
    <>
      <h1>SearchResult:</h1>
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





/*
let myDog;
let temperaments;
  if(typeof(id) == 'number')

else  {
    return (
      <div className={estilos.card}>
        <Link to={`/DogDetail/${id}`}>
          <h3 className={estilos.titulo} onClick={ ()=>dispatch(getDogDetail(id))}  >{name}</h3>
        </Link>
        {image && <img className={estilos.img} src={image} alt="Imagen no disponible" />}
        {temperaments && temperaments ? (
          <>
            <h3>Temperaments:</h3>
            <ul>
              {myDog.temperaments.map((temp) => (
                <li key={temp.id}>{temp.name}</li>
              ))}{" "}
            </ul>
          </>
        ) : (
          ""
        )}
        <h2 className={estilos.extras}>Weight: {weight}</h2>
      </div>
  );

  }


*/