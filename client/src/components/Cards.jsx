import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs } from "../redux/actions";
import estilos from "./Cards.module.css";

const Cards = (props) => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={estilos.contenedorCards}>
      {dogs?.map((dog) => {
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
  );
};

export default Cards;
