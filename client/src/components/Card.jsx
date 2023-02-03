import React from "react";
import estilos from "./Card.module.css";
import {Link} from 'react-router-dom'

const Card = ({ name, image, temperament, weight, id }) => {
  return (
      <div className={estilos.card}>
        <Link to={`/DogDetail/${name}`}>
          <h3 className={estilos.titulo}>{name}</h3>
        </Link>
        <img className={estilos.img} src={image} alt="Imagen no disponible" />
        <h2 className={estilos.extras}>Temperaments: {temperament}</h2>
        <h2 className={estilos.extras}>Weight: {weight}</h2>
      </div>
  );
};

export default Card;
