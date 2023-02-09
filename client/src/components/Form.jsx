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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createDog(input));
  };

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [property]: value,
    });
  };

  return (
    <>
      <h1>Soy el FORM</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={input.height}
          onChange={changeHandler}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
