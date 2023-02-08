import React from "react";
import { useDispatch } from "react-redux";
//Actions
import { orderByName } from "../redux/actions";

const Filtros = (props) => {
  const dispatch = useDispatch();

  // handleSort: despacha la funcion que ordena los perros
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };

  return (
    <div className="order button container">
      <select name="order" onChange={(e) => handleSort(e)}>
        <option value="asc">Ascendent order</option>
        <option value="des">Descendent order</option>
      </select>
    </div>
  );
};

export default Filtros;
