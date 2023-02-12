import React from "react";
//estilos
import estilos from "./CreateForm.module.css";
//Hooks personalizados
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  height: "",
  weight: "",
  lifeSpan: ""
};

const validationsForm = (form) => {
const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  let errors = {}; // cada error que tengamos lo guardamos aca

  if (!form.name.trim()) {
    errors.name = "*Name is required";
  } else if(!regexName.test(form.name)){
    errors.name = '*Invalid name';}
  
  if(typeof(form.height)!== Number){
    errors.height='*Height must be a number'
  } else if(form.height < 0) {
    errors.height='*Height must be a positive number'
  } else if(form.height > 120) {
    errors.height='*If your dog is taller than 120cm would be a record Guinness.'
  }
  
  if(typeof(form.weight)!== Number){
    errors.weight='*Height must be a number'
  } else if(form.weight < 0) {
    errors.weight = '*Weight must be a positive number'
  } else if(form.weight > 156) {
    errors.weight = '*If your dog weighs more than 120 it would be a Guinness record.'
  }

  if(typeof(form.lifeSpan)!== Number){
    errors.weight='*LifeSpan must be a number'
  } else if(form.lifeSpan < 0 ){
    errors.lifeSpan='*LifeSpan must be a positive number'
  } else if(form.lifeSpan){
    errors.lifeSpan = '*If your dog lives more than 29 years it would be a Guinness record.'
  }

  //el resto de las validaciones van aqui debajo


  return errors;
};


const CreateForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm,validationsForm);

  return (
    <>
      <h1>FORM: to create a breed</h1>
    <div className={estilos.container}>
      

     <form onSubmit={handleSubmit}>
      <div className={estilos.input}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Insert name"
          required
         ></input>
         {errors.name && <p className={estilos.error}>{errors.name}</p>}
      </div>

      <div className={estilos.input}>
        <label htmlFor="name">Height: </label>
        <input
          type="number"
          name="height"
          value={form.height}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Insert height"
          required
          ></input>
        {errors.height && <p className={estilos.error} >{errors.height}</p>}
      </div>
      
      <div className={estilos.input}>
        <label htmlFor="name">Weight: </label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Insert weight"
          required
          ></input>
        {errors.weight && <p className={estilos.error} >{errors.weight}</p>}
      </div>

      <div className={estilos.input}>
        <label htmlFor="name">LifeSpan: </label>
        <input
          type="number"
          name="lifeSpan"
          value={form.lifeSpan}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Insert lifespan"
          required
          ></input>
        {errors.lifeSpan && <p className={estilos.error} >{errors.lifeSpan}</p>}
      </div>        


        <button type="submit">Create</button>
      </form>
    </div>
    </>
  );
};

export default CreateForm;

