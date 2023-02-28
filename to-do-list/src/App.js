import React from 'react';
import './App.css';
import Logo from './componentes/logo.jsx';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';


function App() {
  return (
    <div className='aplicacion-tareas' >
      <Logo />
      <div className='lista-principal'>
        <h1>Tacks</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
