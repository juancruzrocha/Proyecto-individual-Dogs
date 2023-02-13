//en este hook vamos a tener toda la logica que necesitamos en el createForm
import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  //VARIABLES DE ESTADO
  const [form, setForm] = useState(initialForm); // los valores iniciales del formulario los va a recibir como parametro
  const [errors, setErrors] = useState({}); // para guardas los errores y si tiene algo dentro muestro el error

  const [loading, setLoading] = useState(false); // como vamos a tener el evento que envia el formulario
  //es importante contemplar un proceso de loading

  const [response, setResponse] = useState(null); // sera la respuesta del envio del formulario
  //-------------------------------------------------------------------------------------------------------------
  //FUNCIONES QUE MANEJAN LOS EVENTOS
  // Para que detecte cuando estamos escribiendo y haga el cambio de los valores
  const handleChange = (e) => {
    const { name, value } = e.target;
    // le paso lo mismo que va a recibir el estado
    setForm({
      ...form,
      [name]: value,
    });
  };

  // vamos a manejar el evento que lanza las validaciones
  const handleBlur = (e) => {
    handleChange(e); // para actualizar el estado
    // seteamos los errores con lo que nos devuelve validateForm
    //cada una de las variables que tiene el form
    setErrors(validateForm(form)); // le asignamos
  };

  const handleSubmit = (e) => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};