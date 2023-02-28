import React,{ useState } from "react";
import '../styles/formulario.css'
import { v4 as uuidv4 } from 'uuid'; //paquete id unicos.

function Formulario(props){

    const[input,setInput] = useState('');
    
    const manejarCambio = e =>{
       setInput(e.target.value);
    }

    const manejarEvio = e =>{
        e.preventDefault();
         
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }


    return(
        <form className="tarea-form" onSubmit={manejarEvio}>
            <input 
                className="tarea-input"
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    );
}

export default Formulario;