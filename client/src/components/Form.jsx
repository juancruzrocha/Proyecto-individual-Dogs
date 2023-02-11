import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDog } from "../redux/actions";

const Form = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
  });

  function submitHandler(e) {
    e.preventDefault();//previene que se 
    dispatch(createDog(input));
  }

  function changeHandler(e) {
    const property = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [property]: value,
    });
  }

function validate(input){
  
}


  return (
    <>
      <h1>FORM: to create a breed</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:  </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={changeHandler}
        ></input>

        <label htmlFor="name">Height:  </label>
        <input
          type="text"
          name="height"
          value={input.height}
          onChange={changeHandler}
        ></input>

        <label htmlFor="name">Weight:  </label>
        <input
          type="text"
          name="weight"
          value={input.weight}
          onChange={changeHandler}
        ></input>

        <label htmlFor="name">LifeSpan:  </label>
        <input
          type="text"
          name="lifeSpan"
          value={input.lifeSpan}
          onChange={changeHandler}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
