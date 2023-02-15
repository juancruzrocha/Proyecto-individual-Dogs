import React, { useState, useEffect } from "react";
import estilos from "./Paginado.module.css";
import { useSelector, useDispatch } from "react-redux";
import { paginateChanger } from "../redux/actions";

const Paginado = (props) => {
  const dispatch = useDispatch();
  //Estado global dogs
  const dogs = useSelector((state) => state.dogs);
 
  //estados locales: pagina actual y la cantidad de perros que queremos renderizar y los perros que vamos a renderizar
  const [currentPage, setCurrentPage] = useState(0);
  const [howManyDogsPerPage] = useState(8);
  const [renderDogs, setRenderDogs] = useState([]);

  //Calculamos cuantas paginas totales tendremos
  const howManyPages = Math.ceil(dogs.length / howManyDogsPerPage);
  // Creamos un array con todos los numeros de 0 a N segun cuantas paginas tengamos
  const allPages = Array.from({ length: howManyPages }, (_, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(()=>{
    const firstRenderDogs = dogs.slice(0,9);
    setRenderDogs(firstRenderDogs);
  },[])

  useEffect(() => {
    let first = currentPage * howManyDogsPerPage;
    let last = first + howManyDogsPerPage;
    const newRenderDogs = dogs.slice(first, last);
    dispatch(paginateChanger(newRenderDogs));
    setRenderDogs(newRenderDogs);
  }, [currentPage, dogs]);
  


  return (
    <>
      <div className={estilos.buttonContainer}>
        {allPages?.map((page) => {
          return (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Paginado;

