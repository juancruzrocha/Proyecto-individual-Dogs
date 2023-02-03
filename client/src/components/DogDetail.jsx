import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail, getDogs } from "../redux/actions";
import estilos from "./DogDetail.module.css";

const DogDetail = (props) => {
  const myDog = useSelector((state) => state.dogDetail);
  const params = useParams();
  const dispatch = useDispatch();
  console.log("soy myDog", myDog);

  //tengo que usar este otro estado porque en dogDetail no me viene la IMG
  const allDogs = useSelector((state) => state.dogs);
  const imgDog = allDogs.find((dog) => dog.name === params.name);

  useEffect(() => {
    dispatch(getDogDetail(params.name));
    dispatch(getDogs());
  }, [params.name, dispatch]);

  if (!myDog) return <h2>Cargando...</h2>;

  return (
    <>
        <NavBar />
      <div className={estilos.contenedor}>

        <h3> Breed Detail: </h3>
        <h3>Breed Name: {myDog.name}</h3>
        {imgDog ? (
          <img className={estilos.img} src={imgDog.image.url} alt="not found" />
        ) : (
          ""
        )}
        {myDog && myDog.weight && myDog.weight.metric ? (
          <h3>Weight: {myDog.weight.metric}</h3>
        ) : (
          ""
        )}
        {myDog && myDog.height && myDog.height.metric ? (
          <h3>Height: {myDog.height.metric}</h3>
        ) : (
          ""
        )}
        {myDog.bred_for ? <h3>Bred for: {myDog.bred_for} </h3> : ""}
        {myDog.life_span ? <h3>Life span: {myDog.life_span}</h3> : ""}
        {myDog.temperament ? <h3>Temperament: {myDog.temperament}</h3> : ""}
        {myDog.origin ? <h3>Origin: {myDog.origin}</h3> : ""}
        {myDog.activities ? <h3>Activities: {myDog.activities}</h3> : ""}
      </div>
    </>
  );
};

export default DogDetail;
