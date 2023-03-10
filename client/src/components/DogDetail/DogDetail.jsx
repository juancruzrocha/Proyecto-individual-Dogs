import React from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { verifyData } from "../../controllers/verifyData"

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
        
        {myDog.temperaments && myDog.temperaments.length > 0 && (
    <h3>Temperament: {verifyData(myDog)}</h3>
  )}     
       
      </div>
    </>
  );
};

export default DogDetail;
