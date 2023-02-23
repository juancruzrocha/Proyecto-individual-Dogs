import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () =>{
    return (
        <div className='landingPage'>
      <div className='landing__box'>
        <h1 className='landing__title'><b>Welcome</b></h1>
        <h2 className='landing__title'>To My Henry Project</h2>
        <Link to = '/Home'>
          <button className='button'>Getting started...</button>
        </Link>
      </div>
    </div>
    )
}
export default LandingPage;