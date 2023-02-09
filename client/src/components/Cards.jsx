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
  }, [dispatch]);

  useEffect(() => {
    setDogList(renderDogs);
  }, [renderDogs]);

return (
       <>
       <div className={estilos.contenedorCards}
        {dogList?.map((dog) => {

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
    </>
  );
};

export default Cards;
