import React from "react";
import estilo from "./Filtrado.module.css";
//HOOKS
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Actions
import {
  orderByName,
  orderByWeight,
  filterDogsByTemperament,
  getDogsFromDb,
  getTemperaments,
  getDogs,
  emptySearchResult
} from "../../redux/actions";

const Filtrado = (props) => {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);

  // handleSort: despacha la funcion que ordena los perros
  const handleSortByAlfabet = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };

  const handleSortByWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  };

  const handleFilterByTemperament = (e) => {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  };

  const handleShowCreatedDogs = (e) => {
    dispatch(getDogsFromDb());
  };

  const handleReset = (e) => {
    dispatch(getDogs());
    dispatch(emptySearchResult());
  };
  //hace la peticion a la API solamente una vez
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <>
      <div className={estilo.container}>
        <div className={estilo.filters}>
          <label> To change order: </label>
          <select
            className={estilo.select}
            name="orderByName"
            onChange={(e) => handleSortByAlfabet(e)}
          >
            <option value="asc">Alfabet ascendent order</option>
            <option value="des">Alfabet descendent order</option>
          </select>
        </div>

        <div className={estilo.filters}>
          <label> To change order: </label>
          <select
            className={estilo.select}
            name="orderByWeight"
            onChange={(e) => handleSortByWeight(e)}
          >
            <option value="asc">Ascendent weight order</option>
            <option value="des">Descendent weight order</option>
          </select>
        </div>

        <div className={estilo.filters}>
          <label> Combine filters to find your perfect dog: </label>
          <select
            className={estilo.select}
            name="filterByTemperament"
            onChange={(e) => handleFilterByTemperament(e)}
            size="small"
          >
            {allTemperaments?.map((temp) => {
              return (
                <option value={temp.name} name={temp.name} key={temp.id}>
                  {temp.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={estilo.filters}>
          <label> Choose what dogs to see: </label>
          <select className={estilo.select} name="API or DB">
            <option
              value="DB dogs"
              name="DB dogs"
              onClick={() => handleShowCreatedDogs()}
            >
              Created dogs
            </option>
          </select>
        </div>
        <div>
          <button
            className={estilo.filters}
            onClick={() => {
              handleReset();
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
};

export default Filtrado;
