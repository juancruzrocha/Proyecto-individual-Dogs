import React from "react";
import estilos from "./Card.module.css";
import { Link } from "react-router-dom";
import { getDogDetail } from "../redux/actions";
import { useDispatch } from "react-redux";

const Card = ({ name, image, temperament, weight, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={estilos.card}>
      <Link to={`/DogDetail/${id}`}>
        <h3
          className={estilos.titulo}
          onClick={() => dispatch(getDogDetail(id))}
        >
          {name}
        </h3>
      </Link>
      {image && (
        <img className={estilos.img} src={image} alt="Imagen no disponible" />
      )}
      <h2 className={estilos.extras}>Temperaments: {temperament}</h2>
      <h2 className={estilos.extras}>Weight: {weight}</h2>
    </div>
  );
};

export default Card;
