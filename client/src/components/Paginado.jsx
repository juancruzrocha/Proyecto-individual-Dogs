import React from "react";
import estilos from "./Paginado.module.css";

const Paginado = ({ howManyDogsPerPage, totalDogs, pageSetter }) => {
  const howManyPages = Math.ceil(totalDogs / howManyDogsPerPage);
  //console.log(howManyDogsPerPage, "/", totalDogs, "=", howManyPages);

  // Creamos un array con todos los numeros de 0 a N segun cuantas paginas tengamos
  const allPages = Array.from({ length: howManyPages }, (_, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <div className={estilos.buttonContainer}>
        {allPages?.map((page) => {
          return (
            <button key={page} onClick={() => pageSetter(page)}>
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Paginado;
