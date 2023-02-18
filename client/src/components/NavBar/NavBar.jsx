import React from "react";
import { Link } from "react-router-dom";
import estilos from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar';
import Timer from '../Timer/Timer'


const NavBar = (props) => {
  return (<>
    <div className={estilos.online}>
      Online: <Timer/>  
    </div>
    <div className={estilos.contenedor}>
      <ul>
        <li>
          <Link to="/"> Start</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/DogCreate">Create Breed</Link>
        </li>
      </ul>

      <SearchBar/>
    </div>
  </>
  );
};

export default NavBar;
