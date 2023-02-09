import React from "react";
import estilos from './CreateDog.module.css'

import NavBar from "./NavBar";
import Form from "./Form";

const CreateDog = (props) => {
  return (
    <div className={estilos.fondo}>
      <NavBar />
      <Form />
    </div>
  );
};

export default CreateDog;
