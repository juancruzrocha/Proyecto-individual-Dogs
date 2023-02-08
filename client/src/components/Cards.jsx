import React from "react";
//Componentes y estilos
import Card from "./Card";
import Paginado from "./Paginado";
import estilos from "./Cards.module.css";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//Actions
import { getDogs } from "../redux/actions";

const Cards = (props) => {
  //uso de Hooks y estados
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  //Estado local para guardar los 8 perros que voy a renderizar
  const [dogsToRender, setDogsToRender] = useState(dogs);

  //hace la peticion a la API solamente una vez
  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    }
  }, [dogs.length]);

  // ---------cosas del PAGINADO-----------------------------------------
  //estados locales pagina actual y la cantidad de perros que queremos renderizar por pagina
  const [currentPage, setCurrentPage] = useState(0);
  const [howManyDogsPerPage, setHowManyDogPerPage] = useState(8);
  //Funcion que modifica el estado currentPage
  const pageSetter = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //perros totales
  const totalDogs = dogs.length;
  //primer y ultimo perro renderizado
  let first = currentPage * howManyDogsPerPage;
  let last = first + howManyDogsPerPage;

  // cortamos el array de dogs segun el indice de el primer y el ultimo perro renderizado
  // **renderDogs** se lo paso se setNewOrderToRender
  useEffect(() => {
    const renderDogs = dogs.slice(first, last);
    setNewOrderToRender(renderDogs);
  }, [first, last, dogs]);
  //----------------------------FIN----------------------------------------

  return (
    <>
      <div> Current Page: -- {currentPage} --</div>
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

      <Paginado
        howManyDogsPerPage={howManyDogsPerPage}
        pageSetter={pageSetter}
        totalDogs={totalDogs}
      />
    </>
  );
};

export default Cards;
