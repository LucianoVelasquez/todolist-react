import React from "react";
import '../styles/logo.css';
import imagen from '../imagenes/react.png';

const Logo = () =>(
    <div className='contenedor-logo'>
    <img src={imagen} className='logo' alt='logo-app' /> 
    </div>

);

export default Logo;