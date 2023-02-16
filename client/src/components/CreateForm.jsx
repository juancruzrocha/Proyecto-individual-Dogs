import React, { useEffect } from "react";
//estilos
import estilos from "./CreateForm.module.css";
//Hooks
import { useDispatch, useSelector } from "react-redux";
//Hooks personalizados
import { useForm } from "../hooks/useForm";
//funciones auxiliares
import { validationsForm } from "./../controllers/validationsForm";
//actions
import { getTemperaments } from "../redux/actions";

const initialForm = {
  name: "",
  min_Weight: "",
  max_Weight: "",
  min_Height: "",
  max_Height: "",
  lifeSpan: "",
  temperament: [],
};

const CreateForm = (props) => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSelect,
  } = useForm(initialForm, validationsForm);

  //hace la peticion a la API solamente una vez
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <>
      <h1>FORM: to create a breed</h1>
      <div className={estilos.container}>
        {/* Soy el NAME */}
        <form className={estilos.form} onSubmit={handleSubmit}>
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
            <h4>Weight:</h4>
            {/* Soy el MIN WEIGHT */}
            <label htmlFor="min_Weight">Min: </label>
            <input
              type="number"
              name="min_Weight"
              value={form.min_Weight}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="...Cm"
              required
            ></input>
            {errors.min_Weight && (
              <p className={estilos.error}>{errors.min_Weight}</p>
            )}

            {/* Soy el MAX WEIGHT */}
            <label htmlFor="max_Weight">Max: </label>
            <input
              type="number"
              name="max_Weight"
              value={form.max_Weight}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="...Cm"
              required
            ></input>
            {errors.max_Weight && (
              <p className={estilos.error}>{errors.max_Weight}</p>
            )}
          </div>

          {/* Soy el MIN HEIGHT */}
          <div className={estilos.input}>
            <h4>Height:</h4>
            <label htmlFor="min_Height">Min: </label>
            <input
              type="number"
              name="min_Height"
              value={form.min_Height}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="...Kg"
              required
            ></input>
            {errors.min_Height && (
              <p className={estilos.error}>{errors.min_Height}</p>
            )}

            {/* Soy el MAX HEIGHT */}
            <label htmlFor="max_Height">Max: </label>
            <input
              type="number"
              name="max_Height"
              value={form.max_Height}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="...Kg"
              required
            ></input>
            {errors.max_Height && (
              <p className={estilos.error}>{errors.max_Height}</p>
            )}
          </div>

          <div className={estilos.input}>
            <label htmlFor="lifeSpan">LifeSpan: </label>
            <input
              type="text"
              name="lifeSpan"
              value={form.lifeSpan}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder=" 0 - 29 yrs."
              required
            ></input>
            {errors.lifeSpan && (
              <p className={estilos.error}>{errors.lifeSpan}</p>
            )}
          </div>
          <div className={estilos.container}>
            <h4>Temperaments:</h4>
            <label htmlFor="temperament">
              Select a couple of temperaments:
            </label>
            <select
              required
              multiple
              name={form.temperament}
              value={form.temperament}
              onChange={handleSelect}
              onBlur={handleBlur}
            >
              {allTemperaments?.map((temp) => {
                return (
                  <option value={temp.name} name={temp.name} key={temp.id}>
                    {temp.name}
                  </option>
                );
              })}
            </select>
            <div name="div para mostrar los temperamentos que ya elegi">
              {form.temperament && form.temperament.length ? (
                <ul>
                  {[...new Set(form.temperament)].map((temp) => (
                    <li key={temp}>{temp}</li>
                  ))}
                </ul>
              ) : null}
              <p className={estilos.error}>{errors.temperament}</p>
            </div>
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateForm;
