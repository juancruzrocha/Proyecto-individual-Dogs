import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import estilos from "./DogDetail.module.css";

const DogDetail = (props) => {
  const myDog = useSelector((state) => state.dogDetail);

  if (!myDog) return <h2>Cargando...</h2>;

  return (
    <>
      <NavBar />
      <div className={estilos.contenedor}>
        <h3> Breed Detail: </h3>

        <h3>Breed Name: {myDog.name}</h3>

        <img className={estilos.img} src={myDog.image} alt="Image not found" />

        {myDog.weight ? <h3>Weight: {myDog.weight}</h3> : ""}
        {myDog.height ? <h3>Height: {myDog.height}</h3> : ""}
        {myDog.bred_for ? <h3>Bred for: {myDog.bred_for} </h3> : ""}
        {myDog.lifeSpan ? <h3>Life span: {myDog.lifeSpan}</h3> : ""}
        {myDog.temperament && myDog.temperament ? <h3>Temperament: {myDog.temperament}</h3> : ""}       
        {myDog.temperaments ? (
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
      </div>
    </>
  );
};

export default DogDetail;
