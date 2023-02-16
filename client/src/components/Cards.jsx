import React from "react";
//Componentes y estilos
import Card from "./Card";
import estilos from "./Cards.module.css";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//Actions
import { getDogs } from "../redux/actions";

const Cards = (props) => {
  //uso de Hooks y estados
  const dispatch = useDispatch();
  const renderDogs = useSelector((state) => state.renderDogs);
  const [dogList, setDogList] = useState([]);

  //hace la peticion a la API solamente una vez
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  useEffect(() => {
    setDogList(renderDogs);
  }, [renderDogs]);

  return (
    <>
      <div className={estilos.contenedorCards}>
        {dogList?.map((dog) => {
         
          return (
            <div className={estilos.Card} key={dog.id}>
              <Card
                name={dog.name}
                image={dog.image}
                temperament={dog.temperament}
                weight={dog.weight}
                id={dog.id}
                key={dog.id+1}
                />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
