import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from "../redux/actions";
import estilos from "./DogDetail.module.css";

const DogDetail = (props) => {
  const myDog = useSelector((state) => state.dogDetail);
  const params = useParams();
  const dispatch = useDispatch();

  if (!myDog) return <h2>Cargando...</h2>;

  return (
    <>
      <NavBar />
      <div className={estilos.contenedor}>
        <h3> Breed Detail: </h3>

        <h3>Breed Name: {myDog.name}</h3>

        <img className={estilos.img} src={myDog.image} alt="not found" />

        {myDog.weight ? <h3>Weight: {myDog.weight}</h3> : ""}
        {myDog.height ? <h3>Height: {myDog.height}</h3> : ""}
        {myDog.bred_for ? <h3>Bred for: {myDog.bred_for} </h3> : ""}
        {myDog.life_span ? <h3>Life span: {myDog.life_span}</h3> : ""}
        {myDog.temperament ? <h3>Temperament: {myDog.temperament}</h3> : ""}
      </div>
    </>
  );
};

export default DogDetail;
