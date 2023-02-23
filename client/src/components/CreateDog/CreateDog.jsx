import React from "react";
import estilos from './CreateDog.module.css'

import NavBar from "../NavBar/NavBar";
import CreateForm from "../CreateForm/CreateForm";

const CreateDog = (props) => {
  return (
    <div className={estilos.fondo}>
      <NavBar />
      <CreateForm />
    </div>
  );
};

export default CreateDog;
