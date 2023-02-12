import React from "react";
import estilos from './CreateDog.module.css'

import NavBar from "./NavBar";
import CreateForm from "./CreateForm";

const CreateDog = (props) => {
  return (
    <div className={estilos.fondo}>
      <NavBar />
      <CreateForm />
    </div>
  );
};

export default CreateDog;
