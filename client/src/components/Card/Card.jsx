import React from "react";
import estilos from "./Card.module.css";
import { Link } from "react-router-dom";
import { getDogDetail } from "../../redux/actions";
import { useDispatch } from "react-redux";
import axios from 'axios'

const Card = ({ name, image, temperament, weight, id }) => {
  const dispatch = useDispatch();

// const handleDelete = async ()=>{
    
//    await axios.delete(`http://localhost:3001/${id}`)
// }

  return (
    <div className={estilos.card}>
      <Link to={`/DogDetail/${id}`}>
        {/* <button onClick={(()=>handleDelete())}>X</button> */}
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
